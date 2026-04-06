'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PricingCard } from './ui/pricing-card'
import { Switch } from './ui/switch'

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '/月',
    description: '适合个人体验和小型项目',
    features: [
      { text: '10次AI渲染/月', included: true },
      { text: '720p分辨率', included: true },
      { text: '基础风格', included: true },
      { text: '社区支持', included: true },
      { text: '植物数据库', included: false },
      { text: '优先处理', included: false },
      { text: '商业授权', included: false },
    ],
    buttonText: '免费开始',
    buttonVariant: 'secondary' as const,
  },
  {
    name: '专业版',
    price: '¥99',
    period: '/月',
    description: '适合专业设计师和中小型事务所',
    features: [
      { text: '无限AI渲染', included: true },
      { text: '4K超清分辨率', included: true },
      { text: '全部风格解锁', included: true },
      { text: '完整植物数据库', included: true },
      { text: '优先处理队列', included: true },
      { text: '商业使用授权', included: true },
      { text: '专属客服支持', included: true },
    ],
    buttonText: '立即订阅',
    buttonVariant: 'primary' as const,
    isPopular: true,
  },
  {
    name: '团队版',
    price: '定制',
    period: '',
    description: '适合大型设计公司和教育机构',
    features: [
      { text: '多成员协作', included: true },
      { text: 'API接口访问', included: true },
      { text: '私有部署选项', included: true },
      { text: '定制模型训练', included: true },
      { text: '专属客户成功经理', included: true },
      { text: 'SLA服务保障', included: true },
      { text: '培训与技术支持', included: true },
    ],
    buttonText: '联系销售',
    buttonVariant: 'secondary' as const,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-neutral-950">
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
            灵活定价
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-h2 text-white mb-4"
          >
            选择适合你的方案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto mb-8"
          >
            所有方案均可免费试用，无需信用卡
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center space-x-4"
          >
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-neutral-500'}`}>月付</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-neutral-500'}`}>年付</span>
            {isYearly && (
              <span className="text-xs text-accent-400 bg-accent-500/10 px-2 py-1 rounded-full">省20%</span>
            )}
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard
                {...plan}
                price={isYearly && plan.price !== '¥0' && plan.price !== '定制' 
                  ? plan.price.replace('¥', '¥') + '' 
                  : plan.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple Switch Component
interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-primary-500' : 'bg-neutral-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
