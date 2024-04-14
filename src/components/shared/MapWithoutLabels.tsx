"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon, LatLng, Map } from "leaflet";
import IconImage from "@/assets/images/icons/marker.png";
import IconShadowImage from "@/assets/images/icons/shadow-marker.png";

interface Props {
  labelTitle: string;
  boundes: { lat: number; lng: number };
}

const MapWithoutLabels = (props: Props) => {
  const { boundes, labelTitle } = props;
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<Map | null>(null);

  const markerIcon = new Icon({
    iconSize: [40, 40],
    iconUrl: IconImage.src,
    shadowUrl: IconShadowImage.src,
    shadowAnchor: [33, 33],
  });
  return (
    <>
      <section className={`relative isolate h-full w-full overflow-hidden`}>
        <div
          className={`pointer-events-none absolute inset-0 z-[3] flex h-full w-full items-end justify-center bg-transparent pb-[48px]`}
        >
          <span
            className={`flex h-[58px] items-center justify-center rounded-[16px] bg-yellow-06 px-5 py-3 text-[24px] font-[700] text-write-03 `}
          >
            {labelTitle}
          </span>
        </div>
        <div>
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
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
        </div>
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

export default MapWithoutLabels;
