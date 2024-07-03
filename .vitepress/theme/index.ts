// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NuxtArticleFooter from '../../components/NuxtArticleFooter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("NuxtArticleFooter", NuxtArticleFooter)
  }
} satisfies Theme