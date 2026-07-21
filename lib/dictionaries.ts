import "server-only";
import type { Locale } from "./i18n";

/* ============================================================
   Content dictionaries for the Aurora game-dev portfolio.
   All example copy — swap the strings for your real profile.
   ============================================================ */

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  description: string;
  /* index into the gradient palette in components/Work.tsx */
  accent: 0 | 1 | 2 | 3;
  href?: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; skills: string; work: string; contact: string };
  hero: {
    badge: string;
    lead: string;
    name: string;
    role: string;
    tagline: string;
    ctaWork: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  work: {
    kicker: string;
    title: string;
    projects: Project[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    email: string;
    cta: string;
  };
  footer: { rights: string; built: string };
};

const ko: Dictionary = {
  meta: {
    title: "Aurora — 게임 개발자 포트폴리오",
    description:
      "인터랙티브 경험과 실시간 그래픽을 만드는 게임 개발자 Aurora의 포트폴리오.",
  },
  nav: { about: "소개", skills: "역량", work: "프로젝트", contact: "연락" },
  hero: {
    badge: "게임 개발자 · 실시간 그래픽",
    lead: "안녕하세요, 저는",
    name: "Aurora",
    role: "게임 개발자 & 테크니컬 아티스트",
    tagline:
      "엔진, 셰이더, 그리고 플레이어가 오래 기억하는 순간을 만듭니다. 코드와 아트의 경계에서 작업합니다.",
    ctaWork: "프로젝트 보기",
    ctaContact: "연락하기",
    scroll: "스크롤",
  },
  about: {
    kicker: "소개",
    title: "코드로 세계를 짓는 사람",
    body: [
      "저는 실시간 인터랙티브 경험을 만드는 게임 개발자입니다. 게임플레이 프로그래밍부터 셰이더, 툴 개발까지 파이프라인 전반을 넘나들며 작업합니다.",
      "기술이 플레이어의 감정을 만드는 순간을 좋아합니다. 최적화된 렌더링, 매끄러운 손맛, 그리고 디테일한 이펙트로 '느껴지는' 게임을 지향합니다.",
    ],
    stats: [
      { value: "6+", label: "출시/참여 타이틀" },
      { value: "8년", label: "개발 경력" },
      { value: "∞", label: "빌드한 프로토타입" },
    ],
  },
  skills: {
    kicker: "역량",
    title: "다루는 기술",
    groups: [
      { name: "엔진 & 언어", items: ["Unity", "Unreal Engine", "C#", "C++", "Rust"] },
      { name: "그래픽", items: ["HLSL / GLSL", "Shader Graph", "URP / HDRP", "Compute", "VFX Graph"] },
      { name: "툴 & 웹", items: ["TypeScript", "React", "Next.js", "WebGL", "Three.js"] },
      { name: "워크플로", items: ["Git", "CI/CD", "Perforce", "Profiling", "Live Ops"] },
    ],
  },
  work: {
    kicker: "프로젝트",
    title: "선별한 작업물",
    projects: [
      {
        slug: "nebula-drift",
        title: "Nebula Drift",
        role: "리드 게임플레이 프로그래머",
        year: "2025",
        tags: ["Unity", "URP", "멀티플레이"],
        description:
          "우주를 배경으로 한 아케이드 레이서. 결정론적 네트워킹과 커스텀 파티클 시스템으로 60fps 온라인 대전을 구현했습니다.",
        accent: 0,
      },
      {
        slug: "hollow-light",
        title: "Hollow Light",
        role: "테크니컬 아티스트",
        year: "2024",
        tags: ["Unreal", "HLSL", "라이팅"],
        description:
          "분위기 중심의 2.5D 어드벤처. 커스텀 볼류메트릭 라이팅과 잉크 셰이더로 손그림 같은 룩을 만들었습니다.",
        accent: 1,
      },
      {
        slug: "pixel-forge",
        title: "Pixel Forge",
        role: "툴 개발",
        year: "2023",
        tags: ["C#", "에디터 툴", "파이프라인"],
        description:
          "팀 내부용 레벨 에디터 및 애셋 파이프라인. 아티스트의 반복 작업 시간을 70% 단축했습니다.",
        accent: 2,
      },
      {
        slug: "aurora-webgl",
        title: "Aurora WebGL Demo",
        role: "1인 개발",
        year: "2023",
        tags: ["Three.js", "WebGL", "GLSL"],
        description:
          "브라우저에서 도는 실시간 오로라 시뮬레이션. GPU 파티클과 커스텀 후처리로 구현한 기술 데모입니다.",
        accent: 3,
      },
    ],
  },
  contact: {
    kicker: "연락",
    title: "함께 만들어요",
    body: "새로운 프로젝트, 협업, 또는 그냥 인사도 좋아요. 편하게 연락 주세요.",
    email: "helloaurora@auroraworld.com",
    cta: "이메일 보내기",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Next.js · React · Tailwind 로 제작",
  },
};

const en: Dictionary = {
  meta: {
    title: "Aurora — Game Developer Portfolio",
    description:
      "Portfolio of Aurora, a game developer crafting interactive experiences and real-time graphics.",
  },
  nav: { about: "About", skills: "Skills", work: "Work", contact: "Contact" },
  hero: {
    badge: "Game Developer · Real-time Graphics",
    lead: "Hi, I'm",
    name: "Aurora",
    role: "Game Developer & Technical Artist",
    tagline:
      "I build engines, shaders, and the moments players remember. Working right where code meets art.",
    ctaWork: "View Work",
    ctaContact: "Get in Touch",
    scroll: "scroll",
  },
  about: {
    kicker: "About",
    title: "Building worlds out of code",
    body: [
      "I'm a game developer creating real-time interactive experiences. I move across the whole pipeline — from gameplay programming to shaders and tooling.",
      "I love the moment technology turns into emotion. Optimized rendering, tight game feel, and detailed effects are how I make games that feel alive.",
    ],
    stats: [
      { value: "6+", label: "Shipped titles" },
      { value: "8 yrs", label: "Experience" },
      { value: "∞", label: "Prototypes built" },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "What I work with",
    groups: [
      { name: "Engines & Languages", items: ["Unity", "Unreal Engine", "C#", "C++", "Rust"] },
      { name: "Graphics", items: ["HLSL / GLSL", "Shader Graph", "URP / HDRP", "Compute", "VFX Graph"] },
      { name: "Tools & Web", items: ["TypeScript", "React", "Next.js", "WebGL", "Three.js"] },
      { name: "Workflow", items: ["Git", "CI/CD", "Perforce", "Profiling", "Live Ops"] },
    ],
  },
  work: {
    kicker: "Work",
    title: "Selected projects",
    projects: [
      {
        slug: "nebula-drift",
        title: "Nebula Drift",
        role: "Lead Gameplay Programmer",
        year: "2025",
        tags: ["Unity", "URP", "Multiplayer"],
        description:
          "A space arcade racer. Deterministic networking and a custom particle system deliver 60fps online battles.",
        accent: 0,
      },
      {
        slug: "hollow-light",
        title: "Hollow Light",
        role: "Technical Artist",
        year: "2024",
        tags: ["Unreal", "HLSL", "Lighting"],
        description:
          "An atmospheric 2.5D adventure. Custom volumetric lighting and ink shaders create a hand-drawn look.",
        accent: 1,
      },
      {
        slug: "pixel-forge",
        title: "Pixel Forge",
        role: "Tools Engineer",
        year: "2023",
        tags: ["C#", "Editor Tools", "Pipeline"],
        description:
          "An in-house level editor and asset pipeline that cut artist iteration time by 70%.",
        accent: 2,
      },
      {
        slug: "aurora-webgl",
        title: "Aurora WebGL Demo",
        role: "Solo Developer",
        year: "2023",
        tags: ["Three.js", "WebGL", "GLSL"],
        description:
          "A real-time aurora simulation running in the browser — a tech demo built with GPU particles and custom post-processing.",
        accent: 3,
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's build together",
    body: "New projects, collaborations, or just a hello — I'd love to hear from you.",
    email: "helloaurora@auroraworld.com",
    cta: "Send an email",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js · React · Tailwind",
  },
};

const ja: Dictionary = {
  meta: {
    title: "Aurora — ゲーム開発者ポートフォリオ",
    description:
      "インタラクティブ体験とリアルタイムグラフィックスを作るゲーム開発者 Aurora のポートフォリオ。",
  },
  nav: { about: "紹介", skills: "スキル", work: "作品", contact: "連絡" },
  hero: {
    badge: "ゲーム開発者 · リアルタイムグラフィックス",
    lead: "こんにちは、",
    name: "Aurora",
    role: "ゲーム開発者 & テクニカルアーティスト",
    tagline:
      "エンジン、シェーダー、そしてプレイヤーの記憶に残る瞬間を作ります。コードとアートの境界で働いています。",
    ctaWork: "作品を見る",
    ctaContact: "連絡する",
    scroll: "スクロール",
  },
  about: {
    kicker: "紹介",
    title: "コードで世界を築く",
    body: [
      "リアルタイムのインタラクティブ体験を作るゲーム開発者です。ゲームプレイのプログラミングからシェーダー、ツール開発までパイプライン全体を横断して作業します。",
      "技術がプレイヤーの感情になる瞬間が好きです。最適化されたレンダリング、心地よい操作感、細やかなエフェクトで「生きている」ゲームを目指します。",
    ],
    stats: [
      { value: "6+", label: "リリースタイトル" },
      { value: "8年", label: "開発経験" },
      { value: "∞", label: "作ったプロト" },
    ],
  },
  skills: {
    kicker: "スキル",
    title: "扱う技術",
    groups: [
      { name: "エンジン & 言語", items: ["Unity", "Unreal Engine", "C#", "C++", "Rust"] },
      { name: "グラフィックス", items: ["HLSL / GLSL", "Shader Graph", "URP / HDRP", "Compute", "VFX Graph"] },
      { name: "ツール & Web", items: ["TypeScript", "React", "Next.js", "WebGL", "Three.js"] },
      { name: "ワークフロー", items: ["Git", "CI/CD", "Perforce", "Profiling", "Live Ops"] },
    ],
  },
  work: {
    kicker: "作品",
    title: "選りすぐりの作品",
    projects: [
      {
        slug: "nebula-drift",
        title: "Nebula Drift",
        role: "リードゲームプレイプログラマー",
        year: "2025",
        tags: ["Unity", "URP", "マルチプレイ"],
        description:
          "宇宙を舞台にしたアーケードレーサー。決定論的ネットワーキングとカスタムパーティクルで60fpsのオンライン対戦を実現。",
        accent: 0,
      },
      {
        slug: "hollow-light",
        title: "Hollow Light",
        role: "テクニカルアーティスト",
        year: "2024",
        tags: ["Unreal", "HLSL", "ライティング"],
        description:
          "雰囲気重視の2.5Dアドベンチャー。カスタムボリュメトリックライティングとインクシェーダーで手描き風のルックを制作。",
        accent: 1,
      },
      {
        slug: "pixel-forge",
        title: "Pixel Forge",
        role: "ツール開発",
        year: "2023",
        tags: ["C#", "エディタツール", "パイプライン"],
        description:
          "社内向けレベルエディタとアセットパイプライン。アーティストの反復作業を70%削減しました。",
        accent: 2,
      },
      {
        slug: "aurora-webgl",
        title: "Aurora WebGL Demo",
        role: "個人開発",
        year: "2023",
        tags: ["Three.js", "WebGL", "GLSL"],
        description:
          "ブラウザで動くリアルタイムオーロラシミュレーション。GPUパーティクルとカスタムポストプロセスで作った技術デモ。",
        accent: 3,
      },
    ],
  },
  contact: {
    kicker: "連絡",
    title: "一緒に作りましょう",
    body: "新しいプロジェクト、コラボ、ただの挨拶でも大歓迎です。お気軽にご連絡ください。",
    email: "helloaurora@auroraworld.com",
    cta: "メールを送る",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Next.js · React · Tailwind で制作",
  },
};

const zh: Dictionary = {
  meta: {
    title: "Aurora — 游戏开发者作品集",
    description:
      "游戏开发者 Aurora 的作品集，专注于交互体验与实时图形。",
  },
  nav: { about: "关于", skills: "技能", work: "作品", contact: "联系" },
  hero: {
    badge: "游戏开发者 · 实时图形",
    lead: "你好，我是",
    name: "Aurora",
    role: "游戏开发者 & 技术美术",
    tagline:
      "我构建引擎、着色器，以及玩家会记住的瞬间。工作在代码与艺术的交界处。",
    ctaWork: "查看作品",
    ctaContact: "联系我",
    scroll: "滚动",
  },
  about: {
    kicker: "关于",
    title: "用代码构建世界",
    body: [
      "我是一名打造实时交互体验的游戏开发者，工作贯穿整个管线——从玩法编程到着色器和工具开发。",
      "我喜欢技术化为情感的瞬间。通过优化的渲染、扎实的手感和细腻的特效，做出「有生命力」的游戏。",
    ],
    stats: [
      { value: "6+", label: "已发布作品" },
      { value: "8年", label: "开发经验" },
      { value: "∞", label: "原型数量" },
    ],
  },
  skills: {
    kicker: "技能",
    title: "我使用的技术",
    groups: [
      { name: "引擎 & 语言", items: ["Unity", "Unreal Engine", "C#", "C++", "Rust"] },
      { name: "图形", items: ["HLSL / GLSL", "Shader Graph", "URP / HDRP", "Compute", "VFX Graph"] },
      { name: "工具 & Web", items: ["TypeScript", "React", "Next.js", "WebGL", "Three.js"] },
      { name: "工作流", items: ["Git", "CI/CD", "Perforce", "Profiling", "Live Ops"] },
    ],
  },
  work: {
    kicker: "作品",
    title: "精选项目",
    projects: [
      {
        slug: "nebula-drift",
        title: "Nebula Drift",
        role: "主玩法程序",
        year: "2025",
        tags: ["Unity", "URP", "多人联机"],
        description:
          "以宇宙为背景的街机竞速。通过确定性网络同步和自定义粒子系统，实现 60fps 的在线对战。",
        accent: 0,
      },
      {
        slug: "hollow-light",
        title: "Hollow Light",
        role: "技术美术",
        year: "2024",
        tags: ["Unreal", "HLSL", "灯光"],
        description:
          "氛围导向的 2.5D 冒险。自定义体积光和水墨着色器打造手绘般的视觉风格。",
        accent: 1,
      },
      {
        slug: "pixel-forge",
        title: "Pixel Forge",
        role: "工具开发",
        year: "2023",
        tags: ["C#", "编辑器工具", "管线"],
        description:
          "团队内部的关卡编辑器与资源管线，将美术迭代时间缩短了 70%。",
        accent: 2,
      },
      {
        slug: "aurora-webgl",
        title: "Aurora WebGL Demo",
        role: "独立开发",
        year: "2023",
        tags: ["Three.js", "WebGL", "GLSL"],
        description:
          "在浏览器中运行的实时极光模拟，使用 GPU 粒子和自定义后处理构建的技术演示。",
        accent: 3,
      },
    ],
  },
  contact: {
    kicker: "联系",
    title: "一起创造吧",
    body: "新项目、合作，或者只是打个招呼——都欢迎随时联系我。",
    email: "helloaurora@auroraworld.com",
    cta: "发送邮件",
  },
  footer: {
    rights: "All rights reserved.",
    built: "使用 Next.js · React · Tailwind 构建",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ko, en, ja, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
