import { Fragment } from "react";
import Image from "next/image";
import Image1 from "@/assets/images/newspage/news-image-section-two (1).png";
import Image2 from "@/assets/images/newspage/news-image-section-two (2).png";
import Image3 from "@/assets/images/newspage/news-image-section-two (3).png";
import Image4 from "@/assets/images/newspage/news-image-section-two (4).png";
import Image5 from "@/assets/images/newspage/news-image-section-two (5).png";

const slides = [
  {
    id: 1,
    image: Image1,
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
    image: Image3,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 4,
    image: Image4,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 5,
    image: Image5,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 6,
    image: Image2,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
];
const VerticalNewsContainer = () => {
  return (
    <>
      <section
        className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:w-[calc(100%-128px)] lg:gap-6`}
      >
        {slides.map((item: any, index: number) => {
          return (
            <Fragment key={item?.id}>
              <div
                className={`flex h-[128px] w-full items-center rounded-[16px] border-b border-l border-t border-yellow-04 bg-white lg:h-[229px]`}
              >
                <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[200px] xl:w-[255px]">
                  <Image alt="" src={item?.image} className={`object-cover`} fill />
                </div>
                <div
                  style={{ borderRadius: `16px 0 0 16px` }}
                  className={`flex h-full flex-1 flex-col gap-4 overflow-hidden px-4 py-6 lg:px-6 lg:py-8 xl:py-10`}
                >
                  <span className={`text-[14px] font-[600] lg:line-clamp-3 lg:text-[20px] xl:line-clamp-4`}>
                    {item?.name}
                  </span>
                  <div className={`mt-auto flex w-full items-center justify-between`}>
                    <div className={`flex items-center justify-center gap-3`}>
                      <span className={`h-1 w-1 bg-gray-04`}></span>
                      <span
                        className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                      >
                        {item?.publisher}
                      </span>
                    </div>
                    <span
                      dir="ltr"
                      className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
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
  );
};

export default VerticalNewsContainer;
