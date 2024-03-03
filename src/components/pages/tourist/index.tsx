import Footer from "@/components/shared/Footer";
import HeaderSection from "@/features/TouristPage/HeaderSection";
import dynamic from "next/dynamic";
const MapSection = dynamic(() => import("@/features/TouristPage/MapSection"), { ssr: false });
const BusinessSection = dynamic(() => import("@/features/TouristPage/BusinessSection"), { ssr: false });

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
