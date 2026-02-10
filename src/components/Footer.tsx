import Image from 'next/image';
import Link from 'next/link';
import {
  AppDownloadAndroid,
  AppDownloadIOS,
  FugleIcon,
  FugleWording,
  Meta,
  Instagram,
  LinkedIn,
  Line,
  Youtube,
} from '@/components/icons';

const FUGLE_LINKS = [
  {
    id: 'about',
    title: '關於富果',
    links: [
      { id: 'about', title: '關於我們', href: 'https://www.fugle.tw/about' },
      { id: 'contact', title: '聯絡我們', href: 'https://support.fugle.tw/online-service/' },
    ],
  },
  {
    id: 'services',
    title: '我們的服務',
    links: [
      { id: 'platform', title: '富果投研平台', href: 'https://www.fugle.tw' },
      { id: 'blog', title: '富果直送', href: 'https://blog.fugle.tw' },
      { id: 'academy', title: '富果線上學院', href: 'https://academy.fugle.tw' },
      { id: 'stock-helper', title: '股市小幫手', href: 'https://t.me/fuglestockbot' },
      { id: 'stock-api', title: '台股即時行情 API', href: 'https://developer.fugle.tw' },
      { id: 'ai-assistant', title: '富果 AI 助理', href: 'https://www.fugle.ai' },
    ],
  },
  {
    id: 'help',
    title: '幫助中心',
    links: [
      { id: 'terms', title: '服務條款', href: 'https://www.fugle.tw/service' },
      { id: 'privacy', title: '隱私政策', href: 'https://www.fugle.tw/privacy' },
      { id: 'disclaimer', title: '免責聲明', href: 'https://www.fugle.tw/disclaimer' },
      { id: 'online-service', title: '線上客服', href: 'https://support.fugle.tw/online-service/' },
    ],
  },
];
const SOCIAL_LINKS = [
  { id: 'meta', icon: Meta, href: 'https://www.facebook.com/fugle.tw/?locale=zh_TW', ariaLabel: '前往 Facebook 粉絲專頁' },
  { id: 'instagram', icon: Instagram, href: 'https://www.instagram.com/fugle.tw/#', ariaLabel: '前往 Instagram' },
  { id: 'youtube', icon: Youtube, href: 'https://www.youtube.com/channel/UCDiGb43PAyIa4JhdHm6rTxQ', ariaLabel: '前往 YouTube 頻道' },
  { id: 'line', icon: Line, href: 'https://line.me/R/ti/p/@ihy6058w', ariaLabel: '加入 LINE 官方帳號' },
  { id: 'linkedin', icon: LinkedIn, href: 'https://www.linkedin.com/company/fugle/posts/?feedView=all', ariaLabel: '前往 LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <nav className="text-white bg-[#131313] px-4 py-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row sm:max-w-[800px] lg:max-w-[1200px] lg:justify-center">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-[6px]">
              <FugleIcon width="35" height="35" />
              <FugleWording width="140" height="32" />
            </div>
            <span className="text-xl font-bold">自信投資，樂享收穫</span>
          </div>
          <div className="w-full flex flex-col items-center sm:flex-row sm:gap-[60px] sm:justify-center sm:items-start lg:contents">
            <div className="w-full flex justify-between px-3 mb-6 sm:contents lg:flex lg:gap-[60px] lg:justify-center">
              {FUGLE_LINKS.map((link) => (
                <ul key={link.id}>
                  <p className="text-sm text-[#ccc] mb-3">{link.title}</p>
                  {link.links.map((item) => (
                    <li key={item.id} className="py-0.5">
                      <Link href={item.href} rel="noopener noreferrer" target="_blank" className="hover:text-fugle-500 transition-all duration-100 ease-out">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="sm:contents lg:flex lg:gap-2">
              <div className="flex flex-col items-start gap-2">
                <span className="text-sm text-[#ccc]">下載 App</span>
                <div className="flex gap-2">
                  <div className="flex items-start gap-2 sm:flex-col">
                    <Link href="https://apps.apple.com/tw/app/id1542310263" target="_blank" rel="noopener noreferrer" aria-label="下載 iOS App">
                      <AppDownloadIOS width="140" height="42" />
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=tw.fugle.flutter.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="下載 Android App"
                    >
                      <AppDownloadAndroid width="140" height="42" />
                    </Link>
                  </div>
                  <div className="w-[92px] h-[92px] hidden lg:block">
                    <Image src="/QRcode.png" alt="App Download QR Code" width={92} height={92} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 w-full border-[#656565] sm:max-w-[800px] lg:max-w-[1200px]" />
        <div className="w-full flex flex-col items-center gap-4 sm:max-w-[800px] lg:max-w-[1200px] lg:flex-row lg:justify-center">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.id}
                aria-label={link.ariaLabel}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-full border border-[#DFDFDF] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-all duration-100 ease-out"
              >
                <link.icon
                  width="24"
                  height="24"
                  fill="#545454"
                  className="[&_path:not([fill='white']):not([fill='#fff'])]:group-hover:fill-[#323232] transition-all duration-100 ease-out"
                />
              </Link>
            ))}
          </div>
          <p className="text-xs">
            請認明本區所列之富果官方帳號，若遇可疑招攬、推介、要求付款，請點擊位於本頁之「線上客服」或撥 165
            反詐騙專線。
            <br className="hidden lg:block" />
            使用者須遵守臺灣證券交易所「
            <Link
              href="https://www.twse.com.tw/downloads/zh/products/regulation_use.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fugle-500 underline"
            >
              交易資訊使用管理辦法
            </Link>
            」等交易資訊管理相關規定，所有資訊以臺灣證券交易所公告資料為準。
          </p>
        </div>
      </nav>
      <div className="bg-[#292929] p-4 flex flex-col items-center justify-center text-sm text-[#ccc] gap-1 sm:flex-row sm:gap-4">
        <span>Copyright © 群馥科技</span>
        <span>公司地址：10001 台北市中正區武昌街一段 77 號 5 樓</span>
      </div>
    </footer>
  );
}
