import Footer from "@/components/shared/Footer";
import CategorySection from "@/features/NewsPage/CategorySection";
import HeaderSection from "@/features/NewsPage/HeaderSection";
import OrganSection from "@/features/NewsPage/OrganSection";
import SocialNewsSection from "@/features/NewsPage/SocialNewsSection";
import WireServiceSection from "@/features/NewsPage/WireServiceSection";


export default function NewsPage() {
    return (
        <>
            <>
                <main className={`w-full`}>
                    <HeaderSection />
                    <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem] pb-14`}>
                        <CategorySection />
                        <SocialNewsSection />
                        <WireServiceSection />
                        <OrganSection />
                    </section>
                    <Footer />
                    {/* <MapComponent /> */}
                </main>
            </>
        </>
    )
}