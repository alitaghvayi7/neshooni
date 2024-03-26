import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import IntroductionSection from "@/features/SingleBusinessPage/IntroductionSection";
import { getSingleBusiness } from "@/services/business";

export default async function SingleBusinessPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const pageData = await getSingleBusiness({
    id,
  });
  if (pageData === "Error") {
    return null;
  }
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
        <section className={`w-full bg-blue-04 bg-opacity-10`}>
          {/* <MapSection />
          <BusinessSection /> */}
          <IntroductionSection id={pageData.data.id} description={pageData.data?.desc} name={pageData.data?.name} />
        </section>
        <Footer />
      </main>
    </>
  );
}
