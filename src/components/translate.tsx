"use client";

import { useTranslationStore } from "@/stores/uiStore";
import { Languages } from "lucide-react";

export function Translate() {
    const { language, toggleLanguage } = useTranslationStore();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors"
            aria-label="Toggle language"
        >
            <Languages size={20} />
            <span className="text-sm font-medium">
                {language === "en" ? "EN" : "عربي"}
            </span>
        </button>
    );
}
