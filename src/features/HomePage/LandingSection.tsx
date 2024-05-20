import Menu from "@/components/shared/Menu";
import Image from "next/image";
import heroMainImage from "../../assets/images/mainpage/hero_main.png";
import SearchBox from "../../components/shared/SearchBox";
import styles from "../../styles/Home/Home.module.css";

const LandingSection = () => {
  return (
    <>
      <header className={`relative flex h-[590px] w-full items-center justify-between bg-white lg:h-[623px]`}>
        <section
          style={{
            backgroundImage: "linear-gradient(255.75deg,rgba(255,255,255,0.3) 20.33%, rgba(255,255,255,0.05) 100%)",
          }}
          className={`absolute inset-0 isolate z-[2] flex h-full w-full flex-col justify-between bg-blue-06 bg-opacity-40 pb-6`}
        >
          <Menu />

          <div
            className={
              "relative z-[2] mx-auto flex w-full max-w-[1689px] flex-col gap-4 lg:flex-row lg:items-center lg:px-[128px]"
            }
          >
            <Image
              src={heroMainImage}
              alt={""}
              className={`mx-auto h-[266px] w-[385px] object-cover lg:order-2 lg:h-[350px] lg:w-[450px] xl:h-[500px] xl:w-[700px]`}
            />

            <div className={"flex w-full flex-col gap-4 lg:order-1 lg:h-full lg:gap-10"}>
              <h1
                className={
                  "font-peydaBold ps-6 text-[24px] font-bold text-write-main md:whitespace-normal lg:text-[42px]"
                }
              >
                جای جای &nbsp;
                <span className={`${styles["gradiant-color"]}`}>شهرتو</span>
                &nbsp; بشناس!
              </h1>
              <p className={`max-w-[293px] ps-6 text-[16px] text-write-04 lg:max-w-[593px] lg:text-[24px]`}>
                تو این سایت اخبار، گردشگری، کسب و کارهای شهرتو به راحتی پیدا کن
              </p>
              {/* <button
                className={`ms-6 hidden w-[260px] items-center justify-center rounded-[8px] border border-yellow-04 bg-white px-10 py-4 text-write-03 lg:flex`}
              >
                صاحب کسب و کار هستم
              </button> */}
            </div>
          </div>

          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`absolute bottom-[-10%] left-0 right-0 z-[1] h-[65px] w-full lg:bottom-[-25%] lg:h-[156px]`}
          >
            <div className="mt-8 xl:mt-28">
              <SearchBox />
            </div>
          </div>
        </section>

        <section
          className={`absolute bottom-0 left-0 top-0 z-[1] flex h-full w-full flex-col justify-center gap-4 ${styles["hero-image"]}`}
        ></section>
      </header>
    </>
  );
};
export default LandingSection;
