import { useEffect } from 'react';
import { SEO } from '../constants/seo';
import { resolveTheme } from '../utils/theme';
import react from '../assets/react.svg';

export default function SEOHead({ lang, theme }) {
    const seo = SEO[lang] || SEO.en;
    const isLight = resolveTheme(theme) === 'light';

    useEffect(() => {
        document.title = seo.title;

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = seo.description;

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = seo.keywords;

        let metaAuthor = document.querySelector('meta[name="author"]');
        if (!metaAuthor) {
            metaAuthor = document.createElement('meta');
            metaAuthor.name = 'author';
            document.head.appendChild(metaAuthor);
        }
        metaAuthor.content = 'Ahmadjon Maxmudov';

        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = isLight ? '#f8fafc' : '#030712';

        document.documentElement.lang = lang;

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://ahmadjon.uz';

        let favicon = document.querySelector('link[rel="icon"]');
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/svg+xml';
            document.head.appendChild(favicon);
        }
        favicon.href = react;

    }, [lang, seo, isLight]);

    return null;
}