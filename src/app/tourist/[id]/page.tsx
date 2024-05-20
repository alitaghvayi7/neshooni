import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import IntroductionSection from "@/features/SingleTourismPage/IntroductionSection";
import { getSingleTourism } from "@/services/tourism";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export default async function SingleTouristPage({ params: { id } }: { params: { id: string } }) {
  const singleTourismData = await getSingleTourism({ id });
  if (singleTourismData === "Error") {
    throw new Error("خطایی رخ داده است.");
  }
  if (singleTourismData.statusCode === 404 || singleTourismData.data === null) {
    notFound();
  }

  // console.log(singleTourismData.data);

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
          <IntroductionSection
            description={singleTourismData.data.content ?? ""}
            id={singleTourismData.data.id}
            name={singleTourismData.data.title}
            img={singleTourismData.data.img ?? ""}
            score={singleTourismData.data.average_score[0]?.average_score || "0"}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
