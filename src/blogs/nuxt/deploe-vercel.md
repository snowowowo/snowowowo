# 开发完Nuxt项目后，如何部署到线上(Vercel)？ <Badge type="info" text="default" />

## Vercel介绍

[Vercel](https://vercel.com/) 是一个用于构建、部署和管理静态网站的平台，它提供了一个免费的公共平台，你可以在上面部署你的网站。

## 为什么要使用Vercel

1. 简单：日常只需要 git push，Vercel 就可以帮你自动部署。
2. 无需维护服务器
3. 免费

## 使用Vercel

使用Vercel的思路是这样的，你需要有一个GitHub仓库，然后在Vercel上创建一个新项目，然后把这个仓库和Vercel项目关联起来，以后你只需要在本地push代码到GitHub，Vercel就会自动部署你的网站。

### 把Nuxt项目上传到GitHub

以刚才完成的 Nuxt 项目为例

在GitHub网站上[新建一个仓库](https://github.com/new)

`Repository name` 输入你的项目名字，然后点击`Create repository`按钮，这样就新建了一个Github仓库，新建完成后会跳转到一个新页面，页面包含初始化命令。

参考这些命令，把本地项目与GitHub仓库关联起来，并把本地项目push到GitHub上。

在Nuxt项目根目录下执行以下命令：

```bash
# 初始化git仓库
git init 
# 把所有文件添加到本地git仓库
git add .
# 提交到本地git仓库 
git commit -m "first commit" 
# 把main分支设置为默认分支
git branch -M main 
# 把本地仓库与GitHub仓库关联起来
# 注意把 git@github.com:snowowowo/nuxt-starter.git 换成你的仓库地址
git remote add origin git@github.com:snowowowo/nuxt-starter.git 
# 把本地项目push到GitHub上   
git push -u origin main  
```

github 这边的任务就完成了。


### 关联GitHub仓库

进入[Vercel官网](https://vercel.com/)。注册登录就不说了，直接用 Github 账号登录就好，

进入`Dashboard`页面，点击`Add New`按钮，选择`Project`，进入导入页面。

如果看不到刚才上传到 Nuxt 的项目，你需要点击`Adjust GitHub App Permissions →`设置 Vercel 的访问权限，
在 `Repository access` 区域，选择你的 Nuxt 项目，然后点击`Save`按钮，自动跳转到之前的 Vercel 导入页面，
这样就可以看到刚才上传到Nuxt的项目了。

点击要导入项目的`Import`按钮，进入配置页面。

它应该自动帮你填写好了，检查`Framework Preset`是不是`Nuxt.js`，不是的话，选择`Nuxt.js`,然后点击`Deploy`按钮部署。

等待部署...不出意外的话，你会看到一个部署成功的页面，点击网页预览图，就可以进入你的网站了。

Vercel 会自动分配给你一个类似这样的域名`https://nuxt-starter-dusky.vercel.app/`。

你可以自定义域名，后面会出文章介绍如何自定义域名。

## 日常工作流程

以后，在本地开发完成后，使用命令行把本地项目push到GitHub上，然后Vercel就会自动部署你的网站。

```bash
# 把所有文件添加到本地git仓库
git add .
# 提交到本地git仓库
git commit -m "本次修改内容"
# 把本地项目push到GitHub上
git push
```

<NuxtArticleFooter />









   

