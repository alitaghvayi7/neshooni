import Menu from "@/components/shared/Menu";
import {useEffect, useState} from "react";
import {ChevronDownIcon, PhotoIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Footer from "@/components/shared/Footer";
// import GoogleMapNoControll from "@/components/shared/GoogleMapNoControll";
import dynamic from "next/dynamic";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
// import GoogleMapWithControll from "@/components/shared/GoogleMapWithControll";
const GoogleMapNoControll = dynamic(import("@/components/shared/GoogleMapNoControll"), {ssr: false})
const GoogleMapWithControll = dynamic(import("@/components/shared/GoogleMapWithControll"), {ssr: false})

export default function IntroductionPage() {
    const [selected, setSelected] = useState<null | string>(null);
    const [open, setOpen] = useState(false);
    const [showFirstMap, setShowFirstMap] = useState(false);
    const [showSecondMap, setShowSecondMap] = useState(false);
    const [userLocation, setUserLocation] = useState({lng: 0, lat: 0});
    const [finalLocation, setFinalLocation] = useState({lng: 0, lat: 0});
    const [address, setAddress] = useState<{address_line2:''} | null>(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
        }

        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${finalLocation?.lat}&lon=${finalLocation?.lng}&apiKey=${process.env.GEOAPIFY_API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => setAddress(result.features[0].properties))
            .catch(error => console.log('error', error));
    }, [finalLocation]);

    return (
        <>
            {showFirstMap && <div
                className={`w-screen h-screen bg-[rgba(255,255,255,.1)] backdrop-blur-[4px] fixed inset-0 z-[100] flex items-center justify-center`}>
                <XMarkIcon onClick={()=>setShowFirstMap(false)} className={`w-8 h-8 text-gray-04 absolute top-10 left-10 cursor-pointer`}/>
                <div
                    className={`w-[90%] lg:w-[40%] h-[50%] bg-white rounded-[32px] shadow-2xl flex flex-col justify-between px-6 py-4`}>
                    <div className={`w-full h-[80%] rounded-[16px] overflow-hidden`}>
                        <GoogleMapNoControll boundes={userLocation} setBoundes={setUserLocation}/>
                    </div>
                    <button
                        onClick={() => {setFinalLocation(userLocation);setShowFirstMap(false)}}
                        className={`w-full lg:w-[346px] mx-auto h-[40px] rounded-[8px] bg-yellow-main text-write-main font-[400] text-[16px] flex items-center justify-center`}>
                        ثبت
                    </button>
                </div>
            </div>}
            {showSecondMap && <div
                className={`w-screen h-screen bg-[rgba(255,255,255,.1)] backdrop-blur-[4px] fixed inset-0 z-[100] flex items-center justify-center`}>
                <XMarkIcon onClick={()=>setShowSecondMap(false)} className={`w-8 h-8 text-gray-04 absolute top-10 left-10 cursor-pointer`}/>
                <div
                    className={`w-[90%] lg:w-[40%]  h-[60%] bg-white rounded-[32px] shadow-2xl flex flex-col justify-between px-6 py-4`}>
                    <div className={`w-full h-[80%] rounded-[16px] overflow-hidden`}>
                        <GoogleMapWithControll boundes={userLocation} setBoundes={setUserLocation}/>
                    </div>
                    <button
                        onClick={() => {setFinalLocation(userLocation);setShowSecondMap(false)}}
                        className={`w-full lg:w-[346px] mx-auto h-[40px] rounded-[8px] bg-yellow-main text-write-main font-[400] text-[16px] flex items-center justify-center`}>
                        ثبت
                    </button>
                </div>
            </div>}
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
                <section className={`w-full bg-blue-04 bg-opacity-10 pt-[5rem] lg:pt-[8rem] pb-14`}>
                    <section
                        className={`w-[calc(100%-56px)] lg:w-[calc(100%-300px)] mx-auto max-w-[1254px] flex flex-col flex-wrap gap-4 lg:gap-0`}>
                        <p className={`text-[20px] font-[400] text-write-04 w-full max-w-[1124px] leading-8`}>شما می
                            توانید جاهای دیدنی ، کسب و کارهای مختلف و... در این بخش به ما معرفی کنید. بعد از ارسال و
                            معرفی خود، مطالب توسط ادمین بررسی میشود
                            و در سایت منتشر می‌شود.
                        </p>
                        <details className={`relative isolate group mt-[72px]`} open={open}>
                            <summary onClick={() => setOpen(true)}
                                     className={`flex items-center justify-between cursor-pointer w-full max-w-[539px] h-[48px] bg-white rounded-[16px] border border-gray-02 px-6 py-3 group-open:rounded-b-none group-open:rounded-t-[16px]`}>
                                <span
                                    className={`text-[16px] font-[500] text-write-04`}>{selected ? selected : 'سوژه مورد نظر شما جزو کدوم بخشه؟'}</span>
                                <ChevronDownIcon
                                    className={`w-6 h-6 text-[#5B5B5B] group-open:rotate-[180deg] transition`}/>
                            </summary>
                            <ul className={`w-full max-w-[538px] absolute left-0 right-0 top-[46px] group/dropdown`}>
                                <li
                                    onClick={() => {
                                        setSelected('گردشگری');
                                        setOpen(false);
                                    }}
                                    className={`flex items-center justify-between cursor-pointer w-full max-w-[539px] bg-white px-6 py-3 `}>گردشگری
                                </li>
                                <li
                                    onClick={() => {
                                        setSelected('کسب و کار');
                                        setOpen(false);
                                    }}
                                    className={`flex items-center justify-between cursor-pointer w-full max-w-[539px] bg-white px-6 py-3 group-open:rounded-b-[16px]`}>کسب
                                    و کار
                                </li>
                            </ul>
                        </details>
                        <form className={`w-full mt-6 flex flex-col items-center gap-6`}>
                            <div
                                className={`w-full h-max lg:h-[470px] lg:py-10 lg:px-[64px] rounded-[32px] bg-transparent lg:bg-white lg:border lg:border-yellow-04 flex flex-wrap gap-4 lg:gap-0 items-center justify-between`}>
                                <div
                                    className={`h-full w-full max-w-[539px] flex flex-col justify-between gap-4 lg:gap-0`}>
                                    <input
                                        type={'text'}
                                        placeholder={`نوع کسب و کار`}
                                        className={`w-full h-[56px] border border-gray-02 rounded-[16px] bg-white text-write-main placeholder:text-gray-03 py-4 px-6 text-[16px] font-[400]`}
                                    />
                                    <input
                                        type={'text'}
                                        placeholder={`عنوان کسب و کار  را وارد کنید`}
                                        className={`w-full h-[56px] border border-gray-02 rounded-[16px] bg-white text-write-main placeholder:text-gray-03 py-4 px-6 text-[16px] font-[400]`}
                                    />
                                    <input
                                        type={'text'}
                                        placeholder={`شماره تماس`}
                                        className={`w-full h-[56px] border border-gray-02 rounded-[16px] bg-white text-write-main placeholder:text-gray-03 py-4 px-6 text-[16px] font-[400]`}
                                    />
                                    <input id={`file`} className={`hidden`} type={'file'} multiple={false}/>
                                    <label htmlFor={`file`}
                                           className={`w-full h-[136px] cursor-pointer flex justify-between lg:justify-around p-6 border-[3px] border-dashed border-gray-02 rounded-[16px] bg-white`}>
                                        <div className={`flex flex-col `}>
                                            <span className={`text-[16px] font-[500] text-gray-03`}>افزودن عکس</span>
                                            <div className={`flex items-center gap-3`}>
                                                <span className={`text-[12px] font-[400] text-gray-01`}>اندازه عکسpx 500*500px  </span>
                                                <span
                                                    className={`text-[12px] font-[400] text-gray-01`}>حجم عکس10 MB </span>
                                            </div>
                                        </div>
                                        <PhotoIcon className={`w-[56px] h-[56px] text-blue-06 self-center`}/>
                                    </label>
                                </div>
                                <div className={`h-full w-full max-w-[539px] flex flex-col gap-4 lg:gap-6`}>
                                   <textarea
                                       placeholder={'توضیحات'}
                                       className={`w-full h-[136px] border border-gray-02 rounded-[16px] bg-white text-write-main placeholder:text-gray-03 p-6 text-[16px] font-[400] resize-none`}
                                   ></textarea>
                                    <label
                                        className={`w-full h-[216px] block relative isolate border border-gray-02 rounded-[16px] overflow-hidden`}>
                                        <textarea
                                            value={address?.address_line2 ?? ""}
                                            placeholder={'آدرس را وارد کنید'}
                                            className={`w-full h-full absolute inset-0 z-[1] bg-white text-write-main placeholder:text-gray-03 p-6 text-[16px] font-[400] resize-none`}
                                        ></textarea>
                                        <div
                                            className={`w-full h-[56px] flex items-center justify-between absolute z-[2] px-6 left-0 right-0 bottom-4`}>
                                            <button type={'button'}
                                                    onClick={() => setShowFirstMap(true)}
                                                    className={`w-full max-w-[225px] border border-yellow-04 text-[14px] text-gray-03 rounded-[8px] py-[10px] flex items-center justify-center cursor-pointer`}>من
                                                اینجام
                                            </button>
                                            <button type={'button'}
                                                    onClick={() => setShowSecondMap(true)}
                                                    className={`w-full max-w-[225px] border border-yellow-04 text-[14px] text-gray-03 rounded-[8px] py-[10px] flex items-center justify-center cursor-pointer`}>انتخاب
                                                از روی نقشه
                                            </button>
                                        </div>
                                    </label>

                                </div>
                            </div>
                            <button
                                type={'submit'}
                                className={`w-full max-w-[444px] bg-yellow-main text-[16px] text-write-04 rounded-[16px] py-3 flex items-center justify-center cursor-pointer`}
                            >
                                ارسال
                            </button>
                        </form>
                    </section>
                </section>
                <Footer/>
                {/* <MapComponent /> */}
            </main>
        </>
    )
}


