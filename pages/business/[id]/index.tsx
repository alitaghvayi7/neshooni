import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";

export default function SingleBusinessPage() {
  return (
    <>
      <main className={`w-full`}>
        <header className={`w-full bg-blue-04 bg-opacity-20`}>
          <Menu />
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`relative w-full h-[65px] lg:h-[156px] z-[1] isolate`}
          ></div>
        </header>
        <section className={`w-full bg-blue-04 bg-opacity-20`}>
          {/* <MapSection />
          <BusinessSection /> */}
        </section>
      </main>
    </>
  );
}
