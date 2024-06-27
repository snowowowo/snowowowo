import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
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
      '/blogs/': [
        {
          text: 'Nuxt实用教程',
          link: '/blogs/nuxt',
        }
      ],
      '/blogs/nuxt/': [
        {
          text: 'Nuxt实用教程',
          link: '/blogs/nuxt',
          items: [
            {
              text: '起步',
              items: [
                { text: '1 Nuxt是什么，为什么要使用Nuxt？', link: '/blogs/nuxt/nuxt-profile' },
                { text: '2 如何跑起一个Nuxt项目？', link: '/blogs/nuxt/nuxt-start' },
              ]
            },
            {
              text: '部署（更新中...）',
              items: [
                { text: '1 开发完Nuxt项目后，如何部署到线上(Vercel)？', link: '/blogs/nuxt/deploe-vercel' },
                { text: '2 开发完Nuxt项目后，如何部署到线上(Cloudflare Pages)？', link: '/blogs/nuxt/deploy-cloudflare-pages' },
                { text: '3 部署完成，但是域名不好看，如何自定义域名？', link: '/blogs/nuxt/deploy-custom-domain' },
              ]
            },
            {
              text: 'Supabase（更新中...）',
              items: [
                { text: '1 我的Nuxt网站需要数据库，我该怎么做（Supabase）？', link: '/blogs/nuxt/supabase-start' },
                { text: '2 注册功能，怎么给注册用户发送验证邮件（Resend）？', link: '/blogs/nuxt/supabase-resend' },
                { text: '3 注册成功时，怎么自动给用户添加额外信息，如用户名等(Triggers)？', link: '/blogs/nuxt/supabase-triggers' },
                { text: '4 如何一次性查询多个关联表（View视图）？', link: '/blogs/nuxt/supabase-views' },
                { text: '5 我要一次更新多个表，如何保证数据的一致性（RPC）？', link: '/blogs/nuxt/supabase-rpc' },
                { text: '6 查询多个表时还要进行比较复杂的操作，怎么做（Functions）？', link: '/blogs/nuxt/supabase-functions' },
              ]
            },
          ]
        }
      ],
      '/works/': [
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
      { icon: 'x', link: 'https://x.com/Henry853079501' }
    ],

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  }
})
