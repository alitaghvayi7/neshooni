import Image from 'next/image';
// import backgrounOne from "@/assets/images/mainpage/hero_bg_one.png";
// import backgrounTwo from "@/assets/images/mainpage/hero_bg_two.png";
import heroMainImage from "@/assets/images/mainpage/hero_main.png";
import Logo from "@/assets/images/mainpage/logo.png";
import styles from "@/styles/Home/Home.module.css"
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`flex w-full h-[590px] lg:h-[623px] items-center justify-between relative isolate bg-white`}
        >
            <section
                style={{
                    backgroundImage: 'linear-gradient(255.75deg,rgba(255,255,255,0.3) 20.33%, rgba(255,255,255,0.05) 100%)'
                }}
                className={`w-full pb-6 h-full bg-blue-06 bg-opacity-40 absolute z-[2] inset-0 flex flex-col justify-between isolate`}>
                <nav
                    style={{
                        backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))'
                    }}
                    className={`w-full p-6 flex items-center justify-between lg:hidden bg-transparent`}>
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

                <nav
                    style={{
                        backgroundImage: 'linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))'
                    }}
                    className={`w-full py-[52px] px-[10%] items-center justify-between bg-transparent hidden lg:flex`}>
                    <ul className={`flex items-center gap-12`}>
                        <Link href={''}>
                            <Image src={Logo} alt={'qom-neshan-logo'} className={`w-8 h-8 object-cover`}/>
                        </Link>
                        <Link href={''}
                              className={`text-[18px] text-write-main`}>
                            صفحه اصلی
                        </Link>   <Link href={''}
                                        className={`text-[18px] text-write-main`}>
                         گردشگری
                        </Link>
                        <Link href={''}
                              className={`text-[18px] text-write-main`}>
                           کسب و کار
                        </Link>

                        <Link href={''}
                              className={`text-[18px] text-write-main`}>
                        اخبار
                        </Link>
                        <Link href={''}
                              className={`text-[18px] text-write-main`}>
                            شما معرفی کنید
                        </Link>
                    </ul>


                    <Link href={''}
                          className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-6 py-2 flex items-center justify-center`}>
                        ورود / ثبت نام
                    </Link>
                </nav>

                <div className={'w-full bg-transparent flex flex-col lg:flex-row gap-4 lg:px-[128px] lg:items-center relative z-[2]'}>
                    <Image
                        src={heroMainImage}
                        alt={''}
                        className={`object-cover w-[385px] mx-auto h-[266px] lg:w-[700px] lg:h-[500px] lg:order-2`}
                    />

                    <div className={'w-full flex flex-col gap-4 lg:gap-10 lg:order-1 lg:h-full'}>
                        <h1 className={'text-[24px] lg:text-[64px] font-bold text-write-main ps-6'}>
                            جای جای
                            &nbsp;
                            <span className={`${styles['gradiant-color']}`}>شهرتو</span>
                            &nbsp;
                            بشناس!
                        </h1>
                        <p className={`text-[16px] ps-6 text-write-04 max-w-[293px] lg:max-w-[593px] lg:text-[24px]`}>
                            تو این سایت اخبار، گردشگری، کسب و کارهای
                            شهرتو به راحتی پیدا کن
                        </p>
                        <button className={`bg-white w-[260px] ms-6 border border-yellow-04 text-write-03 py-4 px-10 rounded-[8px] items-center justify-center hidden lg:flex`}>
                            صاحب کسب و کار هستم
                        </button>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`
                    }}
                    className={`absolute bottom-[-10%] lg:bottom-[-25%] left-0 right-0 w-full h-[65px] lg:h-[156px] z-[1]`}
                ></div>
            </section>

            <section
                className={`w-full h-full flex flex-col gap-4 justify-center absolute z-[1] left-0 top-0 bottom-0 ${styles['hero-image']}`}
            >
            </section>

        </main>
    )
}
