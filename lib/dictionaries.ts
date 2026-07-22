import "server-only";
import type { Locale } from "./i18n";

/* ============================================================
   Content dictionaries for the Roh game-dev portfolio.
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
  /* when set, the card shows this YouTube video's thumbnail and links to it */
  youtubeId?: string;
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
    stats: { value: string; label: string; logo?: boolean }[];
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
    title: "Roh — 게임 개발자 포트폴리오",
    description:
      "인터랙티브 경험과 실시간 그래픽을 만드는 게임 개발자 Roh의 포트폴리오.",
  },
  nav: { about: "소개", skills: "역량", work: "프로젝트", contact: "연락" },
  hero: {
    badge: "게임 개발자 · 실시간 그래픽",
    lead: "안녕하세요, 저는",
    name: "Roh",
    role: "3D 제너럴리스트",
    tagline:
      "모델링부터 스컬핑, 텍스처링, 라이팅, 합성까지 — 3D 파이프라인 전반을 아우르며 하나의 완성된 장면을 만듭니다.",
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
      { value: "1년", label: "경력" },
      { value: "OWIS", label: "참여한 프로젝트", logo: true },
    ],
  },
  skills: {
    kicker: "역량",
    title: "다루는 기술",
    groups: [
      { name: "엔진", items: ["Unreal Engine"] },
      { name: "프로그램", items: ["MAYA", "ZBrush", "Nuke", "PhotoShop", "Substance Paint", "Premiere Pro", "After Effect"] },
      { name: "AI", items: ["Claude", "Codex"] },
    ],
  },
  work: {
    kicker: "프로젝트",
    title: "선별한 작업물",
    projects: [
      {
        slug: "owis-museum-mv",
        youtubeId: "J7OhGsGbaM4",
        title: "OWIS 'MUSEUM' MV",
        role: "뮤직비디오",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "OWIS(오위스) 타이틀곡 'MUSEUM' 뮤직비디오.",
        accent: 0,
      },
      {
        slug: "owis-hello-seoul",
        youtubeId: "vD1Y2dKkCZY",
        title: "OWIS × The Hyundai Seoul — Hello Seoul Vol.1",
        role: "브랜드 콜라보 영상",
        year: "2026",
        tags: ["Unreal", "촬영", "편집"],
        description: "더현대 서울과 협업한 'Hello Seoul Vol.1' 커버 영상.",
        accent: 1,
      },
      {
        slug: "owis-move-to-performance",
        youtubeId: "IBQpdHo26w0",
        title: "OWIS 'MUSEUM' MOVE TO PERFORMANCE (4K)",
        role: "퍼포먼스 필름",
        year: "2026",
        tags: ["Unreal", "촬영", "편집"],
        description: "'MUSEUM' 퍼포먼스 필름 영상.",
        accent: 2,
      },
      {
        slug: "owis-museum-musiccore",
        youtubeId: "j2gL7m_vLAg",
        title: "OWIS 'MUSEUM' — 쇼! 음악중심",
        role: "음악방송 무대",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "MBC 쇼! 음악중심 'MUSEUM' 무대.",
        accent: 3,
      },
      {
        slug: "owis-museum-mcountdown",
        youtubeId: "alvCFLRDEpY",
        title: "OWIS 'MUSEUM' — 엠카운트다운",
        role: "음악방송 무대",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "Mnet 엠카운트다운 'MUSEUM' 데뷔 무대 (260326).",
        accent: 0,
      },
      {
        slug: "owis-museum-inkigayo",
        youtubeId: "yMbRQRmuBfw",
        title: "OWIS 'MUSEUM' — SBS 인기가요",
        role: "음악방송 무대",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "SBS 인기가요 'MUSEUM' 무대.",
        accent: 1,
      },
      {
        slug: "owis-museum-relay-dance",
        youtubeId: "yI8A5alWbMY",
        title: "OWIS 'MUSEUM' 릴레이 댄스 (4K)",
        role: "릴레이 댄스",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "'MUSEUM' 릴레이 댄스 영상.",
        accent: 2,
      },
      {
        slug: "owis-would-you-record",
        youtubeId: "GLRHbtUxuYs",
        title: "OWIS — WOULD YOU RECORD (우쥬레코드)",
        role: "라이브 세션",
        year: "2026",
        tags: ["Unreal", "촬영", "편집"],
        description: "우쥬레코드 라이브 세션 출연 영상.",
        accent: 3,
      },
      {
        slug: "owis-its-live",
        youtubeId: "7SuDLDHfoPQ",
        title: "OWIS — it's Live 밴드 라이브 (4K)",
        role: "라이브 세션",
        year: "2026",
        tags: ["Unreal", "촬영"],
        description: "it's Live 밴드 라이브 — MUSEUM · lonely lullaby · juicy.",
        accent: 0,
      },
    ],
  },
  contact: {
    kicker: "연락",
    title: "함께 만들어요",
    body: "새로운 프로젝트, 협업, 또는 그냥 인사도 좋아요. 편하게 연락 주세요.",
    email: "kh950698@gmail.com",
    cta: "이메일 보내기",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Next.js · React · Tailwind 로 제작",
  },
};

