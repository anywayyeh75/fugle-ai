'use client'

import { motion, useInView, AnimatePresence, type PanInfo } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface DemoChatProps {
  dict: Dictionary
}

function ThinkingDots({ duration }: { duration: number }) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])
  if (!visible) return null
  return (
    <span className="inline-flex gap-1.5 items-center py-1">
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full thinking-dot" />
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full thinking-dot [animation-delay:200ms]" />
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full thinking-dot [animation-delay:400ms]" />
    </span>
  )
}

function TypeWriter({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setDisplayText('')
    setIsTyping(false)

    const timeout = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  return (
    <span>
      {displayText}
      {isTyping && <span className="typing-cursor" />}
    </span>
  )
}

const AI_APPEAR_DELAY = 500   // ms — user message 閱讀時間
const THINKING_MS = 1200      // ms — 思考中圓點顯示時長
const TYPING_SPEED = 20       // ms/字元
const POST_TYPING_PAUSE = 3000 // ms — 打完後停留

function getIntervalMs(text: string) {
  return AI_APPEAR_DELAY + THINKING_MS + text.length * TYPING_SPEED + POST_TYPING_PAUSE
}

export default function DemoChat({ dict }: DemoChatProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [showAI, setShowAI] = useState(false)

  const conversations = dict.demo.conversations

  const currentInterval = getIntervalMs(conversations[activeIndex].aiResponse)

  // Delay AI bubble appearance after slide change
  useEffect(() => {
    setShowAI(false)
    const timer = setTimeout(() => setShowAI(true), AI_APPEAR_DELAY)
    return () => clearTimeout(timer)
  }, [activeIndex, progressKey])

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % conversations.length)
    setProgressKey((k) => k + 1)
  }, [conversations.length])

  // Schedule next auto-advance via setTimeout (each slide has its own duration)
  useEffect(() => {
    if (!isInView) return

    timerRef.current = setTimeout(advance, currentInterval)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isInView, activeIndex, progressKey, currentInterval, advance])

  const handleBarClick = (index: number) => {
    setActiveIndex(index)
    setProgressKey((k) => k + 1)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % conversations.length)
      setProgressKey((k) => k + 1)
    } else if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev - 1 + conversations.length) % conversations.length)
      setProgressKey((k) => k + 1)
    }
  }

  const current = conversations[activeIndex]

  return (
    <section id="demo" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-900 to-black" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        >
          {dict.demo.title}
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 sm:p-8 card-glow"
        >
          {/* IG Stories-style progress bars */}
          <div className="flex gap-1.5 mb-5">
            {conversations.map((conv, index) => {
              const barDuration = getIntervalMs(conv.aiResponse)
              return (
                <button
                  key={index}
                  onClick={() => handleBarClick(index)}
                  className="relative h-[3px] flex-1 rounded-full overflow-hidden bg-white/10 cursor-pointer transition-[background-color] duration-200 hover:bg-white/20"
                  aria-label={`Go to conversation ${index + 1}`}
                >
                  {/* Filled portion */}
                  <span
                    key={`${index}-${progressKey}`}
                    className="absolute inset-0 rounded-full origin-left"
                    style={
                      index < activeIndex
                        ? { backgroundColor: 'rgba(255,255,255,0.45)', transform: 'scaleX(1)' }
                        : index === activeIndex
                          ? {
                              backgroundColor: 'rgba(255,255,255,0.45)',
                              animation: `progress-fill ${barDuration}ms linear forwards`,
                              animationPlayState: isInView ? 'running' : 'paused',
                            }
                          : { backgroundColor: 'rgba(255,255,255,0.45)', transform: 'scaleX(0)' }
                    }
                  />
                </button>
              )
            })}
          </div>

          {/* Chat window header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Chat messages — height-stable grid container */}
          <div className="grid">
            {/* Invisible sizers: all conversations stacked in same cell → takes max height */}
            {conversations.map((conv, i) => (
              <div
                key={`sizer-${i}`}
                className="invisible pointer-events-none [grid-row:1/-1] [grid-column:1/-1]"
                aria-hidden="true"
              >
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <div className="px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                      <p className="font-medium">{conv.userMessage}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                      <div className="whitespace-pre-line">{conv.aiResponse}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Visible layer */}
            <div className="[grid-row:1/-1] [grid-column:1/-1]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                >
                  {/* User message — pop-in from right */}
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                  >
                    <div className="flex justify-end">
                      <div className="bg-fugle-500 text-black px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                        <p className="font-medium">{current.userMessage}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* AI response — delayed appearance with thinking dots */}
                  {showAI && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-start">
                        <div className="bg-gray-700 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                          <div className="whitespace-pre-line grid">
                            <span className="invisible [grid-row:1/-1] [grid-column:1/-1]" aria-hidden="true">
                              {current.aiResponse}
                            </span>
                            <span className="[grid-row:1/-1] [grid-column:1/-1]">
                              <ThinkingDots key={activeIndex} duration={THINKING_MS} />
                              {isInView && (
                                <TypeWriter
                                  key={activeIndex}
                                  text={current.aiResponse}
                                  delay={THINKING_MS}
                                  speed={TYPING_SPEED}
                                />
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
