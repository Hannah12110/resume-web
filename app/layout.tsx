import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "林雨涵 | AI作品集",
  description: "产品助理/产品经理实习求职作品集，展示AI创作与开发能力。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="grid-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
