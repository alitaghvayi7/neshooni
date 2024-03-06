"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const FilterBox = () => {
  return (
    <>
      <div className={`w-full max-w-[402px] h-[429px] lg:px-8 lg:py-6 flex flex-col bg-white rounded-[16px] `}>
        <div className={`w-full flex items-center gap-4`}>
          <AdjustmentsHorizontalIcon className="w-8 h-8 text-blue-05" strokeWidth={2} />
          <span className="text-[16px] text-write-main font-[600]">فیلترها</span>
        </div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02 mt-4`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
        <div className={`w-full flex items-center gap-4 border-t h-[52px] border-gray-02`}></div>
      </div>
    </>
  );
};

export default FilterBox;
