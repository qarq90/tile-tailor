import { create } from "zustand";

interface ThemeStore {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    isDark: false,
    setIsDark: (value: boolean) => set({ isDark: value }),
}));

interface TranslationStore {
    language: "en" | "ar";
    setLanguage: (lang: "en" | "ar") => void;
    toggleLanguage: () => void;
}

export const useTranslationStore = create<TranslationStore>((set) => ({
    language: "en",
    setLanguage: (lang) => set({ language: lang }),
    toggleLanguage: () =>
        set((state) => ({
            language: state.language === "en" ? "ar" : "en",
        })),
}));
