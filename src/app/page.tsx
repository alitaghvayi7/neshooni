import Footer from "@/components/shared/Footer";
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
import Script from "next/script";

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
      <Script id="schema.org" type="application/ld+json">
        {` {"@context": "https://schema.org",
 "@type": "WebSite",
 "name": "${mainConfig.WebsiteName}",
 "url": "${mainConfig.WebsiteDomain}",
 "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
 },
 "about": "${mainConfig.WebsiteDescription}",
 "hasPart": [
    {
      "@type": "WebPage",
      "name": "Local Businesses",
      "url": "https://www.yourwebsite.com/locations"
    },
    {
      "@type": "WebPage",
      "name": "Local News",
      "url": "https://www.yourwebsite.com/news"
    },
    {
      "@type": "WebPage",
      "name": "Tourism Locations",
      "url": "https://www.yourwebsite.com/tourism"
    }
 ]}`}
      </Script>
    </>
  );
};

export default Page;
