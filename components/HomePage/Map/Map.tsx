import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {useEffect, useLayoutEffect, useState} from "react";
import 'leaflet/dist/leaflet.css';
import {MapIcon} from "@heroicons/react/24/outline";


const RecenterAutomatically = ({lat, lng}: { lat: number, lng: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
}

const Map = (props: { color: string, labelTitle: string, direction: string }) => {

    const {color = 'blue', labelTitle, direction = 'left'} = props

    const [boundes, setBoundes] = useState({lat: 0, lng: 0})

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
                    setBoundes({lat, lng})
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

                    className={`w-full h-full absolute inset-0 z-[1]`}
                    center={[boundes?.lat, boundes?.lng]}
                    zoom={20}
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