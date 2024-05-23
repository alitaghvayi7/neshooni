import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

import { SingleNews } from "@/models/news";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { getPersianDate } from "@/lib/date";
import { imagePlaceHolders } from "@/data";

const OrganSection = ({ data }: { data: SingleNews[] }) => {
  return (
    <>
      <section className={`mx-auto mt-[11rem] flex w-full flex-col items-center gap-8 lg:mt-12`}>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] items-center justify-between lg:w-[calc(100%-128px)]`}
        >
          <span className={`flex items-center text-[20px] font-bold text-write-main lg:text-[24px]`}>
            <BuildingOffice2Icon className="mx-2 h-6  w-6  text-write-04" />
            شرکت‌ها و سازمان‌ها
          </span>
        </section>

        <section
          className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 gap-4 lg:w-[calc(100%-128px)] lg:grid-cols-2 lg:gap-6`}
        >
          {data?.slice(0, 6)?.map((item, index: number) => {
            return (
              <Fragment key={item?.id}>
                <div className={`flex h-[128px] w-full items-center rounded-[16px] bg-white lg:h-[170px] xl:h-[180px]`}>
                  <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[180px] xl:w-[200px]">
                    <Image
                      alt={`${item.title}`}
                      src={item?.img || imagePlaceHolders.news}
                      className={`object-cover`}
                      fill
                    />
                  </div>
                  <div
                    style={{ borderRadius: `16px 0 0 16px` }}
                    className={`flex h-full w-[calc(100%-128px)] flex-col justify-around gap-3 overflow-hidden border-b border-l border-t border-yellow-04 px-4 py-4 lg:w-[calc(100%-200px)] xl:w-[calc(100%-255px)] xl:px-6 xl:py-8`}
                  >
                    <div className={`flex w-full items-center justify-between`}>
                      <div className={`flex items-center justify-center gap-3`}>
                        <span className={`h-1 w-1 bg-gray-04`}></span>
                        <Link
                          href={item.source}
                          target="_blank"
                          rel="nofollow"
                          className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[14px]`}
                        >
                          {item?.source_title || "منبع"}
                        </Link>
                      </div>
                      <span
                        dir="ltr"
                        className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[14px]`}
                      >
                        {getPersianDate(new Date(item.created_at || Date.now()))}
                      </span>
                    </div>
                    <Link
                      href={`/news/organization/${item.id}`}
                      className={`mb-auto line-clamp-3 text-[14px] font-[600] lg:text-[20px]`}
                    >
                      {item?.title}
                    </Link>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default OrganSection;
