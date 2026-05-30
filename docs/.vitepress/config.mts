import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '大学新生互联网生存指南',
  description: '帮大学新生快速掌握互联网基本技能',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '电脑基础', link: '/01-computer-basics/' },
      { text: '邮箱', link: '/02-email/' },
      { text: '校园网', link: '/04-campus-network/' },
      { text: 'Office', link: '/05-office/' },
      { text: '翻墙', link: '/06-vpn-proxy/' },
      { text: 'AI 工具', link: '/07-ai-tools/' },
      { text: 'GitHub', link: '/08-github/' },
      { text: '游戏', link: '/09-gaming/' }
    ],

    sidebar: [
      {
        text: '电脑基础',
        items: [
          { text: '概述', link: '/01-computer-basics/' },
          { text: '文件管理', link: '/01-computer-basics/file-management' },
          { text: '电脑选购指南', link: '/01-computer-basics/buying-guide' }
        ]
      },
      {
        text: '邮箱',
        items: [
          { text: '邮箱使用指南', link: '/02-email/' }
        ]
      },
      {
        text: '校园网',
        items: [
          { text: '校园网使用指南', link: '/04-campus-network/' }
        ]
      },
      {
        text: 'Office 办公软件',
        items: [
          { text: 'Office 使用指南', link: '/05-office/' }
        ]
      },
      {
        text: '翻墙教程',
        items: [
          { text: '概述', link: '/06-vpn-proxy/' },
          { text: '电脑端配置', link: '/06-vpn-proxy/clash-pc' },
          { text: '手机端配置', link: '/06-vpn-proxy/clash-mobile' }
        ]
      },
      {
        text: 'AI 工具',
        items: [
          { text: '概述', link: '/07-ai-tools/' },
          { text: 'ChatGPT / Claude', link: '/07-ai-tools/chatgpt-claude' },
          { text: '反代网站', link: '/07-ai-tools/proxy-sites' },
          { text: '国内 AI 工具', link: '/07-ai-tools/domestic-ai' }
        ]
      },
      {
        text: 'GitHub 入门',
        items: [
          { text: '概述', link: '/08-github/' },
          { text: '第一个仓库', link: '/08-github/first-repo' }
        ]
      },
      {
        text: '游戏平台',
        items: [
          { text: '概述', link: '/09-gaming/' },
          { text: 'Watt Toolkit', link: '/09-gaming/watt-toolkit' },
          { text: 'Steam', link: '/09-gaming/steam' }
        ]
      },
      {
        text: '写在最后',
        items: [
          { text: '遇到问题怎么办', link: '/conclusion' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
