import Menu from "@/components/shared/Menu";
import SingleHeroNews from "@/features/SocialMediaNewsPage/SingleHeroNews";
import HorizontalNewsContainer from "@/features/SocialMediaNewsPage/HorizontalNewsContainer";
import VerticalNewsContainer from "@/features/SocialMediaNewsPage/VerticalNewsContainer";
import Footer from "@/components/shared/Footer";
import { getOrganizationNews } from "@/services/news";

export default async function OrganizationNewsPage() {
  const organizationNews = await getOrganizationNews();
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
          <SingleHeroNews type="organization" data={organizationNews[0]} />
          <HorizontalNewsContainer type="organization" data={organizationNews.slice(1, 5)} />
          <VerticalNewsContainer type="organization" data={organizationNews.slice(5, 11)} />
        </section>
        <Footer />
      </main>
    </>
  );
}
