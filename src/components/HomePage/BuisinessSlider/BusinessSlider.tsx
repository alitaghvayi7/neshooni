"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

function BusinessSlider() {
  const [my_swiper, set_my_swiper] = useState<any>({});
  return (
    <div className="relative mx-auto h-full w-full">
      <div className="absolute top-[35%] z-10 w-full lg:top-[40%]">
        <div className="clippath1 absolute right-[-1px] top-[-27px] h-10 w-10 bg-white"></div>
        <div className="clippath1 swiper-rotate1 absolute right-[-1px] top-[69px] h-10 w-10 bg-white"></div>
        <div className="clippath1 swiper-rotate2 absolute left-[-1px] top-[-27px] h-10 w-10 bg-white"></div>
        <div className="clippath1 absolute left-[-1px] top-[4.2rem] h-10 w-10 rotate-180 bg-white"></div>
        <div className="absolute right-[-40px] flex h-20 w-20 items-center justify-center rounded-full bg-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B27C00]">
            <svg
              onClick={() => my_swiper.slideNext()}
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
              onClick={() => my_swiper.slidePrev()}
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
        modules={[Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <div className="h-full w-full bg-gray-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-black"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BusinessSlider;
