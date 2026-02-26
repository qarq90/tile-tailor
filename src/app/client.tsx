"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
    CircleCheck,
    MapPin,
    MedalIcon,
    Users2Icon,
    Building2,
    Grid3x3,
    Layers,
    Sparkles,
    Star,
    Users,
    RefreshCw,
    ShieldCheck,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Link from "next/link";

export default function Client() {
    const { t, language } = useTranslation();

    return (
        <>
            <section
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("tileTailor")}</Text>
                <Text size="3xl" color="accent">
                    {t("yearsOfExcellence")}
                </Text>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <Text size="xl" align="center" className="w-4xl">
                        {t("premiumDescription")}
                    </Text>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <Link href="/works">
                        <Button accent={true}>{t("viewProjects")}</Button>
                    </Link>
                    <Link href="/services">
                        <Button accent={false}>{t("services")}</Button>
                    </Link>
                </div>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full justify-center items-center py-12 px-4 md:px-8 lg:px-80 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MedalIcon size={48} />
                    <Text size="xl">11 {t("yearsOfExperience")}</Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <Users2Icon size={48} />
                    <Text size="xl">20+ {t("skilledWorkers")}</Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <CircleCheck size={48} />
                    <Text size="xl">150+ {t("completedProjects")}</Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MapPin size={48} />
                    <Text size="xl">3 {t("ongoingProjects")}</Text>
                </div>
            </section>

            <section
                className="w-full justify-center items-center py-24 flex flex-col gap-8 px-4 md:px-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("ourServices")}</Text>
                <Text
                    size="3xl"
                    color="accent"
                    align="center"
                    className="w-4xl"
                >
                    {t("servicesDescription")}
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center px-4 lg:px-64 py-8">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Building2
                            size={64}
                            className="mb-4"
                            strokeWidth={1.5}
                        />
                        <Text color="accent" size="2xl" className="mb-4">
                            {t("gypsumCeilings")}
                        </Text>
                        <Text align="center">{t("gypsumDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Layers size={64} className="mb-4" strokeWidth={1.5} />
                        <Text color="accent" size="2xl" className="mb-4">
                            {t("flooringSolutions")}
                        </Text>
                        <Text align="center">{t("flooringDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Grid3x3 size={64} className="mb-4" strokeWidth={1.5} />
                        <Text color="accent" size="2xl" className="mb-4">
                            {t("wallTiling")}
                        </Text>
                        <Text align="center">{t("wallTilingDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Sparkles
                            size={64}
                            className="mb-4"
                            strokeWidth={1.5}
                        />
                        <Text color="accent" size="2xl" className="mb-4">
                            {t("interiorDecoration")}
                        </Text>
                        <Text align="center">{t("interiorDesc")}</Text>
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <Link href="/services">
                        <Button accent={true}>{t("viewAllServices")}</Button>
                    </Link>
                </div>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full justify-center items-center py-24 flex flex-col gap-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("whyChooseUs")}</Text>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center px-4 lg:px-64">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Star size={64} className="mb-4" strokeWidth={1.5} />
                        <Text size="2xl" className="mb-4">
                            {t("experience")}
                        </Text>
                        <Text align="center">{t("experienceDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Users size={64} className="mb-4" strokeWidth={1.5} />
                        <Text size="2xl" className="mb-4">
                            {t("skilledTeam")}
                        </Text>
                        <Text align="center">{t("skilledTeamDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <RefreshCw
                            size={64}
                            className="mb-4"
                            strokeWidth={1.5}
                        />
                        <Text size="2xl" className="mb-4">
                            {t("flexibleWorkforce")}
                        </Text>
                        <Text align="center">{t("flexibleDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <ShieldCheck
                            size={64}
                            className="mb-4"
                            strokeWidth={1.5}
                        />
                        <Text size="2xl" className="mb-4">
                            {t("qualityAssurance")}
                        </Text>
                        <Text align="center">{t("qualityDesc")}</Text>
                    </div>
                </div>
            </section>

            <section
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("readyToStart")}</Text>
                <Text
                    size="3xl"
                    color="accent"
                    align="center"
                    className="w-4xl"
                >
                    {t("ctaDescription")}
                </Text>
                <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
                    <Link href="/works">
                        <Button accent={true}>{t("viewProjects")}</Button>
                    </Link>
                    <Link href="/services">
                        <Button accent={true}>{t("services")}</Button>
                    </Link>
                    <Link href="/contact">
                        <Button accent={false}>{t("contactUs")}</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
