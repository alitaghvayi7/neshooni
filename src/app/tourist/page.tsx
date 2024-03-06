import Footer from "@/components/shared/Footer";
import BusinessSection from "@/features/TouristPage/BusinessSection";
import HeaderSection from "@/features/TouristPage/HeaderSection";
import MapSection from "@/features/TouristPage/MapSection";
import dynamic from "next/dynamic";
// const MapSection = dynamic(() => import("@/features/TouristPage/MapSection"), {
//   ssr: false,
// });

export default function BusinessPage() {
  return (
    <>
      <main className={`w-full`}>
        <HeaderSection />
        <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem]`}>
          <MapSection />
          <BusinessSection />
        </section>
        <Footer />
        {/* <MapComponent /> */}
      </main>
    </>
  );
}
