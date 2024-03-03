import Menu from "@/components/shared/Menu";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {BookmarkIcon as BookmarkIconOutline, CalendarDaysIcon, ShareIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Footer from "@/components/shared/Footer";
import {BookmarkIcon as BookmarkIconSolid} from "@heroicons/react/24/solid";
import {useState} from "react";


export default function SingleNewsPage() {
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <>
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
                <section className={`w-full bg-blue-04 bg-opacity-10 pt-[3rem] pb-14`}>
                    <section
                        className={`w-[calc(100%-56px)] lg:w-[calc(100%-245px)] max-w-[1430px] mx-auto pb-[64px] flex flex-col gap-8 relative z-[1] isolate pt-2 lg:pt-0 `}
                    >
                        <Breadcrumbs
                            breadcumbs={[
                                {href: "/", label: "خانه"},
                                {href: "/news", label: "اخبار"},
                                {href: "/news/wire-service", label: "خبرگزاری های رسمی"},
                                {
                                    href: "/news/wire-service/1",
                                    label: "شگفتانه حزب‌الله لبنان برای ناوهای آمریکایی"
                                },
                            ]}
                        />
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-[20px] lg:text-[32px] font-[700] text-write-main">شگفتانه حزب‌الله
                                لبنان برای ناوهای آمریکایی</h1>
                            <div className="flex items-center gap-4">
                                <div className={`flex items-center gap-2`}>
                                          <span
                                              className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                                            منبع :
                                          </span>
                                    <span
                                        className={`text-[12px] lg:text-[20px] leading-6 text-blue-main flex items-center justify-center`}>
                                                Telegraph
                                        </span>
                                </div>
                                <span className="w-[1px] h-8 lg:h-[50px] bg-gray-03 lg:flex"></span>
                                <div className={`items-center gap-2 hidden lg:flex`}>
                                    <CalendarDaysIcon className={`w-6 h-6 text-gray-04`}/>
                                    <span
                                        className={`text-[12px] lg:text-[20px] leading-6 text-gray-04 flex items-center justify-center`}>
                                        پنج شنبه
                                      </span>
                                    <span
                                        dir={'ltr'}
                                        className={`text-[12px] lg:text-[20px] leading-6 text-gray-04 flex items-center justify-center`}>
                                      1402 / 11 / 02
                                      </span>
                                    <span
                                        dir={'ltr'}
                                        className={`text-[12px] lg:text-[20px] leading-6 text-gray-04 flex items-center justify-center`}>
                                     12:55
                                      </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`w-full h-[342px] lg:h-[700px] rounded-[16px] overflow-hidden flex items-center justify-center`}>
                            <Image alt="" src={Image1} className={`w-full h-full object-cover`}/>
                        </div>

                        <p className={`text-[20px] leading-9 text-write-main font-[400] text-justify`}>
                            جزایر هاوایی آخرین ایالت ثبت‌شده مابین آمریکا هستند. مناطقی که در قسمت مرکزی اقیانوس آرام
                            واقع شده‌اند و از پرطرفدارترین مقصدهای تفریحی مردم دنیا به‌حساب می‌آیند. مهم‌ترین شهر و
                            پایتخت مجمع‌الجزایز هاوایی «هونولولو» نام دارد. هشت جزیره اصلی هاوائی اوآهو، مائوئی،
                            کائوآئی، لانائی، مولوکای، نیهاو و کاهولاوی نامیده می‌شوند. جزایر هاوائی با میزبانی از
                            کوه‌های آتشفشانی، آبشارهای زیبا و پارک‌های ملی در کنار ارائه منظرهای آبی تماشایی (چه خارج و
                            چه داخل آب) به «بهشتِ جزیره‌ها» معروف شده است. همراه کجارو باشید که در تازه‌ترین قسمت از
                            تورهای مجازی قرار است به‌جزایر هاوائی سفر کنیم.
                            به گزارش خبرنگار سیاسی خبرگزاری فارس، جمعه گذشته (۱۲ آبان‌ماه) بود که سید حسن نصرالله،
                            دبیرکل حزب‌الله لبنان پس از گذشت ۲۸ روز از آغاز نبرد حماس علیه رژیم صهیونیستی، در بیروت
                            سخنرانی کرد.
                            دبیرکل حزب‌الله لبنان در بخشی از این سخنرانی خطاب به آمریکا هشدار داد؛ «ناوهای شما در دریای
                            مدیترانه ما را نمی‌ترساند و هیچگاه ما را نخواهد ترساند. من به شما می‌گویم برای ناوهایتان که
                            با آن‌ها ما را تهدید می‌کنید
                        </p>
                        <div
                            className={`w-full h-[700px] lg:h-[432px] rounded-[16px] overflow-hidden flex items-center justify-center`}>
                            <Image alt="" src={Image1} className={`w-full h-full object-cover`}/>
                        </div>
                        <p className={`text-[20px] leading-9 text-write-main font-[400] text-justify`}>
                            هم تجهیزات آماده کرده‌ایم.کسانی که شما را در ابتدای دهه هشتاد شکست دادند، هنوز زنده هستند و
                            البته فرزندان و نوادگانشان نیز با آن‌ها هستند. کسانی که خواهان جلوگیری از جنگ آمریکا هستند،
                            باید تجاوزات به غزه را متوقف کنند.»
                            به گفته سید حسن نصرالله، «اگر جنگی در منطقه آغاز شود، نه ناوهایتان و نه جنگ هوایی به کارتان
                            نخواهد آمد. در صورت وقوع جنگ منطقه‌ای منافع و نظامیان شما قربانی خواهند بود و شما بازنده
                            بزرگ این جنگ خواهید بود.»
                            اشاره وی به استقرار دو ناو هواپیمابر آمریکایی در نزدیکی نوار غزه و فلسطین اشغالی در نوار غزه
                            است. جایی که دو ناو هواپیمابر USS Gerald Ford (CVN-78) و USS Eisenhower (CVN-69) در حمایت از
                            رژیم صهیونیستی خود را به دریای مدیترانه رسانده‌اند و تا حمایت کامل خود را از صهیونیست‌ها
                            اعلام کنند.
                            هم تجهیزات آماده کرده‌ایم.کسانی که شما را در ابتدای دهه هشتاد شکست دادند، هنوز زنده هستند و
                            البته فرزندان و نوادگانشان نیز با آن‌ها هستند. کسانی که خواهان جلوگیری از جنگ آمریکا هستند،
                            باید تجاوزات به غزه را متوقف کنند.»
                            به گفته سید حسن نصرالله، «اگر جنگی در منطقه آغاز شود، نه ناوهایتان و نه جنگ هوایی به کارتان
                            نخواهد آمد. در صورت وقوع جنگ منطقه‌ای منافع و نظامیان شما قربانی خواهند بود و شما بازنده
                            بزرگ این جنگ خواهید بود.»
                            اشاره وی به استقرار دو ناو هواپیمابر آمریکایی در نزدیکی نوار غزه و فلسطین اشغالی در نوار غزه
                            است. جایی که دو ناو هواپیمابر USS Gerald Ford (CVN-78) و USS Eisenhower (CVN-69) در حمایت از
                            رژیم صهیونیستی خود را به دریای مدیترانه رسانده‌اند و تا حمایت کامل خود را از صهیونیست‌ها
                            اعلام کنند.
                        </p>
                        <div className="w-full flex items-center justify-between">

                            <div className={`flex items-center gap-3`}>
                                <span className={`text-[20px] font-[600] text-write-main `}>
                                   برچسب ها:
                                </span>
                                <div className={`flex items-center gap-2`}>
                                    <span
                                        className={`flex items-center justify-center rounded-[8px] bg-gray-02 text-gray-04 text-[16px] font-[600] px-2 py-1`}>
                                        فلسطینَ
                                    </span>
                                    <span
                                        className={`flex items-center justify-center rounded-[8px] bg-gray-02 text-gray-04 text-[16px] font-[600] px-2 py-1`}>
                                   جنگ
                                    </span>
                                    <span
                                        className={`flex items-center justify-center rounded-[8px] bg-gray-02 text-gray-04 text-[16px] font-[600] px-2 py-1`}>
                              وزیر امور خارجه
                                    </span>
                                </div>
                            </div>

                            <div className={`flex items-center gap-3`}>
                                {!bookmarked && (
                                    <BookmarkIconOutline
                                        onClick={() => setBookmarked(!bookmarked)}
                                        className={`w-6 h-6 text-gray-04 cursor-pointer`}
                                    />
                                )}
                                {bookmarked && (
                                    <BookmarkIconSolid
                                        onClick={() => setBookmarked(!bookmarked)}
                                        className={`w-6 h-6 text-write-04 cursor-pointer`}
                                    />
                                )}
                                <span className="w-[1px] h-8 lg:h-[50px] bg-gray-03 lg:flex"></span>
                                <ShareIcon className={`w-6 h-6 text-gray-04 cursor-pointer`} />
                            </div>
                        </div>
                    </section>

                </section>
                <Footer/>
            </main>
        </>
)
}