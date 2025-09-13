import React, { useState } from "react";
import { GoogleMap, useLoadScript, Circle } from "@react-google-maps/api";

import { Grid, Text } from "@mantine/core";

import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

import useStyles from "./mapsLocation.style";

const center = {
  lat: -27.4754267,
  lng: -58.8264989,
};

const libraries = ["places"];

export const MapsLocation = ({ coords }) => {
  const { classes } = useStyles();
  const [showMaps, setShowMaps] = useState(false);

  const urlString =
    "http://localhost:3000/location-maps/94?latEntrega=-27.47436833249879&lngEntrega=-58.82546893173828";
  const url = new URL(urlString);
  const urlParams = url.searchParams;

  let latOrigin = parseFloat(urlParams.get("latEntrega"));
  let lngOrigin = parseFloat(urlParams.get("lngEntrega"));

  const [origin, setOrigin] = useState({
    addres: "",
    lat: "",
    lng: "",
  });
  const [destination, setDestination] = useState({
    addres: "",
    lat: "",
    lng: "",
  });

  const fetchGeocode = (location, isOrigin) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: location }, (results, status) => {
      if (status === "OK") {
        const address = results[0].formatted_address;

        if (isOrigin) {
          setOrigin({
            addres: address,
            lat: location.lat,
            lng: location.lng,
          });
        } else {
          setDestination({
            addres: address,
            lat: location.lat,
            lng: location.lng,
          });
        }
      } else {
        console.error(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
  };

  const handleMapClick = () => {
    const clickedLocationOrigin = {
      lat: parseFloat(coords.latEntrega),
      lng: parseFloat(coords.lngEntrega),
    };

    fetchGeocode(clickedLocationOrigin, true);

    const clickedLocationDestination = {
      lat: parseFloat(coords.latDestino),
      lng: parseFloat(coords.longDestino),
    };

    fetchGeocode(clickedLocationDestination, false);

    setShowMaps(!showMaps);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4",
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const mapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    scaleControl: false,
  };

  return (
    <Grid>
      <Grid.Col md={12}>
        <ButtonPackApp
          variant="filled"
          w="100%"
          size="lg"
          uppercase
          type="submit"
          onClick={handleMapClick}
        >
          {showMaps ? "Cerrar" : "Ver Coordenadas"}
        </ButtonPackApp>
      </Grid.Col>
      {showMaps && (
        <Grid.Col md={12}>
          <Grid gutter={5}>
            <Grid.Col md={6}>
              <Text>{"Origen"}</Text>
              <GoogleMap
                mapContainerClassName={classes.maps}
                // mapContainerStyle={{ paddingLeft: 5 }}
                zoom={10}
                center={{ lat: origin.lat, lng: origin.lng }}
                options={mapOptions}
              >
                {origin.lat && (
                  <Circle
                    center={{
                      lat: origin.lat,
                      lng: origin.lng,
                    }}
                    radius={500} // Este valor es el radio del círculo en metros.
                    options={{
                      strokeColor: "#ff9900",
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: "#ff9900",
                      fillOpacity: 0.35,
                    }}
                  />
                )}
              </GoogleMap>
            </Grid.Col>
            <Grid.Col md={6}>
              <Text ta={"right"}>{"Destino"}</Text>
              <GoogleMap
                mapContainerClassName={classes.maps}
                // mapContainerStyle={{ paddingRight: 5 }}
                zoom={10}
                center={{ lat: destination.lat, lng: destination.lng }}
                options={mapOptions}
              >
                {destination.lat && (
                  <Circle
                    center={{
                      lat: destination.lat,
                      lng: destination.lng,
                    }}
                    radius={500} // Este valor es el radio del círculo en metros.
                    options={{
                      strokeColor: "#ff9900",
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: "#ff9900",
                      fillOpacity: 0.35,
                    }}
                  />
                )}
              </GoogleMap>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      )}
    </Grid>
  );
};
