/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 启用静态导出（必须）
  output: 'export',
  // 2. 配置GitHub Pages子路径（和仓库名resume-web一致）
  basePath: '/resume-web',
  assetPrefix: '/resume-web/',
  // 3. 禁用图片优化（GitHub Pages不支持）
  images: {
    unoptimized: true,
  },
  // 4. 确保路由后缀有/，避免404
  trailingSlash: true,
  // 5. 静态资源路径适配
  distDir: 'out',
  
  // 新增：添加publicRuntimeConfig配置（核心）
  publicRuntimeConfig: {
    // 和basePath保持一致，供组件中获取
    basePath: '/resume-web'
  }
};

module.exports = nextConfig;