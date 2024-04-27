import Footer from "@/components/shared/Footer";
import { homePageSchema } from "@/configs/HomePage";
import { mainConfig } from "@/configs/WebsiteMainConfigs";
import BusinessSection from "@/features/HomePage/BusinessSection";
import LandingSection from "@/features/HomePage/LandingSection";
import LastNewsSection from "@/features/HomePage/LastNewsSection";
import MapSection from "@/features/HomePage/MapSection";
import NewsSection from "@/features/HomePage/NewsSection";
import PlaceSection from "@/features/HomePage/PlaceSection";
import ShoppingSection from "@/features/HomePage/ShoppingSection";
import { businessSlider } from "@/models/business";
import { singleTourismCard } from "@/models/tourism";
import { getTopBusiness } from "@/services/business";
import { getAllNews } from "@/services/news";
import { getTopPlaces } from "@/services/tourism";

const Page = async () => {
  const [allNews, topBusiness, topPlaces]: [any, businessSlider[], singleTourismCard[]] = await Promise.all([
    getAllNews(),
    getTopBusiness(),
    getTopPlaces(),
  ]);

  return (
    <>
      <main className={``}>
        <LandingSection />
        <BusinessSection />
        <ShoppingSection data={topBusiness} />
        <MapSection />
        <PlaceSection placesList={topPlaces} />
        <NewsSection newsList={allNews?.data || []} />
        <LastNewsSection lastNews={allNews?.data?.slice(0, 4) || []} />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
        defer
      />
    </>
  );
};

export default Page;
