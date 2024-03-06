"use client";

import { useEffect, useLayoutEffect, useState } from "react";
// import MapWithoutLabels from "@/components/shared/MapWithoutLabels";
import dynamic from "next/dynamic";
const MapWithoutLabels = dynamic(() => import("@/components/shared/MapWithoutLabels"), {
  ssr: false,
});

const MapSection = () => {
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
    <section
      className={`flex flex-col w-[calc(100%-56px)] lg:w-[calc(100%-128px)] rounded-[16px] overflow-hidden max-w-[1666px] mx-auto gap-8`}
    >
      {boundes.lat === 0 && boundes.lng === 0 && (
        <section
          dir={"ltr"}
          className={`w-full h-[343px] lg:h-[300px] mx-auto overflow-hidden rounded-[16px] bg-gray-01 flex items-center justify-center relative isolate`}
        ></section>
      )}
      {boundes.lat !== 0 && boundes.lng !== 0 && (
        <div
          className={`w-full h-[343px] lg:h-[300px] mx-auto overflow-hidden rounded-[16px]  flex items-center justify-center relative isolate`}
        >
          {typeof window !== undefined && (
            <MapWithoutLabels boundes={boundes} labelTitle="روی نقشه همه کسب و کارهای شهرتو ببین" />
          )}
        </div>
      )}
    </section>
  );
};

export default MapSection;
