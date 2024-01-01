import dynamic from "next/dynamic";
import LandingSection from "@/features/HomePage/LandingSection";
import BusinessSection from "@/features/HomePage/BusinessSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import PlaceSection from "@/features/HomePage/PlaceSection";
import Footer from "@/components/shared/Footer";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import NewsSection from "@/features/HomePage/NewsSection";
const MapSection = dynamic(() => import("@/features/HomePage/MapSection"));

export default function Home() {
  return (
    <main className={``}>
      <LandingSection />
      <BusinessSection />
      <ShoppingSection />
      <MapSection />
      <PlaceSection />
      <NewsSection />
      <LastNewsSection />
      <Footer />
    </main>
  );
}
