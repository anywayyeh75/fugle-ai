'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface DemoChatProps {
  dict: Dictionary
}

function TypeWriter({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

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
  }, [isInView, text, delay, speed])

  return (
    <span ref={ref}>
      {displayText}
      {isTyping && <span className="typing-cursor" />}
    </span>
  )
}

export default function DemoChat({ dict }: DemoChatProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black" ref={containerRef}>
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
          {/* Chat window header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            {/* <span className="ml-4 text-sm text-gray-400">Fugle AI Assistant</span> */}
          </div>

          {/* Chat messages */}
          <div className="space-y-6">
            {/* User message */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-end"
            >
              <div className="bg-fugle-500 text-black px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                <p className="font-medium">{dict.demo.userMessage}</p>
              </div>
            </motion.div>

            {/* AI response */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex justify-start"
            >
              <div className="bg-gray-700 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                <div className="whitespace-pre-line">
                  {isInView && (
                    <TypeWriter text={dict.demo.aiResponse} delay={1200} speed={20} />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
