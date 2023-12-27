import LandingSection from "@/features/HomePage/LandingSection";
import dynamic from "next/dynamic";
import {Fragment} from "react";

const MapSection = dynamic(() => import("@/features/HomePage/MapSection"), {ssr: false})


export default function Home() {
    return (
        <Fragment>
            <LandingSection/>
            <MapSection/>
        </Fragment>
    )
}
