import { NewspaperIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link";
import Image1 from "@/assets/images/newspage/news-image (1).png";
import Image2 from "@/assets/images/newspage/news-image (2).png";
import Image3 from "@/assets/images/newspage/news-image (3).png";
import Image4 from "@/assets/images/newspage/news-image (4).png";
import Image5 from "@/assets/images/newspage/news-image (5).png";
import Image6 from "@/assets/images/newspage/news-image (6).png";
import { Fragment } from "react";

const slides = [
    {
        id: Math.random(),
        image: Image1,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `عضو هیات رئیسه مجلس: خودروسازان
 با چراغ سبز شورای رقابت قیمت‌ها را 
افزایش دادند`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است."
    },
    {
        id: Math.random(),
        image: Image2,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
    },
    {
        id: Math.random(),
        image: Image3,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
    },
    {
        id: Math.random(),
        image: Image4,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است."
    },
    {
        id: Math.random(),
        image: Image5,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است."
    },
    {
        id: Math.random(),
        image: Image6,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است."
    },
];

const WireServiceSection = () => {
    return (
        <>
            <section className={`flex flex-col items-center w-full mx-auto mt-[11rem] lg:mt-12 gap-8`}>
                <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex items-center justify-between`}>
                    <span
                        className={`font-bold text-[20px] lg:text-[24px] text-write-main flex items-center`}
                    >
                        <NewspaperIcon className='w-6 h-6  text-write-04  mx-2' />
                        خبر گزاری های رسمی
                    </span>
                </section>
                <section
                    className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex-col lg:flex-row  flex items-center bg-transparent rounded-[32px] gap-4 lg:gap-6`}
                >
                    {slides.map((item: any, index: number) => {
                        if (index > 1) {
                            return (
                                <div key={item?.id} className="w-full lg:w-[25%] max-w-[398px] bg-white rounded-[16px] lg:rounded-[32px] overflow-hidden h-[500px] lg:h-[755px]">
                                    <div className="w-full h-[60%] rounded-t-[16px] lg:rounded-t-[32px] overflow-hidden">
                                        <Image src={item?.image} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="w-full h-[40%] rounded-b-[16px] lg:rounded-b-[32px] overflow-hidden flex flex-col justify-between p-4 lg:p-6 border border-yellow-04">
                                        <div className={`w-full flex items-center justify-between`}>
                                            <div className={`flex items-center justify-center gap-3`}>
                                                <span className={`w-1 h-1 bg-gray-04`}></span>
                                                <span
                                                    className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                                >
                                                    {item?.publisher}
                                                </span>
                                            </div>
                                            <span
                                                dir="ltr"
                                                className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                            >
                                                {item?.date}
                                            </span>
                                        </div>
                                        <span className={`text-[14px] lg:text-[24px] font-[600]`}>{item?.name}</span>
                                        <span
                                            className={`text-[10px] lg:text-[16px] font-[400] text-write-main text-justify`}
                                        >
                                            {item?.desc}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>
                <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex flex-wrap items-center justify-between gap-4 lg:gap-6`}>
                    {slides.map((item: any, index: number) => {
                        if (index < 2) {
                            return (
                                <Fragment key={item?.id}>
                                    <div className={`w-full lg:w-[49%] max-w-[812px] bg-white flex items-center rounded-[16px] h-[128px] lg:h-[229px]`}>
                                        <Image
                                            style={{ borderRadius: `0 16px 16px 0` }}
                                            alt=""
                                            src={item?.image}
                                            className={`w-[128px] lg:w-[255px] h-full object-cover`}
                                        />
                                        <div
                                            style={{ borderRadius: `16px 0 0 16px` }}
                                            className={`w-[calc(100%-128px)] lg:w-[calc(100%-255px)] h-full flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-10 border-b border-t border-l border-yellow-04 overflow-hidden`}
                                        >
                                            <div className={`w-full flex items-center justify-between`}>
                                                <div className={`flex items-center justify-center gap-3`}>
                                                    <span className={`w-1 h-1 bg-gray-04`}></span>
                                                    <span
                                                        className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                                    >
                                                        {item?.publisher}
                                                    </span>
                                                </div>
                                                <span
                                                    dir="ltr"
                                                    className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                                >
                                                    {item?.date}
                                                </span>
                                            </div>
                                            <span className={`text-[14px] lg:text-[24px] font-[600]`}>{item?.name}</span>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        }
                    })}
                </section>
            </section>
        </>
    )
}

export default WireServiceSection