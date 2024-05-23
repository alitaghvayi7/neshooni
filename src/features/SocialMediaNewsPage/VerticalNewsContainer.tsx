import { NewsType, SingleNews } from "@/models/news";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { newsPageTypeInfo } from "./SingleHeroNews";
import { getPersianDate } from "@/lib/date";
import { imagePlaceHolders } from "@/data";

const VerticalNewsContainer = ({ data, type }: { data: SingleNews[]; type: NewsType }) => {
  return (
    <>
      <section
        className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:w-[calc(100%-128px)] lg:gap-6`}
      >
        {data?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <div
                className={`flex h-[128px] w-full items-center rounded-[16px] border-b border-l border-t border-yellow-04 bg-white lg:h-[190px]`}
              >
                <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[200px] xl:w-[255px]">
                  <Image
                    alt={`${item.title}`}
                    src={item?.img || imagePlaceHolders.news}
                    className={`object-cover`}
                    fill
                  />
                </div>
                <div
                  style={{ borderRadius: `16px 0 0 16px` }}
                  className={`flex h-full flex-1 flex-col gap-4 overflow-hidden px-4 py-6 lg:px-6 lg:py-8`}
                >
                  <Link
                    href={`${newsPageTypeInfo[type].href}/${item.id}`}
                    className={`line-clamp-2 text-[14px] font-[600] lg:line-clamp-3 lg:text-[20px]`}
                  >
                    {item?.title}
                  </Link>
                  <div className={`mt-auto flex w-full items-center justify-between`}>
                    <div className={`flex items-center justify-center gap-3`}>
                      <span className={`h-1 w-1 bg-gray-04`}></span>
                      <Link
                        href={item.source}
                        target="_blank"
                        rel="nofollow"
                        className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                      >
                        {item?.source_title || "منبع"}
                      </Link>
                    </div>
                    <span
                      dir="ltr"
                      className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                    >
                      {getPersianDate(new Date(item.created_at || Date.now()))}
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
