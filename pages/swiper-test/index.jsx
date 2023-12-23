import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import TreeOne from "../../assets/images/mainpage/asd.jpg";
import TreeTwo from "../../assets/images/mainpage/Untitled.jpg";

function SwiperTest() {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div className="relative w-[70%] mx-auto">
      <div className="absolute top-[160px] w-full z-10">
        <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center absolute right-[4%]">
          <svg
            onClick={() => my_swiper.slideNext()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center absolute left-[4%]">
          <svg
            onClick={() => my_swiper.slidePrev()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <Swiper
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          zIndex: "0",
        }}
        modules={[Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <img className="w-full h-[400px]" src={TreeOne} alt="a" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={TreeTwo} alt="b" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperTest;
