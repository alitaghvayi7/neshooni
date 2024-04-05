import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import SingleHeroNews from "@/features/SocialMediaNewsPage/SingleHeroNews";
import HorizontalNewsContainer from "@/features/SocialMediaNewsPage/HorizontalNewsContainer";
import VerticalNewsContainer from "@/features/SocialMediaNewsPage/VerticalNewsContainer";
import { getSocialNews } from "@/services/news";

export default async function SocialMediaNewsPage() {
  const socialNews = await getSocialNews();
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
        <section className={`w-full bg-blue-04 bg-opacity-10 pb-14 pt-[3rem]`}>
          <SingleHeroNews type="social" data={socialNews[0]} />
          <HorizontalNewsContainer data={socialNews.slice(1, 5)} />
          <VerticalNewsContainer data={socialNews.slice(5, 11)} />
        </section>
        <Footer />
      </main>
    </>
  );
}
