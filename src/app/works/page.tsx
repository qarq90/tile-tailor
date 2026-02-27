import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Tile Tailor | Works",
    description:
        "Showcasing our finest tiling, flooring, and ceiling work across Riyadh and Saudi Arabia",
};

export default function Page() {
    return (
        <main>
            <Client />
        </main>
    );
}
