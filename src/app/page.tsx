'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import DemoChat from '@/components/DemoChat'
import Features from '@/components/Features'
import Platforms from '@/components/Platforms'
import QuickStart from '@/components/QuickStart'
import Footer from '@/components/Footer'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('zh')
  const dict = getDictionary(locale)

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} locale={locale} onLocaleChange={setLocale} />
      <Hero dict={dict} />
      <DemoChat dict={dict} />
      <Features dict={dict} />
      <Platforms dict={dict} />
      <QuickStart dict={dict} />
      <Footer dict={dict} />
    </main>
  )
}
