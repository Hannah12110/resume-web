"use client";

import Image from "next/image";
import getConfig from 'next/config'; // 新增：导入getConfig
import { ExternalLink, PlayCircle, X } from "lucide-react";
import { PortfolioProject } from "@/types";

// 新增：获取全局运行时配置
const { publicRuntimeConfig } = getConfig();
// 新增：提取basePath（生产环境是/resume-web，本地开发是空）
const basePath = publicRuntimeConfig.basePath || '';

interface ProjectModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const tones = ["bg-gblue text-white", "bg-gred text-white", "bg-gyellow text-slate-900", "bg-ggreen text-white"];
  const imageTone =
    project.coverTone === "heritage"
      ? "brightness-[0.92] saturate-[0.86] contrast-[1.05]"
      : project.coverTone === "corporate"
      ? "brightness-[0.95] saturate-[0.88] contrast-[1.03]"
      : project.coverTone === "video"
      ? "brightness-[0.91] saturate-[0.95] contrast-[1.08]"
      : project.coverTone === "prototype"
      ? "brightness-[0.98] saturate-[0.82] contrast-[1.04]"
      : "";

  // 新增：拼接图片完整路径（核心修改）
  const coverImagePath = `${basePath}${project.cover}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-200/55 p-4 backdrop-blur-md sm:p-8">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-line bg-white p-5 shadow-panel sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-electric">{project.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{project.title}</h3>
          </div>
          <button
            type="button"
            aria-label="关闭详情"
            onClick={onClose}
            className="rounded-full border border-electric bg-electric/10 p-2 text-electric transition hover:bg-electric hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line">
            <Image
              src={coverImagePath} // 修改：使用拼接后的路径
              alt={`${project.title} 详情图`}
              width={1200}
              height={760}
              className={`h-full w-full object-cover transition ${imageTone}`}
              unoptimized={true} // 新增：禁用图片优化（适配GitHub Pages）
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#243329]/45 via-[#41564a]/20 to-transparent" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <section>
              <h4 className="mb-2 text-sm font-semibold text-electric">创作过程</h4>
              <ul className="space-y-2 text-sm leading-6 text-slate-700">
                {project.process.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="mb-2 text-sm font-semibold text-electric">成果亮点</h4>
              <ul className="space-y-2 text-sm leading-6 text-slate-700">
                {project.highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>
          </div>

          {project.textOutput && (
            <section>
              <h4 className="mb-3 text-sm font-semibold text-electric">文本输出示例</h4>
              <blockquote className="rounded-2xl border border-line bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                {project.textOutput}
              </blockquote>
            </section>
          )}

          {project.demoLinks && project.demoLinks.length > 0 && (
            <section>
              <h4 className="mb-3 text-sm font-semibold text-electric">作品链接</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.demoLinks.map((link, index) => (
                  <article key={link.url} className="rounded-2xl border border-line bg-slate-50 p-4 transition hover:border-electric/50">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                            tones[index % tones.length]
                          }`}
                        >
                          {index + 1}
                        </span>
                        <PlayCircle size={16} className="text-electric" />
                      </div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-electric bg-electric px-2 py-1 text-xs text-white hover:bg-[#506248]"
                      >
                        打开
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{link.label}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-slate-50 px-3 py-1 text-xs text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}