export type NavCopy = {
  home: string;
  about: string;
  work: string;
  tiktok: string;
  talks: string;
  brands: string;
  cv: string;
  hobbies: string;
  mediaKit: string;
  contact: string;
};

export type MediaKitPageCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  backHome: string;
  aboutTitle: string;
  socialTitle: string;
  videosTitle: string;
  trafficTitle: string;
  demographicsTitle: string;
  genderTitle: string;
  ageTitle: string;
  locationsTitle: string;
  pricingTitle: string;
  tiktokPricing: string;
  reelsPricing: string;
  storiesPricing: string;
  packagesNote: string;
  contactTitle: string;
  contactCta: string;
};

export type HobbiesPageCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  intro: string;
  backHome: string;
  photoAlt: string;
};

export type Dictionary = {
  nav: NavCopy;
  mediaKitPage: MediaKitPageCopy;
  hobbiesPage: HobbiesPageCopy;
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutBody: string;
  aboutStat1: string;
  aboutStat2: string;
  aboutStat3: string;
  workKicker: string;
  tiktokKicker: string;
  tiktokTitle: string;
  tiktokSub: string;
  talksKicker: string;
  talksTitle: string;
  brandsKicker: string;
  cvKicker: string;
  cvDownload: string;
  cvSkillsTitle: string;
  cvEducationTitle: string;
  cvAchievementsTitle: string;
  cvCertificationsTitle: string;
  newsletterKicker: string;
  newsletterTitle: string;
  newsletterSub: string;
  newsletterCta: string;
  newsletterPh: string;
  newsletterNamePh: string;
  contactKicker: string;
  contactTitle: string;
  contactSub: string;
  contactName: string;
  contactEmail: string;
  contactCompany: string;
  contactType: string;
  contactMsg: string;
  contactSend: string;
  contactTypes: string[];
  footerNote: string;
  available: string;
  metaTitle: string;
  metaDescription: string;
  tiktokStatViews: string;
  tiktokStatFollowers: string;
  tiktokStatLikes: string;
  newsletterThanks: string;
  contactThanks: string;
  formInvalidEmail: string;
  formSending: string;
};

export type Project = {
  code: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  tags: string[];
  year: string;
};

export type TikTokCard = {
  id: number;
  videoId?: string;
  titleEs: string;
  titleEn: string;
  views: string;
  likes: string;
  color: string;
  url?: string;
};

export type Talk = {
  eventEs: string;
  eventEn: string;
  topicEs: string;
  topicEn: string;
  year: string;
  city: string;
  youtubeUrl?: string;
};

export type Brand = {
  name: string;
  role: string;
  year: string;
};

export type CvJob = {
  role: string;
  company: string;
  period: string;
  locEs: string;
  locEn: string;
  employmentType: "FREELANCE" | "FULL-TIME" | "AMBASSADOR" | "CONTRACT";
  bulletsEs: string[];
  bulletsEn: string[];
};

export type CvSkillGroup = {
  categoryEs: string;
  categoryEn: string;
  itemsEs: string[];
  itemsEn: string[];
};

export type CvEducation = {
  institutionEs: string;
  institutionEn: string;
  degreeEs: string;
  degreeEn: string;
  period: string;
  noteEs: string;
  noteEn: string;
};

export type CvAchievement = {
  textEs: string;
  textEn: string;
};

export type CvCertification = {
  name: string;
  issuer: string;
  url: string | null;
};
