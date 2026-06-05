import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '大学新生互联网生存指南',
  description: '帮大学新生快速掌握互联网基本技能',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '电脑基础', link: '/01-computer-basics/' },
      { text: '翻墙', link: '/06-vpn-proxy/' },
      { text: 'AI 工具', link: '/07-ai-tools/' },
      { text: 'GitHub', link: '/08-github/' },
      { text: '游戏', link: '/09-gaming/' },
      { text: '邮箱', link: '/10-email/' },
      { text: 'Office', link: '/11-office/' }
    ],

    sidebar: [
      {
        text: '电脑基础',
        items: [
          { text: '电脑基础', link: '/01-computer-basics/' }
        ]
      },
      {
        text: '翻墙教程',
        items: [
          { text: '翻墙教程', link: '/06-vpn-proxy/' }
        ]
      },
      {
        text: 'AI 工具',
        items: [
          { text: 'AI 工具', link: '/07-ai-tools/' }
        ]
      },
      {
        text: 'GitHub 入门',
        items: [
          { text: 'GitHub 入门', link: '/08-github/' }
        ]
      },
      {
        text: '游戏平台',
        items: [
          { text: '游戏平台', link: '/09-gaming/' }
        ]
      },
      {
        text: '邮箱',
        items: [
          { text: '邮箱使用指南', link: '/10-email/' }
        ]
      },
      {
        text: 'Office 办公软件',
        items: [
          { text: 'Office 使用指南', link: '/11-office/' }
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
