import Image1 from "@/assets/images/newspage/news-image (1).png";
import Image2 from "@/assets/images/newspage/news-image (2).png";
import Image3 from "@/assets/images/newspage/news-image (3).png";
import Image4 from "@/assets/images/newspage/news-image (4).png";
import Image5 from "@/assets/images/newspage/news-image (5).png";
import Image6 from "@/assets/images/newspage/news-image (6).png";
import {Fragment} from "react";
import Image from "next/image";

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
const HorizontalNewsContainer = () => {
    return (
        <>
            <section
                className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex-col lg:flex-row  flex items-center bg-transparent rounded-[32px] gap-4 lg:gap-6 pt-10`}
            >
                {slides.map((item: any, index: number) => {
                    if (index > 1) {
                        return (
                            <div key={item?.id}
                                 className="w-full lg:w-[25%] lg:max-w-[398px] bg-white rounded-[16px] lg:rounded-[32px] overflow-hidden h-[500px] lg:h-[755px]">
                                <div className="w-full h-[60%] rounded-t-[16px] lg:rounded-t-[32px] overflow-hidden">
                                    <Image src={item?.image} className="w-full h-full object-cover" alt=""/>
                                </div>
                                <div
                                    className="w-full h-[40%] rounded-b-[16px] lg:rounded-b-[32px] overflow-hidden flex flex-col justify-between p-4 lg:p-6 border border-yellow-04">
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
        </>
    )
}

export default HorizontalNewsContainer;