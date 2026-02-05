'use client'

import { motion } from 'framer-motion'
import type { Dictionary, Locale } from '@/lib/i18n'

interface NavigationProps {
  dict: Dictionary
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function Navigation({ dict, locale, onLocaleChange }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
              <path
                d="M8 32C8 32 12 28 16 24C20 20 24 16 28 12C32 8 36 4 36 4L32 8C28 12 24 16 20 20C16 24 12 28 8 32Z"
                fill="#F5A623"
              />
              <path
                d="M4 28C4 28 8 24 12 20C16 16 20 12 24 8L20 12C16 16 12 20 8 24C4 28 4 28 4 28Z"
                fill="#F5A623"
              />
            </svg>
            <span className="text-xl font-bold text-white">
              Fugle<span className="text-fugle-500">.ai</span>
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => onLocaleChange(locale === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </button>

            {/* CTA Button */}
            <a
              href="#quickstart"
              className="px-4 py-2 bg-fugle-500 hover:bg-fugle-600 text-black font-semibold rounded-lg transition-colors"
            >
              {dict.nav.getStarted}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
