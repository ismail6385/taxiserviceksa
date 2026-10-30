import { AR_PAGES, UR_PAGES } from './localized-pages.generated';

export type SiteLang = 'en' | 'ar' | 'ur';

const PAGES: Record<'ar' | 'ur', readonly string[]> = { ar: AR_PAGES, ur: UR_PAGES };

/** The English path of any page, e.g. /ar/routes/riyadh-jeddah/ -> /routes/riyadh-jeddah/. */
export function englishPath(pathname: string): string {
    let p = (pathname || '/').split(/[?#]/)[0];
    p = p.replace(/^\/(ar|ur)(?=\/|$)/, '') || '/';
    return p.endsWith('/') ? p : `${p}/`;
}

/** Which language the current page is in. */
export function pageLang(pathname: string): SiteLang {
    const m = (pathname || '').match(/^\/(ar|ur)(?=\/|$)/);
    return m ? (m[1] as SiteLang) : 'en';
}

/** The same page in another language, or null when that translation does not exist yet. */
export function samePageIn(pathname: string, lang: SiteLang): string | null {
    const en = englishPath(pathname);
    if (lang === 'en') return en;
    if (!PAGES[lang].includes(en)) return null;
    return en === '/' ? `/${lang}/` : `/${lang}${en}`;
}
