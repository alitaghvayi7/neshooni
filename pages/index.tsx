import LandingSection from "@/features/HomePage/LandingSection";
import dynamic from "next/dynamic";
import {Fragment} from "react";
import BusinessSection from "@/features/HomePage/BusinessSection";

const MapSection = dynamic(() => import("@/features/HomePage/MapSection"), {ssr: false})


export default function Home() {
    return (
        <main className={``}>
            <LandingSection/>
            <BusinessSection />
            <MapSection/>
        </main>
    )
}
