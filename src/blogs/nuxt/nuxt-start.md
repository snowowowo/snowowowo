# 如何跑起一个 Nuxt 项目？

## 前置条件

- 软件：Node.js - v18.0.0 或者更新版本
- 前置知识：了解和使用过Vue3和基本开发经验

## 步骤

### 1. 初始化项目

我比较喜欢`pnpm`，你也可以使用`npm`或者`yarn`

如果你是第一次使用`pnpm`，可以先执行以下命令安装`pnpm`：

```bash
npm install -g pnpm
```

在命令行中输入以下命令，

```bash
pnpm dlx nuxi@latest init 项目名字
# 或者
npx nuxi@latest init 项目名字
```

如果因为网络问题无法下载，类似这样的错误

```bash
Error: Failed to download template from registry: Failed to download https://raw.githubusercontent.com/nuxt/starter/templates/templates/v3.json: TypeError: fetch failed
```

可以使用手动克隆这个仓库：
- gitee [nuxt-starter](https://gitee.com/heyceleste/nuxt-starter)
- github [nuxt-starter](https://github.com/snowowowo/nuxt-starter)

### 2. 安装依赖

进入项目目录，安装依赖：

```bash
cd <project-name>
pnpm install
# 或者
npm install
# 或者
yarn install
```

### 3. 运行项目

```bash
pnpm dev
# 或者
npm run dev
# 或者
yarn dev
```

成功后，打开浏览器访问 `http://localhost:3000`，你会看到一个欢迎页面。
这样，你的 Nuxt 项目就已经运行起来了。

之后呢，如果你想增加页面，添加功能等，你可以按照 Nuxt 官方文档进行操作。

这个系列的教程不会详细介绍 Nuxt 的开发过程，而是介绍 Nuxt 的工作流和关键问题的解决方案。

<NuxtArticleFooter />
