"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon, Map } from "leaflet";
import IconImage from "@/assets/images/icons/icons8_Location_1.png";

interface Props {
  labelTitle: string;
  boundes: { lat: number; lng: number };
}

const GoogleMapWithControll = (props: Props) => {
  const { boundes, labelTitle } = props;
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<Map | null>(null);

  const markerIcon = new Icon({
    iconSize: [40, 40],
    iconUrl: IconImage.src,
  });

  return (
    <>
      <section className={`relative isolate h-full w-full overflow-hidden`}>
        <button
          onClick={() => {
            // const latitude = 40.7128; // Replace with your latitude
            // const longitude = -74.0060; // Replace with your longitude
            // boundes?.lat, boundes?.lng
            const googleMapsUrl = `https://maps.google.com/?q=${boundes?.lat},${boundes?.lng}`;
            window.open(googleMapsUrl, "_blank");
          }}
          className={`absolute bottom-8 left-[50%] z-[2] flex h-[58px] translate-x-[-50%] items-center justify-center rounded-[16px] bg-yellow-06 px-5 py-3 text-[24px] font-[700] text-write-03`}
        >
          {labelTitle}
        </button>

        <MapContainer
          ref={mapRef}
          className={`absolute inset-0 z-[1] h-full w-full`}
          center={[boundes?.lat, boundes?.lng]}
          zoom={30}
          scrollWheelZoom={false}
          fadeAnimation={true}
          zoomControl={false}
          style={{ background: "transparent" }}
        >
          {/* <TileLayer
            url={`https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${process.env.THUNDERFOREST_API_KEY}`}
            attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          /> */}
          <TileLayer
            url={`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}`}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* {locations.map((item: any) => {
            return (
              <Marker
                key={Math.random()}
                icon={markerIcon}
                position={new LatLng(Number(item[0]), Number(item[1]))}
              ></Marker>
            );
          })} */}

          <Marker icon={markerIcon} position={boundes}></Marker>
          <RecenterAutomatically lat={boundes?.lat} lng={boundes?.lng} />
        </MapContainer>
      </section>
    </>
  );
};

const RecenterAutomatically = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  // const mapEvent = useMapEvents({
  //     click(e) {
  //
  //     },
  //     locationfound(e) {
  //
  //     },
  //     drag(e) {
  //     },
  //     dragend(e) {
  //     },
  //     moveend(e) {
  //     }
  // })

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
};

export default GoogleMapWithControll;
