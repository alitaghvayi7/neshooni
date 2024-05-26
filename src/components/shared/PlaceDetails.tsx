import PhoneIcon from "@/assets/images/icons/icons8_call_list1.png";
import ParkingIcon from "@/assets/images/icons/icons8_carpark1.png";
import WifiIcon from "@/assets/images/icons/icons8_Smart_Home1.png";
import CarIcon from "@/assets/images/icons/icons8_car1.png";
import Image from "next/image";
import { BusinessDetails } from "@/models/business";

const PlaceDetails = ({ details }: { details: BusinessDetails[] }) => {
  console.log(details, "details in business");
  return (
    <>
      <div className="flex h-full w-full flex-col justify-around">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <Image src={PhoneIcon} alt="شماره تماس" className="h-5 w-5 lg:h-8 lg:w-8" />
            <span className="text-[16px] font-[600] text-write-main lg:text-[20px]">شماره تلفن</span>
          </div>
          <span className="text-[16px] font-[300] text-write-main lg:text-[20px]" dir="ltr">
            02537507787
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <Image src={ParkingIcon} alt="پارکینگ" className="h-5 w-5 lg:h-8 lg:w-8" />
            <span className="text-[16px] font-[600] text-write-main lg:text-[20px]">پارکینگ</span>
          </div>
          <span className="text-[16px] font-[300] text-write-main lg:text-[20px]" dir="ltr">
            ندارد
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <Image src={WifiIcon} alt="اینترنت رایگان" className="h-5 w-5 lg:h-8 lg:w-8" />
            <span className="text-[16px] font-[600] text-write-main lg:text-[20px]">اینترنت رایگان</span>
          </div>
          <span className="text-[16px] font-[300] text-write-main lg:text-[20px]" dir="ltr">
            ندارد
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <Image src={CarIcon} alt="مسیر دسترسی با وسیله‌ی نقلیه" className="h-5 w-5 lg:h-8 lg:w-8" />
            <span className="text-[16px] font-[600] text-write-main lg:text-[20px]">مسیر دسترسی با وسیله‌ی نقلیه</span>
          </div>
          <span className="text-[16px] font-[300] text-write-main lg:text-[20px]" dir="ltr">
            ندارد
          </span>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
