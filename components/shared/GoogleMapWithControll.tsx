import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Icon, Map} from "leaflet";
import IconImage from "@/assets/images/icons/icons8_Location_1.png";

interface Props {
    boundes: { lat: number, lng: number };
    setBoundes: Function;
}

const GoogleMapNoControll = (props:Props) => {
    const {boundes, setBoundes} = props;
    const [loaded, setLoaded] = useState(false);
    const mapRef = useRef<Map | null>(null);

    const markerIcon = new Icon({
        iconSize: [40, 40],
        iconUrl: IconImage.src,
    });

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

                    const requestOptions = {
                        method: 'GET',
                    };

                    // fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${process.env.GEOAPIFY_API_KEY}`, requestOptions)
                    //     .then(response => response.json())
                    //     .then(result => console.log(result))
                    //     .catch(error => console.log('error', error));
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

    useEffect(() => {
        setLoaded(true)
    }, []);

    useEffect(() => {
        if (loaded) {
            if (mapRef.current) {
                mapRef.current.on("drag", () => {
                    const bounds = mapRef.current!.getBounds();
                    console.log(bounds);
                    setBoundes(bounds.getCenter());
                });
            }
        }
    }, [setBoundes, loaded]);

    return(
        <>
            <section className={`w-full h-full overflow-hidden relative isolate`}>

                <MapContainer
                    ref={mapRef}
                    className={`w-full h-full absolute inset-0 z-[1]`}
                    center={[boundes?.lat, boundes?.lng]}
                    zoom={30}
                    scrollWheelZoom={false}
                    fadeAnimation={true}
                    zoomControl={true}
                    style={{background: "transparent"}}
                >
                    <TileLayer
                        url={`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}`}
                        subdomains={["mt0", "mt1", "mt2", "mt3"]}
                        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Marker icon={markerIcon} position={boundes}></Marker>
                    <RecenterAutomatically lat={boundes?.lat} lng={boundes?.lng}/>
                </MapContainer>
            </section>
        </>
    )
}

const RecenterAutomatically = ({lat, lng}: { lat: number; lng: number }) => {
    const map = useMap();

    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng, map]);


    return null;
};

export default GoogleMapNoControll;