/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 启用静态导出（GitHub Pages必需）
  output: 'export',
  
  // 2. 配置GitHub Pages子路径（和仓库名resume-web严格一致）
  basePath: '/resume-web',
  assetPrefix: '/resume-web/',
  
  // 3. 禁用图片优化（核心！GitHub Pages不支持Next.js图片优化）
  images: {
    unoptimized: true, // 必须加这个，覆盖你原来的formats配置
    formats: ["image/avif", "image/webp"] // 保留你原有的格式配置
  },
  
  // 4. 确保路由后缀带/，避免404
  trailingSlash: true,
  
  // 5. 静态资源输出目录（匹配Workflow的publish_dir）
  distDir: 'out',
  
  // 6. 运行时配置，供组件获取basePath
  publicRuntimeConfig: {
    basePath: '/resume-web'
  }
};

export default nextConfig;