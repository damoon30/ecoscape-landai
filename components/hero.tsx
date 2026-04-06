'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Sparkles, Play, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-700/20 via-transparent to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm mb-8"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          🚀 全新AI 2.0版本上线
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-hero font-bold text-white mb-6 tracking-tight"
        >
          让AI成为你的
          <br />
          <span className="gradient-text">景观设计搭档</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
        >
          3分钟生成专业级效果图，智能植物配置，方案自动排版
          <br className="hidden sm:block" />
          让设计师从重复劳动中解放，专注创意
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            免费开始使用
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
            <Play className="w-4 h-4 mr-2 group-hover:text-primary-300 transition-colors" />
            观看演示视频
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-500"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-800 flex items-center justify-center text-xs"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>已有 <strong className="text-neutral-300">2,000+</strong> 设计师使用</span>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
              ))}
            </div>
            <span>4.9/5 评分</span>
          </div>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            {/* Browser Chrome */}
            <div className="bg-neutral-900 px-4 py-3 flex items-center space-x-2 border-b border-neutral-800">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-neutral-800 rounded-md px-3 py-1 text-xs text-neutral-500 text-center">
                  landai.design/dashboard
                </div>
              </div>
            </div>

            {/* Mock Interface */}
            <div className="bg-neutral-950 p-4 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sidebar Mock */}
                <div className="hidden lg:block bg-neutral-900 rounded-lg p-4 h-64">
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-500/20 rounded" />
                    <div className="h-4 bg-neutral-800 rounded w-3/4" />
                    <div className="h-4 bg-neutral-800 rounded w-1/2" />
                    <div className="h-4 bg-neutral-800 rounded w-2/3" />
                  </div>
                </div>

                {/* Main Content Mock */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-neutral-900 rounded-lg p-4 h-32 flex items-center justify-center border-2 border-dashed border-neutral-800">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-neutral-500 text-sm">拖拽上传设计稿，AI自动生成效果图</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-neutral-900 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded bg-primary-500/10" />
                        <div className="h-3 bg-neutral-800 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-4 top-1/4 bg-accent-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium hidden sm:block"
          >
            ⚡ 3分钟出图
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
