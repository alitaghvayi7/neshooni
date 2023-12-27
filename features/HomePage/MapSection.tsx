import { useCallback, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/HomePage/Map/Map"), {
  ssr: false,
});

const MapSection = () => {
  const parentMapRef = useRef<HTMLElement>(null);
  const resizeElementRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  const onDrag = useCallback((e: MouseEvent | TouchEvent) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    // @ts-ignore
    const sel = window.getSelection
      ? window.getSelection()
      : document.selection;
    if (sel) {
      if (sel.removeAllRanges) {
        sel.removeAllRanges();
      } else if (sel.empty) {
        sel.empty();
      }
    }

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
        ((pageX - (window.innerWidth - parentMapRef.current.clientWidth) / 2) /
          parentMapRef.current.clientWidth) *
        100;
      setPercentage(p);
    }
  }, []);

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
          console.log(`Latitude: ${lat}, longitude: ${lng}`);
          setBoundes({ lat, lng });
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          console.error("Error getting user location:", error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      {boundes.lat === 0 && boundes.lng === 0 && (
        <section
          dir={"ltr"}
          className={`w-[80%] h-[300px] mx-auto overflow-hidden rounded-[16px] my-[15rem] flex items-center justify-center relative isolate`}
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
          className={`w-[80%] h-[300px] mx-auto overflow-hidden rounded-[16px] my-[15rem] flex items-center justify-center relative isolate`}
        >
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
            className={`absolute h-full w-[5px] top-0 bottom-0 bg-yellow-main z-[2] cursor-e-resize left-[49.8%] transition`}
          ></div>

          <div
            style={{
              clipPath: `polygon(0 0, ${
                percentage ? percentage + 0.4 : 50
              }% 0, ${percentage ? percentage + 0.4 : 50}% 100%, 0% 100%)`,
            }}
            className={`w-[100%] h-full overflow-hidden absolute inset-0 transition z-[1]`}
          >
            <MapComponent
              boundes={boundes}
              setBoundes={setBoundes}
              color={"blue"}
              labelTitle={"کسب و کار"}
              direction={"left"}
            />
          </div>
          <div
            style={{
              clipPath: `polygon(${
                percentage ? percentage + 0.4 : 50
              }% 0, 100% 0, 100% 100%, ${
                percentage ? percentage + 0.4 : 50
              }% 100%)`,
            }}
            className={`w-[100%] h-full overflow-hidden absolute inset-0 transition z-[1]`}
          >
            <MapComponent
              boundes={boundes}
              setBoundes={setBoundes}
              color={"yellow"}
              labelTitle={"گردشگری"}
              direction={"right"}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default MapSection;
