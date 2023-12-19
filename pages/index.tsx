import Image from 'next/image';
// import backgrounOne from "@/assets/images/mainpage/hero_bg_one.png";
// import backgrounTwo from "@/assets/images/mainpage/hero_bg_two.png";
import heroMainImage from "@/assets/images/mainpage/hero_main.png";
import Logo from "@/assets/images/mainpage/Logo.png";
import styles from "@/styles/Home/Home.module.css"
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`flex w-full h-[590px] lg:h-[966px] items-center justify-between relative isolate bg-white`}
        >
            <section
                style={{
                    backgroundImage: 'linear-gradient(255.75deg,rgba(255,255,255,0.3) 20.33%, rgba(255,255,255,0.05) 100%)'
                }}
                className={`w-full pb-6 h-full bg-transparent absolute z-[2] inset-0 flex flex-col justify-between`}>
                <nav
                    style={{
                        backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))'
                    }}
                    className={`w-full p-6 flex items-center justify-between bg-transparent lg:hidden`}>
                    <Link href={''}
                          className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-4 py-2`}>
                        ورود / ثبت نام
                    </Link>
                    <Image src={Logo} alt={'qom-neshan-logo'} className={`w-8 h-8 object-cover`}/>
                    <Link href={''}
                          className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-6 py-2 flex items-center justify-center`}>
                        ورود / ثبت نام
                    </Link>
                </nav>

                <Image
                    src={heroMainImage}
                    alt={''}
                    className={`object-cover w-[385px] mx-auto h-[266px] lg:w-[700px] lg:h-[500px] hover:-translate-y-0.5 transition`}
                />

                <div className={'w-full flex flex-col gap-4'}>
                    <h1 className={'text-[24px] font-bold text-write-main ps-6'}>جای جای <span
                        className={`${styles['gradiant-color']}`}>شهرتو</span> بشناش!</h1>
                    <p className={`text-[16px] ps-6 text-write-04 max-w-[293px]`}>
                        تو این سایت اخبار، گردشگری، کسب و کارهای
                        شهرتو به راحتی پیدا کن
                    </p>
                </div>

                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`
                    }}
                    className={`absolute bottom-[-10%] left-0 right-0 w-full h-[65px]`}
                ></div>
            </section>

            <section
                className={`w-full lg:w-[70%] h-full flex flex-col gap-4 justify-center absolute z-[1] left-0 top-0 bottom-0 ${styles['hero-image']}`}
            >
            </section>

        </main>
    )
}
