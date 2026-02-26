"use client";

import Image from "next/image";
import Link from "next/link";
import { Theme } from "./theme";
import { Translate } from "./translate";
import { useThemeStore } from "@/stores/uiStore";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const { isDark } = useThemeStore();
    const { t, language } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={clsx(
                "w-full bg-accent top-0 z-50 px-4 md:px-8 lg:px-48 py-4",
                language === "ar" && "font-arabic",
            )}
        >
            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
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
                    <span className="text-lg md:text-xl">
                        {t("tileTailor")}
                    </span>
                </div>

                <div className="hidden md:flex flex-row gap-4 lg:gap-8">
                    <Link href="/" className="hover:opacity-80 transition">
                        {t("home")}
                    </Link>
                    <Link href="/about" className="hover:opacity-80 transition">
                        {t("about")}
                    </Link>
                    <Link href="/works" className="hover:opacity-80 transition">
                        {t("works")}
                    </Link>
                    <Link
                        href="/services"
                        className="hover:opacity-80 transition"
                    >
                        {t("services")}
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:opacity-80 transition"
                    >
                        {t("contact")}
                    </Link>
                </div>

                <div className="flex flex-row gap-2 md:gap-4 items-center">
                    <Translate />
                    <Theme />

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 hover:bg-black/10 rounded-lg transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute left-0 right-0 top-[72px] bg-accent border-t border-white/10 shadow-lg py-4 px-4 flex flex-col gap-4">
                    <Link
                        href="/"
                        className="py-2 hover:bg-black/10 px-4 rounded-lg transition"
                        onClick={toggleMenu}
                    >
                        {t("home")}
                    </Link>
                    <Link
                        href="/about"
                        className="py-2 hover:bg-black/10 px-4 rounded-lg transition"
                        onClick={toggleMenu}
                    >
                        {t("about")}
                    </Link>
                    <Link
                        href="/works"
                        className="py-2 hover:bg-black/10 px-4 rounded-lg transition"
                        onClick={toggleMenu}
                    >
                        {t("works")}
                    </Link>
                    <Link
                        href="/services"
                        className="py-2 hover:bg-black/10 px-4 rounded-lg transition"
                        onClick={toggleMenu}
                    >
                        {t("services")}
                    </Link>
                    <Link
                        href="/contact"
                        className="py-2 hover:bg-black/10 px-4 rounded-lg transition"
                        onClick={toggleMenu}
                    >
                        {t("contact")}
                    </Link>
                </div>
            )}
        </nav>
    );
}
