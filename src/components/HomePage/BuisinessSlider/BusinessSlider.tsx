"use client";
import { imageBaseURL, imagePlaceHolders } from "@/data";
import { attributeRegex } from "@/lib/HtmlParser";
import { businessSlider } from "@/models/business";
import { baseURL } from "@/services/news";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

function BusinessSlider({ data }: { data: businessSlider[] }) {
  const [my_swiper, set_my_swiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<null | SwiperRef>(null);
  const activeBusiness = useMemo(() => {
    return data[activeIndex ?? 0];
  }, [activeIndex, data]);

  return (
    <div className="flex h-full w-full flex-col gap-6 lg:flex-row">
      <div className="relative mx-auto h-[249px] w-full lg:h-[429px] lg:w-1/2">
        <div className="absolute top-[35%] z-10 w-full lg:top-[40%]">
          <div className="clippath1 absolute right-[-1px] top-[-27px] h-10 w-10 bg-white"></div>
          <div className="clippath1 swiper-rotate1 absolute right-[-1px] top-[69px] h-10 w-10 bg-white"></div>
          <div className="clippath1 swiper-rotate2 absolute left-[-1px] top-[-27px] h-10 w-10 bg-white"></div>
          <div className="clippath1 absolute left-[-1px] top-[4.2rem] h-10 w-10 rotate-180 bg-white"></div>
          <div className="absolute right-[-40px] flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B27C00]">
              <svg
                onClick={() => {
                  my_swiper?.slideNext();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer text-[#4C3500]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[-40px] flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B27C00]">
              <svg
                onClick={() => {
                  my_swiper?.slidePrev();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer text-[#4C3500]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          onInit={(ev) => {
            set_my_swiper(ev);
          }}
          onSlideChange={(ev) => {
            setActiveIndex(ev.activeIndex);
          }}
          ref={swiperRef}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            zIndex: "0",
            pointerEvents: "none",
            borderRadius: "32px",
            overflow: "hidden",
          }}
          modules={[Scrollbar, Autoplay]}
          // spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false, stopOnLastSlide: false }}
          rewind={true}
          // loop={true}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-full w-full">
                <Image
                  src={`${item?.img ? `${imageBaseURL}${item.img}` : imagePlaceHolders.business}`}
                  alt="business"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`flex h-[429px] w-full flex-col justify-between rounded-bl-[32px] rounded-tl-[32px] p-4 lg:w-1/2 lg:p-[4rem]`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <Link href={`/business/${activeBusiness?.id}`} className={`text-[24px] font-[600]`}>
            {activeBusiness?.name}
          </Link>
          <div className={`flex items-center gap-2`}>
            <StarIcon className={`h-5 w-5 text-yellow-main`} />
            <span className={`flex items-center justify-center text-[20px] leading-none text-write-main`}>
              {activeBusiness?.scorings[0]?.average_score?.substring(0, 3) || 0}
            </span>
          </div>
        </div>
        {/* <span className={`text-[20px] font-[400] text-write-main`}>آدرس: {activeBusiness}</span> */}
        <div
          className={`line-clamp-4 text-[16px] font-[400] leading-[32px] text-write-main`}
          dangerouslySetInnerHTML={{
            __html: activeBusiness?.desc ? activeBusiness?.desc.replaceAll(attributeRegex, "") : "",
          }}
        ></div>
        <Link
          href={`/business/${activeBusiness?.id}`}
          className={`w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:px-[54px] lg:py-[14px]`}
        >
          بیشتر
        </Link>
      </div>
    </div>
  );
}

export default BusinessSlider;
