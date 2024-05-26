import Footer from "@/components/shared/Footer";
import CategorySection from "@/features/NewsPage/CategorySection";
import HeaderSection from "@/features/NewsPage/HeaderSection";
import OrganSection from "@/features/NewsPage/OrganSection";
import SocialNewsSection from "@/features/NewsPage/SocialNewsSection";
import WireServiceSection from "@/features/NewsPage/WireServiceSection";
import { getOfficialNews, getOrganizationNews, getSocialNews } from "@/services/news";

export default async function NewsPage() {
  const [socialNews, officialNews, organizatinNews] = await Promise.all([
    getSocialNews(),
    getOfficialNews(),
    getOrganizationNews(),
  ]);

  console.log(officialNews.slice(0, 5));

  return (
    <>
      <>
        <main className={`w-full`}>
          <HeaderSection />
          <section className={`w-full bg-blue-04 bg-opacity-10 pb-14 pt-[5rem] lg:pt-[8rem]`}>
            <CategorySection />
            <SocialNewsSection data={socialNews} />
            <WireServiceSection data={officialNews} />
            <OrganSection data={organizatinNews} />
          </section>
          <Footer />
          {/* <MapComponent /> */}
        </main>
      </>
    </>
  );
}
