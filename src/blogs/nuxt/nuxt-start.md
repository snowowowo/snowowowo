# 如何跑起一个 Nuxt 项目？

## 前置条件

- Node.js - v18.0.0 或者更新版本
- 编辑器 - 推荐使用 [VSCode](https://code.visualstudio.com/)
- 命令行工具

## 步骤

### 1. 初始化项目

在命令行中输入以下命令：

```bash
pnpm dlx nuxi@latest init <project-name>
# 或者
npx nuxi@latest init <project-name>
```

如果因为网络问题无法下载，类似这样的错误

```bash
Error: Failed to download template from registry: Failed to download https://raw.githubusercontent.com/nuxt/starter/templates/templates/v3.json: TypeError: fetch failed
```

可以使用手动克隆这个仓库：[nuxt starter](https://github.com/nuxt/starter)

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