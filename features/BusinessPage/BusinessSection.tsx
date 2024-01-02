import FilterBox from "@/components/shared/FilterBox";
import { EllipsisVerticalIcon, EllipsisHorizontalIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Image2 from "@/assets/images/businesspage/business-image(2).png";
import Image3 from "@/assets/images/businesspage/business-image(3).png";
import Image4 from "@/assets/images/businesspage/business-image(4).png";
import Image5 from "@/assets/images/businesspage/business-image(5).png";
import Image6 from "@/assets/images/businesspage/business-image(6).png";
import Image7 from "@/assets/images/businesspage/business-image(7).png";
import Image8 from "@/assets/images/businesspage/business-image(8).png";
import Image9 from "@/assets/images/businesspage/business-image(9).png";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const slides = [
  {
    id: Math.random(),
    image: Image1,
    name: "نانوایی سید",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان ایرانشهر، منطقه ۳، بلوار خردمند شمالی، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image2,
    name: "لبنیات سید اصغر",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان جمهوری اسلامی، منطقه ۲۴، بلوار نیایش، کوچه ۵، پلاک ۲۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image3,
    name: "پوشاک فروردین",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image4,
    name: "پوشاک هیراد",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image5,
    name: "لبنیات اسماعیلی",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image6,
    name: "نانوایی رضایی و برادران",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image7,
    name: "پوشاک ملودی",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image8,
    name: "پوشاک افتاب",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: Math.random(),
    image: Image9,
    name: "فروشگاه جانبازان",
    comments: parseInt(String(Math.random() * 100)),
    score: (Math.random() * 5).toFixed(2),
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
];

const BusinessSection = () => {
  const [collections, setCollections] = useState([...slides.slice(0, 4)]);
  const [loading, setloading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (containerRef?.current) {
      console.log(
        containerRef.current.scrollTop,
        containerRef.current.clientHeight,
        containerRef.current.offsetHeight,
        containerRef.current.scrollHeight
      );
      if (containerRef.current.scrollTop + containerRef.current.clientHeight === containerRef.current.scrollHeight) {
        setloading(true);
        try {
          setCollections((prev) => [...prev, ...slides.slice(prev.length, prev.length + 4)]);
        } catch (e) {
          console.log(e);
        } finally {
          setloading(false);
        }
      }
    }
  };

  return (
    <section
      className={`flex flex-col lg:flex-row w-[calc(100%-56px)] lg:w-[calc(100%-128px)] max-w-[1666px] mx-auto pt-8 pb-[64px] gap-8`}
    >
      <FilterBox />
      <div className="lg:w-[calc(100%-434px)]">
        <div className="flex w-full items-center justify-end gap-4">
          <EllipsisVerticalIcon className="w-8 h-8 text-write-04 cursor-pointer" />
          <EllipsisHorizontalIcon className="w-8 h-8 text-gray-03 cursor-pointer" />
        </div>
        <div
          onScroll={onScroll}
          ref={containerRef}
          className="w-full overflow-hidden overflow-y-auto h-[556px] lg:h-[1288px] pt-8"
        >
          {collections.map((item: any) => {
            return (
              <div
                key={item?.id}
                className={`w-full flex items-center rounded-[16px] overflow-hidden h-[127px] lg:h-[302px] my-4`}
              >
                <Fragment>
                  <div
                    className={`w-full flex items-center rounded-t-[16px] lg:rounded-t-none lg:rounded-tr-[16px] lg:rounded-br-[16px] h-full overflow-hidden`}
                  >
                    <Image
                      // style={{ borderRadius: `0 16px 16px 0` }}
                      alt=""
                      src={item?.image}
                      className={`w-[40%] h-full object-cover`}
                    />
                    <div
                      // style={{ borderRadius: `16px 0 0 16px` }}
                      className={`w-[60%] h-full flex flex-col gap-2 bg-white justify-between p-4 lg:px-8 lg:py-8 border-b border-t border-l  border-yellow-04 overflow-hidden rounded-tl-[16px] rounded-bl-[16px]`}
                    >
                      <div className={`w-full flex items-center justify-between`}>
                        <span className={`text-[14px] lg:text-[24px] font-[700]`}>{item?.name}</span>
                        <div className={`flex items-center gap-2`}>
                          <div className={`flex items-center gap-2`}>
                            <StarIcon className={`w-3 h-3 lg:w-5 lg:h-5 text-yellow-main`} />
                            <span
                              className={`text-[12px] lg:text-[16px] leading-6 text-write-04 flex items-center justify-center`}
                            >
                              {item?.score}
                            </span>
                          </div>
                          <span className="w-[2px] h-[50px] bg-gray-02 hidden lg:flex"></span>
                          <div className={`items-center gap-2 hidden lg:flex`}>
                            <ChatBubbleLeftIcon className={`w-5 h-5 text-gray-04`} />
                            <span className={`text-[16px] leading-6 text-write-04 flex items-center justify-center`}>
                              {item?.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-[12px] text-ellipsis leading-6 lg:text-[16px] text-write-main font-[500]`}>
                        {item?.address}
                      </span>
                      <p
                        className={`text-[12px] leading-6 lg:leading-8 text-ellipsis lg:text-[16px] text-write-main font-[200]`}
                      >
                        {item?.desc}
                      </p>
                      <Link
                        href={""}
                        className={`py-[6px] px-[38px] lg:py-[9px] lg:px-[38px] border border-yellow-main rounded-[16px] w-fit text-[16px] self-end`}
                      >
                        بیشتر
                      </Link>
                    </div>
                  </div>
                </Fragment>
              </div>
            );
          })}
          {loading && (
            <div className={`w-[32px] h-[32px] border-r border-r-gray-04 animate-spin rounded-full my-4 mx-auto`}></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
