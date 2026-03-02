'use client'

import { motion } from 'framer-motion'
import { FugleAILogo, InvestmentPlatform } from '@/components/icons'
import type { Dictionary } from '@/lib/i18n'

interface NavigationProps {
  dict: Dictionary
}

export default function Navigation({ dict: _dict }: NavigationProps) {
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
          <FugleAILogo height="28" width="133" />

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            {/* <button
              onClick={() => onLocaleChange(locale === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </button> */}

            {/* 富果投研平台 */}
            <a
              href="https://www.fugle.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-fugle-500 transition-colors"
            >
              <InvestmentPlatform width="20" height="20" fill="currentColor" />
              <span>富果投研平台</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
