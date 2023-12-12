export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'sl'],
} as const;

export type LocaleStruct = {
    lang: string;
    home: {
        'contact-me': string;
        'download-cv': string;
        'text-greeting': string;
        'text-name': string;
        'text-ima': string;
        'text-software-engineer': string;
        'text-with': string;
        'text-exp': string;
        'text-joy': string;
        'text-mmrp': string;
        'text-fcs': string;
        'text-react': string;
    };
    about: {
        title: string;
        'how-start': string;
        q1: string;
        'after-start': string;
        q2: string;
        end: string;
        'music-p1-s': string;
        'music-p2-s1': string;
        'music-p2-sb': string;
        'music-p2-s2': string;
        'music-p3': string;
    };
    project: {
        title: string;
        'boat-title': string;
        'boat-description': string;
        'rack-title': string;
        'rack-description': string;
        'pdfb-title': string;
        'pdfb-description': string;
        'ppp-title': string;
        'ppp-description': string;
        'zenc-title': string;
        'zenc-description': string;
        'gena-title': string;
        'gena-description': string;
    };
    experience: {
        title: string;
        'minmod-title': string;
        'minmod-location': string;
        'minmod-description': string;
        'govir-title': string;
        'govir-location': string;
        'govir-description': string;
        'ghs-title': string;
        'ghs-location': string;
        'ghs-description': string;
    };
    contact: {
        title: string;
        'direct-1': string;
        'direct-2': string;
        'message-placeholder': string;
        'submit-btn': string;
    };
};

export type LocaleKey = [
    'lang',
    'about-title',
    'about-how-start',
    'about-q1',
    'about-after-start',
    'about-q2',
    'about-end',
    'project-boat-title',
    'project-boat-description',
    'project-rack-title',
    'project-rack-description',
    'project-pdfb-title',
    'project-pdfb-description',
    'project-ppp-title',
    'project-ppp-description',
    'project-zenc-title',
    'project-zenc-description',
    'project-gena-title',
    'project-gena-description',
    'experience-title',
    'experience-minmod-title',
    'experience-minmod-location',
    'experience-minmod-description',
    'experience-govir-title',
    'experience-govir-location',
    'experience-govir-description',
    'experience-ghs-title',
    'experience-ghs-location',
    'experience-ghs-description',
    'contact-title',
    'contact-direct-1',
    'contact-direct-2',
    'contact-message-placeholder',
][number];

export type Locale = (typeof i18n)['locales'][number];
export const DefaultLocale = i18n.defaultLocale;
