import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { imagePlaceHolders } from "@/data";
import { attributeRegex } from "@/lib/HtmlParser";
import { getPersianDate } from "@/lib/date";
import { NewsType, SingleNews } from "@/models/news";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const newsPageTypeInfo = {
  social: {
    label: "اخبار شبکه‌های اجتماعی",
    href: "/news/social-media",
  },
  official: {
    label: "اخبار خبرگزاری‌های رسمی",
    href: "/news/wire-service",
  },
  organization: {
    label: "اخبار شرکت‌ها و سازمان‌ها",
    href: "/news/organization",
  },
};

const SingleHeroNews = ({ data, type }: { data: SingleNews; type: NewsType }) => {
  return (
    <>
      <section
        className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-col flex-wrap gap-4 lg:w-[calc(100%-128px)] lg:gap-6`}
      >
        <Breadcrumbs
          breadcumbs={[
            { href: "/", label: "خانه" },
            { href: "/news", label: "اخبار" },
            { href: newsPageTypeInfo[type].href, label: newsPageTypeInfo[type].label },
          ]}
        />
        <h1 className={`text-[40px] font-[700] text-write-main`}>{newsPageTypeInfo[type].label}</h1>
        {data && (
          <Fragment key={data?.id}>
            <div
              className={`flex h-[440px] w-full flex-col items-center overflow-hidden rounded-t-[16px] lg:h-[340px] lg:flex-row lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
            >
              <div className="relative h-1/2 w-full lg:h-full lg:w-[50%]">
                <Image
                  // style={{ borderRadius: `0 16px 16px 0` }}
                  alt={`${data?.title}`}
                  src={data?.img || imagePlaceHolders.news}
                  className={`object-cover`}
                  fill
                />
              </div>
              <div
                // style={{ borderRadius: `16px 0 0 16px` }}
                className={`flex h-1/2 w-full flex-col gap-4 overflow-hidden rounded-b-[16px] border-b border-l border-r border-t border-yellow-04 bg-white px-4 py-6 lg:h-full lg:w-[50%] lg:rounded-b-none lg:rounded-bl-[16px] lg:rounded-tl-[16px] lg:border-r-0 lg:px-6 lg:py-10`}
              >
                <Link
                  href={`${newsPageTypeInfo[type].href}/${data?.id}`}
                  className={`line-clamp-2 text-[14px] font-[600] lg:line-clamp-2 lg:text-[24px]`}
                >
                  {data?.title}
                </Link>

                <div
                  className={`mb-auto line-clamp-3 overflow-hidden text-[16px] font-[400] leading-[26px] text-write-main lg:line-clamp-3`}
                  dangerouslySetInnerHTML={{
                    __html: data?.content.replaceAll(attributeRegex, "") || "",
                  }}
                ></div>
                <div className={`flex w-full items-center justify-between`}>
                  <div className={`flex items-center justify-center gap-3`}>
                    <span className={`h-1 w-1 bg-gray-04`}></span>
                    <Link
                      href={data.source}
                      target="_blank"
                      rel="nofollow"
                      className={`line-clamp-1 flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                    >
                      {data?.source_title || "منبع"}
                    </Link>
                  </div>
                  <span
                    dir="ltr"
                    className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[16px]`}
                  >
                    {getPersianDate(new Date(data.created_at || Date.now()))}
                  </span>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </section>
    </>
  );
};

export default SingleHeroNews;
