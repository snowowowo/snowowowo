import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "snowowowo",
  description: "To create something",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/blogs' },
      { text: '作品', link: '/works' }
    ],

    sidebar: {
      '/blogs/':[
        {
          text: '文章',
          items: [
            { text: '使用Resend给注册用户发送确认邮件', link: '/blogs/resend' },
          ]
        }
      ],
      '/works/':[
        {
          text: '作品',
          items: [
            { text: 'Cometa', link: '/works/cometa' },
            { text: 'MyGPT', link: '/works/my-gpt' },
            { text: '无限小组件', link: '/works/infinity-widgets' },
            { text: 'X 桌面', link: '/works/x-desktop' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
