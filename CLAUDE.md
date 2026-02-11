# Fugle.ai

Fugle.ai 是富果 AI 助理的 Landing Page，展示透過 ChatGPT、Claude 等 AI 平台查詢台股資料的產品。

## 技術棧

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + PostCSS (`@tailwindcss/postcss`)
- **Animation**: Framer Motion
- **Runtime**: Node.js >= 20.9.0

## 指令

```bash
npm run dev     # 啟動開發伺服器
npm run build   # 靜態建置（output: 'export'）
npm run start   # 啟動 production server
npm run lint    # ESLint 檢查
```

## 專案結構

```
src/
├── app/
│   ├── layout.tsx          # Root layout（metadata、字型）
│   ├── page.tsx            # 首頁（組合所有區塊元件）
│   └── globals.css         # 全域樣式、Tailwind @theme 定義
├── components/
│   ├── Navigation.tsx      # 頂部導覽列（固定定位）
│   ├── Hero.tsx            # 首屏區塊
│   ├── DemoChat.tsx        # AI 對話 Demo（含打字機動畫）
│   ├── Features.tsx        # 功能介紹（4 卡片）
│   ├── Platforms.tsx       # 平台支援（ChatGPT / Claude）
│   ├── QuickStart.tsx      # 快速開始步驟
│   ├── Footer.tsx          # 頁尾（從 fugle-blog-nextjs 移植）
│   └── icons/              # SVG icon 元件（inline SVG）
│       ├── index.ts        # Barrel export
│       ├── FugleIcon.tsx
│       ├── FugleWording.tsx
│       ├── Meta.tsx
│       ├── Instagram.tsx
│       ├── LinkedIn.tsx
│       ├── Line.tsx
│       ├── Youtube.tsx
│       ├── AppDownloadIOS.tsx
│       └── AppDownloadAndroid.tsx
├── lib/
│   ├── i18n.ts             # i18n 工具（getDictionary、Locale type）
│   └── dictionaries/
│       ├── zh.json          # 中文字典
│       └── en.json          # 英文字典
public/
└── QRcode.png              # App 下載 QR Code
```

## 架構慣例

### 元件模式

- 所有頁面區塊元件接收 `dict: Dictionary` prop 進行 i18n（Footer 除外，使用硬編碼中文）
- 元件使用 `'use client'` directive（client component）
- 進場動畫使用 Framer Motion 的 `motion` + `useInView`

### 樣式

- 品牌色：`fugle-500` (#F4AF1C)，定義在 `globals.css` 的 `@theme`（Tailwind v4 CSS-first 設定）
- 暗色主題：黑底 (`bg-black`) + 白/灰色文字
- 字型：Inter + Noto Sans TC
- 自訂 CSS class：`hero-gradient`、`card-glow`、`typing-cursor`

### 路徑別名

- `@/*` 對應 `./src/*`（tsconfig.json paths）

### 靜態匯出

- `next.config.ts` 設定 `output: 'export'`，`next build` 產出純靜態 HTML/CSS/JS 至 `out/` 目錄
- 不需 Node.js server，可直接部署至 CDN、S3、GitHub Pages 等
- 無法使用需要 server 的功能：API Routes、Server Actions、middleware、動態 ISR
- 圖片不使用 Next.js Image Optimization（`images.unoptimized: true`）

### Icon 元件

- 所有 icon 為 inline SVG 元件，無外部 SVG 檔案
- 統一介面：`{ width?: string; height?: string; className?: string; fill?: string }`
- 從 `@/components/icons` barrel import

## 注意事項

- Footer 元件從 `fugle-blog-nextjs` 移植，不使用 i18n，內容為中文硬編碼
- 語言切換按鈕目前已註解（Navigation.tsx）
- 部分連結為 placeholder（`href="#"`），尚未設定實際 URL
