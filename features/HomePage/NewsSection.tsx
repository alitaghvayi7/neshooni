import Image from "next/image";
import Link from "next/link";

// images
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import { Fragment } from "react";

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

const NewsSection = () => {
  return (
    <>
      <section
        className={`flex flex-col w-[calc(100%-56px)] lg:w-[calc(100%-128px)] max-w-[1689px] mx-auto mt-[5rem] lg:mt-[8rem] gap-8`}
      >
        <span
          style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
          className={`w-fit pl-6 border-b border-r border-yellow-04 bg-yellow-06 indent-5 font-bold text-[20px] lg:text-[40px] text-write-main`}
        >
          اخبار
        </span>
        <div className={`flex flex-wrap justify-around content-around w-full mx-auto gap-6 lg:gap-4`}>
          <div
            className={`w-full lg:w-[49%] max-w-[829px] flex items-center rounded-[16px] overflow-hidden h-[642px] lg:h-[515px]`}
          >
            <Fragment key={slides[0]?.id}>
              <div
                className={`w-full flex flex-col lg:flex-row items-center rounded-t-[16px] lg:rounded-t-none lg:rounded-tr-[16px] lg:rounded-br-[16px] h-full overflow-hidden`}
              >
                <Image
                  // style={{ borderRadius: `0 16px 16px 0` }}
                  alt=""
                  src={slides[0]?.image}
                  className={`w-full lg:w-[255px] h-1/2 lg:h-full object-cover`}
                />
                <div
                  // style={{ borderRadius: `16px 0 0 16px` }}
                  className={`w-full lg:w-[calc(100%-255px)] h-1/2 lg:h-full flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-10 border-r border-b border-t border-l lg:border-r-0 border-yellow-04 overflow-hidden rounded-b-[16px] lg:rounded-b-none lg:rounded-tl-[16px] lg:rounded-bl-[16px]`}
                >
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
                  <span className={`text-[14px] lg:text-[24px] font-[600]`}>{slides[0]?.name}</span>

                  <p className={`text-[16px] leading-[32px] text-write-main font-[400]`}>{slides[0]?.desc}</p>
                </div>
              </div>
            </Fragment>
          </div>
          <div
            className={`w-full flex flex-col justify-center gap-3 lg:gap-0 lg:justify-between lg:w-[49%] max-w-[829px] rounded-[16px] overflow-hidden h-[515px]`}
          >
            {/* single Crat */}
            {slides.map((item: any, index: number) => {
              if (index !== 0) {
                return (
                  <Fragment key={item?.id}>
                    <div className={`w-full flex items-center rounded-[16px] h-[128px] lg:h-[151px]`}>
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
            {/* single Crat */}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
