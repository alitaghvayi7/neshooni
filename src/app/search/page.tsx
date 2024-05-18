import Footer from "@/components/shared/Footer";
import HeaderSection from "@/features/SearchPage/HeaderSection";
import { baseURL } from "@/services/news";

const SearchPage = async ({ searchParams: { q } }: { searchParams: { q: string } }) => {
  let data = [];

  if (q && q !== "" && q.length >= 2) {
    const req = await fetch(`${baseURL}/search?search_term=${q}&type=${"all"}`, {
      next: {
        revalidate: 60,
      },
    });
    if (!req.ok) throw new Error();
    data = (await req.json())?.data || [];
  }

  const business: any[] = data.shop.slice(0, 4);

  const tourism: any[] = data.tourism.slice(0, 4);

  const news: any[] = data.news.slice(0, 4);

  const mainStreets: any[] = data.address.slice(0, 4);

  return (
    <>
      <main className={`w-full`}>
        <HeaderSection />
        <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem]`}></section>
        <Footer />
        {/* <MapComponent /> */}
      </main>
    </>
  );
};

export default SearchPage;
