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
                className="w-full min-h-[30vh] md:min-h-[40vh] flex flex-col justify-center items-center px-4 pt-24 md:pt-0 md:py-24 gap-4 md:gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text
                    size="4xl"
                    md="5xl"
                    lg="6xl"
                    className="font-bold text-center"
                >
                    {t("whatWeOffer")}
                </Text>
                <Text
                    size="lg"
                    md="xl"
                    lg="3xl"
                    color="accent"
                    align="center"
                    className="max-w-3xl mx-auto px-4"
                >
                    {t("servicesDescription")}
                </Text>
            </section>

            {services.map((service, index) => (
                <section
                    key={service.id}
                    className={`w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 ${
                        index % 2 === 0
                            ? "bg-background text-foreground"
                            : "bg-accent text-background"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                >
                    <div className="container mx-auto max-w-7xl">
                        <div
                            className={`flex flex-col ${
                                index % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                            } gap-8 md:gap-12 lg:gap-16 items-center`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[425px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                                    <Image
                                        src={service.image}
                                        alt={t(service.titleKey as any)}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div
                                        className={`p-2 md:p-3 rounded-xl ${
                                            index % 2 === 0
                                                ? "bg-accent/10"
                                                : "bg-background/20"
                                        }`}
                                    >
                                        <service.icon
                                            size={24}
                                            className={`md:w-8 md:h-8 ${
                                                index % 2 === 0
                                                    ? "text-accent"
                                                    : "text-background"
                                            }`}
                                        />
                                    </div>
                                    <Text
                                        size="2xl"
                                        md="3xl"
                                        lg="4xl"
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
                                    size="base"
                                    md="lg"
                                    lg="xl"
                                    className={`leading-relaxed ${
                                        index % 2 === 0
                                            ? "text-foreground/80"
                                            : "text-background/80"
                                    }`}
                                >
                                    {t(service.descriptionKey as any)}
                                </Text>

                                <div className="grid grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4">
                                    {service.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-1 md:gap-2 bg-black/10 rounded-lg p-2 md:p-3 h-fit"
                                        >
                                            <div
                                                className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${
                                                    index % 2 === 0
                                                        ? "bg-accent"
                                                        : "bg-background"
                                                }`}
                                            />
                                            <span
                                                className={`text-xs sm:text-sm md:text-base font-medium ${
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
                    "w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16",
                    language === "ar" && "font-arabic",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        <div className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-accent/5 rounded-xl md:rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                            <div className="relative">
                                <MedalIcon
                                    size={36}
                                    className="md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                            <Text
                                size="2xl"
                                md="3xl"
                                lg="4xl"
                                className="font-bold text-accent"
                            >
                                11+
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                lg="lg"
                                className="text-foreground/80 text-center mt-1 md:mt-2"
                            >
                                {t("yearsOfExperience")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-accent/5 rounded-xl md:rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                            <Users2Icon
                                size={36}
                                className="md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                            />
                            <Text
                                size="2xl"
                                md="3xl"
                                lg="4xl"
                                className="font-bold text-accent"
                            >
                                20+
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                lg="lg"
                                className="text-foreground/80 text-center mt-1 md:mt-2"
                            >
                                {t("skilledWorkers")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-accent/5 rounded-xl md:rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                            <CircleCheck
                                size={36}
                                className="md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                            />
                            <Text
                                size="2xl"
                                md="3xl"
                                lg="4xl"
                                className="font-bold text-accent"
                            >
                                150+
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                lg="lg"
                                className="text-foreground/80 text-center mt-1 md:mt-2"
                            >
                                {t("completedProjects")}
                            </Text>
                        </div>

                        <div className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-accent/5 rounded-xl md:rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                            <div className="relative">
                                <MapPin
                                    size={36}
                                    className="md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <Text
                                size="2xl"
                                md="3xl"
                                lg="4xl"
                                className="font-bold text-accent"
                            >
                                3
                            </Text>
                            <Text
                                size="sm"
                                md="base"
                                lg="lg"
                                className="text-foreground/80 text-center mt-1 md:mt-2"
                            >
                                {t("ongoingProjects")}
                            </Text>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
