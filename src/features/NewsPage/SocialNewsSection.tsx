import BusinessSlider from "@/components/HomePage/BuisinessSlider/BusinessSlider";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// images
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import { Fragment } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: Image3,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `عضو هیات رئیسه مجلس: خودروسازان
 با چراغ سبز شورای رقابت قیمت‌ها را 
افزایش دادند`,
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 2,
    image: Image2,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 3,
    image: Image1,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 4,
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
      <section className={`mx-auto mt-[11rem] flex w-full flex-col items-center gap-8 lg:mt-12`}>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] items-center justify-between lg:w-[calc(100%-128px)]`}
        >
          <span className={`flex items-center text-[20px] font-bold text-write-main lg:text-[24px]`}>
            <HashtagIcon className="mx-2 h-6  w-6  text-write-04" />
            اخبار شبکه های اجتماعی
          </span>
        </section>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-col items-center  rounded-[32px] border border-yellow-04 bg-transparent lg:w-[calc(100%-128px)] lg:flex-row`}
        >
          <div className={`h-[249px] w-full lg:h-[429px] lg:w-1/2`}>{/* <BusinessSlider /> */}</div>
          <div
            className={`flex h-[429px] w-full flex-col justify-between rounded-b-[32px] bg-white p-4 lg:w-1/2 lg:rounded-bl-[32px] lg:rounded-tl-[32px] lg:p-[4rem]`}
          >
            <div className={`flex w-full items-center justify-between`}>
              <span className={`text-[24px] font-[600]`}>پوشاک فروردین</span>
              <div className={`flex items-center gap-2`}>
                <StarIcon className={`h-5 w-5 text-yellow-main`} />
                <span className={`flex items-center justify-center text-[20px] leading-6 text-write-main`}>1.2</span>
              </div>
            </div>
            <span className={`text-[20px] font-[400] text-write-main`}>آدرس: میدان مفتح، خیابان گلستان، پلاک 21</span>
            <p className={`text-[16px] font-[400] leading-[32px] text-write-main`}>
              پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند.
              همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.
              پوشیدنی‌ها همچنین می‌توانند نشان دهندهٔ باورهای مذهبی، فرهنگی و دیگر معانی اجتماعی باشند.
            </p>
            <Link
              href={""}
              className={`w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:px-[54px] lg:py-[14px]`}
            >
              بیشتر
            </Link>
          </div>
        </section>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-wrap items-center justify-between gap-4 lg:w-[calc(100%-128px)] lg:gap-0`}
        >
          {slides.map((item: any, index: number) => {
            if (index < 2) {
              return (
                <Fragment key={item?.id}>
                  <Link
                    className={`flex h-[128px] w-full max-w-[812px] items-center rounded-[16px] bg-white lg:h-[158px] lg:w-[48%]`}
                    href={`/news/social-media/1`}
                  >
                    <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[200px] xl:w-[255px]">
                      <Image alt="" src={item?.image} className={`object-cover`} fill />
                    </div>
                    <div
                      style={{ borderRadius: `16px 0 0 16px` }}
                      className={`flex h-full w-[calc(100%-128px)] flex-col justify-around gap-3 overflow-hidden border-b border-l border-t border-yellow-04 px-4 py-6 lg:w-[calc(100%-200px)] xl:lg:w-[calc(100%-255px)] xl:px-6 xl:py-8`}
                    >
                      <div className={`flex w-full items-center justify-between`}>
                        <div className={`flex items-center justify-center gap-2 xl:gap-3`}>
                          <span className={`h-1 w-1 bg-gray-04`}></span>
                          <span
                            className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[12px] xl:text-[16px]`}
                          >
                            {item?.publisher}
                          </span>
                        </div>
                        <span
                          dir="ltr"
                          className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[12px] xl:text-[16px]`}
                        >
                          {item?.date}
                        </span>
                      </div>
                      <span
                        className={`mb-auto text-[14px] font-[600] lg:line-clamp-3 lg:text-[16px] xl:line-clamp-2 xl:text-[20px]`}
                      >
                        {item?.name}
                      </span>
                    </div>
                  </Link>
                </Fragment>
              );
            }
          })}
        </section>
      </section>
    </>
  );
};

export default SliderSection;
