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
                className="w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-32 md:py-24 gap-6 md:gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text
                    size="4xl"
                    md="5xl"
                    lg="6xl"
                    className="text-center font-bold"
                >
                    {t("tileTailor")}
                </Text>
                <Text
                    size="xl"
                    md="2xl"
                    align="center"
                    lg="3xl"
                    color="accent"
                    className="text-center"
                >
                    {t("yearsOfExcellence")}
                </Text>
                <div className="w-full max-w-3xl mx-auto px-4">
                    <Text
                        size="base"
                        md="lg"
                        lg="xl"
                        align="center"
                        className="leading-relaxed"
                    >
                        {t("premiumDescription")}
                    </Text>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
                    <Link href="/works" className="w-full sm:w-auto">
                        <Button
                            accent={true}
                            className="w-full sm:w-auto px-8 py-3"
                        >
                            {t("viewProjects")}
                        </Button>
                    </Link>
                    <Link href="/services" className="w-full sm:w-auto">
                        <Button
                            accent={false}
                            className="w-full sm:w-auto px-8 py-3"
                        >
                            {t("services")}
                        </Button>
                    </Link>
                </div>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full py-12 md:py-16 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                    <div className="flex flex-col gap-2 items-center justify-center p-4/5 rounded-xl hover/10 transition-all">
                        <MedalIcon
                            size={40}
                            className="md:w-12 md:h-12 text-white"
                        />
                        <Text
                            size="2xl"
                            md="3xl"
                            className="font-bold text-white"
                        >
                            11
                        </Text>
                        <Text
                            size="sm"
                            md="base"
                            className="text-white/80 text-center"
                        >
                            {t("yearsOfExperience")}
                        </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center p-4/5 rounded-xl hover/10 transition-all">
                        <Users2Icon
                            size={40}
                            className="md:w-12 md:h-12 text-white"
                        />
                        <Text
                            size="2xl"
                            md="3xl"
                            className="font-bold text-white"
                        >
                            20+
                        </Text>
                        <Text
                            size="sm"
                            md="base"
                            className="text-white/80 text-center"
                        >
                            {t("skilledWorkers")}
                        </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center p-4/5 rounded-xl hover/10 transition-all">
                        <CircleCheck
                            size={40}
                            className="md:w-12 md:h-12 text-white"
                        />
                        <Text
                            size="2xl"
                            md="3xl"
                            className="font-bold text-white"
                        >
                            150+
                        </Text>
                        <Text
                            size="sm"
                            md="base"
                            className="text-white/80 text-center"
                        >
                            {t("completedProjects")}
                        </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center p-4/5 rounded-xl hover/10 transition-all">
                        <MapPin
                            size={40}
                            className="md:w-12 md:h-12 text-white"
                        />
                        <Text
                            size="2xl"
                            md="3xl"
                            className="font-bold text-white"
                        >
                            3
                        </Text>
                        <Text
                            size="sm"
                            md="base"
                            className="text-white/80 text-center"
                        >
                            {t("ongoingProjects")}
                        </Text>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <Text
                            size="4xl"
                            md="5xl"
                            lg="6xl"
                            align="center"
                            className="font-bold mb-4"
                        >
                            {t("ourServices")}
                        </Text>
                        <Text
                            size="xl"
                            md="2xl"
                            lg="3xl"
                            color="accent"
                            align="center"
                            className="max-w-3xl mx-auto"
                        >
                            {t("servicesDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <Building2
                                size={56}
                                className="md:w-16 md:h-16 text-accent mb-4 group-hover:scale-110 transition-transform"
                                strokeWidth={1.5}
                            />
                            <Text
                                color="accent"
                                size="xl"
                                md="2xl"
                                className="font-semibold mb-3 text-center"
                            >
                                {t("gypsumCeilings")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-foreground/70"
                            >
                                {t("gypsumDesc")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <Layers
                                size={56}
                                className="md:w-16 md:h-16 text-accent mb-4 group-hover:scale-110 transition-transform"
                                strokeWidth={1.5}
                            />
                            <Text
                                color="accent"
                                size="xl"
                                md="2xl"
                                className="font-semibold mb-3 text-center"
                            >
                                {t("flooringSolutions")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-foreground/70"
                            >
                                {t("flooringDesc")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <Grid3x3
                                size={56}
                                className="md:w-16 md:h-16 text-accent mb-4 group-hover:scale-110 transition-transform"
                                strokeWidth={1.5}
                            />
                            <Text
                                color="accent"
                                size="xl"
                                md="2xl"
                                className="font-semibold mb-3 text-center"
                            >
                                {t("wallTiling")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-foreground/70"
                            >
                                {t("wallTilingDesc")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <Sparkles
                                size={56}
                                className="md:w-16 md:h-16 text-accent mb-4 group-hover:scale-110 transition-transform"
                                strokeWidth={1.5}
                            />
                            <Text
                                color="accent"
                                size="xl"
                                md="2xl"
                                className="font-semibold mb-3 text-center"
                            >
                                {t("interiorDecoration")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-foreground/70"
                            >
                                {t("interiorDesc")}
                            </Text>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/services">
                            <Button
                                accent={true}
                                className="px-8 py-3 text-base md:text-lg"
                            >
                                {t("viewAllServices")}
                            </Button>
                        </Link>
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
                    <Text
                        size="4xl"
                        md="5xl"
                        align="center"
                        lg="6xl"
                        className="font-bold text-white text-center mb-12 md:mb-16"
                    >
                        {t("whyChooseUs")}
                    </Text>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center p-6/10 rounded-2xl backdrop-blur-sm hover/20 transition-all">
                            <Star
                                size={56}
                                className="md:w-16 md:h-16 text-white mb-4"
                                strokeWidth={1.5}
                            />
                            <Text
                                size="xl"
                                md="2xl"
                                className="font-semibold text-white mb-3 text-center"
                            >
                                {t("experience")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-white/80"
                            >
                                {t("experienceDesc")}
                            </Text>
                        </div>

                        <div className="flex flex-col items-center p-6/10 rounded-2xl backdrop-blur-sm hover/20 transition-all">
                            <Users
                                size={56}
                                className="md:w-16 md:h-16 text-white mb-4"
                                strokeWidth={1.5}
                            />
                            <Text
                                size="xl"
                                md="2xl"
                                className="font-semibold text-white mb-3 text-center"
                            >
                                {t("skilledTeam")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-white/80"
                            >
                                {t("skilledTeamDesc")}
                            </Text>
                        </div>

                        <div className="flex flex-col items-center p-6/10 rounded-2xl backdrop-blur-sm hover/20 transition-all">
                            <RefreshCw
                                size={56}
                                className="md:w-16 md:h-16 text-white mb-4"
                                strokeWidth={1.5}
                            />
                            <Text
                                size="xl"
                                md="2xl"
                                className="font-semibold text-white mb-3 text-center"
                            >
                                {t("flexibleWorkforce")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-white/80"
                            >
                                {t("flexibleDesc")}
                            </Text>
                        </div>

                        <div className="flex flex-col items-center p-6/10 rounded-2xl backdrop-blur-sm hover/20 transition-all">
                            <ShieldCheck
                                size={56}
                                className="md:w-16 md:h-16 text-white mb-4"
                                strokeWidth={1.5}
                            />
                            <Text
                                size="xl"
                                md="2xl"
                                className="font-semibold text-white mb-3 text-center"
                            >
                                {t("qualityAssurance")}
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                align="center"
                                className="text-white/80"
                            >
                                {t("qualityDesc")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <Text
                        size="3xl"
                        md="4xl"
                        align="center"
                        lg="6xl"
                        className="font-bold mb-4"
                    >
                        {t("readyToStart")}
                    </Text>
                    <Text
                        size="lg"
                        md="xl"
                        align="center"
                        lg="3xl"
                        color="accent"
                        className="mb-8 md:mb-10"
                    >
                        {t("ctaDescription")}
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/works" className="w-full sm:w-auto">
                            <Button
                                accent={true}
                                className="w-full sm:w-auto px-6 md:px-8 py-3"
                            >
                                {t("viewProjects")}
                            </Button>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto">
                            <Button
                                accent={true}
                                className="w-full sm:w-auto px-6 md:px-8 py-3"
                            >
                                {t("services")}
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                accent={false}
                                className="w-full sm:w-auto px-6 md:px-8 py-3"
                            >
                                {t("contactUs")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
