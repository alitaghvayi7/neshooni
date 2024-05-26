"use client";
import { use, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { getBusinessPointsFromLocation } from "@/services/business";

const MapComponent = dynamic(() => import("@/components/HomePage/Map/Map"), {
  ssr: false,
});

const MapSection = () => {
  const parentMapRef = useRef<HTMLElement>(null);
  const resizeElementRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [locations, setLocations] = useState<{
    tourism: {
      lat: string;
      long: string;
      name: string;
      id: number;
    }[];
    business: {
      lat: string;
      long: string;
      name: string;
      id: number;
    }[];
  }>({
    business: [],
    tourism: [],
  });
  const rightMapRef = useRef<any>(null);
  const leftMapRef = useRef<any>(null);

  const onDrag = useCallback((e: MouseEvent | TouchEvent) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    // @ts-ignore
    // const sel = window.getSelection
    //   ? window.getSelection()
    //   : 'selection' in document && document.selection;
    // if (sel) {
    //   if (sel.removeAllRanges) {
    //     sel.removeAllRanges();
    //   } else if (sel.empty) {
    //     sel.empty();
    //   }
    // }

    if (parentMapRef.current && resizeElementRef.current) {
      let pageX;
      if (e instanceof MouseEvent) {
        pageX = e.pageX;
      } else if (e instanceof TouchEvent) {
        pageX = e.changedTouches[0].pageX;
      } else {
        pageX = 0;
      }
      const p =
        ((pageX - (window.innerWidth - parentMapRef.current.clientWidth) / 2) / parentMapRef.current.clientWidth) * 100;
      setPercentage(p);
    }
  }, []);

  const [boundes, setBoundes] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        async (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log(lat, lng);
          // Do something with the location data, e.g. display on a map
          // console.log(`Latitude: ${lat}, longitude: ${lng}`);
          setBoundes({ lat, lng });
          const res = await getBusinessPointsFromLocation(lat, lng);
          console.log(res, "-----------------");
          setLocations({
            business: res.data.business,
            tourism: res.data.tourist,
          });
        },
        // Error callback function
        (error) => {
          console.log("error", error);
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
        className={`mx-auto mt-[5rem] flex w-[calc(100%-56px)] max-w-[1689px] flex-col gap-8 lg:mt-[8rem] lg:w-[calc(100%-128px)]`}
      >
        <span
          style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
          className={`w-fit border-b border-r border-yellow-04 bg-yellow-06 pl-6 indent-5 text-[20px] font-bold text-write-main lg:text-[40px]`}
        >
          از روی نقشه شهر پیدا کن
        </span>
        {boundes.lat === 0 && boundes.lng === 0 && (
          <section
            dir={"ltr"}
            className={`relative isolate mx-auto flex h-[329px] w-full items-center justify-center overflow-hidden rounded-[16px] bg-gray-01 lg:h-[414px]`}
          ></section>
        )}
        {boundes.lat !== 0 && boundes.lng !== 0 && (
          <section
            onClick={(e) => {
              if (parentMapRef.current) {
                parentMapRef.current.removeEventListener("mousemove", onDrag);
              }
            }}
            dir={"ltr"}
            ref={parentMapRef}
            className={`relative isolate mx-auto flex h-[329px] w-full  items-center justify-center overflow-hidden rounded-[16px] lg:h-[414px]`}
          >
            {/*Map Zoom Controls*/}

            <div className={`absolute left-4 top-4 z-[4] h-[120px] w-[50px] rounded-[8px] bg-white shadow-2xl`}>
              <button
                onClick={() => {
                  rightMapRef?.current?.setZoom(rightMapRef.current.getZoom() + 1);
                  leftMapRef?.current?.setZoom(leftMapRef.current.getZoom() + 1);
                }}
                className={`flex h-1/2 w-full items-center justify-center border-b border-write-main`}
              >
                <PlusIcon className={`h-6 w-6 text-write-main`} />
              </button>
              <button
                onClick={() => {
                  rightMapRef?.current?.setZoom(rightMapRef.current.getZoom() - 1);
                  leftMapRef?.current?.setZoom(leftMapRef.current.getZoom() - 1);
                }}
                className={`flex h-1/2 w-full items-center justify-center`}
              >
                <MinusIcon className={`h-6 w-6 text-write-main`} />
              </button>
            </div>

            {/*Map Zoom Controls*/}
            <div
              ref={resizeElementRef}
              onMouseDown={(e) => {
                if (parentMapRef.current) {
                  parentMapRef.current.addEventListener("mousemove", onDrag);
                }
              }}
              onTouchStartCapture={() => {
                if (parentMapRef.current) {
                  parentMapRef.current.addEventListener("touchmove", onDrag);
                }
              }}
              onMouseUp={(e) => {
                if (parentMapRef.current) {
                  parentMapRef.current.removeEventListener("mousemove", onDrag);
                }
              }}
              onTouchEnd={() => {
                if (parentMapRef.current) {
                  parentMapRef.current.removeEventListener("touchmove", onDrag);
                }
              }}
              style={{ left: `${percentage ? percentage + 0.4 : 49.8}%` }}
              className={`absolute bottom-0 left-[49.8%] top-0 isolate z-[2] h-full w-[5px] cursor-e-resize bg-yellow-main transition`}
            >
              <div
                className={`absolute left-[50%] top-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-between rounded-full bg-yellow-main`}
              >
                <ChevronLeftIcon className={`h-5 w-5 text-write-04`} />
                <ChevronRightIcon className={`h-5 w-5 text-write-04`} />
              </div>
            </div>

            <div
              style={{
                clipPath: `polygon(0 0, ${percentage ? percentage + 0.4 : 50}% 0, ${
                  percentage ? percentage + 0.4 : 50
                }% 100%, 0% 100%)`,
              }}
              className={`absolute inset-0 z-[1] h-full w-[100%] overflow-hidden transition`}
            >
              <MapComponent
                boundes={boundes}
                setBoundes={setBoundes}
                color={"blue"}
                labelTitle={"کسب و کار"}
                direction={"left"}
                refrence={leftMapRef}
                sideMap={rightMapRef}
                locations={locations.business}
                type="business"
              />
            </div>
            <div
              style={{
                clipPath: `polygon(${percentage ? percentage + 0.4 : 50}% 0, 100% 0, 100% 100%, ${
                  percentage ? percentage + 0.4 : 50
                }% 100%)`,
              }}
              className={`absolute inset-0 z-[1] h-full w-[100%] overflow-hidden transition`}
            >
              <MapComponent
                boundes={boundes}
                setBoundes={setBoundes}
                color={"yellow"}
                labelTitle={"گردشگری"}
                direction={"right"}
                refrence={rightMapRef}
                sideMap={leftMapRef}
                locations={locations.tourism}
                type="tourism"
              />
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default MapSection;
