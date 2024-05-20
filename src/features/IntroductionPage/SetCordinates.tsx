"use client";

import { introductionFormData } from "@/components/Forms/NewIntroduction";
import { XMarkIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const GoogleMapNoControll = dynamic(import("@/components/shared/GoogleMapNoControll"), { ssr: false });
const GoogleMapWithControll = dynamic(import("@/components/shared/GoogleMap"), { ssr: false });
import { useFormContext, useFormState } from "react-hook-form";

const SetCordinates = () => {
  const [showFirstMap, setShowFirstMap] = useState(false);
  const [showSecondMap, setShowSecondMap] = useState(false);
  const [userLocation, setUserLocation] = useState({ lng: 0, lat: 0 });
  const [finalLocation, setFinalLocation] = useState({ lng: 0, lat: 0 });

  const { getValues, register, setValue } = useFormContext<introductionFormData>();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${finalLocation?.lat}&lon=${finalLocation?.lng}&apiKey=${process.env.GEOAPIFY_API_KEY}&lang=fa`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(setValue("address", result.features[0].properties.address_line2));
      })
      .catch((error) => console.log("error", error));
  }, [finalLocation, setValue]);
  return (
    <div className="relative">
      {showFirstMap && (
        <div
          className={`fffffff fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,.1)] backdrop-blur-[4px]`}
        >
          <XMarkIcon
            onClick={() => setShowFirstMap(false)}
            className={`absolute left-10 top-10 h-8 w-8 cursor-pointer text-gray-04`}
          />
          <div
            className={`flex h-[50%] w-[90%] flex-col justify-between rounded-[32px] bg-white px-6 py-4 shadow-2xl lg:w-[40%]`}
          >
            <div className={`h-[80%] w-full overflow-hidden rounded-[16px]`}>
              <GoogleMapNoControll boundes={userLocation} setBoundes={setUserLocation} />
            </div>
            <button
              onClick={() => {
                setFinalLocation(userLocation);
                setShowFirstMap(false);
              }}
              className={`mx-auto flex h-[40px] w-full items-center justify-center rounded-[8px] bg-yellow-main text-[16px] font-[400] text-write-main lg:w-[346px]`}
            >
              ثبت
            </button>
          </div>
        </div>
      )}
      {showSecondMap && (
        <div
          className={`sssssss fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,.1)] backdrop-blur-[4px]`}
        >
          <XMarkIcon
            onClick={() => setShowSecondMap(false)}
            className={`absolute left-10 top-10 h-8 w-8 cursor-pointer text-gray-04`}
          />
          <div
            className={`flex h-[60%]  w-[90%] flex-col justify-between rounded-[32px] bg-white px-6 py-4 shadow-2xl lg:w-[40%]`}
          >
            <div className={`h-[80%] w-full overflow-hidden rounded-[16px]`}>
              <GoogleMapWithControll boundes={userLocation} labelTitle="نمایش در گوگل" />
            </div>
            <button
              onClick={() => {
                setFinalLocation(userLocation);
                setShowSecondMap(false);
              }}
              className={`mx-auto flex h-[40px] w-full items-center justify-center rounded-[8px] bg-yellow-main text-[16px] font-[400] text-write-main lg:w-[346px]`}
            >
              ثبت
            </button>
          </div>
        </div>
      )}
      <label className={`relative isolate block h-[180px] w-full overflow-hidden rounded-[16px] border border-gray-02`}>
        <textarea
          {...register("address")}
          placeholder={"آدرس را وارد کنید"}
          className={`absolute inset-0 z-[1] h-full w-full resize-none bg-white p-6 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
        ></textarea>
        <div
          className={`absolute bottom-4 left-0 right-0 z-[2] flex h-[56px] w-full items-center justify-between gap-4 px-6`}
        >
          <button
            type={"button"}
            onClick={() => setShowFirstMap(true)}
            className={`flex w-full max-w-[225px] cursor-pointer items-center justify-center rounded-[8px] border border-yellow-04 py-[10px] text-[14px] text-gray-03`}
          >
            من اینجام
          </button>
          <button
            type={"button"}
            onClick={() => setShowSecondMap(true)}
            className={`flex w-full max-w-[225px] cursor-pointer items-center justify-center rounded-[8px] border border-yellow-04 py-[10px] text-[14px] text-gray-03`}
          >
            انتخاب از روی نقشه
          </button>
        </div>
      </label>
    </div>
  );
};

export default SetCordinates;
