'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FugleAILogo, InvestmentPlatform } from '@/components/icons'
import type { Dictionary } from '@/lib/i18n'

interface NavigationProps {
  dict: Dictionary
}

const SECTIONS = ['demo', 'platforms'] as const

export default function Navigation({ dict }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const anchors = [
    { id: 'demo', label: dict.nav.anchorDemo },
    { id: 'platforms', label: dict.nav.anchorPlatforms },
  ]

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
          <div className="flex items-center gap-6">
            {/* Anchor links — hidden on mobile */}
            <div className="hidden sm:flex items-center gap-5">
              {anchors.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    activeSection === id
                      ? 'text-fugle-500 font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

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
