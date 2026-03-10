export default function Footer({ t, isLight }) {
    return (
        <footer className={`relative z-10 border-t px-4 py-10 ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
                <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                    {t.footer.text}
                </p>
                <div className={`flex items-center gap-6 text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                    <a href="#home" className={`transition hover:text-cyan-500`}>{t.footer.top}</a>
                    <a href="#projects" className={`transition hover:text-cyan-500`}>{t.footer.projects}</a>
                    <a href="#contact" className={`transition hover:text-cyan-500`}>{t.footer.contact}</a>
                </div>
            </div>
        </footer>
    );
}