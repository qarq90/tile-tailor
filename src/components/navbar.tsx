"use client";

import Image from "next/image";
import Link from "next/link";
import { Theme } from "./theme";
import { Translate } from "./translate";
import { useThemeStore } from "@/stores/uiStore";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";

export function Navbar() {
    const { isDark } = useThemeStore();
    const { t, language } = useTranslation();

    return (
        <nav
            className={clsx(
                "w-full bg-accent flex justify-between items-center px-48 py-4 text-xl",
                language === "ar" && "font-arabic",
            )}
        >
            <div className="flex flex-row gap-2">
                <Image
                    src="/imgs/logo.png"
                    className={clsx(
                        "logo",
                        isDark ? "brightness-0 invert" : "brightness-100",
                    )}
                    alt="Logo"
                    width={32}
                    height={32}
                />
                <span className="text-xl">{t("tileTailor")}</span>
            </div>
            <div className="flex flex-row gap-8">
                <Link href="/">{t("home")}</Link>
                <Link href="/about">{t("about")}</Link>
                <Link href="/works">{t("works")}</Link>
                <Link href="/services">{t("services")}</Link>
                <Link href="/contact">{t("contact")}</Link>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Translate />
                <Theme />
            </div>
        </nav>
    );
}
