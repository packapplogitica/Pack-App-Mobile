import useStyles from "./locationModal.style";
import { GoogleMap, useLoadScript, Circle, Marker } from "@react-google-maps/api";
import { useState, useEffect, useCallback } from "react";

import {
  Flex,
  Grid,
  Modal,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";

const libraries = ["places"];
const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  scaleControl: false,
};
export const LocationModal = ({ item, opened, isTaken, openClose }) => {
  const { classes } = useStyles();

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

  const coords = {
    latEntrega: item?.latEntrega,
    lngEntrega: item?.longEntrega,
    latDestino: item?.latDestino,
    longDestino: item?.longDestino,
  };

  const googleMapsUrlOrigin = `https://www.google.com/maps?q=${coords.latEntrega},${coords.lngEntrega}`;
  const googleMapsUrlDestination = `https://www.google.com/maps?q=${coords.latDestino},${coords.longDestino}`;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4",
    libraries,
  });

  const fetchGeocode = useCallback((location, isOrigin) => {
    if (!window.google) {
      console.error("Cargando mapa...");
      return;
    }
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
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const locationOrigin = {
      lat: parseFloat(coords.latEntrega),
      lng: parseFloat(coords.lngEntrega),
    };
    fetchGeocode(locationOrigin, true);

    const locationDestination = {
      lat: parseFloat(coords.latDestino),
      lng: parseFloat(coords.longDestino),
    };

    fetchGeocode(locationDestination, false);
  }, [
    coords.latDestino,
    coords.latEntrega,
    coords.lngEntrega,
    coords.longDestino,
    fetchGeocode,
    isLoaded,
    item,
  ]);

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <Modal
      onClose={() => { openClose(!opened) }}
      opened={opened}
      centered
      size={"xl"}
      scrollAreaComponent={ScrollArea.Autosize}
      title={"Ubicación"}
    >
      <Flex gap="xxs" direction="column">
        {/* Mapas */}
        <Stack>
          <Flex justify={'space-between'}>
            <Link href={googleMapsUrlOrigin} target="_blank" rel="noopener noreferrer">
              Ver origen en Google Maps
            </Link>

            <Link href={googleMapsUrlDestination} target="_blank" rel="noopener noreferrer">
              Ver destino en Google Maps
            </Link>
          </Flex>
          {/* <Grid.Col md={12}> */}
          <Grid gutter={5}>
            <Grid.Col md={6}>
              <Flex direction="column" gap={8}>
                <Text weight={400}>Desde:</Text>
                <Flex gap={3}>
                  {(
                    <Text weight={500}>
                      {item?.direccionEntrega ? item?.direccionEntrega : null}{" "}
                      {item?.addressNumberOrigin
                        ? item?.addressNumberOrigin
                        : "Sin número"}
                      {item?.pisoEntrega ? `, Piso: ${item?.pisoEntrega}` : null}
                      {item?.dptoEntrega ? `, Dpto: ${item?.dptoEntrega}` : null}
                      {", "}
                    </Text>

                  )}
                  <Text weight={500}>
                    {item?.citySender}, {item?.provinceSender}
                  </Text>
                </Flex>
              </Flex>
              <GoogleMap
                mapContainerClassName={classes.maps}
                // mapContainerStyle={{ paddingLeft: 5 }}
                zoom={10}
                center={{ lat: origin.lat, lng: origin.lng }}
                options={mapOptions}
              >
                {origin.lat && (
                  <Marker
                    position={origin}
                    center={{
                      lat: origin.lat,
                      lng: origin.lng,
                    }}
                  // radius={500} // Este valor es el radio del círculo en metros.
                  // options={{
                  //   strokeColor: "#ff0000",
                  //   strokeOpacity: 0.8,
                  //   strokeWeight: 2,
                  //   fillColor: "#ff0000",
                  //   fillOpacity: 0.35,
                  // }}
                  />
                )}
              </GoogleMap>
            </Grid.Col>
            <Grid.Col md={6}>
              <Flex direction="column" gap={8}>
                <Text weight={400}>Hacia:</Text>
                <Flex gap={3}>
                  {isTaken && (
                    <Text weight={500}>
                      {item?.direccionDestino ? item?.direccionDestino : null}{" "}
                      {item?.addressNumberDestination
                        ? item?.addressNumberDestination
                        : "Sin número"}
                      {item?.pisoDestino ? `, Piso: ${item?.pisoDestino}` : null}
                      {item?.dptoDestino ? `, Dpto: ${item?.dptoDestino}` : null}
                      {", "}
                    </Text>
                  )}
                  <Text weight={500}>
                    {item.cityAddressee}, {item.provinceAddressee}
                  </Text>
                </Flex>
              </Flex>
              <GoogleMap
                mapContainerClassName={classes.maps}
                // mapContainerStyle={{ paddingRight: 5 }}
                zoom={10}
                center={{ lat: destination.lat, lng: destination.lng }}
                options={mapOptions}
              >
                {destination.lat && (
                  <Marker
                    position={destination}
                    center={{
                      lat: destination.lat,
                      lng: destination.lng,
                    }}
                  // // radius={500} // Este valor es el radio del círculo en metros.
                  // options={{
                  //   strokeColor: "#ff0000",
                  //   strokeOpacity: 0.8,
                  //   strokeWeight: 2,
                  //   fillColor: "#ff0000",
                  //   fillOpacity: 0.35,
                  // }}
                  />
                )}
              </GoogleMap>
            </Grid.Col>
          </Grid>

          {/* </Grid.Col> */}
        </Stack>
      </Flex>

    </Modal>
  );
};
