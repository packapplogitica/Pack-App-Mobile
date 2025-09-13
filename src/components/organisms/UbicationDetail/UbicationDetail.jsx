
import React, { useState, useContext, useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer, Circle } from "@react-google-maps/api";
import { ButtonPackApp } from '@/components/atoms/ButtonPackApp/ButtonPackApp';


const center = {
    lat: -27.4754267,
    lng: -58.8264989,
};

const libraries = ['places'];

export const UbicationDetail = ({ coords }) => {

    const [origin, setOrigin] = useState(null);

    const fetchGeocode = (location, isOrigin) => {
     
        const geocoder = new google.maps.Geocoder()

        geocoder.geocode({ location: location }, (results, status) => {
            if (status === "OK") {
                
                const address = results[0].formatted_address;


                if (isOrigin) {
            
                    setOrigin({
                        addres: address,
                        lat: location.lat,
                        lng: location.lng
                    });
                } else {
  
                    setDestination({
                        addres: address,
                        lat: location.lat,
                        lng: location.lng
                    });
                }
            } else {
                console.error('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    const handleMapClick = () => {
        const clickedLocationOrigin = {
            lat: parseFloat(coords.latEntrega),
            lng: parseFloat(coords.lngEntrega),
        };

        fetchGeocode(clickedLocationOrigin, true)

        const clickedLocationDestination = {
            lat: parseFloat(coords.latDestino),
            lng: parseFloat(coords.longDestino),
        }

        fetchGeocode(clickedLocationDestination, false)
    }




    // console.log(latOrigin)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4",
        libraries,
    })


    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                zoom={10}
                center={{ lat: -27.4754267, lng: -58.8264989 }}
            // onClick={handleMapClick}
            >

               
                {origin && <Marker position={origin} />}
                <ButtonPackApp
                    variant="filled"
                    w="100%"
                    size="lg"
                    uppercase
                    type="submit"
                    onClick={handleMapClick}
                >
                    Ver las Coordenadas
                </ButtonPackApp>
            </GoogleMap>


        </div>
    );
};