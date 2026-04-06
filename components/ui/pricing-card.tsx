'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: { text: string; included: boolean }[]
  isPopular?: boolean
  buttonText: string
  buttonVariant?: 'primary' | 'secondary'
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText,
  buttonVariant = 'secondary',
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative p-6 rounded-xl',
        isPopular
          ? 'bg-neutral-900 border-2 border-primary-500 shadow-glow'
          : 'bg-neutral-900 border border-neutral-800'
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
          推荐
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-h4 text-white mb-2">{name}</h3>
        <p className="text-body-sm text-neutral-400 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-hero text-white">{price}</span>
          <span className="text-body text-neutral-400 ml-1">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-neutral-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={cn('text-body-sm', feature.included ? 'text-neutral-300' : 'text-neutral-500')} >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          'w-full py-3 rounded-lg font-medium transition-all duration-200',
          buttonVariant === 'primary'
            ? 'bg-primary-500 text-white hover:bg-primary-400 shadow-md'
            : 'bg-transparent border border-neutral-700 text-neutral-200 hover:bg-neutral-800'
        )}
      >
        {buttonText}
      </button>
    </motion.div>
  )
}
