'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  href?: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, features, href = '#', className }: FeatureCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group relative p-6 rounded-xl bg-neutral-900 border border-neutral-800',
        'hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10',
        'transition-all duration-300 cursor-pointer',
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
        <Icon className="w-6 h-6 text-primary-300" />
      </div>
      
      <h3 className="text-h4 text-white mb-2">{title}</h3>
      
      <p className="text-body-sm text-neutral-400 mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-body-sm text-neutral-500 flex items-center">
              <span className="w-1 h-1 rounded-full bg-primary-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-4 flex items-center text-primary-300 text-sm font-medium group-hover:text-primary-100">
        了解更多
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  )
}