const en: Dictionary = {
  meta: {
    title: "Roh — Game Developer Portfolio",
    description:
      "Portfolio of Roh, a game developer crafting interactive experiences and real-time graphics.",
  },
  nav: { about: "About", skills: "Skills", work: "Work", contact: "Contact" },
  hero: {
    badge: "Game Developer · Real-time Graphics",
    lead: "Hi, I'm",
    name: "Roh",
    role: "3D Generalist",
    tagline:
      "From modeling and sculpting to texturing, lighting, and compositing — I work across the entire 3D pipeline to craft one finished scene.",
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
      { value: "1 yr", label: "Experience" },
      { value: "OWIS", label: "Projects involved", logo: true },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "What I work with",
    groups: [
      { name: "Engine", items: ["Unreal Engine"] },
      { name: "Programs", items: ["MAYA", "ZBrush", "Nuke", "PhotoShop", "Substance Paint", "Premiere Pro", "After Effect"] },
      { name: "AI", items: ["Claude", "Codex"] },
    ],
  },
  work: {
    kicker: "Work",
    title: "Selected projects",
    projects: [
      {
        slug: "owis-museum-mv",
        youtubeId: "J7OhGsGbaM4",
        title: "OWIS 'MUSEUM' MV",
        role: "Music Video",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "Official music video for OWIS's title track 'MUSEUM'.",
        accent: 0,
      },
      {
        slug: "owis-hello-seoul",
        youtubeId: "vD1Y2dKkCZY",
        title: "OWIS × The Hyundai Seoul — Hello Seoul Vol.1",
        role: "Brand Collaboration",
        year: "2026",
        tags: ["Unreal", "Filming", "Editing"],
        description:
          "'Hello Seoul Vol.1' cover, in collaboration with The Hyundai Seoul.",
        accent: 1,
      },
      {
        slug: "owis-move-to-performance",
        youtubeId: "IBQpdHo26w0",
        title: "OWIS 'MUSEUM' MOVE TO PERFORMANCE (4K)",
        role: "Performance Film",
        year: "2026",
        tags: ["Unreal", "Filming", "Editing"],
        description: "'MUSEUM' performance film.",
        accent: 2,
      },
      {
        slug: "owis-museum-musiccore",
        youtubeId: "j2gL7m_vLAg",
        title: "OWIS 'MUSEUM' — Show! Music Core",
        role: "Music Show Stage",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "'MUSEUM' stage on MBC Show! Music Core.",
        accent: 3,
      },
      {
        slug: "owis-museum-mcountdown",
        youtubeId: "alvCFLRDEpY",
        title: "OWIS 'MUSEUM' — M Countdown",
        role: "Music Show Stage",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "'MUSEUM' hot debut stage on Mnet M Countdown.",
        accent: 0,
      },
      {
        slug: "owis-museum-inkigayo",
        youtubeId: "yMbRQRmuBfw",
        title: "OWIS 'MUSEUM' — SBS Inkigayo",
        role: "Music Show Stage",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "'MUSEUM' stage on SBS Inkigayo.",
        accent: 1,
      },
      {
        slug: "owis-museum-relay-dance",
        youtubeId: "yI8A5alWbMY",
        title: "OWIS 'MUSEUM' Relay Dance (4K)",
        role: "Relay Dance",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "'MUSEUM' relay dance video.",
        accent: 2,
      },
      {
        slug: "owis-would-you-record",
        youtubeId: "GLRHbtUxuYs",
        title: "OWIS — WOULD YOU RECORD",
        role: "Live Session",
        year: "2026",
        tags: ["Unreal", "Filming", "Editing"],
        description: "Live session appearance on WOULD YOU RECORD.",
        accent: 3,
      },
      {
        slug: "owis-its-live",
        youtubeId: "7SuDLDHfoPQ",
        title: "OWIS — it's Live Band LIVE (4K)",
        role: "Live Session",
        year: "2026",
        tags: ["Unreal", "Filming"],
        description: "it's Live band performance — MUSEUM, lonely lullaby, juicy.",
        accent: 0,
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's build together",
    body: "New projects, collaborations, or just a hello — I'd love to hear from you.",
    email: "kh950698@gmail.com",
    cta: "Send an email",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js · React · Tailwind",
  },
};

const ja: Dictionary = {
  meta: {
    title: "Roh — ゲーム開発者ポートフォリオ",
    description:
      "インタラクティブ体験とリアルタイムグラフィックスを作るゲーム開発者 Roh のポートフォリオ。",
  },
  nav: { about: "紹介", skills: "スキル", work: "作品", contact: "連絡" },
  hero: {
    badge: "ゲーム開発者 · リアルタイムグラフィックス",
    lead: "こんにちは、",
    name: "Roh",
    role: "3D ジェネラリスト",
    tagline:
      "モデリングからスカルプト、テクスチャリング、ライティング、コンポジットまで — 3Dパイプライン全体を横断し、一つの完成されたシーンを作ります。",
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
      { value: "1年", label: "経験" },
      { value: "OWIS", label: "参加プロジェクト", logo: true },
    ],
  },
  skills: {
    kicker: "スキル",
    title: "扱う技術",
    groups: [
      { name: "エンジン", items: ["Unreal Engine"] },
      { name: "プログラム", items: ["MAYA", "ZBrush", "Nuke", "PhotoShop", "Substance Paint", "Premiere Pro", "After Effect"] },
      { name: "AI", items: ["Claude", "Codex"] },
    ],
  },
  work: {
    kicker: "作品",
    title: "選りすぐりの作品",
    projects: [
      {
        slug: "owis-museum-mv",
        youtubeId: "J7OhGsGbaM4",
        title: "OWIS 'MUSEUM' MV",
        role: "ミュージックビデオ",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "OWIS(オウィス)のタイトル曲『MUSEUM』MV。",
        accent: 0,
      },
      {
        slug: "owis-hello-seoul",
        youtubeId: "vD1Y2dKkCZY",
        title: "OWIS × The Hyundai Seoul — Hello Seoul Vol.1",
        role: "ブランドコラボ映像",
        year: "2026",
        tags: ["Unreal", "撮影", "編集"],
        description: "ザ・現代ソウルとのコラボ『Hello Seoul Vol.1』カバー映像。",
        accent: 1,
      },
      {
        slug: "owis-move-to-performance",
        youtubeId: "IBQpdHo26w0",
        title: "OWIS 'MUSEUM' MOVE TO PERFORMANCE (4K)",
        role: "パフォーマンス映像",
        year: "2026",
        tags: ["Unreal", "撮影", "編集"],
        description: "『MUSEUM』パフォーマンスフィルム。",
        accent: 2,
      },
      {
        slug: "owis-museum-musiccore",
        youtubeId: "j2gL7m_vLAg",
        title: "OWIS 'MUSEUM' — ショー!音楽中心",
        role: "音楽番組ステージ",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "MBC ショー!音楽中心『MUSEUM』ステージ。",
        accent: 3,
      },
      {
        slug: "owis-museum-mcountdown",
        youtubeId: "alvCFLRDEpY",
        title: "OWIS 'MUSEUM' — M COUNTDOWN",
        role: "音楽番組ステージ",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "Mnet M COUNTDOWN『MUSEUM』デビューステージ。",
        accent: 0,
      },
      {
        slug: "owis-museum-inkigayo",
        youtubeId: "yMbRQRmuBfw",
        title: "OWIS 'MUSEUM' — SBS 人気歌謡",
        role: "音楽番組ステージ",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "SBS 人気歌謡『MUSEUM』ステージ。",
        accent: 1,
      },
      {
        slug: "owis-museum-relay-dance",
        youtubeId: "yI8A5alWbMY",
        title: "OWIS 'MUSEUM' リレーダンス (4K)",
        role: "リレーダンス",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "『MUSEUM』リレーダンス映像。",
        accent: 2,
      },
      {
        slug: "owis-would-you-record",
        youtubeId: "GLRHbtUxuYs",
        title: "OWIS — WOULD YOU RECORD",
        role: "ライブセッション",
        year: "2026",
        tags: ["Unreal", "撮影", "編集"],
        description: "WOULD YOU RECORD ライブセッション出演映像。",
        accent: 3,
      },
      {
        slug: "owis-its-live",
        youtubeId: "7SuDLDHfoPQ",
        title: "OWIS — it's Live バンドライブ (4K)",
        role: "ライブセッション",
        year: "2026",
        tags: ["Unreal", "撮影"],
        description: "it's Live バンドライブ — MUSEUM・lonely lullaby・juicy。",
        accent: 0,
      },
    ],
  },
  contact: {
    kicker: "連絡",
    title: "一緒に作りましょう",
    body: "新しいプロジェクト、コラボ、ただの挨拶でも大歓迎です。お気軽にご連絡ください。",
    email: "kh950698@gmail.com",
    cta: "メールを送る",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Next.js · React · Tailwind で制作",
  },
};

const zh: Dictionary = {
  meta: {
    title: "Roh — 游戏开发者作品集",
    description:
      "游戏开发者 Roh 的作品集，专注于交互体验与实时图形。",
  },
  nav: { about: "关于", skills: "技能", work: "作品", contact: "联系" },
  hero: {
    badge: "游戏开发者 · 实时图形",
    lead: "你好，我是",
    name: "Roh",
    role: "3D 通才",
    tagline:
      "从建模、雕刻到贴图、灯光与合成——贯穿整个 3D 管线，打造一个完整的画面。",
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
      { value: "1年", label: "经验" },
      { value: "OWIS", label: "参与项目", logo: true },
    ],
  },
  skills: {
    kicker: "技能",
    title: "我使用的技术",
    groups: [
      { name: "引擎", items: ["Unreal Engine"] },
      { name: "程序", items: ["MAYA", "ZBrush", "Nuke", "PhotoShop", "Substance Paint", "Premiere Pro", "After Effect"] },
      { name: "AI", items: ["Claude", "Codex"] },
    ],
  },
  work: {
    kicker: "作品",
    title: "精选项目",
    projects: [
      {
        slug: "owis-museum-mv",
        youtubeId: "J7OhGsGbaM4",
        title: "OWIS 'MUSEUM' MV",
        role: "音乐视频",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "OWIS（오위스）主打歌《MUSEUM》官方音乐视频。",
        accent: 0,
      },
      {
        slug: "owis-hello-seoul",
        youtubeId: "vD1Y2dKkCZY",
        title: "OWIS × The Hyundai Seoul — Hello Seoul Vol.1",
        role: "品牌合作影片",
        year: "2026",
        tags: ["Unreal", "拍摄", "剪辑"],
        description: "与 The Hyundai Seoul 合作的《Hello Seoul Vol.1》翻唱影片。",
        accent: 1,
      },
      {
        slug: "owis-move-to-performance",
        youtubeId: "IBQpdHo26w0",
        title: "OWIS 'MUSEUM' MOVE TO PERFORMANCE (4K)",
        role: "表演影片",
        year: "2026",
        tags: ["Unreal", "拍摄", "剪辑"],
        description: "《MUSEUM》表演影片。",
        accent: 2,
      },
      {
        slug: "owis-museum-musiccore",
        youtubeId: "j2gL7m_vLAg",
        title: "OWIS 'MUSEUM' — Show! Music Core",
        role: "音乐节目舞台",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "MBC Show! Music Core《MUSEUM》舞台。",
        accent: 3,
      },
      {
        slug: "owis-museum-mcountdown",
        youtubeId: "alvCFLRDEpY",
        title: "OWIS 'MUSEUM' — M Countdown",
        role: "音乐节目舞台",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "Mnet M Countdown《MUSEUM》出道舞台。",
        accent: 0,
      },
      {
        slug: "owis-museum-inkigayo",
        youtubeId: "yMbRQRmuBfw",
        title: "OWIS 'MUSEUM' — SBS 人气歌谣",
        role: "音乐节目舞台",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "SBS 人气歌谣《MUSEUM》舞台。",
        accent: 1,
      },
      {
        slug: "owis-museum-relay-dance",
        youtubeId: "yI8A5alWbMY",
        title: "OWIS 'MUSEUM' 接力舞蹈 (4K)",
        role: "接力舞蹈",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "《MUSEUM》接力舞蹈影片。",
        accent: 2,
      },
      {
        slug: "owis-would-you-record",
        youtubeId: "GLRHbtUxuYs",
        title: "OWIS — WOULD YOU RECORD",
        role: "现场演出",
        year: "2026",
        tags: ["Unreal", "拍摄", "剪辑"],
        description: "WOULD YOU RECORD 现场演出影片。",
        accent: 3,
      },
      {
        slug: "owis-its-live",
        youtubeId: "7SuDLDHfoPQ",
        title: "OWIS — it's Live 乐队现场 (4K)",
        role: "现场演出",
        year: "2026",
        tags: ["Unreal", "拍摄"],
        description: "it's Live 乐队现场 — MUSEUM、lonely lullaby、juicy。",
        accent: 0,
      },
    ],
  },
  contact: {
    kicker: "联系",
    title: "一起创造吧",
    body: "新项目、合作，或者只是打个招呼——都欢迎随时联系我。",
    email: "kh950698@gmail.com",
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
