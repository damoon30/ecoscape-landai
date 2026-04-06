'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Workflow } from '@/components/workflow'
import { Pricing } from '@/components/pricing'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
