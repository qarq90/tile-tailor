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
                className="w-full min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center items-center px-4 py-32 md:py-24 gap-6 md:gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text
                    size="4xl"
                    md="5xl"
                    lg="6xl"
                    className="font-bold text-center"
                >
                    {t("aboutTitle")}
                </Text>
                <Text
                    size="xl"
                    md="2xl"
                    lg="3xl"
                    color="accent"
                    align="center"
                    className="max-w-3xl mx-auto px-4"
                >
                    {t("aboutDescription")}
                </Text>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full py-16 md:py-24 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <Text
                                size="3xl"
                                md="4xl"
                                className="font-bold text-white"
                            >
                                {t("ourMission")}
                            </Text>
                            <Text
                                size="lg"
                                md="xl"
                                className="text-white/90 leading-relaxed"
                            >
                                {t("missionText")}
                            </Text>

                            <div className="flex flex-row gap-6 sm:gap-10">
                                <div className="flex items-center gap-3">
                                    <MedalIcon
                                        size={40}
                                        className="md:w-12 md:h-12 text-white"
                                    />
                                    <div>
                                        <Text
                                            size="xl"
                                            md="2xl"
                                            className="font-bold text-white"
                                        >
                                            11
                                        </Text>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="text-white/80"
                                        >
                                            {t("yearsOfExcellenceShort")}
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users2Icon
                                        size={40}
                                        className="md:w-12 md:h-12 text-white"
                                    />
                                    <div>
                                        <Text
                                            size="xl"
                                            md="2xl"
                                            className="font-bold text-white"
                                        >
                                            20+
                                        </Text>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="text-white/80"
                                        >
                                            {t("skilledWorkers")}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                {/* <Image
                                    src="/imgs/vision.png"
                                    alt="vision_pic"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                /> */}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <Target
                                    size={32}
                                    className="md:w-10 md:h-10 text-white"
                                />
                                <Text
                                    size="2xl"
                                    md="3xl"
                                    className="font-semibold text-white"
                                >
                                    {t("ourMission")}
                                </Text>
                            </div>
                            <Text
                                size="base"
                                md="lg"
                                className="text-white/80 leading-relaxed"
                            >
                                {t("missionStatement")}
                            </Text>
                        </div>

                        <div className="/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye
                                    size={32}
                                    className="md:w-10 md:h-10 text-white"
                                />
                                <Text
                                    size="2xl"
                                    md="3xl"
                                    className="font-semibold text-white"
                                >
                                    {t("ourVision")}
                                </Text>
                            </div>
                            <Text
                                size="base"
                                md="lg"
                                className="text-white/80 leading-relaxed"
                            >
                                {t("visionStatement")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-accent/5"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <Text
                            size="4xl"
                            md="5xl"
                            align="center"
                            lg="6xl"
                            className="font-bold mb-4"
                        >
                            {t("ourExpertise")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            align="center"
                            lg="2xl"
                            color="accent"
                            className="max-w-3xl mx-auto"
                        >
                            {t("expertiseDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="group  rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Building2
                                        size={36}
                                        className="md:w-12 md:h-12 text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("gypsumCeilings")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("gypsumCeilingsLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group  rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Layers
                                        size={36}
                                        className="md:w-12 md:h-12 text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("flooringSolutions")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("flooringSolutionsLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group  rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Grid3x3
                                        size={36}
                                        className="md:w-12 md:h-12 text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("wallTiling")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("wallTilingLong")}
                                </Text>
                            </div>
                        </div>

                        <div className="group  rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <Sparkles
                                        size={36}
                                        className="md:w-12 md:h-12 text-accent"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("interiorDecoration")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
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
                    "bg-accent w-full py-16 md:py-24 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <Text
                            size="4xl"
                            align="center"
                            md="5xl"
                            lg="6xl"
                            className="font-bold text-white mb-4"
                        >
                            {t("currentProjects")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            align="center"
                            lg="2xl"
                            className="text-white/90 max-w-3xl mx-auto"
                        >
                            {t("projectsDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {aboutProjects.map((project, index) => (
                            <div
                                key={index}
                                className="/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:/20 transition-all"
                            >
                                <div className="h-48 md:h-56 /20 relative"></div>
                                <div className="p-6">
                                    <Text
                                        size="xl"
                                        md="2xl"
                                        className="font-bold text-white mb-3"
                                    >
                                        {project.title}
                                    </Text>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-start gap-2">
                                            <MapPin
                                                size={16}
                                                className="text-white/80 mt-1 flex-shrink-0"
                                            />
                                            <div>
                                                <Text
                                                    size="sm"
                                                    className="text-white/90"
                                                >
                                                    {project.area}
                                                </Text>
                                                <Text
                                                    size="xs"
                                                    className="text-white/70"
                                                >
                                                    {project.region} •{" "}
                                                    {project.address}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>

                                    <Text
                                        size="sm"
                                        md="base"
                                        className="text-white/80"
                                    >
                                        {project.description}
                                    </Text>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Text size="base" md="lg" className="text-white/80">
                            {t("outsideRiyadh")}
                        </Text>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
                    <div>
                        <Text
                            size="4xl"
                            md="5xl"
                            lg="6xl"
                            align="center"
                            className="font-bold text-center mb-12"
                        >
                            {t("ourCoreValues")}
                        </Text>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                <Award
                                    size={48}
                                    className="md:w-14 md:h-14 text-accent mb-4"
                                    strokeWidth={1.5}
                                />
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("qualityFirst")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("qualityFirstDesc")}
                                </Text>
                            </div>

                            <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                <Handshake
                                    size={48}
                                    className="md:w-14 md:h-14 text-accent mb-4"
                                    strokeWidth={1.5}
                                />
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("integrity")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("integrityDesc")}
                                </Text>
                            </div>

                            <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1">
                                <Timer
                                    size={48}
                                    className="md:w-14 md:h-14 text-accent mb-4"
                                    strokeWidth={1.5}
                                />
                                <Text
                                    size="xl"
                                    md="2xl"
                                    className="font-semibold text-center mb-3"
                                >
                                    {t("punctuality")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    align="center"
                                    className="text-foreground/70"
                                >
                                    {t("punctualityDesc")}
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Text
                            size="4xl"
                            align="center"
                            md="5xl"
                            lg="6xl"
                            className="font-bold text-center mb-4"
                        >
                            {t("ourWorkforce")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            lg="2xl"
                            align="center"
                            color="accent"
                            className="mb-8"
                        >
                            {t("workforceDescription")}
                        </Text>
                        <div className="max-w-4xl mx-auto">
                            <Text
                                size="base"
                                md="lg"
                                align="center"
                                className="leading-relaxed"
                            >
                                {t("workforceText")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
