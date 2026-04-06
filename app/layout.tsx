import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LandAI - 风景园林AI设计助手',
  description: '让AI成为你的景观设计搭档。3分钟生成专业级效果图，智能植物配置，方案自动排版。',
  keywords: '风景园林,景观设计,AI设计,效果图渲染,植物配置',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-neutral-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
