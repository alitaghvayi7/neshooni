"use client";

import Menu from "@/components/shared/Menu";
import { useEffect, useState } from "react";
import { ChevronDownIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/shared/Footer";
// import GoogleMapNoControll from "@/components/shared/GoogleMapNoControll";
import dynamic from "next/dynamic";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
// import GoogleMapWithControll from "@/components/shared/GoogleMapWithControll";
const GoogleMapNoControll = dynamic(import("@/components/shared/GoogleMapNoControll"), { ssr: false });
const GoogleMapWithControll = dynamic(import("@/components/shared/GoogleMapWithControll"), { ssr: false });

export default function IntroductionPage() {
  const [selected, setSelected] = useState<null | string>(null);
  const [open, setOpen] = useState(false);
  const [showFirstMap, setShowFirstMap] = useState(false);
  const [showSecondMap, setShowSecondMap] = useState(false);
  const [userLocation, setUserLocation] = useState({ lng: 0, lat: 0 });
  const [finalLocation, setFinalLocation] = useState({ lng: 0, lat: 0 });
  const [address, setAddress] = useState<{ address_line2: "" } | null>(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${finalLocation?.lat}&lon=${finalLocation?.lng}&apiKey=${process.env.GEOAPIFY_API_KEY}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setAddress(result.features[0].properties))
      .catch((error) => console.log("error", error));
  }, [finalLocation]);

  return (
    <>
      {showFirstMap && (
        <div
          className={`fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,.1)] backdrop-blur-[4px]`}
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
          className={`fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,.1)] backdrop-blur-[4px]`}
        >
          <XMarkIcon
            onClick={() => setShowSecondMap(false)}
            className={`absolute left-10 top-10 h-8 w-8 cursor-pointer text-gray-04`}
          />
          <div
            className={`flex h-[60%]  w-[90%] flex-col justify-between rounded-[32px] bg-white px-6 py-4 shadow-2xl lg:w-[40%]`}
          >
            <div className={`h-[80%] w-full overflow-hidden rounded-[16px]`}>
              <GoogleMapWithControll boundes={userLocation} setBoundes={setUserLocation} />
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
      <main className={`w-full`}>
        <header className={`w-full bg-blue-04 bg-opacity-20`}>
          <Menu />
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`relative isolate z-[1] h-[65px] w-full lg:h-[156px]`}
          ></div>
        </header>
        <section className={`w-full bg-blue-04 bg-opacity-10 pb-14 pt-[5rem] lg:pt-[8rem]`}>
          <section
            className={`mx-auto flex w-[calc(100%-56px)] max-w-[1254px] flex-col flex-wrap gap-4 lg:w-[calc(100%-300px)] lg:gap-0`}
          >
            <p className={`w-full max-w-[1124px] text-[20px] font-[400] leading-8 text-write-04`}>
              شما می توانید جاهای دیدنی ، کسب و کارهای مختلف و... در این بخش به ما معرفی کنید. بعد از ارسال و معرفی خود،
              مطالب توسط ادمین بررسی میشود و در سایت منتشر می‌شود.
            </p>
            <details className={`group relative isolate mt-[72px]`} open={open}>
              <summary
                onClick={() => setOpen(true)}
                className={`flex h-[48px] w-full max-w-[539px] cursor-pointer items-center justify-between rounded-[16px] border border-gray-02 bg-white px-6 py-3 group-open:rounded-b-none group-open:rounded-t-[16px]`}
              >
                <span className={`text-[16px] font-[500] text-write-04`}>
                  {selected ? selected : "سوژه مورد نظر شما جزو کدوم بخشه؟"}
                </span>
                <ChevronDownIcon className={`h-6 w-6 text-[#5B5B5B] transition group-open:rotate-[180deg]`} />
              </summary>
              <ul className={`group/dropdown absolute left-0 right-0 top-[46px] w-full max-w-[538px]`}>
                <li
                  onClick={() => {
                    setSelected("گردشگری");
                    setOpen(false);
                  }}
                  className={`flex w-full max-w-[539px] cursor-pointer items-center justify-between bg-white px-6 py-3 `}
                >
                  گردشگری
                </li>
                <li
                  onClick={() => {
                    setSelected("کسب و کار");
                    setOpen(false);
                  }}
                  className={`flex w-full max-w-[539px] cursor-pointer items-center justify-between bg-white px-6 py-3 group-open:rounded-b-[16px]`}
                >
                  کسب و کار
                </li>
              </ul>
            </details>
            <form className={`mt-6 flex w-full flex-col items-center gap-6`}>
              <div
                className={`flex h-max w-full flex-wrap items-center justify-between gap-4 rounded-[32px] bg-transparent lg:h-[470px] lg:gap-0 lg:border lg:border-yellow-04 lg:bg-white lg:px-[64px] lg:py-10`}
              >
                <div className={`flex h-full w-full max-w-[539px] flex-col justify-between gap-4 lg:gap-0`}>
                  <input
                    type={"text"}
                    placeholder={`نوع کسب و کار`}
                    className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                  />
                  <input
                    type={"text"}
                    placeholder={`عنوان کسب و کار  را وارد کنید`}
                    className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                  />
                  <input
                    type={"text"}
                    placeholder={`شماره تماس`}
                    className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                  />
                  <input id={`file`} className={`hidden`} type={"file"} multiple={false} />
                  <label
                    htmlFor={`file`}
                    className={`flex h-[136px] w-full cursor-pointer justify-between rounded-[16px] border-[3px] border-dashed border-gray-02 bg-white p-6 lg:justify-around`}
                  >
                    <div className={`flex flex-col `}>
                      <span className={`text-[16px] font-[500] text-gray-03`}>افزودن عکس</span>
                      <div className={`flex items-center gap-3`}>
                        <span className={`text-[12px] font-[400] text-gray-01`}>اندازه عکسpx 500*500px </span>
                        <span className={`text-[12px] font-[400] text-gray-01`}>حجم عکس10 MB </span>
                      </div>
                    </div>
                    <PhotoIcon className={`h-[56px] w-[56px] self-center text-blue-06`} />
                  </label>
                </div>
                <div className={`flex h-full w-full max-w-[539px] flex-col gap-4 lg:gap-6`}>
                  <textarea
                    placeholder={"توضیحات"}
                    className={`h-[136px] w-full resize-none rounded-[16px] border border-gray-02 bg-white p-6 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                  ></textarea>
                  <label
                    className={`relative isolate block h-[216px] w-full overflow-hidden rounded-[16px] border border-gray-02`}
                  >
                    <textarea
                      value={address?.address_line2 ?? ""}
                      placeholder={"آدرس را وارد کنید"}
                      className={`absolute inset-0 z-[1] h-full w-full resize-none bg-white p-6 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                    ></textarea>
                    <div
                      className={`absolute bottom-4 left-0 right-0 z-[2] flex h-[56px] w-full items-center justify-between px-6`}
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
              </div>
              <button
                type={"submit"}
                className={`flex w-full max-w-[444px] cursor-pointer items-center justify-center rounded-[16px] bg-yellow-main py-3 text-[16px] text-write-04`}
              >
                ارسال
              </button>
            </form>
          </section>
        </section>
        <Footer />
        {/* <MapComponent /> */}
      </main>
    </>
  );
}
