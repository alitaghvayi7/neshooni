"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// import SourceImage from "@/assets/images/singlebusinesspage/singlebusiness.png";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useRouter } from "next/navigation";
import {
  BookmarkIcon as BookmarkIconOutline,
  ShareIcon,
  StarIcon as StarIconOutline,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid, StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";
import PlaceDetails from "@/components/shared/PlaceDetails";
const GoogleMap = dynamic(() => import("@/components/shared/GoogleMap"), { ssr: false });

const IntroductionSection = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [boundes, setBoundes] = useState({ lat: 0, lng: 0 });

  useLayoutEffect(() => {
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Do something with the location data, e.g. display on a map
          // console.log(`Latitude: ${lat}, longitude: ${lng}`);
          setBoundes({ lat, lng });
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          // console.error("Error getting user location:", error);
          setBoundes({ lat: 34.382436, lng: 50.523504 });
        },
      );
    } else {
      // Geolocation is not supported by the browser
      // console.error("Geolocation is not supported by this browser.");
      setBoundes({ lat: 34.382436, lng: 50.523504 });
    }
  }, []);

  return (
    <>
      <section
        className={`relative top-0 isolate z-[1] mx-auto w-[calc(100%-56px)] max-w-[1430px] gap-8 pb-[64px] pt-8 lg:top-[-5rem] lg:w-[calc(100%-245px)] lg:pt-0`}
      >
        <div
          className={`flex h-[342px] w-full items-center justify-center overflow-hidden rounded-[16px] lg:h-[657px]`}
        >
          <Image alt="" src={Image1} className={`h-full w-full object-cover`} />
        </div>
        <Breadcrumbs
          breadcumbs={[
            { href: "/", label: "خانه" },
            { href: "/business", label: "کسب و کار" },
            { href: "/business/1", label: "هتل جمیل" },
          ]}
        />

        {/* start title and icons */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px] font-[700] text-write-main lg:text-[32px]">رستوران فیلیا</h1>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2`}>
              <span className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[20px]`}>
                امتیاز
              </span>
              <span className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[20px]`}>
                ۴
              </span>
              <span className={`flex items-center justify-center text-[12px] leading-6 text-gray-03 lg:text-[20px]`}>
                از ۵
              </span>
            </div>
            <span className="h-8 w-[1px] bg-gray-03 lg:flex lg:h-[50px]"></span>
            <div className={`hidden items-center gap-2 lg:flex`}>
              <span className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[20px]`}>
                آمار بازدید
              </span>
              <span className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[20px]`}>
                ۴۵
              </span>
            </div>
            <span className="hidden h-8 w-[1px] bg-gray-03 lg:flex lg:h-[50px]"></span>
            {!bookmarked && (
              <BookmarkIconOutline
                onClick={() => setBookmarked(!bookmarked)}
                className={`h-6 w-6 cursor-pointer text-write-03`}
              />
            )}
            {bookmarked && (
              <BookmarkIconSolid
                onClick={() => setBookmarked(!bookmarked)}
                className={`h-6 w-6 cursor-pointer text-write-03`}
              />
            )}
            <span className="h-8 w-[1px] bg-gray-03 lg:flex lg:h-[50px]"></span>
            <ShareIcon className={`h-6 w-6 cursor-pointer text-write-03`} />
          </div>
        </div>
        {/* end title and icons */}

        {/* start description  */}
        <p className="w-full pt-6 text-[16px] font-[400] leading-9 text-write-main lg:text-[20px]">
          جزایر هاوایی آخرین ایالت ثبت‌شده مابین آمریکا هستند. مناطقی که در قسمت مرکزی اقیانوس آرام واقع شده‌اند و از
          پرطرفدارترین مقصدهای تفریحی مردم دنیا به‌حساب می‌آیند. مهم‌ترین شهر و پایتخت مجمع‌الجزایز هاوایی «هونولولو»
          نام دارد. هشت جزیره اصلی هاوائی اوآهو، مائوئی، کائوآئی، لانائی، مولوکای، نیهاو و کاهولاوی نامیده می‌شوند.
          جزایر هاوائی با میزبانی از کوه‌های آتشفشانی، آبشارهای زیبا و پارک‌های ملی در کنار ارائه منظرهای آبی تماشایی
          (چه خارج و چه داخل آب) به «بهشتِ جزیره‌ها» معروف شده است. همراه کجارو باشید که در تازه‌ترین قسمت از تورهای
          مجازی قرار است به‌جزایر هاوائی سفر کنیم.
        </p>
        {/* end description */}

        {/* start info & map */}
        <div className="flex w-full flex-col justify-between gap-5 pt-12 lg:h-[300px] lg:flex-row lg:items-center lg:gap-0">
          <div className="h-full w-full lg:w-[40%]">
            <PlaceDetails />
          </div>
          <div className="h-[300px] w-full overflow-hidden rounded-[16px] lg:h-full lg:w-[55%]">
            <GoogleMap boundes={boundes} labelTitle="برای مسیریابی کلیک کنید" />
          </div>
        </div>
        {/* end info & map */}

        <span className="my-[56px] block h-[2px] w-full bg-gray-03"></span>

        {/* start comments and idea section */}
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="flex h-full w-full flex-col lg:w-[40%]">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-[24px] font-[600] text-write-main">امتیاز</h2>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2`}>
                  <span
                    className={`flex items-center justify-center text-[16px] leading-6 text-write-04 lg:text-[20px]`}
                  >
                    ۴
                  </span>
                  <span
                    className={`flex items-center justify-center text-[16px] leading-6 text-gray-03 lg:text-[20px]`}
                  >
                    از ۵
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <StarIconOutline className={`h-5 w-5 text-yellow-main`} />
                  <StarIconOutline className={`h-5 w-5 text-yellow-main`} />
                  <StarIconOutline className={`h-5 w-5 text-yellow-main`} />
                  <StarIconSolid className={`h-5 w-5 text-yellow-main`} />
                  <StarIconSolid className={`h-5 w-5 text-yellow-main`} />
                </div>
              </div>
            </div>
            <span className="pt-12 text-[20px] font-[400] text-write-main">
              شما هم درباره این مغازه دیدگاه ثبت کنید
            </span>
            <Link
              href={"/business/1/comment"}
              className="mt-9 flex w-full items-center justify-center rounded-[16px] bg-yellow-02 py-3 text-write-main"
            >
              ثبت دیدگاه
            </Link>
          </div>
          <div className="flex h-full w-full flex-col lg:w-[55%]">
            <h2 className="text-[20px] font-[600] text-write-main">نظرات و تجربه کاربران</h2>
            <div className="mt-4 flex w-full flex-col gap-3">
              {/* start single comment */}
              <div className="flex w-full flex-col rounded-[16px] bg-white px-4 py-6 lg:px-[56px] lg:py-8">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-blue-06 lg:h-[80px] lg:w-[80px]">
                      <UserIcon className="h-[24px] w-[24px] text-white lg:h-[40px] lg:w-[40px]" />
                    </span>
                    <div className=" flex flex-col justify-between">
                      <span className="text-[14px] font-[600] text-write-main lg:text-[16px]">شهرام طالبی</span>
                      <span className="text-[12px] font-[300] text-write-main lg:text-[14px]">۱ اسفند ۱۴۰۱</span>
                    </div>
                  </div>
                  <ShareIcon className={`h-6 w-6 cursor-pointer text-write-03`} />
                </div>
                <p className="mt-4 text-[12px] font-[400] leading-5 text-write-main lg:text-[20px] lg:leading-7">
                  اگه به کرمانشاه سفر کردید برای دیدن زیبایی و وسعت شهر حتما سری به بام کرمانشاه بزنید. در این خبری از
                  ترافیک و شلوغی شهر نیست و میتونید چشم انداز زیبایی از شهر رو به خصوص در شب ببینید.
                </p>
                <span className="my-5 block h-[2px] w-full bg-gray-02"></span>
                <span className="cursor-pointer text-[12px] font-[400] leading-7 text-write-main lg:text-[14px]">
                  پاسخ به این دیدگاه
                </span>
              </div>
              {/* end single comment */}
              {/* start single comment */}
              <div className="flex w-full flex-col rounded-[16px] bg-white px-4 py-6 lg:px-[56px] lg:py-8">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-blue-06 lg:h-[80px] lg:w-[80px]">
                      <UserIcon className="h-[24px] w-[24px] text-white lg:h-[40px] lg:w-[40px]" />
                    </span>
                    <div className=" flex flex-col justify-between">
                      <span className="text-[14px] font-[600] text-write-main lg:text-[16px]">شهرام طالبی</span>
                      <span className="text-[12px] font-[300] text-write-main lg:text-[14px]">۱ اسفند ۱۴۰۱</span>
                    </div>
                  </div>
                  <ShareIcon className={`h-6 w-6 cursor-pointer text-write-03`} />
                </div>
                <p className="mt-4 text-[12px] font-[400] leading-5 text-write-main lg:text-[20px] lg:leading-7">
                  اگه به کرمانشاه سفر کردید برای دیدن زیبایی و وسعت شهر حتما سری به بام کرمانشاه بزنید. در این خبری از
                  ترافیک و شلوغی شهر نیست و میتونید چشم انداز زیبایی از شهر رو به خصوص در شب ببینید.
                </p>
                <span className="my-5 block h-[2px] w-full bg-gray-02"></span>
                <span className="cursor-pointer text-[12px] font-[400] leading-7 text-write-main lg:text-[14px]">
                  پاسخ به این دیدگاه
                </span>
              </div>
              {/* end single comment */}
            </div>
          </div>
        </div>
        {/* end comments and idea section */}
      </section>
    </>
  );
};

export default IntroductionSection;
