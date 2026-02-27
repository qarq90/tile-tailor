import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Tile Tailor | Services",
    description:
        "Comprehensive gypsum, decoration and finishing solutions for residential and commercial spaces in Riyadh and Saudi Arabia",
};

export default function Page() {
    return (
        <main>
            <Client />
        </main>
    );
}
