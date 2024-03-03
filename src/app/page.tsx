import Footer from "@/components/shared/Footer";
import BusinessSection from "@/features/HomePage/BusinessSection";
import LandingSection from "@/features/HomePage/LandingSection";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import MapSection from "@/features/HomePage/MapSection";
import NewsSection from "@/features/HomePage/NewsSection";
import PlaceSection from "@/features/HomePage/PlaceSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import { getAllNews } from "@/services/news";

const Page = async () => {
  const allNews = (await getAllNews()) as {
    data: SingleNews[];
  };
  return (
    <main className={``}>
      <LandingSection />
      <BusinessSection />
      <ShoppingSection />
      <MapSection />
      <PlaceSection />
      <NewsSection newsList={allNews.data} />
      <LastNewsSection lastNews={allNews.data.slice(0, 4)} />
      <Footer />
    </main>
  );
};

export default Page;
