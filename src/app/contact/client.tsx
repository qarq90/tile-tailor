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
                className="w-full justify-center items-center py-24 flex flex-col gap-8"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <Text size="6xl">Contact Us</Text>
                <Text
                    size="3xl"
                    color="accent"
                    className="w-4xl"
                    align="center"
                >
                    Get in touch with us for your tiling, flooring, and ceiling
                    projects in Riyadh and across Saudi Arabia
                </Text>
            </section>

            <section
                className="bg-accent w-full justify-center items-center py-12 flex flex-row gap-32 text-xl"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="flex flex-row gap-2">
                    <Phone />
                    <Text>Call Us: +966 50 123 4567</Text>
                </div>
                <div className="flex flex-row gap-2">
                    <MessageCircle />
                    <Text>WhatsApp: +966 55 163 2023</Text>
                </div>
                <div className="flex flex-row gap-2">
                    <MessageCircle />
                    <Text>WhatsApp: +966 57 807 2808</Text>
                </div>
                <div className="flex flex-row gap-2">
                    <Mail />
                    <Text>Email: sitara5858@gmail.com</Text>
                </div>
            </section>

            <section
                className="w-full pt-24 px-4 md:px-8 lg:px-16"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-background/5 rounded-3xl p-8 border border-accent/20">
                            <div className="mb-8">
                                <Text size="3xl" className="font-bold mb-2">
                                    {t("sendUsMessage")}
                                </Text>
                                <Text className="text-accent-foreground/70">
                                    {t("formDescription")}
                                </Text>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Text
                                        size="sm"
                                        className="font-medium text-accent-foreground/80"
                                    >
                                        {t("fullName")}{" "}
                                        <span className="text-accent">*</span>
                                    </Text>
                                    <div className="relative">
                                        <User
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder={t("namePlaceholder")}
                                            className="pl-12 py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Text
                                        size="sm"
                                        className="font-medium text-accent-foreground/80"
                                    >
                                        {t("phoneNumber")}{" "}
                                        <span className="text-accent">*</span>
                                    </Text>
                                    <div className="relative">
                                        <Phone
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder={t("phonePlaceholder")}
                                            type="tel"
                                            className="pl-12 py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Text
                                        size="sm"
                                        className="font-medium text-accent-foreground/80"
                                    >
                                        {t("projectType")}
                                    </Text>
                                    <div className="relative">
                                        <ChevronDown
                                            size={18}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-accent/60 pointer-events-none"
                                        />
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleSelectChange}
                                            className="w-full p-4 bg-background/50 border border-accent/20 rounded-xl focus:border-accent outline-none transition-all duration-300 appearance-none"
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

                                <div className="space-y-2">
                                    <Text
                                        size="sm"
                                        className="font-medium text-accent-foreground/80"
                                    >
                                        {t("projectLocation")}
                                    </Text>
                                    <div className="relative">
                                        <MapPin
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/60"
                                        />
                                        <Input
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder={t(
                                                "locationPlaceholder",
                                            )}
                                            className="pl-12 py-6 bg-background/50 border-accent/20 focus:border-accent transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Text
                                        size="sm"
                                        className="font-medium text-accent-foreground/80"
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
                                        className="w-full p-4 bg-background/50 border border-accent/20 rounded-xl focus:border-accent outline-none transition-all duration-300 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    accent={true}
                                    className="w-full py-6 text-lg group"
                                >
                                    <span>{t("sendMessageBtn")}</span>
                                    <Send
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Button>
                            </form>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <Text size="3xl" className="font-bold mb-2">
                                    {t("getInTouch")}
                                </Text>
                                <Text className="text-accent-foreground/70">
                                    {t("getInTouchDescription")}
                                </Text>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-6 bg-background/5 rounded-2xl border border-accent/10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("officeLocation")}
                                        </Text>
                                        <Text className="text-accent-foreground/70 mb-1">
                                            Mahdiya and Narjish office
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-background/5 rounded-2xl border border-accent/10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("callUs")}
                                        </Text>
                                        <Text className="text-accent-foreground/70 mb-1">
                                            +966 55 163 2023
                                        </Text>
                                        <Text
                                            size="sm"
                                            className="text-accent-foreground/60"
                                        >
                                            {t("availableOnWhatsapp")}
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-background/5 rounded-2xl border border-accent/10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("emailUs")}
                                        </Text>
                                        <Text className="text-accent-foreground/70">
                                            sitara5858@gmail.com
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-background/5 rounded-2xl border border-accent/10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            size="lg"
                                            className="font-semibold mb-1"
                                        >
                                            {t("workingHours")}
                                        </Text>
                                        <Text className="text-accent-foreground/70">
                                            {t("weekdays")}: 8:00 AM - 8:00 PM
                                        </Text>
                                        <Text className="text-accent-foreground/70">
                                            {t("friday")}: {t("closed")}
                                        </Text>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Text size="lg" className="font-semibold mb-4">
                                    {t("followUs")}
                                </Text>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="https://www.instagram.com/royalgyp/"
                                        target="_blank"
                                        className="p-3 bg-background/5 rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaInstagram
                                            size={20}
                                            className="text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.tiktok.com/@mr.sufiyan.07"
                                        target="_blank"
                                        className="p-3 bg-background/5 rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaTiktok
                                            size={20}
                                            className="text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.snapchat.com/ak_a6777"
                                        target="_blank"
                                        className="p-3 bg-background/5 rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaSnapchatGhost
                                            size={20}
                                            className="text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="tel:+966551632023"
                                        target="_blank"
                                        className="p-3 bg-background/5 rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <FaPhone
                                            size={20}
                                            className="text-accent"
                                        />
                                    </Link>
                                    <Link
                                        href="mailto:sitara5858@gmail.com"
                                        target="_blank"
                                        className="p-3 bg-background/5 rounded-xl hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <Mail
                                            size={20}
                                            className="text-accent"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-6 p-6 bg-accent/10 rounded-2xl border border-accent/20">
                                <div className="flex items-start gap-3">
                                    <Calendar
                                        size={24}
                                        className="text-accent flex-shrink-0"
                                    />
                                    <Text className="text-accent-foreground/80">
                                        {t("siteVisitNote")}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full pb-24 pt-8 px-4 md:px-8 lg:px-72"
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-accent/5 rounded-3xl overflow-hidden h-[400px] relative border border-accent/20">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.456789123456!2d46.6890123456789!3d24.6234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f123456789abc%3A0x9876543210fedcba!2sAl%20Mahdiya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1740502345678!5m2!1sen!2ssa"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs z-10">
                            <Link
                                href="https://maps.google.com"
                                target="_blank"
                                className="text-accent hover:underline"
                            >
                                {t("mapsData")}
                            </Link>
                        </div>
                        <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs z-10">
                            <span className="text-accent">
                                Mahdiya District
                            </span>
                        </div>
                    </div>

                    <div className="bg-accent/5 rounded-3xl overflow-hidden h-[400px] relative border border-accent/20">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.896115848577!2d46.7194424758835!3d24.63338747816668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0fe3c8c3c3c3%3A0x8c3c3c3c3c3c3c3c!2sNarjis%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1740501234567!5m2!1sen!2ssa"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs z-10">
                            <Link
                                href="https://maps.google.com"
                                target="_blank"
                                className="text-accent hover:underline"
                            >
                                {t("mapsData")}
                            </Link>
                        </div>
                        <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs z-10">
                            <span className="text-accent">
                                Narjish District
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
