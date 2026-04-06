'use client'

import { motion } from 'framer-motion'
import { FeatureCard } from './ui/feature-card'
import { Image, Trees, Layout, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Image,
    title: 'AI效果图渲染',
    description: '草图/线稿一键生成照片级效果图，告别漫长渲染等待',
    features: ['支持多种风格：写实/竞赛/水彩/插画', '智能光影优化', '人物车辆自动添加'],
  },
  {
    icon: Trees,
    title: '智能植物配置',
    description: '根据气候、土壤、场地条件智能推荐植物群落组合',
    features: ['本土植物数据库', '季相变化预览', '自动计算种植密度'],
  },
  {
    icon: Layout,
    title: '方案智能排版',
    description: '自动生成专业级方案文本，提升汇报效率',
    features: ['一键生成分析图', '智能布局优化', '多格式导出'],
  },
  {
    icon: BarChart3,
    title: '场地数据分析',
    description: '地形、日照、视域等场地分析自动化生成',
    features: ['地形分析', '日照模拟', '视域分析'],
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-300 text-sm font-medium mb-4"
          >
            核心功能
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-h2 text-white mb-4"
          >
            为风景园林打造的AI工具箱
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            从概念到成图，每个环节都有AI助力，让设计更高效、更专业
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
