"use client";

import { motion } from "framer-motion";
import { ChatGPT, MCP } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n";

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fugle-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fugle-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.3] font-bold text-white mb-6"
        >
          {dict.hero.title}
          <br />
          <span className="text-fugle-500">{dict.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          {dict.hero.subtitle}
          <br />
          {dict.hero.subtitleHighlight}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 whitespace-nowrap px-8 py-4 bg-fugle-500 hover:bg-fugle-600 text-black font-semibold rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <ChatGPT width="24" height="24" fill="currentColor" />
            {dict.hero.ctaChatGPT}
          </a>
          <a
            href="#platforms"
            className="flex-1 whitespace-nowrap px-8 py-4 border-2 border-fugle-500 hover:bg-fugle-500/10 text-fugle-500 font-semibold rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <MCP width="28" height="28" stroke="currentColor" />
            {dict.hero.ctaClaude}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
