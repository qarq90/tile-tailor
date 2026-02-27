import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Tile Tailor | About",
    description:
        "Learn about Tile Tailor - Riyadh's premier provider of gypsum, decoration, and finishing solutions for residential and commercial spaces in Saudi Arabia",
};

export default function Page() {
    return (
        <main>
            <Client />
        </main>
    );
}
