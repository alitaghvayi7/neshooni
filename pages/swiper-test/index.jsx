import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

function SwiperTest() {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div className="relative w-[60%] mx-auto">
      <div className="absolute top-[160px] w-full z-10">
        <div className="w-10 h-10 clippath1 absolute bg-white top-[-27px] right-[-1px]"></div>
        <div className="w-10 h-10 clippath1 absolute bg-white swiper-rotate1 top-[69px] right-[-1px]"></div>
        <div className="w-10 h-10 clippath1 absolute bg-white left-[-1px] swiper-rotate2 top-[-27px]"></div>
        <div className="w-10 h-10 clippath1 absolute bg-white left-[-1px] rotate-180 top-[4.2rem]"></div>
        <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center absolute right-[-40px]">
          <div className="w-12 h-12 border border-[#B27C00] rounded-full flex justify-center items-center">
            <svg
              onClick={() => my_swiper.slideNext()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-[#4C3500]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center absolute left-[-40px]">
          <div className="w-12 h-12 border border-[#B27C00] rounded-full flex justify-center items-center">
            <svg
              onClick={() => my_swiper.slidePrev()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-[#4C3500]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
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
          zIndex: "0",
          pointerEvents: "none",
        }}
        modules={[Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <div className="w-full h-[400px] bg-gray-400 rounded-[32px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] bg-black rounded-[32px]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperTest;
