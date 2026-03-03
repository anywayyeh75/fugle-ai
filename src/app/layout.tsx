import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fugle.AI｜你的投資研究助理',
  description: '透過 ChatGPT、Claude 等 AI 助理，即時查詢台股資料、管理追蹤清單、設定到價通知',
  keywords: ['台股', 'AI 助理', 'ChatGPT', 'Claude', 'MCP', '股票', 'Fugle', '富果', '投資研究'],
  authors: [{ name: 'Fugle' }],
  openGraph: {
    title: 'Fugle.AI｜你的投資研究助理',
    description: '透過 ChatGPT、Claude 等 AI 助理，即時查詢台股資料、管理追蹤清單、設定到價通知',
    url: 'https://fugle.ai',
    siteName: 'Fugle.AI',
    locale: 'zh_TW',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fugle.AI｜你的投資研究助理',
    description: '透過 ChatGPT、Claude 等 AI 助理，即時查詢台股資料、管理追蹤清單、設定到價通知',
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
        <script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
