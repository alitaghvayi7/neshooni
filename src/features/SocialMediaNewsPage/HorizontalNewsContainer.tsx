import Image1 from "@/assets/images/newspage/news-image (1).png";
import Image2 from "@/assets/images/newspage/news-image (2).png";
import Image3 from "@/assets/images/newspage/news-image (3).png";
import Image4 from "@/assets/images/newspage/news-image (4).png";
import Image5 from "@/assets/images/newspage/news-image (5).png";
import Image6 from "@/assets/images/newspage/news-image (6).png";
import { Fragment } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: Image1,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `عضو هیات رئیسه مجلس: خودروسازان
 با چراغ سبز شورای رقابت قیمت‌ها را 
افزایش دادند`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
  {
    id: 2,
    image: Image2,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
  {
    id: 3,
    image: Image3,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
  {
    id: 4,
    image: Image4,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
  {
    id: 5,
    image: Image5,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
  {
    id: 6,
    image: Image6,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: `سرلشکر موسوی: اقدامات وحشیانه‌ رژیم صهیونیستی در نوار
 غزه کوچک‍ترین ارزش نظامی ندارد`,
    desc: "شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه رویکردهای مشترک برای پرداختن به مسائل منطقه‌ای است. شانزدهمین اجلاس سران اکو در تاشکند، مبنایی جدید برای توسعه مشترک برای پرداختن به مسائل منطقه‌ای است.",
  },
];
const HorizontalNewsContainer = () => {
  return (
    <>
      <section
        className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 gap-4 rounded-[32px] bg-transparent pt-10 md:grid-cols-2 lg:w-[calc(100%-128px)] lg:flex-row lg:gap-6 xl:grid-cols-4`}
      >
        {slides.map((item: any, index: number) => {
          if (index > 1) {
            return (
              <div
                key={item?.id}
                className="h-[500px] w-full overflow-hidden rounded-[16px] rounded-b-[16px] border border-yellow-04 bg-white lg:h-[650px] lg:rounded-[32px] xl:h-[550px]"
              >
                <div className="h-[60%] w-full overflow-hidden rounded-t-[16px] lg:rounded-t-[32px] xl:h-[50%]">
                  <Image src={item?.image} className="h-full w-full object-cover" alt="" />
                </div>
                <div className="flex w-full flex-col gap-4 overflow-hidden p-4 lg:rounded-b-[32px] lg:p-6">
                  <div className={`flex w-full items-center justify-between`}>
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
                  <span className={`line-clamp-2 text-[14px] font-[600] lg:text-[24px]`}>{item?.name}</span>
                  <span
                    className={`line-clamp-4 text-justify text-[10px] font-[400] text-write-main lg:line-clamp-3 lg:text-[16px] xl:line-clamp-4`}
                  >
                    {item?.desc}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default HorizontalNewsContainer;
