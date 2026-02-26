import { translations } from "@/lib/translations";
import { useTranslationStore } from "@/stores/uiStore";

export function useTranslation() {
    const { language } = useTranslationStore();

    function t(key: keyof typeof translations.en) {
        return translations[language][key] || key;
    }

    return { t, language };
}
