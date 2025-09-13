import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";

const center = {
  lat: -27.4754267,
  lng: -58.8264989,
};

const libraries = ["places"];
export const GoogleMapsDest = ({
  handleMapClick,
  destination,
  destinationMarker,
}) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4",
    libraries,
  });
  
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "208%", height: "28rem" }}
        zoom={10}
        center={{
          lat: destination?.lat ? destination.lat : center.lat,
          lng: destination?.lng ? destination.lng : center.lng,
        }}
        onClick={handleMapClick}
      >
        {destinationMarker && (
          <Circle
            center={{
              lat: destination.lat,
              lng: destination.lng,
            }}
            radius={500}
            options={{
              strokeColor: "#ff0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#ff0000",
              fillOpacity: 0.35,
            }}
          />
        )}
        {destinationMarker && <Marker position={destinationMarker} />}
      </GoogleMap>
    </div>
  );
};
