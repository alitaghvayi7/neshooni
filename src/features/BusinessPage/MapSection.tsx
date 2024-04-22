"use client";
import MapComponent from "@/components/shared/Map";
import { useLayoutEffect, useState } from "react";

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
        },
      );
    } else {
      // Geolocation is not supported by the browser
      // console.error("Geolocation is not supported by this browser.");
      setBoundes({ lat: 34.382436, lng: 50.523504 });
    }
  }, []);

  return (
    <section
      className={`mx-auto flex w-[calc(100%-56px)] max-w-[1666px] flex-col gap-8 overflow-hidden rounded-[16px] lg:w-[calc(100%-128px)]`}
    >
      {boundes.lat === 0 && boundes.lng === 0 && (
        <section
          dir={"ltr"}
          className={`relative isolate mx-auto flex h-[343px] w-full items-center justify-center overflow-hidden rounded-[16px] bg-gray-01 lg:h-[300px]`}
        ></section>
      )}
      {boundes.lat !== 0 && boundes.lng !== 0 && (
        <div
          className={`relative isolate mx-auto flex h-[343px] w-full  items-center justify-center overflow-hidden rounded-[16px] lg:h-[300px]`}
        >
          <MapComponent boundes={boundes} labelTitle="روی نقشه همه کسب و کارهای شهرتو ببین" />
        </div>
      )}
    </section>
  );
};

export default MapSection;
