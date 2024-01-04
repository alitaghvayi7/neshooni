import dynamic from "next/dynamic";
import LandingSection from "@/features/HomePage/LandingSection";
import BusinessSection from "@/features/HomePage/BusinessSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import PlaceSection from "@/features/HomePage/PlaceSection";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import NewsSection from "@/features/HomePage/NewsSection";
import Footer from "@/components/shared/Footer";
import { wrapper } from "@/lib/store/store";
import { setAuthState } from "@/lib/store/authSlice";
import RootLayout from "./RootLayout";
const MapSection = dynamic(() => import("@/features/HomePage/MapSection"), { ssr: false });

export default function HomePage() {
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

