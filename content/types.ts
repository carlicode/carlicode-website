export type NavCopy = {
  home: string;
  about: string;
  work: string;
  tiktok: string;
  talks: string;
  brands: string;
  contact: string;
};

export type Dictionary = {
  nav: NavCopy;
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
  titleEs: string;
  titleEn: string;
  views: string;
  likes: string;
  color: string;
};

export type Talk = {
  eventEs: string;
  eventEn: string;
  topicEs: string;
  topicEn: string;
  year: string;
  city: string;
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
  employmentType: "FREELANCE" | "FULL-TIME" | "AMBASSADOR";
  bulletsEs: string[];
  bulletsEn: string[];
};
