import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon, Map } from "leaflet";
import IconImage from "@/assets/images/icons/icons8_Location_1.png";

interface Props {
  labelTitle: string;
  boundes: { lat: number; lng: number };
}

const GoogleMap = (props: Props) => {
  const { boundes, labelTitle } = props;
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<Map | null>(null);

  const markerIcon = new Icon({
    iconSize: [80, 80],
    iconUrl: IconImage.src,
  });

  return (
    <>
      <section className={`w-full h-full overflow-hidden relative isolate`}>

        <button
          className={`h-[58px] py-3 px-5 bg-yellow-06 text-write-03 rounded-[16px] font-[700] text-[24px] flex items-center justify-center absolute z-[2] bottom-8 left-[50%] translate-x-[-50%]`}
        >
          {labelTitle}
        </button>

        <MapContainer
          ref={mapRef}
          className={`w-full h-full absolute inset-0 z-[1]`}
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

export default GoogleMap;
