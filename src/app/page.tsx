'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import DemoChat from '@/components/DemoChat'
import Features from '@/components/Features'
import Platforms from '@/components/Platforms'
import Footer from '@/components/Footer'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function Home() {
  const [locale, _setLocale] = useState<Locale>('zh')
  const dict = getDictionary(locale)

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} />
      <Hero dict={dict} />
      <DemoChat dict={dict} />
      <Features dict={dict} />
      <Platforms dict={dict} />
      <Footer />
    </main>
  )
}
