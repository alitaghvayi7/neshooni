import Image from "next/image";
import Link from "next/link";
import { imageBaseURL } from "@/data";
import { Fragment } from "react";
import { HASHTAG_ICON, NEWS_ICON, PAPER_ICON } from "@/assets/icons/svgs";
export const newsTypes = [
  {
    id: 1,
    name: "اخبار شرکت‌ها و سازمان‌ها",
    type: "organization",
    activeIcon: <NEWS_ICON />,
    inActiveIcon: <NEWS_ICON fill="#9C9C9C" />,
    path: "organization",
  },
  {
    id: 2,
    name: "اخبار شبکه‌های اجتماعی",
    type: "social",
    inActiveIcon: <HASHTAG_ICON fill="#9C9C9C" />,
    activeIcon: <HASHTAG_ICON />,
    path: "social-media",
  },
  {
    id: 3,
    name: "اخبار سایت‌های خبری",
    type: "official",
    activeIcon: <PAPER_ICON />,
    inActiveIcon: <PAPER_ICON fill="#9C9C9C" />,
    path: "wire-service",
  },
] as const;

const LastNewsSection = ({ lastNews }: { lastNews: SingleNews[] }) => {
  return (
    <>
      <section
        className={`mx-auto my-[5rem] flex w-[calc(100%-56px)] max-w-[1689px] flex-col items-center gap-8 lg:w-[calc(100%-128px)]`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit border-b border-r border-yellow-04 bg-yellow-06 pl-6 indent-5 text-[20px] font-bold text-write-main lg:text-[40px]`}
          >
            اخرین اخبار
          </span>
          <Link
            href={`/news`}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`hidden w-fit border-b border-l border-yellow-04 bg-transparent px-6 pb-4 text-[12px] text-write-04 lg:flex lg:text-[16px]`}
          >
            مشاهده همه
          </Link>
        </div>
        <div className={`mx-auto grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4`}>
          {/* single Crat */}
          {lastNews.map((item) => {
            return (
              <Fragment key={item?.id}>
                <Link
                  href={`/news/${newsTypes.find((news) => news.type === item?.type)?.path}/${item?.id}`}
                  className={`flex h-[128px] w-full max-w-[829px] items-center rounded-[16px] lg:h-[250px]`}
                >
                  <div className="relative h-full min-w-[128px] lg:min-w-[255px]">
                    <Image
                      style={{ borderRadius: `0 16px 16px 0` }}
                      alt=""
                      src={`${item.img}`}
                      className={`object-cover`}
                      fill
                    />
                  </div>
                  <div
                    style={{ borderRadius: `16px 0 0 16px` }}
                    className={`flex h-full flex-col gap-4 border-b border-l border-t border-yellow-04 px-4 py-6`}
                  >
                    {/* <div className={`flex w-full items-center justify-between`}>
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
                    </div> */}
                    <div className={`line-clamp-2 text-[14px] font-[600] lg:text-[24px]`}>{item?.title}</div>
                    <div
                      className={`mb-auto hidden text-[16px] font-[400] text-write-main lg:line-clamp-4`}
                      dangerouslySetInnerHTML={{
                        __html: item?.content || "",
                      }}
                    ></div>
                  </div>
                </Link>
              </Fragment>
            );
          })}
          {/* single Crat */}
        </div>
        {/* <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`flex w-fit border-b border-l border-yellow-04 bg-transparent px-6 py-1 text-[12px] text-write-04 lg:hidden`}
        >
          مشاهده همه
        </Link> */}
      </section>
    </>
  );
};

export default LastNewsSection;
