"use client";

import dynamic from "next/dynamic";
import LandingSection from "@/features/HomePage/LandingSection";
import BusinessSection from "@/features/HomePage/BusinessSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import PlaceSection from "@/features/HomePage/PlaceSection";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import NewsSection from "@/features/HomePage/NewsSection";
import Footer from "@/components/shared/Footer";
const MapSection = dynamic(() => import("@/features/HomePage/MapSection"), { ssr: false });

// services
import { getAllNews } from "@/services/news";

type Props = {
  news: { data: SingleNews[] | [] };
};

export default function HomePage(props: Props) {
  const { news } = props;

  return (
    <main className={``}>
      <LandingSection />
      <BusinessSection />
      <ShoppingSection />
      <MapSection />
      <PlaceSection />
      <NewsSection newsList={news.data} />
      <LastNewsSection />
      <Footer />
    </main>
  );
}
