export type Locale = "en" | "cn" | "fr";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    tracks: string;
    schedule: string;
    speakers: string;
    venue: string;
    register: string;
    language: string;
    initiative: string;
    education: string;
    essay: string;
    report: string;
  };

  // Hero
  hero: {
    tagline: string;
    dateDisplay: string;
    colocatedWith: string;
    requestInvitation: string;
    learnMore: string;
    invitationOnly: string;
    chathamHouseRule: string;
  };

  // Countdown
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };

  // About Section
  about: {
    title: string;
    subtitle: string;
    guidingQuestionLabel: string;
    guidingQuestion: string;
    guidingQuestionNote: string;
    whyNowTitle: string;
    whyNowIntro: string;
    whyNowShifts: { title: string; description: string }[];
    valuePropositionTitle: string;
    valueProposition: { title: string; description: string }[];
    invitedParticipants: string;
    exclusiveAccess: string;
    inviteOnly: string;
    colocated: string;
    chathamHouseTitle: string;
    chathamHouseDescription: string;
  };

  // Tracks Section
  tracksSection: {
    title: string;
    subtitle: string;
    featured: string;
    narrativeArc?: string;
    tracks: {
      title: string;
      subtitle: string;
      description: string;
      keywords: string[];
    }[];
  };

  // Schedule Section
  scheduleSection: {
    title: string;
    subtitle: string;
    note: string;
    items: { time: string; title: string; subtitle?: string; format?: string }[];
  };

  // Speakers Section
  speakersSection: {
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonDescription: string;
    comingSoonNote: string;
  };

  // Panelists Representing Section
  panelistsSection: {
    title: string;
    subtitle: string;
  };

  // Venue Section
  venue: {
    title: string;
    venueDescription: string;
    colocatedDescription: string;
    accessDescription: string;
    viewOnMap: string;
    photosComingSoon: string;
  };

  // CTA Section
  cta: {
    title: string;
    description: string;
    button: string;
    note: string;
  };

  // Footer
  footer: {
    quickLinks: string;
    about: string;
    tracks: string;
    schedule: string;
    speakers: string;
    legal: string;
    privacyPolicy: string;
    contact: string;
    underChathamHouseRule: string;
    connect: string;
    colocatedWith: string;
    copyright: string;
    organizedBy: string;
  };

  // Register Page
  registerPage: {
    backToHome: string;
    title: string;
    description: string;
    fullName: string;
    emailAddress: string;
    affiliation: string;
    primaryTrack: string;
    selectTrack: string;
    trackOptions: string[];
    motivation: string;
    motivationPlaceholder: string;
    chathamAgree: string;
    submitButton: string;
    reviewNote: string;
    placeholderNote: string;
    placeholderDescription: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    orgPlaceholder: string;
  };

  // Contact Page
  contactPage: {
    backToHome: string;
    title: string;
    description: string;
    generalInquiries: string;
    partnership: string;
    pressMedia: string;
    followUs: string;
    quickLinks: string;
    requestInvitation: string;
    exploreTracks: string;
    aboutForum: string;
    noteTitle: string;
    noteDescription: string;
  };

  // Privacy Page
  privacyPage: {
    backToHome: string;
    title: string;
    lastUpdated: string;
    overview: string;
    overviewText: string;
    infoCollect: string;
    infoRegistration: string;
    infoParticipation: string;
    infoAnalytics: string;
    chathamTitle: string;
    chathamText: string;
    dataUsage: string;
    dataUsageIntro: string;
    dataUsageItems: string[];
    dataProtection: string;
    dataProtectionText: string;
    yourRights: string;
    yourRightsIntro: string;
    yourRightsItems: string[];
    contactTitle: string;
    contactText: string;
  };

  // Track Detail Pages
  trackDetail: {
    backToTracks: string;
    keyTopics: string;
    featuredSpeakers: string;
    speakersComingSoon: string;
    speakersCurating: string;
    relatedResources: string;
    interestedInTrack: string;
    requestInvitationToJoin: string;
    requestInvitation: string;
  };

  // Track: Education
  trackEducation: {
    title: string;
    overview: string;
    keyTopics: string[];
    whyMattersTitle: string;
    whyMattersText: string;
    focusAreasTitle: string;
    focusAreas: string[];
  };

  // Track: Vibe Coding
  trackVibeCoding: {
    title: string;
    overview: string;
    keyTopics: string[];
    spotlightTitle: string;
    spotlightText: string;
    featuredSessionTitle: string;
    featuredSessionText: string;
    whatYouLearnTitle: string;
    whatYouLearn: string[];
  };

  // Track: Governance
  trackGovernance: {
    title: string;
    overview: string;
    keyTopics: string[];
    approachTitle: string;
    approachText: string;
    keyDiscussionTitle: string;
    keyDiscussionText: string;
    outcomesTitle: string;
    outcomes: string[];
  };

  // Track: Public Good
  trackPublicGood: {
    title: string;
    overview: string;
    keyTopics: string[];
    humanityTitle: string;
    humanityText: string;
    spotlightTitle: string;
    spotlightText: string;
    projectsTitle: string;
    projects: string[];
  };

  // Logo
  logo: {
    tagline: string;
  };

  // Education Page (/education)
  educationPage: {
    backToHome: string;
    heroTitle: string;
    heroSubtitle: string;
    introP1: string;
    introP2: string;
    introP3: string;
    featuredReportsTitle: string;
    featuredReportsSubtitle: string;
    readFullReportEn: string;
    chineseOriginalLink: string;
    closingTitle: string;
    closingText: string;
    reports: { label: string; title: string; summary: string }[];
  };

  // Initiative Page (/initiative)
  initiativePage: {
    backToHome: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    preamble: string;
    principles: { roman: string; title: string; body: string; extra?: string }[];
    nextStepsTitle: string;
    nextStepsIntro: string;
    nextSteps: string[];
    stewardedBy: string;
    parisDate: string;
  };

  // Sign Section (on /initiative)
  signSection: {
    title: string;
    intro: string;
    beFirst: string;
    signatories: string;
    orgs: string;
    individuals: string;
    prTitle: string;
    prDesc: string;
    issueTitle: string;
    issueDesc: string;
    repoNote: string;
    viewAll: string;
  };

  // Essay Page (/blog/double-exponential) — locale switch handled by parallel
  // language components; this key is only for menu label.
  essayPage: {
    menuLabel: string;
  };
}
