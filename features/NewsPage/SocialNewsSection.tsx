import BusinessSlider from '@/components/HomePage/BuisinessSlider/BusinessSlider'
import { HashtagIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
// images
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import { Fragment } from 'react';
import Image from 'next/image';

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

const SliderSection = () => {
    return (
        <>
            <section className={`flex flex-col items-center w-full mx-auto mt-[11rem] lg:mt-12 gap-8`}>
                <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex items-center justify-between`}>
                    <span
                        className={`font-bold text-[20px] lg:text-[24px] text-write-main flex items-center`}
                    >
                        <HashtagIcon className='w-6 h-6  text-write-04  mx-2' />
                        اخبار شبکه های اجتماعی
                    </span>
                </section>
                <section
                    className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex-col lg:flex-row  flex items-center bg-transparent rounded-[32px] border border-yellow-04`}
                >
                    <div className={`w-full lg:w-1/2 h-[249px] lg:h-[429px]`}>
                        <BusinessSlider />
                    </div>
                    <div className={`w-full lg:w-1/2 h-[429px] p-4 lg:p-[4rem] flex flex-col justify-between bg-white rounded-b-[32px] lg:rounded-tl-[32px] lg:rounded-bl-[32px]`}>
                        <div className={`w-full flex items-center justify-between`}>
                            <span className={`text-[24px] font-[600]`}>پوشاک فروردین</span>
                            <div className={`flex items-center gap-2`}>
                                <StarIcon className={`w-5 h-5 text-yellow-main`} />
                                <span className={`text-[20px] leading-6 text-write-main flex items-center justify-center`}>1.2</span>
                            </div>
                        </div>
                        <span className={`text-[20px] text-write-main font-[400]`}>آدرس: میدان مفتح، خیابان گلستان، پلاک 21</span>
                        <p className={`text-[16px] leading-[32px] text-write-main font-[400]`}>
                            پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند.
                            همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده
                            شود. پوشیدنی‌ها همچنین می‌توانند نشان دهندهٔ باورهای مذهبی، فرهنگی و دیگر معانی اجتماعی باشند.
                        </p>
                        <Link
                            href={""}
                            className={`py-[6px] px-[38px] lg:py-[14px] lg:px-[54px] border border-yellow-main rounded-[16px] w-fit text-[16px] self-end`}
                        >
                            بیشتر
                        </Link>
                    </div>
                </section>
                <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex flex-wrap gap-4 lg:gap-0 items-center justify-between`}>
                    {slides.map((item: any, index: number) => {
                        if (index < 2) {
                            return (
                                <Fragment key={item?.id}>
                                    <div className={`w-full lg:w-[48%] max-w-[812px] bg-white flex items-center rounded-[16px] h-[128px] lg:h-[158px]`}>
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

export default SliderSection