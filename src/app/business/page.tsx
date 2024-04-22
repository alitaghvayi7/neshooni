import Footer from "@/components/shared/Footer";
import BusinessSection from "@/features/BusinessPage/BusinessSection";
import HeaderSection from "@/features/BusinessPage/HeaderSection";
import { getBusinessList } from "@/services/business";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const MapSection = dynamic(() => import("@/features/BusinessPage/MapSection"), { ssr: false });
// import MapSection from "@/features/BusinessPage/MapSection";

export const metadata: Metadata = {
  title: "کسب و کار",
};

export default async function BusinessPage() {
  const businessList = await getBusinessList({ page: 1 });
  if (businessList === "Error") throw new Error();

  return (
    <>
      <main className={`w-full`}>
        <HeaderSection />
        <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem]`}>
          <MapSection />
          <BusinessSection data={businessList.data} />
        </section>
        <Footer />
        {/* <MapComponent /> */}
      </main>
    </>
  );
}
