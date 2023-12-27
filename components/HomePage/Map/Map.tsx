import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useEffect, useRef, useState} from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const RecenterAutomatically = ({lat, lng}: { lat: number, lng: number }) => {

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

    return null

}

const Map = (props: {
    color: string,
    labelTitle: string,
    direction: string,
    boundes: { lat: number, lng: number },
    setBoundes: Function
}) => {

    const {color = 'blue', labelTitle, direction = 'left', boundes, setBoundes} = props
    const [loaded, setLoaded] = useState(false)
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        setLoaded(true);
    }, [])

    useEffect(() => {
        if (loaded) {
            if (mapRef.current) {
                mapRef.current.on('drag', () => {
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
                    className={`w-[50%] h-full absolute top-0 bottom-0 pointer-events-none z-[3] bg-transparent flex items-center justify-center ${direction === 'left' ? 'left-0' : 'right-0'}`}>
                    <span
                        className={`w-[139px] h-[49px] text-write-03 rounded-[16px] text-[18px] flex items-center justify-center font-bold ${color === 'blue' ? 'bg-blue-04' : 'bg-yellow-04 '}`}>{labelTitle}</span>
                </div>
                <div
                    className={`w-full h-full absolute inset-0 pointer-events-none z-[2] mix-blend-color flex items-center justify-center ${color === 'blue' ? 'bg-blue-04' : 'bg-yellow-04 '}`}>
                </div>
                <MapContainer
                    ref={mapRef}
                    className={`w-full h-full absolute inset-0 z-[1]`}
                    center={[boundes?.lat, boundes?.lng]}
                    zoom={30}
                    scrollWheelZoom={false}
                    fadeAnimation={true}
                    zoomControl={false}
                    style={{background: 'transparent'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
                        subdomains='abcd'
                    />

                    <RecenterAutomatically lat={boundes?.lat} lng={boundes?.lng}/>
                </MapContainer>
            </section>

        </>
    );
};

export default Map;