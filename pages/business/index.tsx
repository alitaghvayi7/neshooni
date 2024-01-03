import HeaderSection from "@/features/BusinessPage/HeaderSection";
import dynamic from "next/dynamic";
const MapSection = dynamic(() => import("@/features/BusinessPage/MapSection"), { ssr: false });
const BusinessSection = dynamic(() => import("@/features/BusinessPage/BusinessSection"), { ssr: false });

export default function BusinessPage() {
  return (
    <>
      <main className={`w-full`}>
        <HeaderSection />
        <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem]`}>
          <MapSection />
          <BusinessSection />
        </section>
        {/* <MapComponent /> */}
      </main>
    </>
  );
}
