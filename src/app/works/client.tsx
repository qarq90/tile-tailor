"use client";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { aboutProjects } from "@/data/data-about";
import { completedProjects, currentProjects } from "@/data/data-works";
import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import {
    MedalIcon,
    Users2Icon,
    CircleCheck,
    MapPin,
    Building2,
} from "lucide-react";
import Link from "next/link";

export default function Client() {
    const { t, language } = useTranslation();

    return (
        <>
            <section
                className="w-full min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center items-center px-4 py-16 md:py-24 gap-6 md:gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text
                    size="4xl"
                    md="5xl"
                    lg="6xl"
                    className="font-bold text-center"
                >
                    {t("pastProjects")}
                </Text>
                <Text
                    size="lg"
                    md="xl"
                    lg="3xl"
                    color="accent"
                    align="center"
                    className="max-w-3xl mx-auto px-4"
                >
                    {t("pastProjectsDescription")}
                </Text>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full py-16 md:py-20 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all">
                            <Text
                                size="3xl"
                                md="4xl"
                                className="font-bold text-white"
                            >
                                11
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                className="text-center mt-1 md:mt-2 text-white/90"
                            >
                                {t("yearsOfExperience")}
                            </Text>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all">
                            <Text
                                size="3xl"
                                md="4xl"
                                className="font-bold text-white"
                            >
                                20+
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                className="text-center mt-1 md:mt-2 text-white/90"
                            >
                                {t("skilledWorkers")}
                            </Text>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all">
                            <Text
                                size="3xl"
                                md="4xl"
                                className="font-bold text-white"
                            >
                                150+
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                className="text-center mt-1 md:mt-2 text-white/90"
                            >
                                {t("completedProjects")}
                            </Text>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all">
                            <Text
                                size="3xl"
                                md="4xl"
                                className="font-bold text-white"
                            >
                                3
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                className="text-center mt-1 md:mt-2 text-white/90"
                            >
                                {t("ongoingProjects")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={clsx(
                    "w-full py-16 md:py-24 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-16 md:w-24 h-1 bg-accent/30 rounded-full mb-4 md:mb-6"></div>
                        <Text
                            size="4xl"
                            md="5xl"
                            lg="6xl"
                            className="font-bold text-center mb-4"
                        >
                            {t("currentProjects")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            lg="2xl"
                            align="center"
                            className="max-w-3xl text-foreground/80"
                        >
                            {t("projectsDescription")}
                        </Text>
                    </div>

                    {aboutProjects[0] && (
                        <div className="mb-12 md:mb-16 bg-gradient-to-br from-background to-accent/5 rounded-2xl md:rounded-3xl overflow-hidden border border-accent/20">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-[450px] bg-accent/10 relative overflow-hidden order-1 lg:order-1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.548123456789!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm z-10 shadow-lg">
                                        <MapPin
                                            size={12}
                                            className="inline mr-1 text-accent"
                                        />
                                        <span className="text-foreground font-medium">
                                            {aboutProjects[0].area}
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-2">
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <MapPin
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="text-accent font-medium"
                                        >
                                            {aboutProjects[0].area}
                                        </Text>
                                    </div>
                                    <Text
                                        size="2xl"
                                        md="3xl"
                                        lg="4xl"
                                        className="font-bold mb-3 md:mb-4"
                                    >
                                        {aboutProjects[0].title}
                                    </Text>
                                    <Text
                                        size="base"
                                        md="lg"
                                        className="mb-4 md:mb-6 text-foreground/80 leading-relaxed"
                                    >
                                        {aboutProjects[0].description}
                                    </Text>
                                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-foreground/60">
                                        <span className="bg-accent/10 px-2 py-1 rounded-full">
                                            {aboutProjects[0].region}
                                        </span>
                                        <span className="text-foreground/40">
                                            •
                                        </span>
                                        <span className="bg-accent/10 px-2 py-1 rounded-full">
                                            {aboutProjects[0].address}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {aboutProjects.slice(1).map((project, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-accent/20"
                            >
                                <div className="h-48 md:h-56 lg:h-64 bg-accent/10 relative overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.548123456789!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs z-10">
                                        <MapPin
                                            size={10}
                                            className="inline mr-1 text-accent"
                                        />
                                        <span className="text-foreground">
                                            {project.area}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 md:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <Text
                                            size="lg"
                                            md="xl"
                                            className="font-semibold"
                                        >
                                            {project.title}
                                        </Text>
                                        <div className="flex items-center gap-1 text-accent">
                                            <MapPin
                                                size={12}
                                                className="md:w-4 md:h-4"
                                            />
                                            <Text size="xs" md="sm">
                                                {project.area}
                                            </Text>
                                        </div>
                                    </div>
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="mb-3 md:mb-4 text-foreground/70 line-clamp-2"
                                    >
                                        {project.description}
                                    </Text>
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/50">
                                        <span className="bg-accent/10 px-2 py-0.5 rounded-full">
                                            {project.region}
                                        </span>
                                        <span className="text-foreground/30">
                                            •
                                        </span>
                                        <span className="bg-accent/10 px-2 py-0.5 rounded-full">
                                            {project.address}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-accent/5 to-transparent"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
                        <Text
                            size="4xl"
                            md="5xl"
                            lg="6xl"
                            className="font-bold mb-4"
                        >
                            {t("currentProjects")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            lg="2xl"
                            className="max-w-3xl text-foreground/80"
                        >
                            {t("projectsDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
                        {currentProjects.map((project) => {
                            const rowSpan =
                                project.size === "large"
                                    ? "lg:row-span-2"
                                    : "lg:row-span-1";
                            const colSpan =
                                project.size === "large"
                                    ? "lg:col-span-2"
                                    : "lg:col-span-1";

                            return (
                                <div
                                    key={project.id}
                                    className={clsx(
                                        "group relative overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-500",
                                        rowSpan,
                                        colSpan,
                                    )}
                                >
                                    <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] bg-gradient-to-br from-accent/20 to-accent/5">
                                        <video
                                            src={project.src}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loop
                                            muted
                                            autoPlay
                                            playsInline
                                            onMouseEnter={(e) =>
                                                e.currentTarget.play()
                                            }
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-xs md:text-sm text-white/90 px-2 py-1 bg-accent/90 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 md:mt-16 text-center">
                        <div className="inline-block bg-accent/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full">
                            <Text
                                size="sm"
                                md="base"
                                className="text-foreground/80"
                            >
                                {t("outsideRiyadh")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-accent"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
                        <Text
                            size="4xl"
                            md="5xl"
                            lg="6xl"
                            className="font-bold text-white mb-4"
                        >
                            {t("completedProjects")}
                        </Text>
                        <Text
                            size="lg"
                            md="xl"
                            lg="2xl"
                            className="max-w-3xl text-white/90"
                        >
                            {t("showcaseDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
                        {completedProjects.map((project) => {
                            const rowSpan =
                                project.size === "large"
                                    ? "lg:row-span-2"
                                    : "lg:row-span-1";
                            const colSpan =
                                project.size === "large"
                                    ? "lg:col-span-2"
                                    : "lg:col-span-1";

                            return (
                                <div
                                    key={project.id}
                                    className={clsx(
                                        "group relative overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-500",
                                        rowSpan,
                                        colSpan,
                                    )}
                                >
                                    <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] bg-gradient-to-br from-accent/20 to-accent/5">
                                        <video
                                            src={project.src}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loop
                                            muted
                                            autoPlay
                                            playsInline
                                            onMouseEnter={(e) =>
                                                e.currentTarget.play()
                                            }
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-xs md:text-sm text-white/90 px-2 py-1 bg-accent/90 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                className="w-full relative overflow-hidden py-16 md:py-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 h-full">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-full w-px mx-auto bg-accent/20"
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="lg:col-span-2 space-y-6 md:space-y-8">
                            <div className="space-y-3 md:space-y-4">
                                <Text
                                    size="4xl"
                                    md="5xl"
                                    lg="6xl"
                                    className="font-bold"
                                >
                                    {t("readyToStart")}
                                </Text>
                            </div>

                            <Text
                                size="base"
                                md="lg"
                                lg="xl"
                                className="leading-relaxed max-w-2xl"
                            >
                                {t("ctaDescription")}
                            </Text>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent"></div>
                                    <Text size="sm" md="base" lg="lg">
                                        {t("freeConsultation")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent"></div>
                                    <Text size="sm" md="base" lg="lg">
                                        {t("expertTeam")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent"></div>
                                    <Text size="sm" md="base" lg="lg">
                                        {t("qualityGuarantee")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent"></div>
                                    <Text size="sm" md="base" lg="lg">
                                        {t("timelyDelivery")}
                                    </Text>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        accent={true}
                                        className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3"
                                    >
                                        {t("services")}
                                    </Button>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        accent={false}
                                        className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3"
                                    >
                                        {t("contactUs")}
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex flex-row gap-4 md:gap-8 pt-4">
                                <div className="flex items-center gap-2">
                                    <Text
                                        size="xl"
                                        md="2xl"
                                        className="font-bold"
                                    >
                                        150+
                                    </Text>
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="text-foreground/70"
                                    >
                                        {t("projects")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Text
                                        size="xl"
                                        md="2xl"
                                        className="font-bold"
                                    >
                                        11+
                                    </Text>
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="text-foreground/70"
                                    >
                                        {t("years")}
                                    </Text>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-pulse"></div>
                                <div className="absolute inset-4 border-2 border-accent/30 rounded-full"></div>
                                <div className="absolute inset-8 border-2 border-accent/40 rounded-full"></div>
                                <div className="absolute inset-12 border-2 border-accent/50 rounded-full"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <Building2
                                                size={48}
                                                className="md:w-16 md:h-16 text-accent"
                                                strokeWidth={1}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full animate-bounce"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-accent/60 rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-accent/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
