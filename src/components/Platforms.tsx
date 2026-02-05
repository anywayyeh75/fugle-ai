'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface PlatformsProps {
  dict: Dictionary
}

export default function Platforms({ dict }: PlatformsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900" ref={ref}>
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
          {/* ChatGPT */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-fugle-500/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#10a37f]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{dict.platforms.chatgpt.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{dict.platforms.chatgpt.description}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-fugle-500 hover:text-fugle-400 font-medium"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Claude Code / MCP */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-fugle-500/30 transition-all card-glow"
          >
            <div className="w-16 h-16 bg-[#d97706]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{dict.platforms.claude.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{dict.platforms.claude.description}</p>
            <a
              href="#quickstart"
              className="inline-flex items-center gap-2 text-fugle-500 hover:text-fugle-400 font-medium"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
