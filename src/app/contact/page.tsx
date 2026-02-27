import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Tile Tailor | Contact",
    description:
        "Get in touch with Tile Tailor for expert gypsum, decoration, and finishing solutions in Riyadh and Saudi Arabia",
};

export default function Page() {
    return (
        <main>
            <Client />
        </main>
    );
}
