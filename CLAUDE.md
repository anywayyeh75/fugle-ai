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
│   ├── DemoChat.tsx        # AI 對話 Demo（3 組對話自動輪播 + 打字機動畫）
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
- 自訂 CSS keyframe：`progress-fill`（DemoChat 進度條動畫）

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

## DemoChat 輪播機制

- `demo.conversations` 為陣列，包含 3 組對話（財報分析、追蹤清單、投資筆記）
- 自動輪播：每 8 秒切換下一組（`INTERVAL_MS = 8000`）
- IG Stories 風格進度條：卡片頂部 3 段橫條，當前段動態填充，已播段全滿，未播段空
- 進度條可點擊手動跳轉，點擊後重置自動計時器
- 切換動畫：`AnimatePresence` + `motion` fade/slide
- TypeWriter 每次切換用 `key={activeIndex}` 強制 re-mount 重新打字
- 進度條使用 CSS `scaleX` + `transform-origin: left` 做 GPU 加速填充動畫
- 進度條配色低調：白色半透明（`white/45` on `white/10`），不搶對話內容注意力

## 注意事項

- Footer 元件從 `fugle-blog-nextjs` 移植，不使用 i18n，內容為中文硬編碼
- 語言切換按鈕目前已註解（Navigation.tsx）
- 部分連結為 placeholder（`href="#"`），尚未設定實際 URL
