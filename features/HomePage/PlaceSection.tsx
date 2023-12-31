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

const slides = [
  {
    id: crypto.randomUUID(),
    image: Image1,
    score: 1.4,
    name: "کوه خضر",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: crypto.randomUUID(),
    image: Image2,
    score: 3.4,
    name: "بوستان علوی",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: crypto.randomUUID(),
    image: Image3,
    score: 5,
    name: "بوستان مهدی",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
  {
    id: crypto.randomUUID(),
    image: Image1,
    score: 4.3,
    name: "کوه خضر",
    desc: "خودکار فوق روان نانو آنتی باکتریال پنتر مدل یک انتخاب بی‌نظیر برای دوستداران خودکارهای با کیفیت است.",
  },
];

const PalceSection = () => {
  return (
    <>
      <section className={`flex flex-col items-center w-full max-w-[1689px] mx-auto mt-[11rem] lg:mt-[15rem] gap-8`}>
        <div className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] flex items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit pl-6 border-b border-r border-yellow-04 bg-yellow-06 indent-5 font-bold text-[20px] lg:text-[40px] text-write-main`}
          >
            {" "}
            کجاها بریم؟
          </span>
          <Link
            href={""}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`w-fit hidden lg:flex px-6 pb-4 border-b border-l border-yellow-04 bg-transparent text-[12px] lg:text-[16px] text-write-04`}
          >
            مشاهده همه
          </Link>
        </div>
        <div
          className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] h-[285px] lg:h-[601px] flex items-center bg-gray-02 bg-opacity-25 rounded-[32px] overflow-hidden`}
        >
          <div className={`w-[119px] lg:w-[390px] h-full relative isolate bg-yellow-06`}>
            <Image alt={``} src={BackGround} className={`w-full h-full object-cover absolute inset-0`} />
            <Image
              alt={``}
              src={MapImage}
              className={`w-full h-full object-contain absolute top-0 bottom-0 -left-4 lg:-left-10 z-[2]`}
            />
          </div>
          <div
            style={{ borderRadius: `32px 0 0 32px` }}
            className={`w-[calc(100%-119px)] lg:w-[calc(100%-390px)] h-full bg-white border-t border-b border-l border-yellow-04 py-4 ps-5 lg:py-10 lg:ps-[85px] overflow-hidden`}
          >
            <Swiper
              // install Swiper modules
              modules={[Keyboard, Mousewheel, Autoplay, EffectFade, Pagination]}
              allowTouchMove={true}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
              spaceBetween={25}
              slidesPerView={3}
              pagination={{ clickable: true, enabled: false }}
              scrollbar={{ draggable: true }}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {slides.map((item: any) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className="w-[169px] lg:w-[350px] h-full rounded-[16px] overflow-hidden flex flex-col ">
                      <Image alt={``} src={item?.image} className={`w-full h-[66%] object-cover`} />
                      <div
                        style={{ borderRadius: `0 0 16px 16px` }}
                        className="w-full h-[34%] flex flex-col p-2 lg:pt-6 lg:px-4 lg:pb-4 border border-yellow-04"
                      >
                        <div className={`w-full flex items-center justify-between`}>
                          <span className={`text-[12px] lg:text-[20px] font-[600]`}>{item?.name}</span>
                          <div className={`flex items-center gap-2`}>
                            <StarIcon className={`w-4 h-4 text-yellow-main`} />
                            <span
                              className={`text-[10px] lg:text-[14px] lg:leading-6 text-write-main flex items-center justify-center`}
                            >
                              {item?.score}
                            </span>
                          </div>
                        </div>
                        <p className={`text-[10px] lg:text-[16px] leading-[32px] text-write-main font-[400]`}>
                          {item?.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`w-fit flex lg:hidden px-6 py-1 border-b border-l border-yellow-04 bg-transparent text-[12px] text-write-04`}
        >
          مشاهده همه
        </Link>
      </section>
    </>
  );
};

export default PalceSection;
