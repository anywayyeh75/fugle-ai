import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fugle.ai'),
  title: 'Fugle.AI｜從分析到行動，Fugle in Claude',
  description: '「分析台積電，值得追蹤就加到清單，跌到合理價通知我」— 在 Claude 連接富果，AI 幫你一次完成。',
  keywords: ['台股', 'AI 助理', 'ChatGPT', 'Claude', 'MCP', '股票', 'Fugle', '富果', '投資研究'],
  authors: [{ name: 'Fugle' }],
  openGraph: {
    title: 'Fugle.AI｜從分析到行動，Fugle in Claude',
    description: '「分析台積電，值得追蹤就加到清單，跌到合理價通知我」— 在 Claude 連接富果，AI 幫你一次完成。',
    url: 'https://fugle.ai',
    siteName: 'Fugle.AI',
    locale: 'zh_TW',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fugle.AI｜從分析到行動，Fugle in Claude',
    description: '「分析台積電，值得追蹤就加到清單，跌到合理價通知我」— 在 Claude 連接富果，AI 幫你一次完成。',
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
