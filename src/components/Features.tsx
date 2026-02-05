'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface FeaturesProps {
  dict: Dictionary
}

const featureIcons = {
  stockData: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9l-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  watchlist: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="3" width="6" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 16h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  priceAlert: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  notes: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 13H8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17H8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Features({ dict }: FeaturesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { key: 'stockData', icon: featureIcons.stockData, ...dict.features.stockData },
    { key: 'watchlist', icon: featureIcons.watchlist, ...dict.features.watchlist },
    { key: 'priceAlert', icon: featureIcons.priceAlert, ...dict.features.priceAlert },
    { key: 'notes', icon: featureIcons.notes, ...dict.features.notes },
  ]

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {dict.features.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-fugle-500/50 transition-all duration-300 card-glow"
            >
              <div className="w-14 h-14 bg-fugle-500/10 rounded-xl flex items-center justify-center text-fugle-500 mb-4 group-hover:bg-fugle-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
