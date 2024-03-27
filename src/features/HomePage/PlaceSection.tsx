"use client";

import Image from "next/image";
import Link from "next/link";
import BackGround from "@/assets/images/mainpage/slider-background.png";
import MapImage from "@/assets/images/mainpage/mapdark.png";
import { Keyboard, Mousewheel, Autoplay, EffectFade, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { StarIcon } from "@heroicons/react/24/solid";

// import Images
import Image1 from "@/assets/images/mainpage/Rectangle142.png";
import Image2 from "@/assets/images/mainpage/Rectangle272.png";
import Image3 from "@/assets/images/mainpage/Rectangle273.png";
import { singleTourismCard } from "@/models/tourism";

const slides = [
  {
    id: Math.random(),
    image: Image1,
    score: 1.4,
    name: "کوه خضر",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: Math.random(),
    image: Image2,
    score: 3.4,
    name: "بوستان علوی",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: Math.random(),
    image: Image3,
    score: 5,
    name: "بوستان مهدی",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: Math.random(),
    image: Image1,
    score: 4.3,
    name: "کوه خضر",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
];

const PalceSection = ({ placesList }: { placesList: singleTourismCard[] }) => {
  return (
    <>
      <section
        className={`mx-auto mt-[11rem] flex w-[calc(100%-56px)] max-w-[1689px] flex-col items-center gap-8 lg:mt-[15rem] lg:w-[calc(100%-128px)]`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit border-b border-r border-yellow-04 bg-yellow-06 pl-6 indent-5 text-[20px] font-bold text-write-main lg:text-[40px]`}
          >
            کجاها بریم؟
          </span>
          <Link
            href={`/tourist`}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`hidden w-fit border-b border-l border-yellow-04 bg-transparent px-6 pb-4 text-[12px] text-write-04 lg:flex lg:text-[16px]`}
          >
            مشاهده همه
          </Link>
        </div>
        <div
          className={`flex h-[285px] w-full items-center overflow-hidden rounded-[32px] bg-gray-02 bg-opacity-25 lg:h-[601px]`}
        >
          <div className={`relative isolate h-full w-[119px] bg-yellow-06 lg:w-[390px]`}>
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <Image alt={``} src={BackGround} className={`object-cover`} fill />
            </div>
            <div className="absolute -left-4 bottom-0 top-0 z-[2] h-full w-full overflow-hidden lg:-left-10">
              <Image alt={``} src={MapImage} className={`object-contain`} fill />
            </div>
          </div>
          <div
            style={{ borderRadius: `32px 0 0 32px` }}
            className={`h-full w-[calc(100%-119px)] overflow-hidden border-b border-l border-t border-yellow-04 bg-white py-4 ps-5 lg:w-[calc(100%-390px)] lg:py-10 lg:ps-[85px]`}
          >
            <Swiper
              // install Swiper modules
              modules={[Keyboard, Mousewheel, Autoplay, EffectFade, Pagination]}
              allowTouchMove={true}
              breakpoints={{
                // when window width is >= 320px
                // 320: {
                //   slidesPerView: 1,
                //   spaceBetween: 20,
                // },
                // when window width is >= 480px
                460: {
                  slidesPerView: 1.7,
                  spaceBetween: 25,
                },
                // when window width is >= 520px
                520: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                // when window width is >= 580px
                580: {
                  slidesPerView: 2.4,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2.7,
                  spaceBetween: 25,
                },
                // when window width is >= 730px
                730: {
                  slidesPerView: 3.2,
                  spaceBetween: 25,
                },
                // when window width is >= 820px
                820: {
                  slidesPerView: 3.6,
                  spaceBetween: 25,
                },
                // when window width is >= 900px
                900: {
                  slidesPerView: 4.1,
                  spaceBetween: 25,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 1.2,
                  spaceBetween: 25,
                },
                // when window width is >= 1100px
                1100: {
                  slidesPerView: 1.4,
                  spaceBetween: 16,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 1.6,
                  spaceBetween: 16,
                },
                // when window width is >= 1300px
                1300: {
                  slidesPerView: 1.9,
                  spaceBetween: 16,
                },
                // when window width is >= 1400px
                1400: {
                  slidesPerView: 2.2,
                  spaceBetween: 16,
                },
                // when window width is >= 1500px
                1500: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                },
                // when window width is >= 1620px
                1620: {
                  slidesPerView: 2.8,
                  spaceBetween: 16,
                },
                // when window width is >= 1720px
                1720: {
                  slidesPerView: 3.1,
                  spaceBetween: 16,
                },
              }}
              spaceBetween={20}
              slidesPerView={1.2}
              pagination={{ clickable: true, enabled: false }}
              scrollbar={{ draggable: true }}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {placesList.map((item) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <Link
                      href={`/tourist/${item.id}`}
                      className="flex h-full w-[169px] flex-col overflow-hidden rounded-[16px] lg:w-[350px]"
                    >
                      <div className="relative h-[66%] w-full overflow-hidden">
                        <Image alt={``} src={item?.img} className={`object-cover`} fill />
                      </div>
                      <div
                        style={{ borderRadius: `0 0 16px 16px` }}
                        className="flex h-[34%] w-full flex-col border border-yellow-04 p-2 lg:px-4 lg:pb-4 lg:pt-6"
                      >
                        <div className={`flex w-full items-center justify-between`}>
                          <span className={`line-clamp-1 text-[12px] font-[600] lg:text-[20px]`}>{item?.title}</span>
                          <div className={`flex items-center gap-2`}>
                            <StarIcon className={`h-4 w-4 text-yellow-main`} />
                            <span
                              className={`flex items-center justify-center text-[10px] text-write-main lg:text-[14px] lg:leading-6`}
                            >
                              {item?.scorings[0]?.average_score?.substring(0, 3)}
                            </span>
                          </div>
                        </div>
                        <p
                          className={`line-clamp-3 text-[10px] font-[400] leading-[32px] text-write-main lg:text-[16px]`}
                        >
                          {item?.content}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PalceSection;
