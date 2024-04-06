import Menu from "@/components/shared/Menu";
import SingleHeroNews from "@/features/SocialMediaNewsPage/SingleHeroNews";
import HorizontalNewsContainer from "@/features/SocialMediaNewsPage/HorizontalNewsContainer";
import VerticalNewsContainer from "@/features/SocialMediaNewsPage/VerticalNewsContainer";
import Footer from "@/components/shared/Footer";
import { getOfficialNews } from "@/services/news";

export default async function WireServiceNewsPage() {
  const officialNews = await getOfficialNews();
  return (
    <>
      <main className={`w-full`}>
        <header className={`w-full bg-blue-04 bg-opacity-20`}>
          <Menu />
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`relative isolate z-[1] h-[65px] w-full lg:h-[156px]`}
          ></div>
        </header>
        <section className={`w-full bg-blue-04 bg-opacity-10 pb-14  pt-[3rem]`}>
          <SingleHeroNews data={officialNews[0]} type="official" />
          <HorizontalNewsContainer type="official" data={officialNews.slice(1, 5)} />
          <VerticalNewsContainer type="official" data={officialNews.slice(5, 11)} />
        </section>
        <Footer />
      </main>
    </>
  );
}
