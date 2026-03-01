'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChatGPT, Claude, MCP } from '@/components/icons'
import type { Dictionary } from '@/lib/i18n'

interface PlatformsProps {
  dict: Dictionary
}

export default function Platforms({ dict }: PlatformsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const cliCommand = 'claude mcp add --transport http -s user fugle https://www.fugle.tw/api/v2/mcp'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cliCommand)
    } catch {
      // Fallback for older browsers or restricted contexts
      const textarea = document.createElement('textarea')
      textarea.value = cliCommand
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="platforms" className="py-24 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {dict.platforms.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Claude.ai */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#D97757]/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#D97757]/20 rounded-2xl flex items-center justify-center mb-6">
              <Claude width="40" height="40" fill="#D97757" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{dict.platforms.claudeAi.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{dict.platforms.claudeAi.description}</p>

            <ol className="space-y-4 mb-6">
              {[dict.platforms.claudeAi.step1, dict.platforms.claudeAi.step2, dict.platforms.claudeAi.step3].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#D97757] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            {/* MCP Server URL */}
            <div className="bg-gray-950 rounded-xl p-4 font-mono text-sm overflow-x-auto mb-8">
              <div className="text-gray-500 text-xs mb-1">MCP Server URL</div>
              <div className="text-green-400">https://www.fugle.tw/api/v2/mcp</div>
            </div>

            <div className="mt-auto space-y-3">
              <a
                href="https://claude.ai/settings/connectors?modal=add-custom-connector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#D97757] hover:bg-[#c56847] text-white font-semibold rounded-xl transition-colors"
              >
                {dict.platforms.claudeAi.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://claude.ai/new?q=%E8%AB%8B%E5%B9%AB%E6%88%91%E5%AE%89%E8%A3%9D%20Fugle%20AI%20%E5%8A%A9%E7%90%86%EF%BC%8C%E5%AE%89%E8%A3%9D%E8%AA%AA%E6%98%8E%E5%9C%A8%20https%3A%2F%2Ffugle.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#D97757] text-[#D97757] hover:bg-[#D97757]/10 font-semibold rounded-xl transition-colors"
              >
                <Claude width="16" height="16" fill="#D97757" className="mr-2" />
                {dict.platforms.claudeAi.ctaAiAssist}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Claude Code */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-[#D97757]/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#D97757]/20 rounded-2xl flex items-center justify-center mb-6">
              <MCP width="40" height="40" stroke="#D97757" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{dict.platforms.claudeCode.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{dict.platforms.claudeCode.description}</p>

            <ol className="space-y-4 mb-8">
              {[dict.platforms.claudeCode.step1, dict.platforms.claudeCode.step2, dict.platforms.claudeCode.step3].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#D97757] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-auto space-y-4">
              {/* CLI command snippet */}
              <div className="bg-gray-950 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="text-gray-300">
                  <span className="text-green-400">$</span> {cliCommand}
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#D97757] hover:bg-[#D97757]/10 text-[#D97757] font-semibold rounded-xl transition-colors"
              >
                {copied ? '已複製！' : dict.platforms.claudeCode.cta}
                {copied ? (
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Shared note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-gray-500 text-sm text-center mt-4"
        >
          * {dict.platforms.note}
        </motion.p>

        {/* ChatGPT Coming Soon Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 opacity-60"
        >
          <div className="w-12 h-12 bg-gray-700/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <ChatGPT width="28" height="28" fill="#6b7280" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <h3 className="text-lg font-semibold text-gray-400">{dict.platforms.chatgpt.title}</h3>
              <span className="px-2 py-0.5 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full">
                {dict.platforms.chatgpt.comingSoon}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{dict.platforms.chatgpt.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
