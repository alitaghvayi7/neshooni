import { HashtagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// images
import { SingleNews } from "@/models/news";
import Image from "next/image";
import { Fragment } from "react";
import SocialNewsSlider from "./SocialNewsCarousel";

const SliderSection = ({ data }: { data: SingleNews[] }) => {
  return (
    <>
      <section className={`mx-auto mt-[11rem] flex w-full flex-col items-center gap-8 lg:mt-12`}>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] items-center justify-between lg:w-[calc(100%-128px)]`}
        >
          <span className={`flex items-center text-[20px] font-bold text-write-main lg:text-[24px]`}>
            <HashtagIcon className="mx-2 h-6  w-6  text-write-04" />
            اخبار شبکه های اجتماعی
          </span>
        </section>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-col items-center  rounded-[32px] border border-yellow-04 bg-transparent lg:w-[calc(100%-128px)] lg:flex-row`}
        >
          <SocialNewsSlider data={data.slice(0, 4)} />
        </section>
        <section
          className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-wrap items-center justify-between gap-4 lg:w-[calc(100%-128px)] lg:gap-0`}
        >
          {data.slice(4, 6).map((item: any, index: number) => {
            return (
              <Fragment key={item?.id}>
                <Link
                  className={`flex h-[128px] w-full max-w-[812px] items-center rounded-[16px] bg-white lg:h-[158px] lg:w-[48%]`}
                  href={`/news/social-media/1`}
                >
                  <div className="relative h-full w-[128px] overflow-hidden rounded-r-2xl lg:w-[200px] xl:w-[255px]">
                    <Image alt="" src={item?.image} className={`object-cover`} fill />
                  </div>
                  <div
                    style={{ borderRadius: `16px 0 0 16px` }}
                    className={`flex h-full w-[calc(100%-128px)] flex-col justify-around gap-3 overflow-hidden border-b border-l border-t border-yellow-04 px-4 py-6 lg:w-[calc(100%-200px)] xl:lg:w-[calc(100%-255px)] xl:px-6 xl:py-8`}
                  >
                    <div className={`flex w-full items-center justify-between`}>
                      <div className={`flex items-center justify-center gap-2 xl:gap-3`}>
                        <span className={`h-1 w-1 bg-gray-04`}></span>
                        <span
                          className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[12px] xl:text-[16px]`}
                        >
                          {item?.publisher}
                        </span>
                      </div>
                      <span
                        dir="ltr"
                        className={`flex items-center justify-center text-[10px] font-[400] text-gray-04 lg:text-[12px] xl:text-[16px]`}
                      >
                        {item?.date}
                      </span>
                    </div>
                    <span
                      className={`mb-auto text-[14px] font-[600] lg:line-clamp-3 lg:text-[16px] xl:line-clamp-2 xl:text-[20px]`}
                    >
                      {item?.name}
                    </span>
                  </div>
                </Link>
              </Fragment>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default SliderSection;
