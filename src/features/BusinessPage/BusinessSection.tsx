"use client";

import { GRID_ICON, ROWS_ICON } from "@/assets/icons/svgs";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Image2 from "@/assets/images/businesspage/business-image(2).png";
import Image3 from "@/assets/images/businesspage/business-image(3).png";
import Image4 from "@/assets/images/businesspage/business-image(4).png";
import Image5 from "@/assets/images/businesspage/business-image(5).png";
import Image6 from "@/assets/images/businesspage/business-image(6).png";
import Image7 from "@/assets/images/businesspage/business-image(7).png";
import BusinessHorizantalCard from "@/components/Cards/BusinessHorizantal";
import BusinessVerticalCard from "@/components/Cards/BusinessVertical";
import FilterBox from "@/components/shared/FilterBox";
import { useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: Image1,
    name: "نانوایی سید",
    comments: 561,
    score: 5.36,
    address: "تهران، خیابان ایرانشهر، منطقه ۳، بلوار خردمند شمالی، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 2,
    image: Image2,
    name: "لبنیات سید اصغر",
    comments: 651,
    score: 4.65,
    address: "تهران، خیابان جمهوری اسلامی، منطقه ۲۴، بلوار نیایش، کوچه ۵، پلاک ۲۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 3,
    image: Image3,
    name: "پوشاک فروردین",
    comments: 471,
    score: 2.45,
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 4,
    image: Image4,
    name: "پوشاک هیراد",
    comments: 154,
    score: 2.45,
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 5,
    image: Image5,
    name: "لبنیات اسماعیلی",
    comments: 354,
    score: 2.87,
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 6,
    image: Image6,
    name: "نانوایی رضایی و برادران",
    comments: 641,
    score: 4.25,
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
  {
    id: 7,
    image: Image7,
    name: "پوشاک ملودی",
    comments: 324,
    score: 4.9,
    address: "تهران، خیابان انقلاب، منطقه ۴، بلوار جمهوری، کوچه ۲۰، پلاک ۵۰۰",
    desc: "پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند. همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده شود.",
  },
];

const BusinessSection = () => {
  const [collections, setCollections] = useState([...slides.slice(0, 4)]);
  const [showContentType, setShowContentType] = useState<"row" | "grid">("row");
  const [loading, setloading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (containerRef?.current) {
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
      <div className="hidden lg:block w-[402px] h-[429px] ">
        <FilterBox />
      </div>
      <div className="lg:w-[calc(100%-434px)]">
        <div className="w-full items-center justify-end gap-4 hidden lg:flex">
          <button
            onClick={() => {
              setShowContentType("grid");
            }}
          >
            <GRID_ICON fill={showContentType === "row" ? "#AFAFAF" : "#4D3500"} />
          </button>
          <button
            onClick={() => {
              setShowContentType("row");
            }}
          >
            <ROWS_ICON fill={showContentType === "grid" ? "#AFAFAF" : "#4D3500"} />
          </button>
        </div>
        <div
          onScroll={() => {
            onScroll();
          }}
          ref={containerRef}
          dir="ltr"
          className={`w-full overflow-hidden overflow-y-auto mt-6 ${
            showContentType === "row" ? "max-h-[556px] lg:max-h-[1188px]" : "max-h-[556px] lg:max-h-[1188px]"
          }`}
        >
          <div
            dir="rtl"
            className={`w-full h-full ${showContentType === "row" ? "flex flex-col gap-6" : "grid grid-cols-3 gap-6"}`}
          >
            {collections.map((item) => {
              return showContentType === "row" ? (
                <BusinessHorizantalCard
                  address={item.address}
                  comments={item.comments}
                  desc={item.desc}
                  image={item.image}
                  name={item.name}
                  score={item.score}
                  key={item.id}
                />
              ) : (
                <div key={item.id} className="h-[540px]">
                  <BusinessVerticalCard
                    address={item.address}
                    comments={item.comments}
                    desc={item.desc}
                    image={item.image}
                    name={item.name}
                    score={item.score}
                  />
                </div>
              );
            })}
          </div>
          {loading && (
            <div className={`w-[32px] h-[32px] border-r border-r-gray-04 animate-spin rounded-full my-4 mx-auto`}></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
