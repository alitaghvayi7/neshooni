import PhoneIcon from "@/assets/images/icons/icons8_call_list1.png";
import ParkingIcon from "@/assets/images/icons/icons8_carpark1.png";
import WifiIcon from "@/assets/images/icons/icons8_Smart_Home1.png";
import CarIcon from "@/assets/images/icons/icons8_car1.png";
import Image from "next/image";

const PlaceDetails = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-around">
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <Image src={PhoneIcon} alt="شماره تماس" className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="text-[16px] lg:text-[20px] font-[600] text-write-main">شماره تلفن</span>
          </div>
          <span className="text-[16px] lg:text-[20px] font-[300] text-write-main" dir="ltr">
            02537507787
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <Image src={ParkingIcon} alt="پارکینگ" className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="text-[16px] lg:text-[20px] font-[600] text-write-main">پارکینگ</span>
          </div>
          <span className="text-[16px] lg:text-[20px] font-[300] text-write-main" dir="ltr">
            ندارد
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <Image src={WifiIcon} alt="اینترنت رایگان" className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="text-[16px] lg:text-[20px] font-[600] text-write-main">اینترنت رایگان</span>
          </div>
          <span className="text-[16px] lg:text-[20px] font-[300] text-write-main" dir="ltr">
            ندارد
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <Image src={CarIcon} alt="مسیر دسترسی با وسیله‌ی نقلیه" className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="text-[16px] lg:text-[20px] font-[600] text-write-main">مسیر دسترسی با وسیله‌ی نقلیه</span>
          </div>
          <span className="text-[16px] lg:text-[20px] font-[300] text-write-main" dir="ltr">
            ندارد
          </span>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
