import Footer from "@/components/shared/Footer";
import TourismSection from "@/features/TouristPage/ToursimSection";
import BusinessSection from "@/features/TouristPage/ToursimSection";
import HeaderSection from "@/features/TouristPage/HeaderSection";
import MapSection from "@/features/TouristPage/MapSection";
import { getTourismList } from "@/services/tourism";
import { Metadata } from "next";
import dynamic from "next/dynamic";
// const MapSection = dynamic(() => import("@/features/TouristPage/MapSection"), {
//   ssr: false,
// });
export const metadata: Metadata = {
  title: "گردشگری",
};
export default async function TouristPage() {
  const tourismList = await getTourismList({
    page: 1,
  });
  if (tourismList === "Error") return null;

  return (
    <>
      <main className={`w-full`}>
        <HeaderSection />
        <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem]`}>
          <MapSection />
          <TourismSection data={tourismList.data} />
        </section>
        <Footer />
        {/* <MapComponent /> */}
      </main>
    </>
  );
}
