import Menu from "@/components/shared/Menu";
import SingleHeroNews from "@/features/SocialMediaNewsPage/SingleHeroNews";
import HorizontalNewsContainer from "@/features/SocialMediaNewsPage/HorizontalNewsContainer";
import VerticalNewsContainer from "@/features/SocialMediaNewsPage/VerticalNewsContainer";
import Footer from "@/components/shared/Footer";

export default function WireServiceNewsPage (){
    return (
        <>
            <main className={`w-full`}>
                <header className={`w-full bg-blue-04 bg-opacity-20`}>
                    <Menu/>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
                        }}
                        className={`relative w-full h-[65px] lg:h-[156px] z-[1] isolate`}
                    >
                    </div>
                </header>
                <section className={`w-full bg-blue-04 bg-opacity-10 pt-[3rem]  pb-14`}>
                    <SingleHeroNews />
                    <HorizontalNewsContainer/>
                    <VerticalNewsContainer/>
                </section>
                <Footer/>
            </main>
        </>
    )
}