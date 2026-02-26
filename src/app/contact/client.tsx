"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useTranslation } from "@/hooks/useTranslation";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    User,
    MessageCircle,
    Calendar,
    ChevronDown,
} from "lucide-react";
import Link from "next/link";
import {
    FaInstagram,
    FaPhone,
    FaSnapchatGhost,
    FaTiktok,
} from "react-icons/fa";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";

interface FormData {
    fullName: string;
    phone: string;
    projectType: string;
    location: string;
    message: string;
}

export default function Client() {
    const { t, language } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        projectType: "",
        location: "",
        message: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            projectType: e.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.fullName || !formData.message) {
            alert("Please fill in all required fields");
            return;
        }

        const getProjectTypeText = (type: string): string => {
            const typeMap: Record<string, string> = {
                residential: "Residential",
                commercial: "Commercial",
                industrial: "Industrial",
            };
            return typeMap[type] || type;
        };

        const message = `*New Project Inquiry*%0A%0A
*Full Name:* ${formData.fullName}%0A
*Phone:* ${formData.phone || "Not provided"}%0A
*Project Type:* ${formData.projectType ? getProjectTypeText(formData.projectType) : "Not specified"}%0A
*Location:* ${formData.location || "Not provided"}%0A
*Message:* ${formData.message}`;

        const whatsappNumber = "+966551632023";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <section
                className="w-full min-h-[30vh] md:min-h-[40vh] flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:py-24 gap-4 md:gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text
                    size="4xl"
                    md="5xl"
                    lg="6xl"
                    className="font-bold text-center"
                >
                    {t("contactUs")}
                </Text>
                <Text
                    size="base"
                    md="lg"
                    lg="3xl"
                    color="accent"
                    align="center"
                    className="max-w-3xl mx-auto px-4"
                >
                    {t("contactDescription")}
                </Text>
            </section>

            <section
                className="hidden lg:block bg-accent w-full py-6 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-row flex-wrap justify-center gap-6 xl:gap-8 text-white">
                        <div className="flex items-center gap-2">
                            <Phone size={18} />
                            <Text size="sm" className="text-white">
                                Call: +966 50 123 4567
                            </Text>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={18} />
                            <Text size="sm" className="text-white">
                                WhatsApp: +966 55 163 2023
                            </Text>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={18} />
                            <Text size="sm" className="text-white">
                                WhatsApp: +966 57 807 2808
                            </Text>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={18} />
                            <Text size="sm" className="text-white">
                                Email: sitara5858@gmail.com
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 lg:hidden">
                        <div className="bg-accent/5 rounded-xl p-4 flex items-center gap-3">
                            <Phone size={20} className="text-accent" />
                            <div>
                                <Text size="xs" className="text-foreground/60">
                                    Call Us
                                </Text>
                                <Text size="sm" className="font-medium">
                                    +966 50 123 4567
                                </Text>
                            </div>
                        </div>
                        <div className="bg-accent/5 rounded-xl p-4 flex items-center gap-3">
                            <MessageCircle size={20} className="text-accent" />
                            <div>
                                <Text size="xs" className="text-foreground/60">
                                    WhatsApp
                                </Text>
                                <Text size="sm" className="font-medium">
                                    +966 55 163 2023
                                </Text>
                            </div>
                        </div>
                        <div className="bg-accent/5 rounded-xl p-4 flex items-center gap-3">
                            <MessageCircle size={20} className="text-accent" />
                            <div>
                                <Text size="xs" className="text-foreground/60">
                                    WhatsApp
                                </Text>
                                <Text size="sm" className="font-medium">
                                    +966 57 807 2808
                                </Text>
                            </div>
                        </div>
                        <div className="bg-accent/5 rounded-xl p-4 flex items-center gap-3">
                            <Mail size={20} className="text-accent" />
                            <div>
                                <Text size="xs" className="text-foreground/60">
                                    Email
                                </Text>
                                <Text size="sm" className="font-medium">
                                    sitara5858@gmail.com
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-gradient-to-br from-background to-accent/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-accent/20">
                            <div className="mb-6 md:mb-8">
                                <Text
                                    size="2xl"
                                    md="3xl"
                                    className="font-bold mb-2"
                                >
                                    {t("sendUsMessage")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    className="text-foreground/70"
                                >
                                    {t("formDescription")}
                                </Text>
                            </div>

                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="space-y-1 md:space-y-2">
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="font-medium text-foreground/80"
                                    >
                                        {t("fullName")}{" "}
                                        <span className="text-accent">*</span>
                                    </Text>
                                    <div className="relative">
                                        <User
                                            size={16}
                                            className="md:w-[18px] md:h-[18px] absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder={t("namePlaceholder")}
                                            className="pl-10 md:pl-12 py-4 md:py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1 md:space-y-2">
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="font-medium text-foreground/80"
                                    >
                                        {t("phoneNumber")}{" "}
                                        <span className="text-accent">*</span>
                                    </Text>
                                    <div className="relative">
                                        <Phone
                                            size={16}
                                            className="md:w-[18px] md:h-[18px] absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder={t("phonePlaceholder")}
                                            type="tel"
                                            className="pl-10 md:pl-12 py-4 md:py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1 md:space-y-2">
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="font-medium text-foreground/80"
                                    >
                                        {t("projectType")}
                                    </Text>
                                    <div className="relative">
                                        <ChevronDown
                                            size={16}
                                            className="md:w-[18px] md:h-[18px] absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-accent/60 pointer-events-none"
                                        />
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleSelectChange}
                                            className="w-full p-3 md:p-4 bg-background/50 border border-accent/20 rounded-xl focus:border-accent outline-none transition-all duration-300 appearance-none text-sm md:text-base"
                                        >
                                            <option value="">
                                                {t("selectProjectType")}
                                            </option>
                                            <option value="residential">
                                                {t("residential")}
                                            </option>
                                            <option value="commercial">
                                                {t("commercial")}
                                            </option>
                                            <option value="industrial">
                                                {t("industrial")}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1 md:space-y-2">
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="font-medium text-foreground/80"
                                    >
                                        {t("projectLocation")}
                                    </Text>
                                    <div className="relative">
                                        <MapPin
                                            size={16}
                                            className="md:w-[18px] md:h-[18px] absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder={t(
                                                "locationPlaceholder",
                                            )}
                                            className="pl-10 md:pl-12 py-4 md:py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1 md:space-y-2">
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="font-medium text-foreground/80"
                                    >
                                        {t("message")}{" "}
                                        <span className="text-accent">*</span>
                                    </Text>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder={t("messagePlaceholder")}
                                        rows={4}
                                        className="w-full p-3 md:p-4 bg-background/50 border border-accent/20 rounded-xl focus:border-accent outline-none transition-all duration-300 resize-none text-sm md:text-base"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    accent={true}
                                    className="w-full py-4 md:py-6 text-base md:text-lg group"
                                >
                                    <span>{t("sendMessageBtn")}</span>
                                    <Send
                                        size={16}
                                        className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform ml-2"
                                    />
                                </Button>
                            </form>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <Text
                                    size="2xl"
                                    md="3xl"
                                    className="font-bold mb-2"
                                >
                                    {t("getInTouch")}
                                </Text>
                                <Text
                                    size="sm"
                                    md="base"
                                    className="text-foreground/70"
                                >
                                    {t("getInTouchDescription")}
                                </Text>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl border border-accent/10 hover:border-accent/30 transition-all">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin
                                            size={18}
                                            className="md:w-6 md:h-6 text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("officeLocation")}
                                        </Text>
                                        <Text
                                            size="xs"
                                            md="sm"
                                            className="text-foreground/70"
                                        >
                                            Mahdiya and Narjish office, Riyadh
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl border border-accent/10 hover:border-accent/30 transition-all">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone
                                            size={18}
                                            className="md:w-6 md:h-6 text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("callUs")}
                                        </Text>
                                        <Text
                                            size="xs"
                                            md="sm"
                                            className="text-foreground/70"
                                        >
                                            +966 55 163 2023
                                        </Text>
                                        <Text
                                            size="xs"
                                            className="text-foreground/60 mt-1"
                                        >
                                            {t("availableOnWhatsapp")}
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl border border-accent/10 hover:border-accent/30 transition-all">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail
                                            size={18}
                                            className="md:w-6 md:h-6 text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("emailUs")}
                                        </Text>
                                        <Text
                                            size="xs"
                                            md="sm"
                                            className="text-foreground/70 break-all"
                                        >
                                            sitara5858@gmail.com
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl border border-accent/10 hover:border-accent/30 transition-all">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock
                                            size={18}
                                            className="md:w-6 md:h-6 text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="base"
                                            md="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("workingHours")}
                                        </Text>
                                        <Text
                                            size="xs"
                                            md="sm"
                                            className="text-foreground/70"
                                        >
                                            {t("weekdays")}: 8:00 AM - 8:00 PM
                                        </Text>
                                        <Text
                                            size="xs"
                                            md="sm"
                                            className="text-foreground/70"
                                        >
                                            {t("friday")}: {t("closed")}
                                        </Text>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 md:pt-4">
                                <Text
                                    size="base"
                                    md="lg"
                                    className="font-semibold mb-3 md:mb-4"
                                >
                                    {t("followUs")}
                                </Text>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    <Link
                                        href="https://www.instagram.com/royalgyp/"
                                        target="_blank"
                                        className="p-2 md:p-3 bg-background/5 rounded-lg md:rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaInstagram
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.tiktok.com/@mr.sufiyan.07"
                                        target="_blank"
                                        className="p-2 md:p-3 bg-background/5 rounded-lg md:rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaTiktok
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.snapchat.com/ak_a6777"
                                        target="_blank"
                                        className="p-2 md:p-3 bg-background/5 rounded-lg md:rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaSnapchatGhost
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="tel:+966551632023"
                                        target="_blank"
                                        className="p-2 md:p-3 bg-background/5 rounded-lg md:rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaPhone
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="mailto:sitara5858@gmail.com"
                                        target="_blank"
                                        className="p-2 md:p-3 bg-background/5 rounded-lg md:rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <Mail
                                            size={16}
                                            className="md:w-5 md:h-5 text-accent"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-6 p-4 md:p-6 bg-accent/10 rounded-xl md:rounded-2xl border border-accent/20">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <Calendar
                                        size={16}
                                        className="md:w-6 md:h-6 text-accent flex-shrink-0 mt-1"
                                    />
                                    <Text
                                        size="xs"
                                        md="sm"
                                        className="text-foreground/80"
                                    >
                                        {t("siteVisitNote")}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full pb-12 md:pb-16 lg:pb-24 pt-4 md:pt-8 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <div className="bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:h-[400px] relative border border-accent/20 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.456789123456!2d46.6890123456789!3d24.6234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f123456789abc%3A0x9876543210fedcba!2sAl%20Mahdiya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1740502345678!5m2!1sen!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs z-10 shadow-lg">
                                <Link
                                    href="https://maps.google.com"
                                    target="_blank"
                                    className="text-accent hover:underline"
                                >
                                    {t("mapsData")}
                                </Link>
                            </div>
                            <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs z-10 shadow-lg">
                                <span className="text-accent font-medium">
                                    Mahdiya District
                                </span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-background to-accent/5 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:h-[400px] relative border border-accent/20 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.896115848577!2d46.7194424758835!3d24.63338747816668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0fe3c8c3c3c3%3A0x8c3c3c3c3c3c3c3c!2sNarjis%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1740501234567!5m2!1sen!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs z-10 shadow-lg">
                                <Link
                                    href="https://maps.google.com"
                                    target="_blank"
                                    className="text-accent hover:underline"
                                >
                                    {t("mapsData")}
                                </Link>
                            </div>
                            <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs z-10 shadow-lg">
                                <span className="text-accent font-medium">
                                    Narjish District
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
