import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/mainpage/logo.png";
import heroMainImage from "../../assets/images/mainpage/hero_main.png";
import styles from "../../styles/Home/Home.module.css";
import SearchBox from "../../components/shared/SearchBox";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Menu from "@/components/shared/Menu";

const LandingSection = () => {
  const router = useRouter();
  return (
    <>
      <header className={`flex w-full h-[590px] lg:h-[623px] items-center justify-between relative isolate bg-white`}>
        <section
          style={{
            backgroundImage: "linear-gradient(255.75deg,rgba(255,255,255,0.3) 20.33%, rgba(255,255,255,0.05) 100%)",
          }}
          className={`w-full pb-6 h-full bg-blue-06 bg-opacity-40 absolute z-[2] inset-0 flex flex-col justify-between isolate`}
        >
          <Menu />

          <div
            className={
              "w-full max-w-[1689px] mx-auto flex flex-col lg:flex-row gap-4 lg:px-[128px] lg:items-center relative z-[2]"
            }
          >
            <Image
              src={heroMainImage}
              alt={""}
              className={`object-cover w-[385px] mx-auto h-[266px] lg:w-[700px] lg:h-[500px] lg:order-2`}
            />

            <div className={"w-full flex flex-col gap-4 lg:gap-10 lg:order-1 lg:h-full"}>
              <h1 className={"text-[24px] lg:text-[64px] font-bold text-write-main ps-6 font-peydaBold"}>
                جای جای &nbsp;
                <span className={`${styles["gradiant-color"]}`}>شهرتو</span>
                &nbsp; بشناش!
              </h1>
              <p className={`text-[16px] ps-6 text-write-04 max-w-[293px] lg:max-w-[593px] lg:text-[24px]`}>
                تو این سایت اخبار، گردشگری، کسب و کارهای شهرتو به راحتی پیدا کن
              </p>
              <button
                className={`bg-white w-[260px] ms-6 border border-yellow-04 text-write-03 py-4 px-10 rounded-[8px] items-center justify-center hidden lg:flex`}
              >
                صاحب کسب و کار هستم
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`absolute bottom-[-10%] lg:bottom-[-25%] left-0 right-0 w-full h-[65px] lg:h-[156px] z-[1]`}
          >
            <div className="mt-8 xl:mt-28">
              <SearchBox />
            </div>
          </div>
        </section>

        <section
          className={`w-full h-full flex flex-col gap-4 justify-center absolute z-[1] left-0 top-0 bottom-0 ${styles["hero-image"]}`}
        ></section>
      </header>
    </>
  );
};
export default LandingSection;
