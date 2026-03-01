"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { CategoryTabs } from "@/components/category-tabs";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "全部">("全部");
  const [activeTag, setActiveTag] = useState<string>("全部");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const tags = useMemo(() => {
    const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
    return ["全部", ...allTags];
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const byCategory = activeCategory === "全部" || project.category === activeCategory;
      const byTag = activeTag === "全部" || project.tags.includes(activeTag);
      return byCategory && byTag;
    });
  }, [activeCategory, activeTag]);

  const selectedProject = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <>
      <section id="works" className="section-anchor bg-[#f5f5f1]">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-6">
            <h2 className="font-[var(--font-heading)] text-3xl text-slate-900 sm:text-4xl">作品展示</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">按类别和工具标签筛选，点击卡片查看完整细节。</p>
          </div>

          <CategoryTabs categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />

          <div className="mb-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  activeTag === tag
                    ? "bg-electric text-white shadow-[0_8px_18px_rgba(95,114,87,0.22)]"
                    : "border border-line bg-white text-slate-700 hover:border-electric/50 hover:text-electric hover:shadow-[0_8px_18px_rgba(95,114,87,0.16)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <ProjectCard project={project} onOpen={setSelectedId} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} />}</AnimatePresence>
    </>
  );
}
