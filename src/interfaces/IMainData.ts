export interface IMainData {
  foo: string;
  resumeData: IResumeData;
}

export interface IResumeData {
  main: IResumeDataMain;
  resume: IResumeDataResume;
  portfolio: IResumeDataPortfolio;
  testimonials: IResumeDataTestimonial;
}

// 세컨
export interface IResumeDataMain {
  name: string;
  occupation: string;
  description: string;
  address: IResumeDataMainAddress;
  social: IResumeDataMainSocial[];
  image: string;
  bio: string;
  phone: string;
  email: string;
  resumedownload: string;
  message: string;
}

export interface IResumeDataResume {
  skillmessage: string;
  education: IResumeDataResumeEducation[];
  work: IResumeDataResumeWork[];
  skills: IResumeDataResumeSkill[];
}

export interface IResumeDataPortfolio {
  projects: { image: string; title: string; category: string; url: string }[];
}
export interface IResumeDataTestimonial {
  testimonials: {
    user: string;
    test: string;
    text: string;
  }[];
}
// export interface IResumeDataContact {
//   name: string;
//   subject: string;
//   email: string;
//   message: string;
//   address: IResumeDataMainAddress;
//   phone: string;
// }

// 써드

export interface IResumeDataResumeEducation {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface IResumeDataResumeWork {
  company: string;
  title: string;
  years: string;
  description: string;
}
export interface IResumeDataResumeSkill {
  name: string;
  level: string;
}

export interface IResumeDataMainAddress {
  city: string;
  street: string;
  state: string;
  zip: string;
}
export interface IResumeDataMainSocial {
  name: string;
  url: string;
  className: string;
  networks: string;
}
