import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { TextInput, Button, Modal, Text, Flex, Grid } from "@mantine/core";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { GoogleMaps } from "@/components/organisms/GoogleMaps/GoogleMaps";

export const SenderLocationAutocomplete = ({
  originRef,
  setOrigin,
  origin,
  originMarker,
  onOriginChanged,
  handleOriginChange,
  secondForm,
  classes,
  handleOriginMapClick,
  prop,
}) => {
  const [isLocationPermissionModalOpen, setIsLocationPermissionModalOpen] =
    useState(false);

  const [showMap, setShowMap] = useState(false);

  // const [origin, setOrigin] = useState({
  //     addres: "",
  //     lat: null,
  //     lng: null,
  // });

  // Solicitar permiso de ubicación
  const requestLocationPermission = () => {
    if ("geolocation" in navigator) {
      setIsLocationPermissionModalOpen(true);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Obtener ubicación actual
  const getCurrentLocation = () => {
    setIsLocationPermissionModalOpen(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Crear un evento simulado para handleOriginMapClick
        const simulatedEvent = {
          latLng: {
            lat: () => latitude,
            lng: () => longitude,
          },
        };

        // Usar directamente handleOriginMapClick
        handleOriginMapClick(simulatedEvent);
      },
      (error) => {
        console.error("Error obteniendo la ubicación:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <>
      {/* Modal para permiso de ubicación */}
      <Modal
        opened={isLocationPermissionModalOpen}
        onClose={() => setIsLocationPermissionModalOpen(false)}
        withCloseButton={false}
      >
        <Text size="xl" mb={10}>
          ¿Desea usar su ubicación actual como dirección de origen?
        </Text>

        <Flex gap={10}>
          <ButtonPackApp
            size="lg"
            variant="filled"
            onClick={getCurrentLocation}
            w={"100%"}
          >
            Usar mi ubicación
          </ButtonPackApp>
          <Button
            onClick={() => setIsLocationPermissionModalOpen(false)}
            color="gray"
            w={"100%"}
            size="lg"
            radius={10}
          >
            Cancelar
          </Button>
        </Flex>
      </Modal>

      <Flex direction={"column"} gap={10} w={"100%"}>
        <Autocomplete
          onLoad={(autocompleteOrigin) =>
            (originRef.current = autocompleteOrigin)
          }
          onPlaceChanged={onOriginChanged}
          options={{
            types: ["address"],
            componentRestrictions: { country: "AR" },
          }}
        >
          <TextInput
            required
            value={origin.addres}
            autoComplete="off"
            id="origin"
            radius={8}
            size="lg"
            placeholder="Santa Fe 456 Caba..."
            onChange={(e) => {
              handleOriginChange(e);
            }}
            className={classes.input}
            classNames={{
              label: classes.label,
              error: classes.error,
            }}
            {...secondForm.getInputProps("direccionEntrega")}
          />
        </Autocomplete>
        {/* <Grid.Col md={2}>
            <TextInput
                label={"Piso"}
                radius={8}
                size="lg"
                placeholder="Piso"
                className={classes.input}
                classNames={{
                    label: classes.label,
                    error: classes.error,
                }}
                {...secondForm.getInputProps("pisoOrigen")}
                hideControls
            />
        </Grid.Col> */}

        {/* <Grid.Col md={2}>
            <TextInput
                label={"Dpto"}
                radius={8}
                size="lg"
                placeholder="Dpto"
                className={classes.input}
                classNames={{
                    label: classes.label,
                    error: classes.error,
                }}
                {...secondForm.getInputProps("deptoOrigen")}
            />
        </Grid.Col> */}
        <Flex justify={"center"} align={"center"} w={"100%"}>
          <Button
            variant="subtle"
            onClick={requestLocationPermission}
            fullWidth
            mt="xs"
            color="orange"
          >
            Usar ubicación actual
          </Button>

          <Button
            variant="subtle"
            onClick={() => setShowMap(!showMap)}
            fullWidth
            mt="xs"
            color="orange"
          >
            {showMap ? "Ocultar mapa" : "Ver ubicación en el mapa"}
          </Button>
        </Flex>

        {showMap && (
          <>
            <Grid.Col span={6}>
              {" "}
              {/* Add container with explicit dimensions */}
              <GoogleMaps
                originMarker={originMarker}
                handleMapClick={handleOriginMapClick}
                origin={origin}
                setOrigin={setOrigin}
                originRef={originRef}
              />
            </Grid.Col>
          </>
        )}
      </Flex>
    </>
  );
};
