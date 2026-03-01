import { PortfolioProject, ProjectCategory } from "@/types";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const categories: ProjectCategory[] = ["代码开发类", "图像生成类", "多模态应用类"];

export const projects: PortfolioProject[] = [
  {
    id: "history-vibecoding-games",
    title: "历史类 VibeCoding 小游戏系列",
    category: "代码开发类",
    toolNames: ["Gemini", "Cursor", "Miaoda"],
    summary: "以历史题材为核心，持续产出可交互小游戏，用 AI 协助实现从创意设定到功能上线。",
    process: [
      "用 Gemini 快速生成玩法逻辑与交互框架",
      "通过 Cursor 迭代优化前端细节与可玩性",
      "多轮发布测试后沉淀为可复用开发流程"
    ],
    tags: ["#Gemini", "#Cursor", "#VibeCoding", "#AI开发", "#历史游戏"],
    cover: `${BASE_PATH}/projects/project-1-history-game.png`,
    coverTone: "heritage",
    codeSnippet: {
      language: "typescript",
      code: `const gameModules = await Promise.all(
  historyScenarios.map(async (scenario) => {
    const generated = await gemini.generate({
      prompt: \`根据\${scenario.topic}输出可运行小游戏逻辑\`,
      context: scenario.rules
    });
    return cursor.refine(generated.code);
  })
);

export const build = composePlayableDemo(gameModules);`
    },
    demoLinks: [
      {
        label: "无字碑小游戏",
        url: "https://hannah12110.github.io/stele-with-no-inscription/"
      },
      {
        label: "李隆基大事记",
        url: "https://app-9mdsyslc1ekh.appmiaoda.com/"
      },
      {
        label: "白居易连字成诗",
        url: "https://app-9mgta1g5g7pd.appmiaoda.com/"
      }
    ],
    highlights: ["历史题材可交互表达", "快速上线多个演示版本", "形成 AI 辅助开发 SOP"]
  },
  {
    id: "internship-affiliate-page",
    title: "实习项目：Affiliate 联盟计划页面",
    category: "代码开发类",
    toolNames: ["ChatGPT", "Gemini", "Claude", "Figma"],
    summary: "在深度赋智实习期间，参与联盟计划项目，完成竞品调研、产品逻辑设计与页面落地。",
    process: [
      "使用 ChatGPT / Gemini / Claude 调研 Rewardful 平台与竞品策略",
      "梳理联盟计划核心流程，确定页面信息结构与转化路径",
      "联动设计与开发资源，推动页面方案落地"
    ],
    tags: ["#实习项目", "#Affiliate", "#产品策略", "#落地实践"],
    cover: `${BASE_PATH}/projects/project-2-internship-affiliate.png`,
    coverTone: "corporate",
    demoLinks: [
      {
        label: "Atoms Affiliate 项目页面",
        url: "https://atoms.dev/affiliate"
      },
      {
        label: "联盟计划原型图（Figma）",
        url: "https://www.figma.com/design/da2PCVHYF5LxV8pI8k1izK/%E8%81%94%E7%9B%9F%E8%AE%A1%E5%88%92?node-id=0-1&t=orFaJWRFjRXefxmR-1"
      }
    ],
    highlights: ["竞品研究到页面方案闭环", "聚焦真实增长目标", "提高项目推进效率"]
  },
  {
    id: "timebook-prototype",
    title: "时间记账产品原型（个人项目）",
    category: "图像生成类",
    toolNames: ["Figma", "AI 设计辅助工具"],
    summary: "基于个人时间管理痛点设计产品原型，聚焦任务记录、时间复盘与可视化反馈。",
    process: [
      "拆解个人痛点并定义关键使用场景",
      "用 AI 辅助整理页面结构与信息层级",
      "在 Figma 完成高保真交互稿输出"
    ],
    tags: ["#产品设计", "#时间管理", "#Figma", "#原型设计"],
    cover: `${BASE_PATH}/projects/project-4-timebook-prototype.png`,
    coverTone: "prototype",
    demoLinks: [
      {
        label: "时间记账网站（在线体验）",
        url: "https://hannah12110.github.io/timeledger/"
      },
      {
        label: "时间记账网站原型（Figma）",
        url: "https://www.figma.com/design/da2PCVHYF5LxV8pI8k1izK/%E4%BD%9C%E5%93%81%E9%9B%86?node-id=3-178&p=f&t=0omkJCLOb6x8Gn5g-0"
      }
    ],
    highlights: ["从真实痛点出发", "高保真交互设计", "便于后续开发接入"]
  },
  {
    id: "aigc-history-videos",
    title: "AIGC 历史短视频创作系列",
    category: "多模态应用类",
    toolNames: ["AIGC 视频工具链", "脚本生成工具", "小红书"],
    summary: "围绕历史文化主题进行脚本、视觉与叙事整合，持续产出面向社媒传播的短视频内容。",
    process: [
      "先做选题与史料梳理，生成脚本大纲",
      "使用 AIGC 工具完成画面生成与镜头拼接",
      "发布到小红书并根据反馈持续优化内容"
    ],
    tags: ["#AIGC视频", "#历史内容", "#多模态", "#小红书"],
    cover: `${BASE_PATH}/projects/project-3-history-video.png`,
    coverTone: "video",
    demoLinks: [
      {
        label: "贾湖骨笛：9000年前的“中华第一笛”",
        url: "https://www.xiaohongshu.com/discovery/item/69a2a5c7000000001503bd02?source=webshare&xhsshare=pc_web&xsec_token=ABmYeuG2cnObVwrFaLfrED2mDB4ZNx50yMnHqzchJISF0=&xsec_source=pc_share"
      },
      {
        label: "马年必看！秦始皇的青铜“劳斯莱斯”",
        url: "https://www.xiaohongshu.com/discovery/item/698c29c70000000015039810?source=webshare&xhsshare=pc_web&xsec_token=ABs_Oigbs24u4ddqDlU89IXDBVuNtxr8dCTWdgs7QZ16c=&xsec_source=pc_share"
      },
      {
        label: "最早的“中国”二字，竟然藏在它身上",
        url: "https://www.xiaohongshu.com/discovery/item/6961c2b7000000002203acf9?source=webshare&xhsshare=pc_web&xsec_token=ABCJ7W_A0kKheoCJQwRj-5L1sBFRYUVkEMnSXQsFTGk5c=&xsec_source=pc_share"
      },
      {
        label: "四羊方尊的秘密你知道吗",
        url: "https://www.xiaohongshu.com/discovery/item/6926832d000000001e03985c?source=webshare&xhsshare=pc_web&xsec_token=ABOXgOM3aWJXkUPQRCRTTA4747Zp_9u1_nJ9fLmaAW0os=&xsec_source=pc_share"
      }
    ],
    highlights: ["稳定产出历史向内容", "多模态工具协同创作", "内容反馈驱动迭代"]
  }
];
