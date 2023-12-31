import LandingSection from "@/features/HomePage/LandingSection";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import BusinessSection from "@/features/HomePage/BusinessSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import PalceSection from "../features/HomePage/PlaceSection";
import Footer from "@/components/shared/Footer";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import NewsSection from "@/features/HomePage/NewsSection";

const MapSection = dynamic(() => import("@/features/HomePage/MapSection"), { ssr: false });

export default function Home() {
  return (
    <main className={``}>
      <LandingSection />
      <BusinessSection />
      <ShoppingSection />
      <MapSection />
      <PalceSection />
      <NewsSection />
      <LastNewsSection />
      <Footer />
    </main>
  );
}
