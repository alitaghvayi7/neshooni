import Image from "next/image";
// import SourceImage from "@/assets/images/singlebusinesspage/singlebusiness.png";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useRouter } from "next/router";
import { BookmarkIcon as BookmarkIconOutline, ShareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";
import PlaceDetails from "@/components/shared/PlaceDetails";
import GoogleMap from "@/components/shared/GoogleMap";

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
        className={`w-[calc(100%-56px)] lg:w-[calc(100%-245px)] max-w-[1430px] mx-auto pb-[64px] gap-8 relative z-[1] isolate top-[-5rem]`}
      >
        <div className={`w-full lg:h-[657px] rounded-[16px] overflow-hidden flex items-center justify-center`}>
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
          <h1 className="text-[32px] font-[700] text-write-main">رستوران فیلیا</h1>
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
            <span className="w-[1px] h-[50px] bg-gray-03 hidden lg:flex"></span>
            <div className={`items-center gap-2 hidden lg:flex`}>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                آمار بازدید
              </span>
              <span className={`text-[12px] lg:text-[20px] leading-6 text-write-04 flex items-center justify-center`}>
                ۴۵
              </span>
            </div>
            <span className="w-[1px] h-[50px] bg-gray-03 hidden lg:flex"></span>
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
            <span className="w-[1px] h-[50px] bg-gray-03 hidden lg:flex"></span>
            <ShareIcon className={`w-6 h-6 text-write-03 cursor-pointer`} />
          </div>
        </div>
        {/* end title and icons */}

        {/* start description  */}
        <p className="w-full text-[20px] text-write-main font-[400] leading-9 pt-6">
          جزایر هاوایی آخرین ایالت ثبت‌شده مابین آمریکا هستند. مناطقی که در قسمت مرکزی اقیانوس آرام واقع شده‌اند و از
          پرطرفدارترین مقصدهای تفریحی مردم دنیا به‌حساب می‌آیند. مهم‌ترین شهر و پایتخت مجمع‌الجزایز هاوایی «هونولولو»
          نام دارد. هشت جزیره اصلی هاوائی اوآهو، مائوئی، کائوآئی، لانائی، مولوکای، نیهاو و کاهولاوی نامیده می‌شوند.
          جزایر هاوائی با میزبانی از کوه‌های آتشفشانی، آبشارهای زیبا و پارک‌های ملی در کنار ارائه منظرهای آبی تماشایی
          (چه خارج و چه داخل آب) به «بهشتِ جزیره‌ها» معروف شده است. همراه کجارو باشید که در تازه‌ترین قسمت از تورهای
          مجازی قرار است به‌جزایر هاوائی سفر کنیم.
        </p>
        {/* end description */}

        {/* start info & map */}
        <div className="w-full flex justify-between items-center lg:h-[300px] pt-12">
          <div className="w-[40%] h-full">
            <PlaceDetails />
          </div>
          <div className="w-[55%] h-full overflow-hidden rounded-[16px]">
            <GoogleMap boundes={boundes} labelTitle="برای مسیریابی کلیک کنید" />
          </div>
        </div>
        {/* end info & map */}

        <span className="w-full block h-[2px] my-[56px] bg-gray-03"></span>
      </section>
    </>
  );
};

export default IntroductionSection;
