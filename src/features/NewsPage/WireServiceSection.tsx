import { NewspaperIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Image1 from "@/assets/images/newspage/news-image (1).png";
import Image2 from "@/assets/images/newspage/news-image (2).png";
import Image3 from "@/assets/images/newspage/news-image (3).png";
import Image4 from "@/assets/images/newspage/news-image (4).png";
import Image5 from "@/assets/images/newspage/news-image (5).png";
import Image6 from "@/assets/images/newspage/news-image (6).png";
import { Fragment } from "react";

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

const WireServiceSection = () => {
  return (
    <>
      <section className={`mx-auto mt-[11rem] flex w-full flex-col items-center gap-8 lg:mt-12`}>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] items-center justify-between lg:w-[calc(100%-128px)]`}
        >
          <span className={`flex items-center text-[20px] font-bold text-write-main lg:text-[24px]`}>
            <NewspaperIcon className="mx-2 h-6  w-6  text-write-04" />
            خبر گزاری های رسمی
          </span>
        </section>
        <section
          className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 flex-col items-center gap-4 rounded-[32px] bg-transparent lg:w-[calc(100%-128px)] lg:grid-cols-2 lg:flex-row lg:gap-6 xl:grid-cols-4`}
        >
          {slides.map((item: any, index: number) => {
            if (index > 1) {
              return (
                <Link
                  href={`/news/wire-service/1`}
                  key={item?.id}
                  className="w-full overflow-hidden rounded-[16px] rounded-b-[16px] border border-yellow-04 bg-white lg:h-[400px] lg:rounded-[32px] xl:h-[400px]"
                >
                  <div className="relative h-[50%] w-full overflow-hidden rounded-t-[16px] lg:rounded-t-[32px] xl:h-[50%]">
                    <Image src={item?.image} className="object-cover" alt="" fill />
                  </div>
                  <div className="flex w-full flex-col justify-between gap-2 overflow-hidden p-4 lg:rounded-b-[32px] lg:p-6">
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
                    <span className={`line-clamp-2 text-[14px] font-[600] leading-6 lg:text-[20px]`}>{item?.name}</span>
                    <span
                      className={`mb-auto line-clamp-3 text-justify text-[10px] font-[400] text-write-main lg:text-[14px]`}
                    >
                      {item?.desc}
                    </span>
                  </div>
                </Link>
              );
            }
          })}
        </section>
        <section
          className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 flex-wrap items-center justify-between gap-4 lg:w-[calc(100%-128px)] lg:grid-cols-2 lg:gap-6`}
        >
          {slides.map((item: any, index: number) => {
            if (index < 2) {
              return (
                <Fragment key={item?.id}>
                  <Link
                    href={`/news/wire-service/1`}
                    className={`flex h-[128px] w-full items-center rounded-[16px] bg-white lg:h-[170px] xl:h-[229px]`}
                  >
                    <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[200px] xl:w-[255px]">
                      <Image alt="" src={item?.image} className={`object-cover`} fill />
                    </div>
                    <div
                      style={{ borderRadius: `16px 0 0 16px` }}
                      className={`flex h-full w-[calc(100%-128px)] flex-col justify-around gap-3 overflow-hidden border-b border-l border-t border-yellow-04 px-4 py-6 lg:w-[calc(100%-200px)] xl:w-[calc(100%-255px)] xl:px-6 xl:py-8`}
                    >
                      <div className={`flex w-full items-center justify-between`}>
                        <div className={`flex items-center justify-center gap-3`}>
                          <span className={`h-1 w-1 bg-gray-04`}></span>
                          <span
                            className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[14px]`}
                          >
                            {item?.publisher}
                          </span>
                        </div>
                        <span
                          dir="ltr"
                          className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[14px]`}
                        >
                          {item?.date}
                        </span>
                      </div>
                      <span
                        className={`mb-auto line-clamp-2 text-[14px] font-[600] lg:line-clamp-3 lg:text-[20px] xl:line-clamp-4`}
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

export default WireServiceSection;
