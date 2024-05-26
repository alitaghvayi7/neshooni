import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon, LatLng, Map as LeafletMap } from "leaflet";
import IconImage from "@/assets/images/icons/icon.png";
import { useRouter } from "next/navigation";

interface Props {
  color: string;
  labelTitle: string;
  direction: string;
  type: "business" | "tourism";
  boundes: { lat: number; lng: number };
  setBoundes: Function;
  refrence?: any;
  sideMap?: any;
  locations: {
    lat: string;
    long: string;
    id: number;
    title: string;
  }[];
}

const RecenterAutomatically = ({
  lat,
  lng,
  refrence,
  sideMap,
}: {
  lat: number;
  lng: number;
  refrence: any;
  sideMap: any;
}) => {
  const map = useMap();

  const mapEvent = useMapEvents({
    click(e) {},
    locationfound(e) {},
    drag(e) {},
    dragend(e) {},
    moveend(e) {},
    dblclick(e) {
      map.zoomIn();
      sideMap?.current?.zoomIn();
    },
  });

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  useEffect(() => {
    if (refrence) {
      refrence.current = map;
    }
  }, [refrence, map]);

  return null;
};

const Map = (props: Props) => {
  const router = useRouter();
  const markerIcon = new Icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: IconImage.src,
    shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",
  });

  const { color = "blue", labelTitle, direction = "left", boundes, setBoundes } = props;
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      if (mapRef.current) {
        mapRef.current.on("drag", () => {
          const bounds = mapRef.current!.getBounds();
          setBoundes(bounds.getCenter());
        });
      }
    }
  }, [setBoundes, loaded]);

  return (
    <>
      <section className={`relative isolate h-full w-full overflow-hidden`}>
        <div
          className={`pointer-events-none absolute bottom-0 top-0 z-[3] flex h-full w-[50%] items-center justify-center bg-transparent ${
            direction === "left" ? "left-0" : "right-0"
          }`}
        >
          <span
            className={`flex h-[49px] w-[139px] items-center justify-center rounded-[16px] text-[18px] font-bold text-write-03 ${
              color === "blue" ? "bg-blue-04" : "bg-yellow-04 "
            }`}
          >
            {labelTitle}
          </span>
        </div>
        <div
          className={`pointer-events-none absolute inset-0 z-[2] flex h-full w-full items-center justify-center mix-blend-color ${
            color === "blue" ? "bg-blue-04" : "bg-yellow-04 "
          }`}
        ></div>
        <MapContainer
          ref={mapRef}
          className={`absolute inset-0 z-[1] h-full w-full`}
          center={[boundes?.lat, boundes?.lng]}
          zoom={10}
          scrollWheelZoom={false}
          fadeAnimation={true}
          zoomControl={false}
          style={{ background: "transparent" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
          />
          {props.locations.map((item, i: number) => {
            return (
              <Marker
                // eventHandlers={{
                //   click: () => {
                //     router.push(`/${props.type === "tourism" ? "tourist" : "business"}/${item.id}`);
                //   },
                // }}
                key={i}
                icon={markerIcon}
                position={new LatLng(Number(item.lat), Number(item.long))}
              ></Marker>
            );
          })}
          <RecenterAutomatically
            sideMap={props.sideMap}
            refrence={props.refrence}
            lat={boundes?.lat}
            lng={boundes?.lng}
          />
        </MapContainer>
      </section>
    </>
  );
};

export default Map;
