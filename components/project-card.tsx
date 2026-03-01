import Image from "next/image";
import getConfig from 'next/config'; // 新增：导入getConfig
import { PortfolioProject } from "@/types";

// 新增：获取全局运行时配置
const { publicRuntimeConfig } = getConfig();
// 新增：提取basePath（生产环境是/resume-web，本地开发是空）
const basePath = publicRuntimeConfig.basePath || '';

interface ProjectCardProps {
  project: PortfolioProject;
  onOpen: (id: string) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const imageTone =
    project.coverTone === "heritage"
      ? "brightness-[0.92] saturate-[0.85] contrast-[1.05]"
      : project.coverTone === "corporate"
      ? "brightness-[0.95] saturate-[0.88] contrast-[1.02]"
      : project.coverTone === "video"
      ? "brightness-[0.9] saturate-[0.95] contrast-[1.08]"
      : project.coverTone === "prototype"
      ? "brightness-[0.97] saturate-[0.82] contrast-[1.04]"
      : "";

  const overlayTone =
    project.coverTone === "heritage"
      ? "from-[#223027]/55 via-[#2c3f33]/30 to-transparent"
      : project.coverTone === "corporate"
      ? "from-[#304139]/45 via-[#51675d]/22 to-transparent"
      : project.coverTone === "video"
      ? "from-[#1f2d24]/55 via-[#3e5247]/30 to-transparent"
      : project.coverTone === "prototype"
      ? "from-[#2f3d35]/40 via-[#5a6e63]/15 to-transparent"
      : "from-[#2d3a32]/35 to-transparent";

  // 新增：拼接图片完整路径（核心修改）
  const coverImagePath = `${basePath}${project.cover}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-panel transition hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_22px_44px_rgba(95,114,87,0.22)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={coverImagePath} // 修改：使用拼接后的路径
          alt={`${project.title} 展示图`}
          fill
          className={`object-cover transition duration-500 group-hover:scale-105 ${imageTone}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          // 新增：禁用图片优化（适配GitHub Pages）
          unoptimized={true}
        />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${overlayTone}`} />
        <div className="absolute left-3 top-3 rounded-full border border-electric/25 bg-white/95 px-3 py-1 text-xs text-electric backdrop-blur">
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{project.summary}</p>
        </div>

        <p className="text-xs text-slate-600">使用工具：{project.toolNames.join(" / ")}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-slate-50 px-2 py-1 text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3">
          <button
            type="button"
            onClick={() => onOpen(project.id)}
            className="w-full rounded-xl border border-electric bg-electric px-4 py-2 text-sm text-white transition hover:bg-[#506248]"
          >
            查看详情
          </button>

          {project.demoLinks?.[0] ? (
            <a
              href={project.demoLinks[0].url}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl border border-electric bg-electric px-4 py-2 text-center text-sm text-white transition hover:bg-[#506248] hover:shadow-[0_10px_22px_rgba(95,114,87,0.24)]"
            >
              直达作品
            </a>
          ) : (
            <div className="w-full rounded-xl border border-line bg-slate-100 px-4 py-2 text-center text-sm text-slate-400">
              暂无外链
            </div>
          )}
        </div>
      </div>
    </article>
  );
}