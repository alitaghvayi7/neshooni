import Image from "next/image";
// import SourceImage from "@/assets/images/singlebusinesspage/singlebusiness.png";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useRouter } from "next/router";
import { BookmarkIcon as BookmarkIconOutline, ShareIcon, StarIcon as StarIconOutline, UserIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid, StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";
import PlaceDetails from "@/components/shared/PlaceDetails";
import GoogleMap from "@/components/shared/GoogleMap";
import Link from "next/link";

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
        }
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
        className={`w-[calc(100%-56px)] lg:w-[calc(100%-245px)] max-w-[1430px] mx-auto pb-[64px] gap-8 relative z-[1] isolate pt-8 lg:pt-0 top-0 lg:top-[-5rem]`}
      >
        <div className={`w-full h-[342px] lg:h-[657px] rounded-[16px] overflow-hidden flex items-center justify-center`}>
          <Image alt="" src={Image1} className={`w-full h-full object-cover`} />
        </div>
        <Breadcrumbs
          breadcumbs={[
            { href: "/", label: "خانه" },
            { href: "/business", label: "کسب و کار" },
            { href: "/business/1", label: "هتل جمیل" },
          ]}
        />

        {/* start title and icons */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[20px] lg:text-[32px] font-[700] text-write-main">رستوران فیلیا</h1>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2`}>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                امتیاز
              </span>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                ۴
              </span>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-gray-03 flex items-center justify-center`}>
                از ۵
              </span>
            </div>
            <span className="w-[1px] h-8 lg:h-[50px] bg-gray-03 lg:flex"></span>
            <div className={`items-center gap-2 hidden lg:flex`}>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                آمار بازدید
              </span>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                ۴۵
              </span>
            </div>
            <span className="w-[1px] h-8 lg:h-[50px] bg-gray-03 hidden lg:flex"></span>
            {!bookmarked && (
              <BookmarkIconOutline
                onClick={() => setBookmarked(!bookmarked)}
                className={`w-6 h-6 text-write-03 cursor-pointer`}
              />
            )}
            {bookmarked && (
              <BookmarkIconSolid
                onClick={() => setBookmarked(!bookmarked)}
                className={`w-6 h-6 text-write-03 cursor-pointer`}
              />
            )}
            <span className="w-[1px] h-8 lg:h-[50px] bg-gray-03 lg:flex"></span>
            <ShareIcon className={`w-6 h-6 text-write-03 cursor-pointer`} />
          </div>
        </div>
        {/* end title and icons */}

        {/* start description  */}
        <p className="w-full text-[16px] lg:text-[20px] text-write-main font-[400] leading-9 pt-6">
          جزایر هاوایی آخرین ایالت ثبت‌شده مابین آمریکا هستند. مناطقی که در قسمت مرکزی اقیانوس آرام واقع شده‌اند و از
          پرطرفدارترین مقصدهای تفریحی مردم دنیا به‌حساب می‌آیند. مهم‌ترین شهر و پایتخت مجمع‌الجزایز هاوایی «هونولولو»
          نام دارد. هشت جزیره اصلی هاوائی اوآهو، مائوئی، کائوآئی، لانائی، مولوکای، نیهاو و کاهولاوی نامیده می‌شوند.
          جزایر هاوائی با میزبانی از کوه‌های آتشفشانی، آبشارهای زیبا و پارک‌های ملی در کنار ارائه منظرهای آبی تماشایی
          (چه خارج و چه داخل آب) به «بهشتِ جزیره‌ها» معروف شده است. همراه کجارو باشید که در تازه‌ترین قسمت از تورهای
          مجازی قرار است به‌جزایر هاوائی سفر کنیم.
        </p>
        {/* end description */}

        {/* start info & map */}
        <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between lg:items-center lg:h-[300px] pt-12">
          <div className="w-full lg:w-[40%] h-full">
            <PlaceDetails />
          </div>
          <div className="w-full lg:w-[55%] h-[300px] lg:h-full overflow-hidden rounded-[16px]">
            <GoogleMap boundes={boundes} labelTitle="برای مسیریابی کلیک کنید" />
          </div>
        </div>
        {/* end info & map */}

        <span className="w-full block h-[2px] my-[56px] bg-gray-03"></span>

        {/* start comments and idea section */}
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
          <div className="w-full lg:w-[40%] h-full flex flex-col">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-[24px] font-[600] text-write-main">امتیاز</h2>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2`}>
                  <span className={`text-[16px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                    ۴
                  </span>
                  <span className={`text-[16px] lg:text-[20px] leading-6 text-gray-03 flex items-center justify-center`}>
                    از ۵
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <StarIconOutline className={`w-5 h-5 text-yellow-main`} />
                  <StarIconOutline className={`w-5 h-5 text-yellow-main`} />
                  <StarIconOutline className={`w-5 h-5 text-yellow-main`} />
                  <StarIconSolid className={`w-5 h-5 text-yellow-main`} />
                  <StarIconSolid className={`w-5 h-5 text-yellow-main`} />
                </div>
              </div>
            </div>
            <span className="text-[20px] text-write-main font-[400] pt-12">شما هم درباره این مغازه دیدگاه ثبت کنید</span>
            <Link
              href={''}
              className="w-full bg-yellow-02 text-write-main rounded-[16px] py-3 flex items-center justify-center mt-9"
            >
              ثبت دیدگاه
            </Link>
          </div>
          <div className="w-full lg:w-[55%] h-full flex flex-col">
            <h2 className="text-[20px] font-[600] text-write-main">نظرات و تجربه کاربران</h2>
            <div className="w-full mt-4 flex flex-col gap-3">
              {/* start single comment */}
              <div className="w-full bg-white rounded-[16px] flex flex-col px-4 py-6 lg:py-8 lg:px-[56px]">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] rounded-full bg-blue-06 flex items-center justify-center">
                      <UserIcon className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] text-white" />
                    </span>
                    <div className=" flex flex-col justify-between">
                      <span className="text-[14px] lg:text-[16px] font-[600] text-write-main">شهرام طالبی</span>
                      <span className="text-[12px] lg:text-[14px] font-[300] text-write-main">۱ اسفند ۱۴۰۱</span>
                    </div>
                  </div>
                  <ShareIcon className={`w-6 h-6 text-write-03 cursor-pointer`} />
                </div>
                <p className="text-[12px] lg:text-[20px] leading-5 lg:leading-7 font-[400] text-write-main mt-4">
                  اگه به کرمانشاه سفر کردید برای دیدن زیبایی و وسعت شهر حتما سری به بام کرمانشاه بزنید. در این
                  خبری از ترافیک و شلوغی شهر نیست و میتونید چشم انداز زیبایی از شهر رو به خصوص در شب ببینید.
                </p>
                <span className="w-full block h-[2px] my-5 bg-gray-02"></span>
                <span className="text-[12px] lg:text-[14px] leading-7 font-[400] text-write-main cursor-pointer">پاسخ به این دیدگاه</span>
              </div>
              {/* end single comment */}
              {/* start single comment */}
              <div className="w-full bg-white rounded-[16px] flex flex-col px-4 py-6 lg:py-8 lg:px-[56px]">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] rounded-full bg-blue-06 flex items-center justify-center">
                      <UserIcon className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] text-white" />
                    </span>
                    <div className=" flex flex-col justify-between">
                      <span className="text-[14px] lg:text-[16px] font-[600] text-write-main">شهرام طالبی</span>
                      <span className="text-[12px] lg:text-[14px] font-[300] text-write-main">۱ اسفند ۱۴۰۱</span>
                    </div>
                  </div>
                  <ShareIcon className={`w-6 h-6 text-write-03 cursor-pointer`} />
                </div>
                <p className="text-[12px] lg:text-[20px] leading-5 lg:leading-7 font-[400] text-write-main mt-4">
                  اگه به کرمانشاه سفر کردید برای دیدن زیبایی و وسعت شهر حتما سری به بام کرمانشاه بزنید. در این
                  خبری از ترافیک و شلوغی شهر نیست و میتونید چشم انداز زیبایی از شهر رو به خصوص در شب ببینید.
                </p>
                <span className="w-full block h-[2px] my-5 bg-gray-02"></span>
                <span className="text-[12px] lg:text-[14px] leading-7 font-[400] text-write-main cursor-pointer">پاسخ به این دیدگاه</span>
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
