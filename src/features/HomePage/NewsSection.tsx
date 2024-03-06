"use client";
import Image from "next/image";
import Link from "next/link";

// images
import { HASHTAG_ICON, NEWS_ICON, PAPER_ICON } from "@/assets/icons/svgs";
import { imageBaseURL } from "@/data";
import { Fragment, useMemo, useState } from "react";

const newsTypes = [
  {
    id: 1,
    name: "اخبار شرکت‌ها و سازمان‌ها",
    type: "organizations",
    activeIcon: <NEWS_ICON />,
    inActiveIcon: <NEWS_ICON fill="#9C9C9C" />,
  },
  {
    id: 2,
    name: "اخبار شبکه‌های اجتماعی",
    type: "social",
    inActiveIcon: <HASHTAG_ICON fill="#9C9C9C" />,
    activeIcon: <HASHTAG_ICON />,
  },
  {
    id: 3,
    name: "اخبار سایت‌های خبری",
    type: "newsAgancies",
    activeIcon: <PAPER_ICON />,
    inActiveIcon: <PAPER_ICON fill="#9C9C9C" />,
  },
] as const;

const NewsSection = ({ newsList }: { newsList: SingleNews[] }) => {
  const [activeNewsType, setActiveNewsType] = useState<"social" | "organizations" | "newsAgancies">("organizations");
  const activeNews = useMemo(() => {
    return newsList.filter((item) => item.type === activeNewsType);
  }, [activeNewsType, newsList]);
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
        {/* tabs */}

        <div className="flex items-center border-b gap-6 overflow-x-auto whitespace-nowrap">
          {newsTypes.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveNewsType(tab.type)}
              className={`py-2 flex items-center justify-center gap-3 ${
                activeNewsType === tab.type ? "text-write-main border-b border-b-yellow-02" : "text-gray-03"
              }`}
            >
              <div className="relative size-4 fill-red-600 text-red-300">
                {activeNewsType === tab.type ? tab.activeIcon : tab.inActiveIcon}
              </div>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
        <div className={`flex flex-wrap justify-around content-around w-full mx-auto gap-6 lg:gap-4`}>
          <div
            className={`w-full lg:w-[49%] max-w-[829px] flex items-center rounded-[16px] overflow-hidden h-[642px] lg:h-[515px]`}
          >
            {/* main */}
            {activeNews[0] && (
              <Fragment key={activeNews[0]?.id}>
                <div
                  className={`w-full flex flex-col lg:flex-row items-center rounded-t-[16px] lg:rounded-t-none lg:rounded-tr-[16px] lg:rounded-br-[16px] h-full overflow-hidden`}
                >
                  <div className="relative w-full lg:w-[255px] h-1/2 lg:h-full ">
                    <Image
                      // style={{ borderRadius: `0 16px 16px 0` }}
                      alt=""
                      src={`${imageBaseURL}/${activeNews[0]?.img}`}
                      className={`object-cover`}
                      fill
                    />
                  </div>
                  <div
                    // style={{ borderRadius: `16px 0 0 16px` }}
                    className={`w-full lg:w-[calc(100%-255px)] h-1/2 lg:h-full flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-10 border-r border-b border-t border-l lg:border-r-0 border-yellow-04 overflow-hidden rounded-b-[16px] lg:rounded-b-none lg:rounded-tl-[16px] lg:rounded-bl-[16px] lg:gap-4`}
                  >
                    <div className={`w-full flex items-center justify-between`}>
                      <div className={`flex items-center justify-center gap-3`}>
                        <span className={`w-1 h-1 bg-gray-04`}></span>
                        <span
                          className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                        >
                          <Link href={activeNews[0].source}>منبع</Link>
                        </span>
                      </div>
                      <span
                        dir="ltr"
                        className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                      >
                        {/* {slides[0]?.date} */}
                      </span>
                    </div>
                    <span className={`text-[14px] lg:text-[24px] font-[600]`}>{activeNews[0].title}</span>

                    <p className={`text-[16px] leading-[32px] text-write-main font-[400] grow line-clamp-6`}>
                      {activeNews[0].content}
                    </p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div
            className={`w-full flex flex-col gap-3 lg:gap-0 lg:justify-between lg:w-[49%] max-w-[829px] rounded-[16px] overflow-hidden h-[515px]`}
          >
            {/* single Crad */}
            {activeNews.slice(1, 3).map((item, index: number) => {
              return (
                <Fragment key={item?.id}>
                  <div className={`w-full flex items-center rounded-[16px] h-[128px] lg:h-[151px]`}>
                    <div className="relative w-[128px] lg:w-[255px] h-full">
                      <Image
                        style={{ borderRadius: `0 16px 16px 0` }}
                        alt=""
                        src={`${imageBaseURL}/${item.img}`}
                        className={`object-cover`}
                        fill
                      />
                    </div>
                    <div
                      style={{ borderRadius: `16px 0 0 16px` }}
                      className={`w-[calc(100%-128px)] lg:w-[calc(100%-255px)] h-full flex flex-col justify-around px-4 py-6 lg:px-6 lg:py-6 border-b border-t border-l border-yellow-04 overflow-hidden`}
                    >
                      <div className={`w-full flex items-center justify-between`}>
                        <div className={`flex items-center justify-center gap-3`}>
                          <span className={`w-1 h-1 bg-gray-04`}></span>
                          <span
                            className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                          >
                            <Link href={item.source}>منبع</Link>
                          </span>
                        </div>
                        <span
                          dir="ltr"
                          className={`text-[10px] lg:text-[16px] font-[400] text-gray-04 flex items-center justify-center`}
                        >
                          {/* {item?.date} */}
                        </span>
                      </div>
                      <span className={`text-[14px] lg:text-[24px] font-[600]`}>{item?.title}</span>
                    </div>
                  </div>
                </Fragment>
              );
            })}
            {/* single Crat */}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
