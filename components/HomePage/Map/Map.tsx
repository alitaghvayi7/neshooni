import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon, LatLng, Map as LeafletMap } from "leaflet";
import IconImage from "@/assets/images/icons/icon.png";

interface Props {
  color: string;
  labelTitle: string;
  direction: string;
  boundes: { lat: number; lng: number };
  setBoundes: Function;
}

const locations = [
  [34.630554, 50.422222, "Manisa"],
  [34.91, 50.240002, "Diyarbakır"],
  [34.766666, 50.916668, "İzmit-Kocaeli"],
  [34.066666, 50.383331, "Gaziantep"],
  [34.158333, 50.791668, "Şanlıurfa"],
  [34.977779, 50.515278, "Tekirdağ"],
  [34.0, 50.321335, "Adana"],
  [34.884804, 50.704044, "Antalya"],
  [34.917534, 50.392654, "Giresun"],
  [34.82206, 50.808132, "Yozgat"],
  [34.731647, 50.589813, "Bolu"],
  [34.451733, 50.791344, "Zonguldak"],
  [34.499817, 50.378143, "Van"],
  [34.783333, 50.094715, "Denizli"],
  [34.766193, 50.526714, "Eskişehir"],
  [34.183224, 50.830982, "Artvin"],
  [34.768002, 50.561905, "Isparta"],
  [34.874641, 50.493156, "Konya"],
  [34.626995, 50.719975, "Nevşehir"],
  [34.812103, 50.641479, "Mersin"],
  [34.025513, 50.517666, "Rize"],
  [34.575275, 50.922821, "Kahramanmaraş"],
  [34.193298, 50.074202, "Bursa"],
  [34.734802, 50.467987, "Kayseri"],
  [34.680969, 50.226398, "Elazığ"],
  [34.783333, 50.4, "Sakarya"],
  [34.200001, 50.166668, "Hatay"],
  [41.674965, 26.583481, "Edirne"],
  [39.925533, 32.866287, "Ankara"],
  [41.015137, 28.97953, "İstanbul"],
  [38.356869, 38.309669, "Malatya"],
  [39.750359, 37.015598, "Sivas"],
  [41.002697, 39.716763, "Trabzon"],
  [38.423733, 27.142826, "İzmir"],
  [40.652382, 35.828819, "Amasya"],
  [38.756886, 30.538704, "Afyonkarahisar"],
  [38.7333, 35.4833, "Kayseri"],
  [41.2867, 36.33, "Samsun"],
  [37.8833, 41.1333, "Batman"],
  [38.6667, 39.2167, "Elazığ"],
  [36.2, 36.15, "Hatay"],
  [39.6511, 27.8842, "Balıkesir"],
  [40.5489, 34.9533, "Çorum"],
  [39.4242, 29.9833, "Kütahya"],
  [38.6833, 29.4, "Uşak"],
  [40.3097, 36.5542, "Tokat"],
  [38.7333, 41.4911, "Muş"],
  [40.15, 26.4, "Çanakkale"],
  [40.9833, 37.8833, "Ordu"],
  [40.65, 35.8333, "Amasya"],
  [40.6069, 43.0931, "Kars"],
];

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

const Map = (props: Props) => {
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
      <section className={`w-full h-full overflow-hidden relative isolate`}>
        <div
          className={`w-[50%] h-full absolute top-0 bottom-0 pointer-events-none z-[3] bg-transparent flex items-center justify-center ${direction === "left" ? "left-0" : "right-0"
            }`}
        >
          <span
            className={`w-[139px] h-[49px] text-write-03 rounded-[16px] text-[18px] flex items-center justify-center font-bold ${color === "blue" ? "bg-blue-04" : "bg-yellow-04 "
              }`}
          >
            {labelTitle}
          </span>
        </div>
        <div
          className={`w-full h-full absolute inset-0 pointer-events-none z-[2] mix-blend-color flex items-center justify-center ${color === "blue" ? "bg-blue-04" : "bg-yellow-04 "
            }`}
        ></div>
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
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
          />
          {locations.map((item: any) => {
            return (
              <Marker
                key={Math.random()}
                icon={markerIcon}
                position={new LatLng(Number(item[0]), Number(item[1]))}
              ></Marker>
            );
          })}

          <Marker key={Math.random()} icon={markerIcon} position={boundes}></Marker>
          <RecenterAutomatically lat={boundes?.lat} lng={boundes?.lng} />
        </MapContainer>
      </section>
    </>
  );
};

export default Map;
