"use client";
import { Text } from "@/components/ui/text";
import { aboutProjects } from "@/data/data-about";
import {
    MedalIcon,
    Users2Icon,
    Building2,
    Grid3x3,
    Layers,
    Sparkles,
    Eye,
    Target,
    Award,
    Handshake,
    Timer,
    MapPin,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import Image from "next/image";

export default function Client() {
    const { t, language } = useTranslation();

    return (
        <>
            <section
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("aboutTitle")}</Text>
                <Text
                    size="3xl"
                    color="accent"
                    align="center"
                    className="w-4xl"
                >
                    {t("aboutDescription")}
                </Text>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full justify-center items-center py-24 px-4 md:px-8 lg:px-80 flex flex-col gap-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
                    <div className="w-full lg:w-1/2 flex flex-col gap-12">
                        <Text size="4xl">{t("ourMission")}</Text>
                        <Text size="xl">{t("missionText")}</Text>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-20">
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <MedalIcon size={48} />
                                <div className="flex flex-col">
                                    <Text size="xl">11</Text>
                                    <Text size="xl">
                                        {t("yearsOfExcellenceShort")}
                                    </Text>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <Users2Icon size={48} />
                                <div className="flex flex-col">
                                    <Text size="xl">20+</Text>
                                    <Text size="xl">{t("skilledWorkers")}</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative min-h-[400px]">
                        <Image
                            src="/imgs/vision.png"
                            alt="vision_pic"
                            fill
                            className="rounded-lg object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-2 border border-white/25 p-8 rounded-lg flex-1">
                        <div className="flex items-center gap-2">
                            <Target size={48} />
                            <Text size="3xl">{t("ourMission")}</Text>
                        </div>
                        <Text size="xl">{t("missionStatement")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 border border-white/25 p-8 rounded-lg flex-1">
                        <div className="flex items-center gap-2">
                            <Eye size={48} />
                            <Text size="3xl">{t("ourVision")}</Text>
                        </div>
                        <Text size="xl">{t("visionStatement")}</Text>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-accent/5"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <Text size="6xl" className="mb-4 relative inline-block">
                            {t("ourExpertise")}
                        </Text>
                        <Text
                            size="2xl"
                            color="accent"
                            className="max-w-3xl mt-6"
                        >
                            {t("expertiseDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 px-4">
                        <div className="group relative rounded-2xl p-8 transition-all duration-500">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6 transition-all duration-500">
                                    <Building2
                                        size={48}
                                        className="text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="2xl"
                                    className="mb-4 font-semibold text-center"
                                >
                                    {t("gypsumCeilings")}
                                </Text>
                                <Text
                                    align="center"
                                    className="text-accent-foreground/70 leading-relaxed"
                                >
                                    {t("gypsumCeilingsLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl p-8 transition-all duration-500">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                                    <Layers
                                        size={48}
                                        className="text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="2xl"
                                    className="mb-4 font-semibold text-center"
                                >
                                    {t("flooringSolutions")}
                                </Text>
                                <Text
                                    align="center"
                                    className="text-accent-foreground/70 leading-relaxed"
                                >
                                    {t("flooringSolutionsLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl p-8 transition-all duration-500 overflow-hidden">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6 transition-all duration-500">
                                    <Grid3x3
                                        size={48}
                                        className="text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="2xl"
                                    className="mb-4 font-semibold text-center"
                                >
                                    {t("wallTiling")}
                                </Text>
                                <Text
                                    align="center"
                                    className="text-accent-foreground/70 leading-relaxed"
                                >
                                    {t("wallTilingLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl p-8 transition-all duration-500">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6 transition-all duration-500">
                                    <Sparkles
                                        size={48}
                                        className="text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="2xl"
                                    className="mb-4 font-semibold text-center"
                                >
                                    {t("interiorDecoration")}
                                </Text>
                                <Text
                                    align="center"
                                    className="text-accent-foreground/70 leading-relaxed"
                                >
                                    {t("interiorDecorationLong")}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full justify-center items-center py-24 flex flex-col gap-8 px-4 md:px-8",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("currentProjects")}</Text>
                <Text size="3xl" align="center">
                    {t("projectsDescription")}
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4 md:px-16 lg:px-64 py-8">
                    {aboutProjects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="w-full h-56 bg-white mb-4 rounded-lg"></div>
                            <Text size="2xl">{project.title}</Text>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-accent">
                                    <MapPin size={16} strokeWidth={1.5} />
                                    <Text size="sm">{project.area}</Text>
                                </div>
                                <Text size="xs" className="ml-5">
                                    {project.region} • {project.address}
                                </Text>
                            </div>

                            <Text>{project.description}</Text>
                        </div>
                    ))}
                </div>
                <Text>{t("outsideRiyadh")}</Text>
            </section>

            <section
                className="w-full justify-center items-center py-24 px-4 md:px-8 lg:px-36 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("ourCoreValues")}</Text>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 justify-center px-4 lg:px-64 py-8">
                    <div className="flex flex-col gap-2 items-center">
                        <Award
                            size={48}
                            className="text-accent mb-2"
                            strokeWidth={1.5}
                        />
                        <Text size="2xl" align="center">
                            {t("qualityFirst")}
                        </Text>
                        <Text align="center">{t("qualityFirstDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Handshake
                            size={48}
                            className="text-accent mb-2"
                            strokeWidth={1.5}
                        />
                        <Text size="2xl" align="center">
                            {t("integrity")}
                        </Text>
                        <Text align="center">{t("integrityDesc")}</Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Timer
                            size={48}
                            className="text-accent mb-2"
                            strokeWidth={1.5}
                        />
                        <Text size="2xl" align="center">
                            {t("punctuality")}
                        </Text>
                        <Text align="center">{t("punctualityDesc")}</Text>
                    </div>
                </div>

                <Text size="6xl" className="mt-24">
                    {t("ourWorkforce")}
                </Text>
                <Text size="3xl" color="accent" align="center">
                    {t("workforceDescription")}
                </Text>
                <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col gap-12 max-w-4xl">
                        <Text size="xl" align="center">
                            {t("workforceText")}
                        </Text>
                    </div>
                </div>
            </section>
        </>
    );
}
