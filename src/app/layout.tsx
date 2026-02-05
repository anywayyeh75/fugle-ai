import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fugle.ai - Your AI-Powered Taiwan Stock Assistant',
  description: 'Query real-time Taiwan stock data, manage watchlists, and set price alerts through ChatGPT, Claude, and more AI assistants.',
  keywords: ['Taiwan stocks', 'AI assistant', 'ChatGPT', 'Claude', 'MCP', 'stock data', 'Fugle'],
  authors: [{ name: 'Fugle' }],
  openGraph: {
    title: 'Fugle.ai - Your AI-Powered Taiwan Stock Assistant',
    description: 'Query real-time Taiwan stock data, manage watchlists, and set price alerts through ChatGPT, Claude, and more.',
    url: 'https://fugle.ai',
    siteName: 'Fugle.ai',
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fugle.ai - Your AI-Powered Taiwan Stock Assistant',
    description: 'Query real-time Taiwan stock data through AI assistants.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
