'use client'

import type { Dictionary } from '@/lib/i18n'

interface FooterProps {
  dict: Dictionary
}

export default function Footer({ dict }: FooterProps) {
  const footerLinks = [
    {
      title: dict.footer.product,
      links: [
        { label: dict.footer.fugleApp, href: 'https://www.fugle.tw' },
        { label: dict.footer.fugleAPI, href: 'https://developer.fugle.tw' },
      ],
    },
    {
      title: dict.footer.resources,
      links: [
        { label: dict.footer.docs, href: 'https://developer.fugle.tw/docs' },
        { label: dict.footer.support, href: 'mailto:support@fugle.tw' },
      ],
    },
    {
      title: dict.footer.company,
      links: [
        { label: dict.footer.about, href: 'https://www.fugle.tw/about' },
        { label: dict.footer.careers, href: 'https://www.fugle.tw/careers' },
      ],
    },
    {
      title: dict.footer.legal,
      links: [
        { label: dict.footer.privacy, href: 'https://www.fugle.tw/privacy' },
        { label: dict.footer.terms, href: 'https://www.fugle.tw/terms' },
      ],
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
              <span className="text-lg font-bold text-white">Fugle</span>
            </div>
            <p className="text-gray-500 text-sm">
              Your AI-Powered Taiwan Stock Assistant
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-fugle-500 text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
