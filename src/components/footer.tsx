"use client";

import { useThemeStore } from "@/stores/uiStore";
import clsx from "clsx";
import Image from "next/image";

export function Footer() {
    const { isDark } = useThemeStore();
    return (
        <nav className="w-full bg-accent flex justify-between items-center md:px-48 px-2 py-4 text-sm md:text-xl">
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
                <span className="text-xl">Tile Tailor</span>
            </div>
            <div className="flex flex-row gap-4">
                © 2026 Tile Tailor. All rights reserved.
            </div>
        </nav>
    );
}
