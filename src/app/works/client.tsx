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
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">{t("pastProjects")}</Text>
                <Text
                    size="3xl"
                    color="accent"
                    className="w-4xl"
                    align="center"
                >
                    {t("pastProjectsDescription")}
                </Text>
            </section>

            <section
                className={clsx(
                    "bg-accent w-full py-16 px-4 md:px-8 lg:px-80",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-background/20 transition-all duration-300">
                        <Text size="4xl" className="font-bold text-accent">
                            11
                        </Text>
                        <Text size="lg" className="text-center mt-2">
                            {t("yearsOfExperience")}
                        </Text>
                    </div>
                    <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-background/20 transition-all duration-300">
                        <Text size="4xl" className="font-bold text-accent">
                            20+
                        </Text>
                        <Text size="lg" className="text-center mt-2">
                            {t("skilledWorkers")}
                        </Text>
                    </div>
                    <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-background/20 transition-all duration-300">
                        <Text size="4xl" className="font-bold text-accent">
                            150+
                        </Text>
                        <Text size="lg" className="text-center mt-2">
                            {t("completedProjects")}
                        </Text>
                    </div>
                    <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-background/20 transition-all duration-300">
                        <Text size="4xl" className="font-bold text-accent">
                            3
                        </Text>
                        <Text size="lg" className="text-center mt-2">
                            {t("ongoingProjects")}
                        </Text>
                    </div>
                </div>
            </section>

            <section
                className={clsx(
                    "w-full py-24 px-4 md:px-8",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <div className="w-24 h-1 bg-accent-foreground/30 rounded-full mb-6"></div>
                        <Text size="6xl" className="mb-4">
                            {t("currentProjects")}
                        </Text>
                        <Text
                            size="2xl"
                            align="center"
                            className="max-w-3xl text-accent-foreground/80"
                        >
                            {t("projectsDescription")}
                        </Text>
                    </div>
                    {aboutProjects[0] && (
                        <div className="mb-16 bg-background/5 rounded-3xl overflow-hidden border border-accent/20">
                            <div className="grid lg:grid-cols-2">
                                <div className="h-96 bg-accent/10 relative overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.548123456789!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm z-10">
                                        <MapPin
                                            size={14}
                                            className="inline mr-2 text-accent"
                                        />
                                        <span className="text-accent-foreground">
                                            {aboutProjects[0].area}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-background flex flex-col justify-center px-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <MapPin
                                            size={20}
                                            className="text-accent"
                                        />
                                        <Text size="lg" className="text-accent">
                                            {aboutProjects[0].area}
                                        </Text>
                                    </div>
                                    <Text size="4xl" className="mb-4">
                                        {aboutProjects[0].title}
                                    </Text>
                                    <Text
                                        size="lg"
                                        className="mb-6 text-accent-foreground/80"
                                    >
                                        {aboutProjects[0].description}
                                    </Text>
                                    <div className="flex items-center gap-2 text-sm text-accent-foreground/60">
                                        <span>{aboutProjects[0].region}</span>
                                        <span>•</span>
                                        <span>{aboutProjects[0].address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-8">
                        {aboutProjects.slice(1).map((project, index) => (
                            <div
                                key={index}
                                className="group bg-background/5 rounded-2xl overflow-hidden hover:bg-background/10 transition-all duration-500 border border-accent/20"
                            >
                                <div className="h-64 bg-accent/10 relative overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.548123456789!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs z-10">
                                        <MapPin
                                            size={12}
                                            className="inline mr-1 text-accent"
                                        />
                                        <span className="text-accent-foreground">
                                            {project.area}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <Text
                                            size="xl"
                                            className="font-semibold"
                                        >
                                            {project.title}
                                        </Text>
                                        <div className="flex items-center gap-1 text-accent">
                                            <MapPin size={14} />
                                            <Text size="sm">
                                                {project.area}
                                            </Text>
                                        </div>
                                    </div>
                                    <Text
                                        size="sm"
                                        className="mb-4 text-accent-foreground/70 line-clamp-2"
                                    >
                                        {project.description}
                                    </Text>
                                    <div className="flex items-center gap-2 text-xs text-accent-foreground/50">
                                        <span>{project.region}</span>
                                        <span>•</span>
                                        <span>{project.address}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mt-16 mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <Text size="6xl" className="mb-4">
                            {t("currentProjects")}
                        </Text>
                        <Text size="2xl" className="max-w-3xl">
                            {t("projectsDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                        {currentProjects.map((project, index) => {
                            const rowSpan =
                                project.size === "large"
                                    ? "lg:row-span-2"
                                    : project.size === "medium"
                                      ? "lg:row-span-1"
                                      : "lg:row-span-1";

                            const colSpan =
                                project.size === "large"
                                    ? "lg:col-span-2"
                                    : project.size === "medium"
                                      ? "lg:col-span-1"
                                      : "lg:col-span-1";

                            return (
                                <div
                                    key={project.id}
                                    className={clsx(
                                        "group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-500",
                                        rowSpan,
                                        colSpan,
                                    )}
                                >
                                    <div className="relative w-full h-full min-h-[250px] bg-gradient-to-br from-accent/20 to-accent/5">
                                        <video
                                            src={project.src}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loop
                                            muted
                                            autoPlay
                                            onMouseEnter={(e) =>
                                                e.currentTarget.play()
                                            }
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 group-hover:opacity-100 opacity-0 to-transparent transition-opacity duration-250">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-semibold px-3 py-1 bg-accent rounded-full">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-xs px-3 py-1 bg-white/20 rounded-full">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <Text
                                                    size="2xl"
                                                    className="text-white mb-2"
                                                >
                                                    {project.title}
                                                </Text>
                                                <Text
                                                    size="sm"
                                                    className="text-white/80 mb-3 line-clamp-2"
                                                >
                                                    {project.description}
                                                </Text>
                                                <div className="flex items-center gap-4 text-sm text-white/60">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {project.area}
                                                    </span>
                                                    <span>•</span>
                                                    <span>
                                                        {project.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 group-hover:opacity-0 opacity-100 to-transparent">
                                            {/* <Text
                                                size="xl"
                                                className="text-white font-semibold mb-1"
                                            >
                                                {project.title}
                                            </Text> */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-white/80 px-2 py-1 bg-accent/80 rounded-full">
                                                    {project.category}
                                                </span>
                                                {/* <span className="text-xs text-white/60">
                                                    {project.area}
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-background/10 backdrop-blur-sm px-8 py-4 rounded-full">
                        <Text className="text-accent-foreground/80">
                            {t("outsideRiyadh")}
                        </Text>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-24 px-4 md:px-8 bg-accent"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <Text size="6xl" className="mb-4">
                            {t("completedProjects")}
                        </Text>
                        <Text size="2xl" className="max-w-3xl">
                            {t("showcaseDescription")}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                        {completedProjects.map((project, index) => {
                            const rowSpan =
                                project.size === "large"
                                    ? "lg:row-span-2"
                                    : project.size === "medium"
                                      ? "lg:row-span-1"
                                      : "lg:row-span-1";

                            const colSpan =
                                project.size === "large"
                                    ? "lg:col-span-2"
                                    : project.size === "medium"
                                      ? "lg:col-span-1"
                                      : "lg:col-span-1";

                            return (
                                <div
                                    key={project.id}
                                    className={clsx(
                                        "group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-500",
                                        rowSpan,
                                        colSpan,
                                    )}
                                >
                                    <div className="relative w-full h-full min-h-[250px] bg-gradient-to-br from-accent/20 to-accent/5">
                                        <video
                                            src={project.src}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loop
                                            muted
                                            autoPlay
                                            onMouseEnter={(e) =>
                                                e.currentTarget.play()
                                            }
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 group-hover:opacity-100 opacity-0 to-transparent transition-opacity duration-250">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-semibold px-3 py-1 bg-accent rounded-full">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-xs px-3 py-1 bg-white/20 rounded-full">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <Text
                                                    size="2xl"
                                                    className="text-white mb-2"
                                                >
                                                    {project.title}
                                                </Text>
                                                <Text
                                                    size="sm"
                                                    className="text-white/80 mb-3 line-clamp-2"
                                                >
                                                    {project.description}
                                                </Text>
                                                <div className="flex items-center gap-4 text-sm text-white/60">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {project.area}
                                                    </span>
                                                    <span>•</span>
                                                    <span>
                                                        {project.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 group-hover:opacity-0 opacity-100 to-transparent">
                                            {/* <Text
                                                size="xl"
                                                className="text-white font-semibold mb-1"
                                            >
                                                {project.title}
                                            </Text> */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-white/80 px-2 py-1 bg-accent/80 rounded-full">
                                                    {project.category}
                                                </span>
                                                {/* <span className="text-xs text-white/60">
                                                    {project.area}
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                className="w-full relative overflow-hidden py-24"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-6 gap-4 h-full">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-full w-px mx-auto bg-accent/20"
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="space-y-8 col-span-2">
                            <div className="space-y-4">
                                <Text
                                    size="6xl"
                                    className="relative inline-block"
                                >
                                    {t("readyToStart")}
                                </Text>
                            </div>

                            <Text size="xl" className="leading-relaxed">
                                {t("ctaDescription")}
                            </Text>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <Text size="lg" className="">
                                        {t("freeConsultation")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <Text size="lg" className="">
                                        {t("expertTeam")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <Text size="lg" className="">
                                        {t("qualityGuarantee")}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <Text size="lg" className="">
                                        {t("timelyDelivery")}
                                    </Text>
                                </div>
                            </div>

                            <div className="flex flex-row gap-4 pt-4 flex-wrap">
                                <Link href="/services">
                                    <Button accent={true}>
                                        {t("services")}
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button accent={false}>
                                        {t("contactUs")}
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold">
                                        150+
                                    </span>
                                    <span className="text-sm">
                                        {t("projects")}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold">
                                        11+
                                    </span>
                                    <span className="text-sm">
                                        {t("years")}
                                    </span>
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
                                        <div className="w-32 h-32 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <Building2
                                                size={64}
                                                className="text-accent"
                                                strokeWidth={1}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent/60 rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
