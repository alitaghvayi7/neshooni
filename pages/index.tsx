import Image from 'next/image';
import heroMainImage from "@/assets/images/mainpage/hero_main.png";
import Logo from "@/assets/images/mainpage/logo.png";
import styles from "@/styles/Home/Home.module.css"
import Link from "next/link";
import SearchBox from "@/components/shared/SearchBox";
import dynamic from "next/dynamic";
import {useCallback, useLayoutEffect, useRef, useState} from "react";


const MapComponent = dynamic(() => import("@/components/HomePage/Map/Map"), {ssr: false})

export default function Home() {

    const parentMapRef = useRef<HTMLElement>(null);
    const resizeElementRef = useRef<HTMLDivElement>(null);
    const [percentage, setPercentage] = useState<number | null>(null);


    const onDrag = useCallback((e: MouseEvent) => {
        e.preventDefault();
        // @ts-ignore
        const sel = window.getSelection ? window.getSelection() : document.selection;
        if (sel) {
            if (sel.removeAllRanges) {
                sel.removeAllRanges();
            } else if (sel.empty) {
                sel.empty();
            }
        }

        if (parentMapRef.current && resizeElementRef.current) {
            const p = ((e.pageX - ((window.innerWidth - parentMapRef.current.clientWidth) / 2)) / parentMapRef.current.clientWidth) * 100
            setPercentage(p)
        }
    }, [])

    const [boundes, setBoundes] = useState({lat: 0, lng: 0})

    useLayoutEffect(() => {
        if ("geolocation" in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.getCurrentPosition(
                // Success callback function
                (position) => {
                    // Get the user's latitude and longitude coordinates
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    // Do something with the location data, e.g. display on a map
                    console.log(`Latitude: ${lat}, longitude: ${lng}`);
                    setBoundes({lat, lng})
                },
                // Error callback function
                (error) => {
                    // Handle errors, e.g. user denied location sharing permissions
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            // Geolocation is not supported by the browser
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);



    return (
        <>
            <section
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
                            backgroundImage:
                                "linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))",
                        }}
                        className={`w-full py-[52px] px-[10%] items-center justify-between bg-transparent hidden lg:flex`}
                    >
                        <ul className={`flex items-center gap-12`}>
                            <Link href={""}>
                                <Image
                                    src={Logo}
                                    alt={"qom-neshan-logo"}
                                    className={`w-8 h-8 object-cover`}
                                />
                            </Link>
                            <Link href={""} className={`text-[18px] text-write-main`}>
                                صفحه اصلی
                            </Link>{" "}
                            <Link href={""} className={`text-[18px] text-write-main`}>
                                گردشگری
                            </Link>
                            <Link href={""} className={`text-[18px] text-write-main`}>
                                کسب و کار
                            </Link>
                            <Link href={""} className={`text-[18px] text-write-main`}>
                                اخبار
                            </Link>
                            <Link href={""} className={`text-[18px] text-write-main`}>
                                شما معرفی کنید
                            </Link>
                        </ul>


                        <Link href={''}
                              className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-6 py-2 flex items-center justify-center`}>
                            ورود / ثبت نام
                        </Link>
                    </nav>

                    <div
                        className={
                            "w-full flex flex-col lg:flex-row gap-4 lg:px-[128px] lg:items-center relative z-[2]"
                        }
                    >
                        <Image
                            src={heroMainImage}
                            alt={""}
                            className={`object-cover w-[385px] mx-auto h-[266px] lg:w-[700px] lg:h-[500px] lg:order-2`}
                        />

                        <div
                            className={
                                "w-full flex flex-col gap-4 lg:gap-10 lg:order-1 lg:h-full"
                            }
                        >
                            <h1
                                className={
                                    "text-[24px] lg:text-[64px] font-bold text-write-main ps-6 font-peydaBold"
                                }
                            >
                                جای جای &nbsp;
                                <span className={`${styles["gradiant-color"]}`}>شهرتو</span>
                                &nbsp; بشناش!
                            </h1>
                            <p
                                className={`text-[16px] ps-6 text-write-04 max-w-[293px] lg:max-w-[593px] lg:text-[24px]`}
                            >
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
                            <SearchBox/>
                        </div>
                    </div>
                </section>

                <section
                    className={`w-full h-full flex flex-col gap-4 justify-center absolute z-[1] left-0 top-0 bottom-0 ${styles['hero-image']}`}
                >
                </section>

            </section>

            <section
                dir={'ltr'}
                ref={parentMapRef}
                className={`w-[80%] h-[300px] mx-auto overflow-hidden rounded-[16px] my-[15rem] flex items-center justify-center relative isolate`}>
                <div
                    ref={resizeElementRef}
                    onMouseDown={(e) => {
                        if (parentMapRef.current) {
                            parentMapRef.current.addEventListener('mousemove', onDrag)
                        }
                    }}
                    onClick={(e) => {
                        if (parentMapRef.current) {
                            parentMapRef.current.removeEventListener('mousemove', onDrag)
                        }
                    }}

                    style={{left: `${percentage ? percentage + .4 : 49.8}%`}}
                    className={`absolute h-full w-[5px] top-0 bottom-0 bg-yellow-main z-[2] cursor-e-resize left-[49.8%] transition`}></div>

                <div
                    style={{clipPath: `polygon(0 0, ${percentage ? percentage + .4 : 50}% 0, ${percentage ? percentage + .4 : 50}% 100%, 0% 100%)`}}
                    className={`w-[100%] h-full overflow-hidden absolute inset-0 transition z-[1]`}>
                    <MapComponent boundes={boundes} setBoundes={setBoundes} color={'blue'} labelTitle={'کسب و کار'} direction={'left'}/>
                </div>
                <div
                    style={{clipPath: `polygon(${percentage ? percentage + .4 : 50}% 0, 100% 0, 100% 100%, ${percentage ? percentage + .4 : 50}% 100%)`}}
                    className={`w-[100%] h-full overflow-hidden absolute inset-0 transition z-[1]`}>
                    <MapComponent boundes={boundes} setBoundes={setBoundes} color={'yellow'} labelTitle={'گردشگری'} direction={'right'}/>
                </div>

            </section>

        </>

    )
}
