import {Fragment} from "react";
import Image from "next/image";
import Image1 from "@/assets/images/newspage/news-image-section-two (1).png";
import Image2 from "@/assets/images/newspage/news-image-section-two (2).png";
import Image3 from "@/assets/images/newspage/news-image-section-two (3).png";
import Image4 from "@/assets/images/newspage/news-image-section-two (4).png";
import Image5 from "@/assets/images/newspage/news-image-section-two (5).png";

const slides = [
    {
        id: Math.random(),
        image: Image1,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `عضو هیات رئیسه مجلس: خودروسازان
 با چراغ سبز شورای رقابت قیمت‌ها را 
افزایش دادند`,
        desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
    },
    {
        id: Math.random(),
        image: Image2,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
        id: Math.random(),
        image: Image3,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
        id: Math.random(),
        image: Image4,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
        id: Math.random(),
        image: Image5,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
        id: Math.random(),
        image: Image2,
        publisher: "همشهری آنلاین",
        date: "1402 / 11 / 02",
        name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
];
const VerticalNewsContainer = ()=>{

    return(
        <>
            <section
                className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex flex-wrap items-center justify-between gap-4 lg:gap-6 pt-10`}>
                {slides.map((item: any, index: number) => {

                    return (
                        <Fragment key={item?.id}>
                            <div
                                className={`w-full lg:w-[49%] max-w-[812px] bg-white flex items-center rounded-[16px] h-[128px] lg:h-[229px]`}>
                                <Image
                                    style={{borderRadius: `0 16px 16px 0`}}
                                    alt=""
                                    src={item?.image}
                                    className={`w-[128px] lg:w-[255px] h-full object-cover`}
                                />
                                <div
                                    style={{borderRadius: `16px 0 0 16px`}}
                                    className={`w-[calc(100%-128px)] lg:w-[calc(100%-255px)] h-full flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-10 border-b border-t border-l border-yellow-04 overflow-hidden`}
                                >

                                    <span className={`text-[14px] lg:text-[24px] font-[600]`}>{item?.name}</span>
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
                                </div>
                            </div>
                        </Fragment>
                    );

                })}
            </section>
        </>
    )
}

export default VerticalNewsContainer;