
export interface ContactData {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface AboutData {
    content: string;
}

export interface LanguageData {
    language: string;
    level: string;
}

export interface ExperienceData {
    company: string;
    title: string;
    duration: string;
    description?: string;
    achievements?: string[];
    location: string;
}

export interface EducationData {
    school: string;
    degree: string;
    duration: string;
    description?: string;
    location: string;
}

export interface PublicationData {
    title: string;
    journal: string;
    date: string;
    description: string;
    link: string;
}

export interface ResumeData {
    photo: string;
    name: string;
    title: string;
    contact: ContactData;
    about: AboutData;
    languages: LanguageData[];
    experiences: ExperienceData[];
    education: EducationData[];
    publications: PublicationData[];
}