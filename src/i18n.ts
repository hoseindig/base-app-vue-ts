import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        common: {
            hello: 'Hello',
            welcomeBack: "Welcome back — here's what's next.",
            morning: 'Good morning',
            afternoon: 'Good afternoon',
            evening: 'Good evening',
            todo: 'To‑do',
            add: 'Add',
            remove: 'Remove',
            noTasks: 'No tasks yet — enjoy your day! ✅',
            weather: 'Weather',
            searchCity: 'Search city',
            currentWeather: 'Current weather',
            profile: 'Profile',
            name: 'Name',
            theme: 'Theme',
            language: 'Language',
            light: 'Light',
            dark: 'Dark',
            auto: 'Auto',
        },
        about: {
            title: 'Hossein Sheykhi — Developer',
            email: 'hossein.sheykhi.developer[at]gmail.com',
            summary: 'Hi — I\'m Hossein Sheykhi, a web developer building accessible, responsive applications with Vue, React and Node.js. I focus on TypeScript, SASS, state managers, PWA, maps (Leaflet), charting (Chart.js, Recharts), and reliable backends (Express, MongoDB). I also work with CI/CD, Docker and modern bundlers (Vite, Webpack).',
            skillsHeading: 'Skills & Technologies',
            skills: [
                'Vue', 'SASS', 'State Managers', 'Node.js', 'Router', 'PWA', 'TypeScript', 'TailwindCSS', 'Leaflet (map)', 'Chart.js', 'SQL', 'Mongoose', 'Next.js', 'React', 'HTML5', 'CSS3', 'ES6', 'Responsive Design', 'Web Accessibility', 'Nuxt.js', 'React Query', 'zustand', 'Redux Toolkit', 'sass / scss', 'Styled Components', 'Material UI', 'Ant Design', 'Json Schema', 'React Hook Form', 'Express.js', 'REST API', 'Authentication & Authorization', 'MongoDB', 'Git / GitHub / GitLab', 'Docker', 'CI/CD', 'Webpack / Vite', 'ESLint / Prettier', 'recharts'
            ],
            downloadCV: 'Download CV'
        },

    },
    fa: {
        common: {
            hello: 'درود',
            welcomeBack: 'خوش آمدید — اینجا کارهای بعدی شما است.',
            morning: 'صبح بخیر',
            afternoon: 'عصر بخیر',
            evening: 'شب بخیر',
            todo: 'کارها',
            add: 'افزودن',
            remove: 'حذف',
            noTasks: 'فعلاً کاری وجود ندارد — روز خوبی داشته باشید! ✅',
            weather: 'آب‌و‌هوا',
            searchCity: 'جستجوی شهر',
            currentWeather: 'آب‌و‌هوای فعلی',
            profile: 'پروفایل',
            name: 'نام',
            theme: 'قالب',
            language: 'زبان',
            light: 'روشن',
            dark: 'تیره',
            auto: 'خودکار',
        },
        about: {
            title: 'حسین شیخی — توسعه‌دهنده',
            email: 'hossein.sheykhi.developer@@gmail.com',
            summary: 'سلام — من حسین شیخی هستم، توسعه‌دهنده وب که برنامه‌های واکنش‌گرا و قابل‌دسترسی با Vue، React و Node.js می‌سازم. تمرکزم روی TypeScript، SASS، مدیریت وضعیت، PWA، نقشه‌ها (Leaflet)، نمودارها (Chart.js, Recharts) و بک‌اند (Express, MongoDB) است. همچنین در CI/CD، Docker و باندلرهای مدرن (Vite, Webpack) تجربه دارم.',
            skillsHeading: 'مهارت‌ها و تکنولوژی‌ها',
            skills: [
                'Vue', 'SASS', 'State Managers', 'Node.js', 'Router', 'PWA', 'TypeScript', 'TailwindCSS', 'Leaflet (map)', 'Chart.js', 'SQL', 'Mongoose', 'Next.js', 'React', 'HTML5', 'CSS3', 'ES6', 'Responsive Design', 'Web Accessibility', 'Nuxt.js', 'React Query', 'zustand', 'Redux Toolkit', 'sass / scss', 'Styled Components', 'Material UI', 'Ant Design', 'Json Schema', 'React Hook Form', 'Express.js', 'REST API', 'Authentication & Authorization', 'MongoDB', 'Git / GitHub / GitLab', 'Docker', 'CI/CD', 'Webpack / Vite', 'ESLint / Prettier', 'recharts'
            ],
            downloadCV: 'دانلود رزومه'
        },
    },
}

export const DEFAULT_LANG = (localStorage.getItem('baseapp.settings')
    ? JSON.parse(localStorage.getItem('baseapp.settings') as string).language
    : navigator.language?.startsWith('fa')
        ? 'fa'
        : 'en') || 'en'

const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LANG,
    fallbackLocale: 'en',
    messages,
})

export default i18n
