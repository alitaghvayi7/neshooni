import Image from "next/image";
import Link from "next/link";

// images
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle66.png";
import Image3 from "@/assets/images/mainpage/Rectangle67.png";
import { Fragment } from "react";

const slides = [
  {
    id: crypto.randomUUID(),
    image: Image3,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: "وزیر اقتصاد: امضای صورت‌جلسه ابطال ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: crypto.randomUUID(),
    image: Image2,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: "وزیر اقتصاد: امضای صورت‌جلسه ابطال ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: crypto.randomUUID(),
    image: Image1,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: "وزیر آموزش و پرورش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: crypto.randomUUID(),
    image: Image2,
    publisher: "همشهری آنلاین",
    date: "1402 / 11 / 02",
    name: "وزیر اقتصاد",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
];

const LastNewsSection = () => {
  return (
    <>
      <section className={`flex flex-col items-center w-full max-w-[1689px] mx-auto gap-8 my-[5rem]`}>
        <div className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] flex items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit pl-6 border-b border-r border-yellow-04 bg-yellow-06 indent-5 font-bold text-[20px] lg:text-[40px] text-write-main`}
          >
            {" "}
            اخرین اخبار
          </span>
          <Link
            href={""}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`w-fit hidden lg:flex px-6 pb-4 border-b border-l border-yellow-04 bg-transparent text-[12px] lg:text-[16px] text-write-04`}
          >
            مشاهده همه
          </Link>
        </div>
        <div
          className={`flex flex-wrap justify-around content-around w-[calc(100%-56px)] lg:w-[calc(100%-128px)] max-w-[1689px] mx-auto gap-3 lg:gap-4`}
        >
          {/* single Crat */}
          {slides.map((item: any) => {
            return (
              <Fragment key={item?.id}>
                <div
                  className={`w-full lg:w-[49%] max-w-[829px] h-[128px] lg:h-[250px] flex items-center rounded-[16px]`}
                >
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
                    <p className={`text-[16px] leading-[32px] text-write-main font-[400] hidden lg:block`}>
                      {item?.desc}
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}

          {/* single Crat */}
        </div>
        <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`w-fit flex lg:hidden px-6 py-1 border-b border-l border-yellow-04 bg-transparent text-[12px] text-write-04`}
        >
          مشاهده همه
        </Link>
      </section>
    </>
  );
};

export default LastNewsSection;
