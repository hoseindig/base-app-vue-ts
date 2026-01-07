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
