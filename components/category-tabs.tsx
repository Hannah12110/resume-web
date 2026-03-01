import { ProjectCategory } from "@/types";

interface CategoryTabsProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory | "全部";
  onSelect: (category: ProjectCategory | "全部") => void;
}

export function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect("全部")}
        className={`rounded-full px-4 py-2 text-xs transition sm:text-sm ${
          activeCategory === "全部"
            ? "bg-electric text-white shadow-[0_8px_18px_rgba(95,114,87,0.22)]"
            : "border border-line bg-white text-slate-700 hover:border-electric/40 hover:text-electric hover:shadow-[0_8px_18px_rgba(95,114,87,0.16)]"
        }`}
      >
        全部
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-xs transition sm:text-sm ${
            activeCategory === category
              ? "bg-electric text-white shadow-[0_8px_18px_rgba(95,114,87,0.22)]"
              : "border border-line bg-white text-slate-700 hover:border-electric/40 hover:text-electric hover:shadow-[0_8px_18px_rgba(95,114,87,0.16)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
