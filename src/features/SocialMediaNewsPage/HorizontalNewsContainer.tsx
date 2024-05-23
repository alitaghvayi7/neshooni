import Image from "next/image";
import Link from "next/link";
import { newsPageTypeInfo } from "./SingleHeroNews";
import { NewsType, SingleNews } from "@/models/news";
import { attributeRegex } from "@/lib/HtmlParser";
import { getPersianDate } from "@/lib/date";
import { imagePlaceHolders } from "@/data";

const HorizontalNewsContainer = ({ data, type }: { data: SingleNews[]; type: NewsType }) => {
  return (
    <>
      <section
        className={`mx-auto grid w-[calc(100%-56px)] max-w-[1662px] grid-cols-1 gap-4 rounded-[32px] bg-transparent pt-10 md:grid-cols-2 lg:w-[calc(100%-128px)] lg:flex-row lg:gap-6 xl:grid-cols-4`}
      >
        {data?.map((item, index: number) => {
          return (
            <div
              key={item?.id}
              className="flex h-[500px] w-full flex-col overflow-hidden rounded-[16px] rounded-b-[16px] border border-yellow-04 bg-white lg:h-[650px] lg:rounded-[32px] xl:h-[480px] 2xl:h-[500px]"
            >
              <div className="relative h-[60%] w-full overflow-hidden rounded-t-[16px] lg:rounded-t-[32px] xl:h-[50%]">
                <Image src={item?.img || imagePlaceHolders.news} className="object-cover" alt={`${item.title}`} fill />
              </div>
              <div className="flex w-full flex-1 flex-col gap-4 overflow-hidden p-4 lg:rounded-b-[32px] lg:p-6">
                <Link
                  href={`${newsPageTypeInfo[type].href}/${item?.id}`}
                  className={`line-clamp-2 text-[14px] font-[600] lg:text-[24px]`}
                >
                  {item?.title}
                </Link>
                <div
                  className={`mb-auto line-clamp-4 overflow-hidden text-justify text-[10px] font-[400] text-write-main lg:line-clamp-3 lg:text-[16px] xl:line-clamp-3`}
                  dangerouslySetInnerHTML={{
                    __html: item.content.replaceAll(attributeRegex, "") || "",
                  }}
                ></div>
                <div className={`flex w-full items-center justify-between`}>
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
          );
        })}
      </section>
    </>
  );
};

export default HorizontalNewsContainer;
