---
title: Nuxt是什么，为什么要使用Nuxt？
lastUpdated: true
---

# Nuxt 是什么，为什么要使用 Nuxt？

## Nuxt 是什么

[Nuxt.js](https://nuxt.com//) 是基于[Vue.js](https://cn.vuejs.org/)的一个免费且开源的全栈框架，也就是说你可以使用 Nuxt.js 来同时开发前端和后端，当然你也可以只使用 Nuxt.js 来开发前端。

## 为什么要使用 Nuxt

Nuxt 的特点有很多，官网可以查看。

- [英文文档简介](https://nuxt.com/docs/getting-started/introduction)
- [中文文档简介](https://nuxt.com.cn/docs/getting-started/introduction)

说一下我个人为什么要使用 Nuxt。

### 1.学习曲线低

Nuxt 是基于 Vue.js 的，如果你会 Vue.js，那么学习 Nuxt 是非常容易的，你只需要学习一下 Nuxt 的一些特性就可以了。

### 2.模块丰富

Nuxt 中有模块的概念，同时提供了很多开箱即用的模块（[Nuxt 模块商店](https://nuxt.com/modules)），很多常用的场景都提供了开箱即用的解决方案，安装和配置都很简单，比如我使用的一些模块有：

- [i18n](https://nuxt.com/modules/i18n) 模块做多语言。
  
- [color-mode](https://nuxt.com/modules/color-mode) 模块做主题切换，支持与 [Tailwind CSS](https://tailwindcss.com/) 的 Dark Mode 一起使用。
  
- [ui](https://nuxt.com/modules/ui) 模块做 UI 组件库。
  
- [icons](https://nuxt.com/modules/icons) 模块做图标库，图标来源是[iconify](https://iconify.design/)，有 20 万开源的向量图标资源。使用起来像这样:

```html
<template>
  <Icon name="mdi:home" />
</template>
```

- [sitemap](https://nuxt.com/modules/sitemap) 模块生成网站地图。
  
- [pinia](https://nuxt.com/modules/pinia) 做状态管理。

还有一些在 Vue 常用的模块也有对应的 Nuxt 模块集成，比如 **vueuse**, **tailwindcss**, **supabase**等等。

### 3.适合SEO

Nuxt 支持服务端渲染，这样可以让搜索引擎更好的爬取你的网站。
   
要对标题、描述、关键字等进行 SEO 优化，Nuxt 提供了一些配置项，你可以很方便的配置，像这样：
    
```js
useSeoMeta({
  title: "Cometa - Create Your Duolingo Practices",
  description:
    "Learn and Create funny practices like Duolingo. Explore various fields with interactive practices, creating and sharing your own.",
  author: "snowowowo",
  keywords:
    "duolingo style, gamified practice, cometa, learn, create, practices, duolingo, funny, history, math, science, language, like duolingo",
});
```

### 4.良好的开发体验

我比较喜欢的一些特性：

- **Devtools**

使用 Nuxt 开发项目，你可以使用 Devtools 来调试，提供了很丰富的功能，比如查看状态，查看组件树，查看路由等等，我最常用的就是用来看 Pinia 的状态。

- **自动导入**

自动导入Compnents, 比如你在 `components` 文件夹下新建一个组件，不需要手动导入，Nuxt 会自动帮你导入。

自动导入vue的一些方法，比如几乎每个页面或组件都要来一遍的 `ref`, `computed` 等。

当然，这些都是可以配置的，可以关闭，也可以更灵活地配置。

### 5.文档友好

文档先介绍了一些在Nuxt中的特殊概念，刚上手的时候把这些读一遍就能大概了解框架的特性。然后文档以目录结构分类，你可以在需要的时候很轻松找到自己想要的内容。

总之，如果你喜欢 Vue.js，希望开发一个全栈项目，那么 Nuxt 应该是目前的最佳选择。
