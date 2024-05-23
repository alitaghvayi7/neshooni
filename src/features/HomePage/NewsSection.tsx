"use client";
import Image from "next/image";
import Link from "next/link";

// images
import { attributeRegex } from "@/lib/HtmlParser";
import { SingleNews } from "@/models/news";
import { Fragment, useMemo, useState } from "react";
import { newsTypes } from "./LastNewsSection";
import { getPersianDate } from "@/lib/date";

const NewsSection = ({ newsList }: { newsList: SingleNews[] }) => {
  const [activeNewsType, setActiveNewsType] = useState<"social" | "official" | "organization">("official");
  const activeNews = useMemo(() => {
    return newsList.filter((item) => item.type === activeNewsType);
  }, [activeNewsType, newsList]);
  return (
    <>
      <section
        className={`mx-auto mt-[5rem] flex w-[calc(100%-56px)] max-w-[1689px] flex-col gap-8 lg:mt-[8rem] lg:w-[calc(100%-128px)]`}
      >
        <span
          style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
          className={`w-fit border-b border-r border-yellow-04 bg-yellow-06 pl-6 indent-5 text-[20px] font-bold text-write-main lg:text-[40px]`}
        >
          اخبار
        </span>
        {/* tabs */}

        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap border-b">
          {newsTypes?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveNewsType(tab.type)}
              className={`flex items-center justify-center gap-3 py-2 ${
                activeNewsType === tab.type ? "border-b border-b-yellow-02 text-write-main" : "text-gray-03"
              }`}
            >
              <div className="relative size-4 fill-red-600 text-red-300">
                {activeNewsType === tab.type ? tab.activeIcon : tab.inActiveIcon}
              </div>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
        <div className={`mx-auto flex w-full flex-wrap content-around justify-around gap-6 lg:gap-4`}>
          <div
            className={`flex h-[642px] w-full max-w-[829px] items-center overflow-hidden rounded-[16px] lg:h-[515px] lg:w-[49%]`}
          >
            {/* main */}
            {activeNews[0] && (
              <Fragment key={activeNews[0]?.id}>
                <div
                  className={`flex h-full w-full flex-col items-center overflow-hidden rounded-t-[16px] lg:flex-row lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
                >
                  <div className="relative h-1/2 w-full lg:h-full lg:w-[255px] ">
                    <Image
                      // style={{ borderRadius: `0 16px 16px 0` }}
                      alt={`${activeNews[0].title}`}
                      src={`${activeNews[0]?.img}`}
                      className={`object-cover`}
                      fill
                    />
                  </div>
                  <div
                    // style={{ borderRadius: `16px 0 0 16px` }}
                    className={`flex h-1/2 w-full flex-col justify-around overflow-hidden rounded-b-[16px] border-b border-l border-r border-t border-yellow-04 px-4 py-6 lg:h-full lg:w-[calc(100%-255px)] lg:gap-4 lg:rounded-b-none lg:rounded-bl-[16px] lg:rounded-tl-[16px] lg:border-r-0 lg:px-6 lg:py-10`}
                  >
                    <div className={`flex w-full items-center justify-between`}>
                      <div className={`flex items-center justify-center gap-3`}>
                        <span className={`h-1 w-1 bg-gray-04`}></span>
                        <span
                          className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                        >
                          <Link target="_blank" rel="nofollow" href={activeNews[0].source}>
                            {activeNews[0].source_title || "منبع"}
                          </Link>
                        </span>
                      </div>
                      <span
                        dir="ltr"
                        className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                      >
                        {getPersianDate(new Date(activeNews[0].created_at || Date.now()))}
                      </span>
                    </div>
                    <Link
                      href={`/news/${newsTypes.find((item) => item.type === activeNews[0]?.type)?.path}/${activeNews[0]?.id}`}
                      className={`text-[14px] font-[600] lg:text-[24px]`}
                    >
                      {activeNews[0].title}
                    </Link>

                    <div
                      className={`mb-auto line-clamp-[7] text-[16px] font-[400] text-write-main`}
                      dangerouslySetInnerHTML={{
                        __html: activeNews[0].content.replaceAll(attributeRegex, "") || "",
                      }}
                    ></div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div
            className={`flex h-[515px] w-full max-w-[829px] flex-col gap-3 overflow-hidden rounded-[16px] lg:w-[49%] lg:justify-between lg:gap-0`}
          >
            {/* single Crad */}
            {activeNews?.slice(1, 4)?.map((item, index: number) => {
              return (
                <Fragment key={item?.id}>
                  <div className={`flex h-[128px] w-full items-center rounded-[16px] lg:h-[151px]`}>
                    <div className="relative h-full w-[128px] lg:w-[255px]">
                      <Image
                        style={{ borderRadius: `0 16px 16px 0` }}
                        alt={`${item.title}`}
                        src={`${item.img}`}
                        className={`object-cover`}
                        fill
                      />
                    </div>
                    <div
                      style={{ borderRadius: `16px 0 0 16px` }}
                      className={`flex h-full w-[calc(100%-128px)] flex-col justify-around overflow-hidden border-b border-l border-t border-yellow-04 px-4 py-6 lg:w-[calc(100%-255px)] lg:px-6 lg:py-6`}
                    >
                      <div className={`flex w-full items-center justify-between`}>
                        <div className={`flex items-center justify-center gap-3`}>
                          <span className={`h-1 w-1 bg-gray-04`}></span>
                          <span
                            className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                          >
                            <Link href={item.source}>{item.source_title || "منبع"}</Link>
                          </span>
                        </div>
                        <span
                          dir="ltr"
                          className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                        >
                          {getPersianDate(new Date(item.created_at || Date.now()))}
                        </span>
                      </div>
                      <Link
                        href={`/news/${newsTypes.find((news) => news.type === item?.type)?.path}/${item?.id}`}
                        className={`line-clamp-2 text-[14px] font-[600] lg:text-[24px]`}
                      >
                        {item?.title}
                      </Link>
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
