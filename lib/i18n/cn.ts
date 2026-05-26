import type { Translations } from "./types";

export const cn: Translations = {
  nav: {
    home: "首页",
    tracks: "议题",
    schedule: "日程",
    speakers: "嘉宾",
    venue: "场地",
    register: "报名",
    language: "语言",
    initiative: "巴黎倡议",
    education: "AI 与教育",
    essay: "文章",
    report: "论坛报告",
  },

  hero: {
    tagline: "构建人机协同新范式",
    dateDisplay: "2026年5月4日 星期一",
    colocatedWith: "联合举办",
    requestInvitation: "申请邀请",
    learnMore: "了解更多",
    invitationOnly: "仅限受邀者",
    chathamHouseRule: "查塔姆宫规则",
  },

  countdown: {
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
  },

  about: {
    title: "关于 AI Vision Forum",
    subtitle: "汇聚远见者，共同塑造智能代理 AI、教育、治理与开源协作的未来",
    guidingQuestionLabel: "核心问题",
    guidingQuestion: "当 AI 重塑人类角色时，我们如何确保人类核心价值观始终居于中心？",
    guidingQuestionNote: "在巴黎2026，这一问题因智能代理经济的兴起和开放治理框架的需求而变得更加尖锐。",
    whyNowTitle: "为什么是现在：从 LAMP 到 Claw",
    whyNowIntro: "AI Vision Forum 2026 恰逢计算历史的关键时刻。我们正在见证一场堪比2000年代 LAMP 堆栈革命的范式转变——但这一次，基础设施服务的是 AI 代理，而非仅仅是人类。",
    whyNowShifts: [
      {
        title: "时代1（2000年代）：LAMP 堆栈",
        description: "Linux、Apache、MySQL、PHP/Python——使 Web 开发民主化的开源技术。LAMP 通过大规模实现网站和应用来服务人类。",
      },
      {
        title: "时代2（2010年代）：云/SaaS",
        description: "云原生计算、API 经济、中心化平台。弹性扩展、快速交付、全球连接——但控制日益集中。",
      },
      {
        title: "时代3（现在）：Claw 堆栈",
        description: "计算（Compute）、语言模型（Language Models）、代理（Agents）、工作流（Workflow）——智能系统的统一框架。Claw 堆栈标志着智能代理经济的到来：自主智能、去中心化网络和开放治理。",
      },
    ],
    valuePropositionTitle: "我们的独特价值",
    valueProposition: [
      { title: "双层治理", description: "我们同时连接人类层面的伦理和代理层面的治理。" },
      { title: "最佳时机", description: "在 MCP 开发者峰会（4月2-3日纽约）之后、EU AI Act 执行（8月2日）之前、IAPP 都柏林（6月）之前。我们可以设定议程。" },
      { title: "跨文化桥梁", description: "通过 GOSIM、开源社和欧洲合作伙伴，我们是唯一同时讨论美/欧/中开源动态的论坛。" },
      { title: "持久框架而非炒作", description: "我们不追逐今天的热点。我们构建持久的结构性问题框架，用当前证据作为说明。" },
    ],
    invitedParticipants: "受邀参与者",
    exclusiveAccess: "专属参与",
    inviteOnly: "仅限邀请",
    colocated: "联合举办",
    chathamHouseTitle: "查塔姆宫规则",
    chathamHouseDescription: "参与者可以自由使用获得的信息，但不得透露发言者或其他参与者的身份或所属机构。此规则鼓励对敏感话题进行开放对话和坦诚讨论。",
  },

  tracksSection: {
    title: "四大议题",
    subtitle: "探索 AI 在教育、开发、治理和公共利益领域的未来",
    featured: "重点推荐",
    narrativeArc: "看见 → 构建 → 信任 → 持续",
    tracks: [
      {
        title: "智能代理 AI 系统",
        subtitle: "人机协同",
        description: "全方位探索构建智能代理系统生态——从 Claw 堆栈架构和 SaaS 向智能代理经济的转变，到 Agent2Agent 协议和开源协调。",
        keywords: ["Claw 堆栈", "W-Layer", "Agent2Agent", "MCP"],
      },
      {
        title: "智能代理 AI 与教育",
        subtitle: "学习与创造力",
        description: "AI 原生学习环境和具身 AI。从编码到规范：当 AI 编写代码时我们教什么？多模态知识系统和个性化教学。",
        keywords: ["AI 原生学习", "规范", "多模态", "具身 AI"],
      },
      {
        title: "可信智能代理 AI",
        subtitle: "治理、安全与主权",
        description: "暗工厂治理：当100%的代码由 AI 生成时，谁来保证信任？三大支柱：规范治理、代理信任与身份、溯源。EU AI Act 合规和主权 AI 模型。",
        keywords: ["暗工厂", "EU AI Act", "溯源", "主权 AI"],
      },
      {
        title: "Open Token 与数字公共产品",
        subtitle: "基金会与可持续性",
        description: "Open Token 作为 AI 算力公共事业。AI 工厂（生产）与 Claw 堆栈（执行）的战略组合。面向开源 AI 作为全球公共基础设施的可持续资金模式。",
        keywords: ["Open Token", "公共产品", "AI 工厂", "Claw 堆栈"],
      },
    ],
  },

  scheduleSection: {
    title: "日程安排",
    subtitle: "一整天的洞见、讨论和交流",
    note: "* 来自 v4.0 规划文档的日程。最终议程将与确认的参与者分享。",
    items: [
      { time: "09:00–09:30", title: "签到 & 咖啡" },
      { time: "09:30–09:45", title: "开幕致辞 & 主题演讲" },
      { time: "09:45–11:15", title: "圆桌1：智能代理 AI 系统", subtitle: "Claw 堆栈，人机协同", format: "主题演讲 + 圆桌" },
      { time: "11:15–11:30", title: "休息" },
      { time: "11:30–13:00", title: "圆桌2：智能代理 AI 与教育", subtitle: "学习与创造力", format: "主题演讲 + 圆桌" },
      { time: "13:00–14:00", title: "午餐 + AIGC 聚焦展示", subtitle: "演示", format: "演示展示" },
      { time: "14:00–15:30", title: "圆桌3：可信智能代理 AI", subtitle: "治理与安全", format: "主题演讲 + 圆桌" },
      { time: "15:30–15:45", title: "休息" },
      { time: "15:45–17:15", title: "圆桌4：Open Token 与数字公共产品", subtitle: "基金会与可持续性", format: "主题演讲 + 圆桌" },
      { time: "17:15–17:30", title: "总结与闭幕" },
      { time: "18:00–20:30", title: "交流晚宴", subtitle: "主题桌", format: "交流" },
    ],
  },

  speakersSection: {
    title: "嘉宾",
    subtitle: "世界级专家、研究者和实践者",
    comingSoon: "嘉宾即将公布",
    comingSoonDescription: "我们正在策划一支杰出的阵容，包括思想领袖、学者和行业先驱，共同探讨塑造智能代理 AI 的结构性变革。",
    comingSoonNote: "请持续关注或申请邀请以在嘉宾公布时获得通知。",
  },

  panelistsSection: {
    title: "嘉宾所代表的机构",
    subtitle: "我们的小组成员来自顶尖大学、研究机构、开源基金会和引领智能代理 AI 发展的人工智能企业。",
  },

  venue: {
    title: "场地",
    venueDescription: "位于巴黎历史中心塞纳河畔的私密聚会场所。",
    colocatedDescription: "与 GOSIM Paris 2026 联合举办，促进治理与 AI 愿景社区之间的交叉融合。",
    accessDescription: "从巴黎戴高乐机场（CDG）和巴黎市中心乘坐地铁即可便捷到达。",
    viewOnMap: "在 Google 地图上查看 →",
    photosComingSoon: "场地照片即将发布",
  },

  cta: {
    title: "加入对话",
    description: "AI Vision Forum Paris 2026 仅限受邀者参加。提交您的邀请申请，共同塑造智能代理 AI 的未来。",
    button: "申请邀请",
    note: "申请持续滚动审核中",
  },

  footer: {
    quickLinks: "快速链接",
    about: "关于",
    tracks: "议题",
    schedule: "日程",
    speakers: "嘉宾",
    legal: "法律信息",
    privacyPolicy: "隐私政策",
    contact: "联系我们",
    underChathamHouseRule: "遵循查塔姆宫规则",
    connect: "关注我们",
    colocatedWith: "联合举办",
    copyright: "AI Vision Forum 版权所有",
    organizedBy: "由 AI Vision Forum 社区组织 • 仅限邀请活动",
  },

  registerPage: {
    backToHome: "返回首页",
    title: "申请邀请",
    description: "AI Vision Forum Paris 2026 为仅限邀请活动。请填写以下表格申请您的邀请。",
    fullName: "姓名 *",
    emailAddress: "电子邮箱 *",
    affiliation: "所属机构 / 组织",
    primaryTrack: "主要感兴趣的议题 *",
    selectTrack: "选择一个议题",
    trackOptions: [
      "智能代理 AI 系统——人机协同",
      "智能代理 AI 与教育",
      "可信智能代理 AI",
      "Open Token 与数字公共产品",
    ],
    motivation: "您为什么想参加？ *",
    motivationPlaceholder: "请介绍您对论坛的兴趣...",
    chathamAgree: "我同意在查塔姆宫规则下参与",
    submitButton: "提交申请",
    reviewNote: "申请持续滚动审核中。我们将在2周内回复。",
    placeholderNote: "说明",
    placeholderDescription: "这是一个占位表单。完整注册将于2026年第二季度开放，届时将集成我们的邀请管理系统。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "you@example.com",
    orgPlaceholder: "您的组织",
  },

  contactPage: {
    backToHome: "返回首页",
    title: "联系我们",
    description: "对 AI Vision Forum Paris 2026 有疑问？我们很乐意为您解答。",
    generalInquiries: "一般咨询",
    partnership: "合作与赞助",
    pressMedia: "新闻与媒体",
    followUs: "关注我们",
    quickLinks: "快速链接",
    requestInvitation: "申请邀请 →",
    exploreTracks: "浏览议题 →",
    aboutForum: "关于论坛 →",
    noteTitle: "说明",
    noteDescription: "邮箱地址为占位信息。官方联系方式将于2026年第二季度公布。",
  },

  privacyPage: {
    backToHome: "返回首页",
    title: "隐私政策",
    lastUpdated: "最后更新：2026年2月10日",
    overview: "概述",
    overviewText: "AI Vision Forum Paris 2026 致力于保护活动参与者、嘉宾和网站访问者的隐私。本政策概述了我们如何收集、使用和保护您的信息。",
    infoCollect: "我们收集的信息",
    infoRegistration: "注册数据：姓名、电子邮箱、所属机构、专业背景",
    infoParticipation: "活动参与：会议出席、提问（受查塔姆宫规则保护）",
    infoAnalytics: "网站分析：通过尊重隐私的工具收集的匿名使用数据",
    chathamTitle: "查塔姆宫规则",
    chathamText: "所有活动讨论均受查塔姆宫规则约束。未经明确同意，我们不会公开将发言归属于个人或其所属组织。",
    dataUsage: "数据使用",
    dataUsageIntro: "您的信息仅用于：",
    dataUsageItems: [
      "活动后勤和通讯",
      "连接有共同兴趣的参与者（仅限选择加入）",
      "活动后调查和跟进",
    ],
    dataProtection: "数据保护",
    dataProtectionText: "我们遵守 GDPR 和法国数据保护法律。您的数据安全存储，绝不出售给第三方。",
    yourRights: "您的权利",
    yourRightsIntro: "您有权：",
    yourRightsItems: [
      "访问您的个人数据",
      "请求更正或删除",
      "退出通讯",
      "导出您的数据",
    ],
    contactTitle: "联系方式",
    contactText: "隐私相关咨询：",
  },

  trackDetail: {
    backToTracks: "返回议题",
    keyTopics: "核心主题",
    featuredSpeakers: "特邀嘉宾",
    speakersComingSoon: "嘉宾即将公布",
    speakersCurating: "我们正在为此议题策划一支杰出的专家阵容",
    relatedResources: "相关资源",
    interestedInTrack: "对此议题感兴趣？",
    requestInvitationToJoin: "申请邀请以加入讨论",
    requestInvitation: "申请邀请",
  },

  trackEducation: {
    title: "智能代理 AI 与教育",
    overview: "展示教育、创造力和知识工作领域的实际部署——从 AI 原生学习环境到增强人类能力的工具。",
    keyTopics: [
      "AI 原生学习环境和具身 AI",
      "从编码到规范：当 AI 编写代码时我们教什么？",
      "多模态知识系统和个性化教学",
      "结构性转变：从编写代码 → 定义规范 → 表达意图",
      "AI 代理驱动的个性化学习路径",
      "智能代理 AI 时代的创意教学法",
      "面向教育者和学生的 AI 素养",
      "用 AI 分析衡量学习成果",
    ],
    whyMattersTitle: "为什么这很重要",
    whyMattersText: "从编写代码到定义规范再到表达意图的结构性转变正在各个层面改变教育。本议题探讨 AI 原生学习环境和具身 AI 如何为后代码世界的教学和知识工作创造新范式。",
    focusAreasTitle: "关注领域",
    focusAreas: [
      "AI 原生学习环境和实际部署",
      "从编码到规范：课程转型",
      "用于个性化教学的多模态知识系统",
      "意图经济：表达目标而非编写代码",
    ],
  },

  trackVibeCoding: {
    title: "智能代理 AI 系统——人机协同",
    overview: "全方位探索构建智能代理系统生态——从用例和商业价值到架构和协作开发。",
    keyTopics: [
      "Claw 堆栈架构：计算、语言模型、代理、工作流",
      "从 SaaS 到智能代理经济：新经济单元、新兴组织",
      "W-Layer 作为战略控制点：编排是代理的 Kubernetes",
      "Agent2Agent 协议、MCP、开源协调",
      "为复杂项目构建多代理系统",
      "自主编码代理及其能力",
      "AI 的代码审查与质量保证",
      "AI 生成代码的许可与归属",
    ],
    spotlightTitle: "聚焦：Claw 堆栈",
    spotlightText: "Claw 堆栈（计算、语言模型、代理、工作流）代表了计算基础设施的下一次演进——专为智能代理经济而构建，AI 代理在其中自主决策、协作和执行工作。",
    featuredSessionTitle: "核心主题",
    featuredSessionText: "Claw 堆栈代表一个范式转变：从服务人类的基础设施到服务代理的基础设施。本圆桌探讨构建智能代理生态系统的架构、经济和协调挑战。",
    whatYouLearnTitle: "您将学到什么",
    whatYouLearn: [
      "Claw 堆栈（计算、语言模型、代理、工作流）如何重塑基础设施",
      "W-Layer：为什么编排是代理的战略控制点",
      "Agent2Agent 协议和开源协调模式",
      "从 SaaS 到智能代理经济：新商业模式和经济单元",
    ],
  },

  trackGovernance: {
    title: "可信智能代理 AI",
    overview: "应对日益自主的系统所带来的治理、安全和主权挑战——从评估框架到监管趋势。",
    keyTopics: [
      "暗工厂治理：当100%的代码由 AI 生成时，谁来保证信任？",
      "三大支柱：规范治理、代理信任与身份、溯源",
      "EU AI Act 合规和监管框架",
      "主权 AI 模型和评估框架",
      "多代理系统中的问责制",
      "透明度与可解释性要求",
      "智能代理 AI 的风险评估方法",
      "AI 治理的国际合作",
    ],
    approachTitle: "信任三大支柱",
    approachText: "可信智能代理 AI 建立在三大支柱之上：规范治理（确保意图被忠实转化）、代理信任与身份（认证和能力证书）、溯源（追踪 AI 生成产物的来源和谱系）。本议题汇集政策制定者、技术专家和公民社会来应对这些挑战。",
    keyDiscussionTitle: "核心讨论",
    keyDiscussionText: "暗工厂治理：当100%的代码由 AI 生成时，谁来保证信任？我们如何确保全自动化流程中的透明度和问责制？加入关于自主软件工厂时代治理空白的引导式辩论。",
    outcomesTitle: "实际成果",
    outcomes: [
      "规范治理和代理信任与身份框架",
      "智能代理系统的 EU AI Act 合规策略",
      "主权 AI 模型评估和认证方法",
      "与监管者和合规专家建立网络",
    ],
  },

  trackPublicGood: {
    title: "Open Token 与数字公共产品",
    overview: "探讨智能代理开源基金会如何通过价值驱动的项目和可持续资金模式发挥全球公共基础设施的作用。",
    keyTopics: [
      "Open Token 作为公共事业：AI 算力的计量、定价和结算",
      "战略组合：AI 工厂（生产）+ Claw 堆栈（执行）",
      "从开源代码 → 治理自主系统",
      "可持续开源 AI 的资金模式",
      "智能代理时代的社区驱动 AI 开发",
      "代理生态系统的开放标准与互操作性",
      "AI 算力作为公共产品：可及性、可持续性、增长",
    ],
    humanityTitle: "智能代理公共资源的基础",
    humanityText: "AI 基础设施的未来建立在两大支柱之上：用于生产的 AI 工厂和用于执行的 Claw 堆栈。Open Token 提供计量和结算机制——不是加密货币，而是 AI 算力的公共事业，类似于千瓦时衡量电力。",
    spotlightTitle: "Open Token 倡议",
    spotlightText: "企业将 AI 算力容量（Token）捐赠到公共池。池将 Token 分配给开源、研究和教育。目标：可及性——让所有人都能使用 AI 算力；可持续性——为智能代理公共资源提供资金；增长——大规模推动创新。",
    projectsTitle: "核心讨论",
    projects: [
      "Open Token：设计 AI 算力的计量和结算",
      "从开源代码到治理自主系统",
      "构建智能代理公共资源：生产、执行、治理",
      "开源 AI 基础设施的可持续资金模式",
    ],
  },

  logo: {
    tagline: "智能代理塑造明天",
  },

  educationPage: {
    backToHome: "返回首页",
    heroTitle: "AI 与教育研究",
    heroSubtitle:
      "为什么伟大的学习理论从未真正普及到每一位学习者——当智能代理（而非助手）成为教育软件的基本单元时，会发生什么改变。",
    introP1:
      "两千多年来，我们关于人类如何学习的最深刻洞察来自一小组传统：公元前 5 世纪雅典的苏格拉底对话法、皮亚杰的认知发展建构主义理论、费曼的“以教代学”技巧。它们语言不同、时代各异，却汇聚于同一幅图景——学习者是知识的主动建构者；认知冲突推动改变；理解在对话中加深；每一位学习者都需要一位真正了解他们的对话者。",
    introP2:
      "这些理念被普遍推崇，却几乎从未规模化实施过。原因是结构性的，而非哲学性的：每一种方法都要求与一位真正了解学习者、拥有无限耐心、能够实时调整的人建立持续的一对一关系。工业化教育建立在相反的假设之上——一位教师，众多学生，固定进度，标准化评估。结果是：在我们对学习的认知与课堂能够提供的体验之间，存在着两千年的鸿沟。",
    introP3:
      "智能代理 AI 改变了这一约束。一个持续存在的代理——拥有记忆、能主动介入、随时间深化对学习者的理解、且边际成本趋近于零——是人类历史上第一种能够承载这些理论所要求关系的技术。它不是更快的教科书。它是缺失的实现层。下面三份报告勾勒出这一论证：从古典理论的共同结构，到解锁每一种理论的具体 AI 能力，再到承载它们的智能代理的具体架构。",
    featuredReportsTitle: "精选报告",
    featuredReportsSubtitle:
      "三部曲式研究——理论、实践、架构。下方为英文版本；每张卡片均链接至中文原版。",
    readFullReportEn: "阅读完整报告（英文）",
    chineseOriginalLink: "中文原版",
    closingTitle: "从助手到守护灵",
    closingText:
      "教育从来都是一个伪装成内容问题的关系问题。未来十年的工作不是把更多内容摆在学习者面前——而是为每一位学习者配备一位持续存在的伙伴：了解他们、在恰当时刻提出恰当问题、并与他们一同成长多年。",
    reports: [
      {
        label: "理论 · 比较分析",
        title: "费曼、苏格拉底、皮亚杰的共性",
        summary:
          "对横跨两千五百年的三大教育传统进行结构性分析，识别出九项共同信念——学习者作为主动建构者、认知冲突作为催化剂、元认知、深度优于广度、个性化、对话式互动、通过类比的简化、教师作为引导者、内在动机。",
      },
      {
        label: "实践 · 大模型能力",
        title: "AI 如何改变教育实施现状",
        summary:
          "将阻碍这些理论规模化的七大结构性困境——师资供给、时间、评估、成本、文化——映射到大语言模型的具体能力上。论证 AI 是第一种能够以不成比例的人力成本提供高质量个性化教学互动的技术。",
      },
      {
        label: "架构 · 持续存在型代理",
        title: "从苏格拉底的 Daimon 到 Digital Daimon",
        summary:
          "一篇技术架构论文。助手范式——无状态、被动响应、无身份——无法承载这些理论所要求的关系。一个持续存在的 Digital Daimon，具备记忆、自主介入、对学习者的深度理解和自我进化能力，则可以做到。本文阐述其六大架构特征，并将其映射到 OpenClaw 和三种教育理论上。",
      },
    ],
  },

  initiativePage: {
    backToHome: "返回首页",
    badge: "巴黎倡议",
    heroTitle: "关于智能代理 AI 基础设施的共识声明",
    heroSubtitle: "AI Vision Forum 巴黎 · 2026 年 5 月 4 日",
    preamble:
      "以下原则反映了 AI Vision Forum 巴黎 2026 在开放、可信、可持续的智能代理 AI 基础设施建设上达成的共识。",
    principles: [
      {
        roman: "一、",
        title: "智能代理时代需要新的基础设施",
        body: "我们认识到，世界正进入一种新的计算范式——智能代理时代。LAMP 时代和云时代假定人类是主要的行为者。而自主代理——持续运行、代表他人行动、规模化消耗资源——则要求新的身份、授权与经济模型。",
      },
      {
        roman: "二、",
        title: "AI 算力应成为公共产品",
        body: "我们相信，AI 算力正成为关键基础设施——其重要性堪比电力——应当被广泛获取，以促进创新、教育与开源的可持续发展。Open Token 模型为“AI 算力作为数字公共产品”提供了一条具体、可操作的路径：在 token 捐赠方（大模型提供者）与需要算力的组织——开源项目、研究者、教育者和公民社会——之间架起桥梁。",
      },
      {
        roman: "三、",
        title: "健康的智能代理生态使所有人受益",
        body: "我们观察到，繁荣的智能代理生态创造共享价值：大模型提供者从增长的 token 消耗与开发者采纳中获益；开源项目获得可持续的资金支持；社会从可获得的 AI 基础设施中受益。这不是零和动态——更广泛的获取让所有人的生态都更繁荣。",
        extra:
          "领先的 AI 机构已经证明，结构化的算力获取项目能带来商誉、生态发展和社区信任方面的真实回报。Open Token 在此基础上构建——采用中立、开放、不受任何单一厂商控制的治理模型。",
      },
      {
        roman: "四、",
        title: "多方协作至关重要",
        body: "我们确信，构建可信的智能代理 AI 基础设施需要跨部门的积极协作：大模型提供者、开源基金会、国际组织、学术界与公民社会，各自具备彼此所缺的能力。没有任何一方可以独自完成。进步来自于围绕具体项目的协作——展示协作能够产生什么。",
      },
    ],
    nextStepsTitle: "后续行动",
    nextStepsIntro:
      "基于这一共识，参与者支持成立一个筹备工作组，推进以下目标：",
    nextSteps: [
      "将 Open Token 从社区倡议发展为结构化、可持续的项目，建立清晰的治理机制，连接 token 捐赠方（大模型提供者）与寻求算力支持的开源项目、教育机构和研究人员。",
      "争取来自大模型提供者的持续性、多周期 token 捐赠承诺——以两到三个与开源基金会的循环合作作为模式验证，朝自我维持的网络迈进。",
      "邀请更多 token 捐赠方与受赠组织跨区域、跨行业地参与进来。",
    ],
    stewardedBy: "联合发起",
    parisDate: "巴黎 · 2026 年 5 月 4 日",
  },

  signSection: {
    title: "签署倡议",
    intro:
      "如果您公开认同这四项原则与后续行动，可以加上您的签名。倡议托管在 GitHub——每一份签名都是一次公开、可追溯的 Pull Request。",
    beFirst: "成为首位签署者。",
    signatories: "位签署者",
    orgs: "家机构",
    individuals: "位个人",
    prTitle: "通过 Pull Request 签署",
    prDesc:
      "将您的姓名添加到 SIGNATORIES.md 并发起 PR。推荐熟悉 GitHub 的签署者使用。",
    issueTitle: "通过 Issue 表单签署",
    issueDesc:
      "填写一份简短的 GitHub Issue，我们会将其汇入下一次签署者 PR。",
    repoNote: "完整的倡议文本与签署历史都在公开的 GitHub 仓库中。",
    viewAll: "查看全部签署者 →",
  },

  essayPage: {
    menuLabel: "文章",
  },
};
