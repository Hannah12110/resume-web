export type ProjectCategory = "代码开发类" | "图像生成类" | "多模态应用类";

export type CoverTone = "heritage" | "corporate" | "video" | "prototype";

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  toolNames: string[];
  summary: string;
  process: string[];
  tags: string[];
  cover: string;
  coverTone?: CoverTone;
  demoLinks?: {
    label: string;
    url: string;
  }[];
  textOutput?: string;
  codeSnippet?: {
    language: "typescript" | "javascript" | "python" | "markdown" | "json";
    code: string;
  };
  highlights: string[];
}
