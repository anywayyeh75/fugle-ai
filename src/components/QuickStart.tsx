'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface QuickStartProps {
  dict: Dictionary
}

export default function QuickStart({ dict }: QuickStartProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="quickstart" className="py-24 bg-gray-900" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {dict.quickstart.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ChatGPT Users */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/50 border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10a37f]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{dict.quickstart.chatgpt.title}</h3>
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
              href="#"
              className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 bg-fugle-500 hover:bg-fugle-600 text-black font-semibold rounded-xl transition-colors"
            >
              Open ChatGPT
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Developers */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/50 border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#d97706]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{dict.quickstart.developer.title}</h3>
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
            <div className="mt-6 bg-gray-950 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-2"># Add to your MCP config</div>
              <div className="text-gray-300">
                <span className="text-purple-400">&quot;fugle&quot;</span>: {'{'}
              </div>
              <div className="text-gray-300 pl-4">
                <span className="text-purple-400">&quot;url&quot;</span>: <span className="text-green-400">&quot;https://mcp.fugle.tw&quot;</span>
              </div>
              <div className="text-gray-300">{'}'}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
