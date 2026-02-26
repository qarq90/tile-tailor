"use client";
import { Text } from "@/components/ui/text";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { CircleCheck, MapPin, MedalIcon, Users2Icon } from "lucide-react";
import clsx from "clsx";
import { services } from "@/data/data-services";

export default function Client() {
    const { t, language } = useTranslation();

    return (
        <>
            <section
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl" className="font-bold text-center">
                    {t("whatWeOffer")}
                </Text>
                <Text
                    size="3xl"
                    color="accent"
                    align="center"
                    className="max-w-4xl mx-auto"
                >
                    {t("servicesDescription")}
                </Text>
            </section>

            {services.map((service, index) => (
                <section
                    key={service.id}
                    className={`w-full py-16 lg:py-24 ${
                        index % 2 === 0
                            ? "bg-background text-foreground"
                            : "bg-accent text-background"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                >
                    <div className="container mx-auto px-4 lg:px-24">
                        <div
                            className={`flex flex-col ${
                                index % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                            } gap-12 lg:gap-16 items-center`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative w-full h-[425px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={service.image}
                                        alt="img"
                                        fill
                                        className="object-cover transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`p-3 rounded-xl ${
                                            index % 2 === 0
                                                ? "bg-accent/10"
                                                : "bg-background/20"
                                        }`}
                                    >
                                        <service.icon
                                            size={32}
                                            className={
                                                index % 2 === 0
                                                    ? "text-accent"
                                                    : "text-background"
                                            }
                                        />
                                    </div>
                                    <Text
                                        size="4xl"
                                        className={`font-bold ${
                                            index % 2 === 0
                                                ? "text-foreground"
                                                : "text-background"
                                        }`}
                                    >
                                        {t(service.titleKey as any)}
                                    </Text>
                                </div>

                                <Text
                                    size="xl"
                                    className={`leading-relaxed ${
                                        index % 2 === 0
                                            ? "text-foreground/80"
                                            : "text-background/80"
                                    }`}
                                >
                                    {t(service.descriptionKey as any)}
                                </Text>

                                <div className="grid grid-cols-2 gap-4 auto-rows-fr">
                                    {service.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 bg-black/10 rounded-lg p-3 h-fit"
                                        >
                                            <span
                                                className={`text-base font-medium ${
                                                    index % 2 === 0
                                                        ? "text-foreground"
                                                        : "text-background"
                                                }`}
                                            >
                                                {t(feature.key as any)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section
                className={clsx(
                    "w-full justify-center items-center py-12 px-4 md:px-8 lg:px-80 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MedalIcon size={48} />
                    <Text size="xl">11+ {t("yearsOfExperience")}</Text>
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
        </>
    );
}
