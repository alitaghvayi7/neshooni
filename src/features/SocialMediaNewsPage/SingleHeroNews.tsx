import {Fragment} from "react";
import Image from "next/image";
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const slides = [
    {
        id: Math.random(),
        image: Image3,
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
        image: Image1,
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
const SingleHeroNews = () => {
    return (
        <>
            <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex flex-col flex-wrap gap-4 lg:gap-6`}>
                <Breadcrumbs
                    breadcumbs={[
                        {href: "/", label: "خانه"},
                        {href: "/news", label: "اخبار"},
                        {href: "/news/wire-service", label: "خبرگزاری های رسمی"},
                    ]}
                />
                <h1 className={`font-[700] text-[40px] text-write-main`}>اخبار شبکه های اجتماعی</h1>
                <Fragment key={slides[0]?.id}>
                    <div
                        className={`w-full h-[400px] flex flex-col lg:flex-row items-center rounded-t-[16px] lg:rounded-t-none lg:rounded-tr-[16px] lg:rounded-br-[16px] overflow-hidden`}
                    >
                        <Image
                            // style={{ borderRadius: `0 16px 16px 0` }}
                            alt=""
                            src={slides[0]?.image}
                            className={`w-full lg:w-[50%] h-1/2 lg:h-full object-cover`}
                        />
                        <div
                            // style={{ borderRadius: `16px 0 0 16px` }}
                            className={`w-full lg:w-[50%] h-1/2 lg:h-full bg-white flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-10 border-r border-b border-t border-l lg:border-r-0 border-yellow-04 overflow-hidden rounded-b-[16px] lg:rounded-b-none lg:rounded-tl-[16px] lg:rounded-bl-[16px]`}
                        >

                            <span className={`text-[14px] lg:text-[24px] font-[600]`}>{slides[0]?.name}</span>

                            <p className={`text-[16px] leading-[32px] text-write-main font-[400]`}>{slides[0]?.desc}</p>
                            <div className={`w-full flex items-center justify-between`}>
                                <div className={`flex items-center justify-center gap-3`}>
                                    <span className={`w-1 h-1 bg-gray-04`}></span>
                                    <span
                                        className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                    >
                                        {slides[0]?.publisher}
                                      </span>
                                </div>
                                <span
                                    dir="ltr"
                                    className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                                >
                                  {slides[0]?.date}
                                </span>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </section>
        </>
    )
}

export default SingleHeroNews;