import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Tile Tailor | Home",
    description: "Welcome to Tile Tailor - Your one stop for all gypsum work.",
};

export default function Page() {
    return (
        <main>
            <Client />
        </main>
    );
}
