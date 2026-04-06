'use client'

import { motion } from 'framer-motion'
import { Upload, Sparkles, Download, Check } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: '上传你的设计',
    description: '支持SketchUp、Rhino、CAD、手绘草图等多种格式',
  },
  {
    icon: Sparkles,
    title: 'AI处理生成',
    description: '多方案并行生成，智能优化细节，自动匹配最佳效果',
  },
  {
    icon: Download,
    title: '导出使用',
    description: '高清PNG/PSD分层文件，直接用于汇报和交付',
  },
]

export function Workflow() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-900/10 to-neutral-950">
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
            简单三步
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-h2 text-white mb-4"
          >
            从草图到成品，只需3分钟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            告别繁琐的调整和漫长的等待，让AI帮你完成重复性工作
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center relative z-10">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-h4 text-white mb-2">{step.title}</h3>
                  <p className="text-body text-neutral-400">{step.description}</p>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-2">
                  {index === 0 && (
                    <>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        SketchUp (.skp)
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        Rhino (.3dm)
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        CAD (.dwg, .dxf)
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        多方案并行
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        智能细节优化
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        实时预览
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        高清PNG/JPG
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        PSD分层文件
                      </div>
                      <div className="flex items-center justify-center text-body-sm text-neutral-500">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        一键分享
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
