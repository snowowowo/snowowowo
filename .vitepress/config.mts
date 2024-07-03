import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  srcDir: './src',
  title: "snowowowo",
  description: "To create something",
  sitemap: {
    hostname: 'https://snowowowo.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/blogs' },
      { text: '作品', link: '/works' },
      { text: '工具/网站', link: '/tools' },
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
                { text: 'Nuxt是什么，为什么要使用Nuxt？', link: '/blogs/nuxt/nuxt-profile' },
                { text: '如何跑起一个Nuxt项目？', link: '/blogs/nuxt/nuxt-start' },
              ]
            },
            {
              text: '部署（更新中...）',
              items: [
                { text: '开发完Nuxt项目后，如何部署到线上(Vercel)？', link: '/blogs/nuxt/deploy-vercel' },
                { text: '开发完Nuxt项目后，如何部署到线上(Cloudflare Pages)？', link: '/blogs/nuxt/deploy-cloudflare-pages' },
                { text: '部署完成，但是域名不好看，如何自定义域名？', link: '/blogs/nuxt/deploy-custom-domain' },
              ]
            },
            {
              text: 'Supabase（更新中...）',
              items: [
                { text: '我的Nuxt网站需要数据库，我该怎么做（Supabase）？', link: '/blogs/nuxt/supabase-start' },
                { text: '注册功能，怎么给注册用户发送验证邮件（Resend）？', link: '/blogs/nuxt/supabase-resend' },
                { text: '注册成功时，怎么自动给用户添加额外信息，如用户名等(Triggers)？', link: '/blogs/nuxt/supabase-triggers' },
                { text: '如何一次性查询多个关联表（View视图）？', link: '/blogs/nuxt/supabase-views' },
                { text: '我要一次更新多个表，如何保证数据的一致性（RPC）？', link: '/blogs/nuxt/supabase-rpc' },
                { text: '查询多个表时还要进行比较复杂的操作，怎么做（Functions）？', link: '/blogs/nuxt/supabase-functions' },
              ]
            },
            {
              text: 'SEO（更新中...）',
              items: [
                { text: '如何优化Nuxt应用的SEO？', link: '#' },
                { text: '如何让谷歌(google)收录你的网站？(GSC)', link: '#' },
                { text: '如何让必应(bing)收录你的网站？', link: '#' },
                { text: '如何分析网站存在哪些SEO问题？', link: '#' },
              ]
            },
            {
              text: '网站数据统计（更新中...）',
              items: [
                { text: '如何在Nuxt应用中使用Google Analytics？', link: '#' },
              ]
            }, {
              text: '推广',
              items: [
                { text: '如何推广你的网站？', link: '#' },
              ]
            }, {
              text: 'AI',
              items: [
                { text: '如何调用AI生成结构化数据?', link: '#' },
              ]
            }
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
      '/tools/': [
        {
          text: '工具/网站',
          items: [
            { text: 'AI', link: '/tools/ai' },
            { text: '开发', link: '/tools/dev' },
            { text: 'UI', link: '/tools/ui' },
            { text: '电脑', link: '/tools/computer' },
            { text: '其他', link: '/tools/others' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/Henry853079501' }
    ],
    search: {
      provider: 'local'
    }

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  }
})
