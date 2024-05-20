"use client";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Image2 from "@/assets/images/businesspage/business-image(2).png";
import Image3 from "@/assets/images/businesspage/business-image(3).png";
import Image4 from "@/assets/images/businesspage/business-image(4).png";
import Image5 from "@/assets/images/businesspage/business-image(5).png";
import Image6 from "@/assets/images/businesspage/business-image(6).png";
import Image7 from "@/assets/images/businesspage/business-image(7).png";
import Image8 from "@/assets/images/businesspage/business-image(8).png";
import Image9 from "@/assets/images/businesspage/business-image(9).png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";

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

export default function ProfilePage({ searchParams }: { searchParams: { tab: string } }) {
  const router = useRouter();
  const [collections, setCollections] = useState([...slides.slice(0, 4)]);
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
    <>
      {searchParams.tab && (
        <Fragment>
          {searchParams.tab === "info" && (
            <form className={`flex w-full flex-col gap-4 lg:ms-[148px] lg:w-auto`}>
              <div className={`flex w-full items-center gap-2 lg:hidden`}>
                <ArrowRightIcon
                  onClick={() => router.push("/profile")}
                  className={`h-6 w-6 cursor-pointer text-gray-03`}
                />
                <h4 className={`text-[20px] font-[600] text-write-main`}>اطلاعات حساب کاربری</h4>
              </div>
              <h4 className={`text-[20px] font-[400] text-write-main`}>
                برای تکمیل حساب کاربری خود لطفا موارد زیر رو کامل کنید.
              </h4>
              <input
                type={"text"}
                placeholder={`نام کاربری`}
                className={`h-[56px] w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03 lg:w-[439px]`}
              />
              <input
                type={"text"}
                placeholder={`شماره تماس`}
                className={`h-[56px] w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03 lg:w-[439px]`}
              />
              <input
                type={"password"}
                placeholder={`رمز عبور`}
                className={`h-[56px] w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03 lg:w-[439px]`}
              />
              <button
                className={`flex h-[56px] w-full items-center justify-center rounded-[16px] bg-yellow-main px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03 lg:w-[439px]`}
              >
                ثبت
              </button>
            </form>
          )}
          {searchParams.tab === "your-introduction" && (
            <Fragment>
              <div className={`flex w-full items-center gap-2 lg:hidden`}>
                <ArrowRightIcon
                  onClick={() => router.push("/profile")}
                  className={`h-6 w-6 cursor-pointer text-gray-03`}
                />
                <h4 className={`text-[20px] font-[600] text-write-main`}>معرفی های شما</h4>
              </div>
              <div
                onScroll={onScroll}
                ref={containerRef}
                className="h-[556px] w-full max-w-[1243px] overflow-hidden overflow-y-auto lg:ms-6 lg:h-[1288px] lg:w-auto lg:pt-8"
              >
                <div
                  className={`mt-12 flex w-full flex-col items-center justify-between gap-2 lg:mt-0 lg:flex-row lg:gap-0`}
                >
                  <span className={`text-[14px] font-[400] text-write-04 lg:text-[20px]`}>
                    شما می توانید جاهای دیدنی ، کسب و کارهای مختلف و... در این بخش به ما معرفی کنید.
                  </span>
                  <Link
                    href={"/introduction"}
                    className={`flex w-full items-center justify-center rounded-[16px] border border-yellow-main bg-white px-[76px] py-2 text-write-02 lg:w-auto lg:py-4`}
                  >
                    شما معرفی کنید
                  </Link>
                </div>
                {collections.map((item: any) => {
                  return (
                    <div
                      key={item?.id}
                      className={`my-4 flex h-[127px] w-full items-center overflow-hidden rounded-[16px] lg:h-[302px]`}
                    >
                      <Fragment>
                        <div
                          className={`flex h-full w-full items-center overflow-hidden rounded-t-[16px] lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
                        >
                          <Image
                            // style={{ borderRadius: `0 16px 16px 0` }}
                            alt={`${item?.title}`}
                            src={item?.image}
                            className={`h-full w-[40%] object-cover`}
                          />
                          <div
                            // style={{ borderRadius: `16px 0 0 16px` }}
                            className={`flex h-full w-[60%] flex-col justify-between gap-2 overflow-hidden rounded-bl-[16px] rounded-tl-[16px] border-b border-l border-t border-yellow-04  bg-white p-4 lg:px-8 lg:py-8`}
                          >
                            <div className={`flex w-full items-center justify-between`}>
                              <span className={`text-[14px] font-[700] lg:text-[24px]`}>{item?.name}</span>
                              <div className={`flex items-center gap-2`}></div>
                            </div>
                            <span
                              className={`max-w-full text-ellipsis text-[12px] font-[500] leading-6 text-write-main lg:max-w-none lg:text-[16px]`}
                            >
                              {item?.address}
                            </span>
                            <p
                              className={`text-ellipsis text-[12px] font-[200] leading-6 text-write-main lg:text-[16px] lg:leading-8`}
                            >
                              {item?.desc}
                            </p>
                            <div className={`flex w-full items-center justify-between`}>
                              {item.score > 3 && (
                                <span className={`rounded-[16px] bg-[#D32F2F] px-4 py-2 text-white`}>تایید نشد</span>
                              )}
                              {item.score <= 3 && (
                                <span className={`rounded-[16px] bg-[#4CAF50] px-4 py-2 text-white`}>تایید شد</span>
                              )}
                              <Link
                                href={"/business/1"}
                                className={`w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:px-[38px] lg:py-[9px]`}
                              >
                                بیشتر
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    </div>
                  );
                })}
                {loading && (
                  <div
                    className={`mx-auto my-4 h-[32px] w-[32px] animate-spin rounded-full border-r border-r-gray-04`}
                  ></div>
                )}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}

      {/* <MapComponent /> */}
    </>
  );
}
