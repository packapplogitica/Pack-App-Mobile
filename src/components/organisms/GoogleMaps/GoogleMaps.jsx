import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { useRouter } from "next/router";

const center = {
  lat: -27.4754267,
  lng: -58.8264989,
};

const libraries = ["places"];
export const GoogleMaps = ({ handleMapClick, origin, originMarker }) => {

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
          lat: origin?.lat ? origin.lat : center.lat,
          lng: origin.lng ? origin.lng : center.lng,
        }}
        onClick={handleMapClick}
      >
        {/* {originMarker && (
          <Circle

            center={{
              lat: origin.lat,
              lng: origin.lng,
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
        )} */}

        {originMarker && <Marker position={originMarker} />}
      </GoogleMap>
    </div>
  );
};
