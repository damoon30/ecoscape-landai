'use client'

import { Github, Twitter, Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  产品: ['功能介绍', '案例展示', '定价方案', '更新日志', 'API文档'],
  资源: ['帮助中心', '使用教程', '设计指南', '常见问题', '社区论坛'],
  公司: ['关于我们', '联系我们', '加入我们', '合作伙伴', '媒体报道'],
  法律: ['服务条款', '隐私政策', 'Cookie政策', '版权声明'],
}

const socialLinks = [
  { icon: Github, href: '#', label: 'Github' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: '微信' },
  { icon: Mail, href: '#', label: '邮箱' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">LandAI</span>
            </a>
            <p className="text-body-sm text-neutral-400 mb-6 max-w-xs">
              让AI成为每一位风景园林设计师的得力助手，提升设计效率，释放创意潜能。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-body-sm text-neutral-500 mb-4 md:mb-0">
            © 2026 LandAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-body-sm text-neutral-500 hover:text-white transition-colors">服务条款</a>
            <a href="#" className="text-body-sm text-neutral-500 hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="text-body-sm text-neutral-500 hover:text-white transition-colors">Cookie设置</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
