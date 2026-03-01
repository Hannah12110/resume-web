# AI 作品集网站（林雨涵）

面向 HR 和面试官的个人 AI 作品集网站，突出作品展示、工具能力和项目落地过程。

## 技术栈建议落地

- 前端框架：Next.js 15（App Router）+ React 19
- UI：Tailwind CSS
- 动效：Framer Motion（用于卡片与筛选区动画）
- 图片：Next.js `Image` 组件
- 部署：Vercel / Netlify

## 已实现功能

- 顶部导航：`作品 / 关于我 / 联系我`
- Hero 区：一句话定位 + AI 能力方向说明
- 作品展示核心区：
  - 卡片式布局
  - 分类筛选 + 标签筛选
  - Hover 效果
  - 点击查看详情
- 详情弹窗：
  - 图片放大查看 + 全屏预览
  - 创作过程 / 成果亮点
  - 文本输出示例
  - 代码片段（带语法高亮和行号）
- 关于我与联系我模块
- 简历下载按钮（`/public/resume.pdf`）
- 响应式适配（桌面端 + 移动端）

## 完整项目结构

```text
ai-portfolio/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    about-section.tsx
    category-tabs.tsx
    contact-section.tsx
    hero.tsx
    navbar.tsx
    portfolio-client.tsx
    project-card.tsx
    project-modal.tsx
  data/
    projects.ts
  public/
    placeholders/
      code-project-light.svg
      image-project-light.svg
      research-project-light.svg
      copy-project-light.svg
      multimodal-project.svg
  package.json
  tailwind.config.ts
  postcss.config.mjs
  tsconfig.json
  next.config.ts
```

## 核心代码文件说明

- 首页入口：`app/page.tsx`
- 作品主逻辑（筛选、弹窗控制）：`components/portfolio-client.tsx`
- 作品卡片组件：`components/project-card.tsx`
- 作品详情组件：`components/project-modal.tsx`
- 关于我：`components/about-section.tsx`
- 联系我：`components/contact-section.tsx`
- 样式与主题：`app/globals.css`、`tailwind.config.ts`
- 作品内容数据：`data/projects.ts`

## 本地运行

```bash
cd ai-portfolio
npm install
npm run dev
```

访问地址：`http://localhost:3000`

## 如何替换为你的真实内容

1. 图片替换：
   - 将真实作品图放到 `public/projects/`
   - 修改 `data/projects.ts` 中每个项目的 `cover`
2. 文案替换：
   - 修改 `title / summary / process / highlights / textOutput / codeSnippet`
3. 外链替换：
   - 修改 `demoLinks` 中的 `label` 和 `url`
4. 简历替换：
   - 上传 `public/resume.pdf`
5. 联系方式：
   - 修改 `components/contact-section.tsx`

## 部署说明

### 部署到 Vercel（推荐）

1. 将仓库推送到 GitHub。
2. 登录 Vercel，导入该仓库。
3. Root Directory 选择 `ai-portfolio`。
4. Framework Preset 选择 Next.js（通常自动识别）。
5. 点击 Deploy。

### 部署到 Netlify

1. 在 Netlify 导入该仓库。
2. Base directory：`ai-portfolio`
3. Build command：`npm run build`
4. Publish directory：`.next`
5. 确保启用 Next.js Runtime（Netlify 会自动检测并提示安装）。
