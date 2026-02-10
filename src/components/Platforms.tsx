'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChatGPT, MCP } from '@/components/icons'
import type { Dictionary } from '@/lib/i18n'

interface PlatformsProps {
  dict: Dictionary
}

export default function Platforms({ dict }: PlatformsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto_auto_1fr] gap-x-8 gap-y-[24px]">
          {/* ChatGPT */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-rows-subgrid row-span-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-fugle-500/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#10a37f]/20 rounded-2xl flex items-center justify-center">
              <ChatGPT width="40" height="40" fill="#10a37f" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">{dict.platforms.chatgpt.title}</h3>
              <p className="text-gray-400 leading-relaxed">{dict.platforms.chatgpt.description}</p>
            </div>

            <ol className="space-y-4">
              {[dict.quickstart.chatgpt.step1, dict.quickstart.chatgpt.step2, dict.quickstart.chatgpt.step3].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-fugle-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-end inline-flex items-center justify-center w-full px-6 py-3 bg-fugle-500 hover:bg-fugle-600 text-black font-semibold rounded-xl transition-colors"
            >
              開啟 ChatGPT
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Claude Code / MCP */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-rows-subgrid row-span-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-fugle-500/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#D97757]/20 rounded-2xl flex items-center justify-center">
              <MCP width="40" height="40" stroke="#D97757" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">{dict.platforms.claude.title}</h3>
              <p className="text-gray-400 leading-relaxed">{dict.platforms.claude.description}</p>
            </div>

            <ol className="space-y-4">
              {[dict.quickstart.developer.step1, dict.quickstart.developer.step2, dict.quickstart.developer.step3].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-fugle-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            {/* Code snippet */}
            <div className="self-end bg-gray-950 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500"># Add to your MCP config</div>
              <div className="text-gray-300">
                <span className="text-purple-400">&quot;fugle&quot;</span>: {'{'}
              </div>
              <div className="text-gray-300 pl-4">
                <span className="text-purple-400">&quot;url&quot;</span>: <span className="text-green-400">&quot;https://www.fugle.tw/api/v2/mcp&quot;</span>
              </div>
              <div className="text-gray-300">{'}'}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
