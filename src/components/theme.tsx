"use client";

import { useThemeStore } from "@/stores/uiStore";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export function Theme() {
    const { isDark, setIsDark } = useThemeStore();

    function applyTheme(darkMode: boolean): void {
        document.documentElement.style.setProperty(
            "--background",
            darkMode ? "#2c2c2c" : "#ffffff",
        );
        document.documentElement.style.setProperty(
            "--foreground",
            darkMode ? "#ffffff" : "#2c2c2c",
        );
        document.documentElement.style.setProperty("--accent", "#14ada9");
    }

    useEffect(() => {
        applyTheme(isDark);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <section onClick={toggleTheme} className="cursor-pointer">
            {isDark ? <MoonIcon /> : <SunIcon />}
        </section>
    );
}
