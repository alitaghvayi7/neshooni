import { Fragment } from "react";
import Image from "next/image";
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

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
const SingleHeroNews = () => {
  return (
    <>
      <section
        className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-col flex-wrap gap-4 lg:w-[calc(100%-128px)] lg:gap-6`}
      >
        <Breadcrumbs
          breadcumbs={[
            { href: "/", label: "خانه" },
            { href: "/news", label: "اخبار" },
            { href: "/news/wire-service", label: "خبرگزاری های رسمی" },
          ]}
        />
        <h1 className={`text-[40px] font-[700] text-write-main`}>اخبار شبکه های اجتماعی</h1>
        <Fragment key={slides[0]?.id}>
          <div
            className={`flex h-[440px] w-full flex-col items-center overflow-hidden rounded-t-[16px] lg:flex-row lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
          >
            <div className="relative h-1/2 w-full lg:h-full lg:w-[50%]">
              <Image
                // style={{ borderRadius: `0 16px 16px 0` }}
                alt=""
                src={slides[0]?.image}
                className={`object-cover`}
                fill
              />
            </div>
            <div
              // style={{ borderRadius: `16px 0 0 16px` }}
              className={`flex h-1/2 w-full flex-col justify-around overflow-hidden rounded-b-[16px] border-b border-l border-r border-t border-yellow-04 bg-white px-4 py-6 lg:h-full lg:w-[50%] lg:rounded-b-none lg:rounded-bl-[16px] lg:rounded-tl-[16px] lg:border-r-0 lg:px-6 lg:py-10`}
            >
              <span className={`line-clamp-2 text-[14px] font-[600] lg:text-[24px]`}>{slides[0]?.name}</span>

              <p className={`line-clamp-3 text-[16px] font-[400] leading-[26px] text-write-main xl:line-clamp-4`}>
                {slides[0]?.desc}
              </p>
              <div className={`flex w-full items-center justify-between`}>
                <div className={`flex items-center justify-center gap-3`}>
                  <span className={`h-1 w-1 bg-gray-04`}></span>
                  <span
                    className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                  >
                    {slides[0]?.publisher}
                  </span>
                </div>
                <span
                  dir="ltr"
                  className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                >
                  {slides[0]?.date}
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      </section>
    </>
  );
};

export default SingleHeroNews;
