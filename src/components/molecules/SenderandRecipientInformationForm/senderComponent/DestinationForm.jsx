import { Grid, Text, TextInput, Flex, Button } from "@mantine/core";
import { Autocomplete } from "@react-google-maps/api";
import { GoogleMapsDest } from "@/components/organisms/GoogleMapsDest/GoogleMapsDest";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";
import { useState } from "react";

const DestinationForm = ({
  secondForm,
  destination,
  setDestination,
  destinationRef,
  onDestinationChanged,
  classes,
  destinationMarker,
  handleDestinationMapClick,
  acceptPayment,
  typeShipping,
}) => {

  const [showMap, setShowMap] = useState(false);
  return (
    <Grid.Col md={6}>
      <Grid gutter={25} p={16}>
        {/* TITULO Destino */}
        <Grid.Col>
          <Text size={20} weight={500}>
            {"Domicilio de Destino:"}
          </Text>
        </Grid.Col>
        {/* Nombre */}
        {/* Direccion */}
        <Flex direction={"column"} gap={10} w={"100%"}>
          <Autocomplete
            onLoad={(autocompleteDestination) =>
              (destinationRef.current = autocompleteDestination)
            }
            onPlaceChanged={onDestinationChanged}
            options={{
              types: ["address"],
              componentRestrictions: {
                country: "AR",
              },
            }}
          >
            <TextInput
              required
              value={destination.addres}
              autoComplete="off"
              id="destination"
              radius={8}
              size="lg"
              placeholder="Santa Fe 456 Caba..."
              onChange={(e) =>
                setDestination({
                  ...destination,
                  addres: e.target?.value,
                })
              }
              className={classes.input}
              classNames={{
                label: classes.label,
                error: classes.error,
              }}
              {...secondForm.getInputProps("direccionDestino")}
            />
          </Autocomplete>
               {/* Mapa */}
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
        {acceptPayment && (
          <>
            <Grid.Col>
              <Text size={20} weight={500}>
                {"Datos de Destino:"}
              </Text>
            </Grid.Col>
            <Grid.Col>
              <TextInput
                withAsterisk
                size="lg"
                radius={8}
                label="Nombre"
                placeholder="Nombre"
                className={classes.input}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...secondForm.getInputProps("nameAddressee")}
              />
            </Grid.Col>
            {/* DNI */}
            {typeShipping !== "express" && (
              <>
                <Grid.Col>
                  <TextInput
                    min={0}
                    withAsterisk
                    size="lg"
                    radius={8}
                    label="DNI"
                    placeholder="DNI"
                    className={classes.input}
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                    }}
                    {...secondForm.getInputProps("dniAddresse")}
                    hideControls
                  />
                </Grid.Col>
              </>
            )}

            {/* Email */}
            <Grid.Col>
              <TextInput
                withAsterisk
                radius={8}
                size="lg"
                className={classes.input}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                label="Email"
                placeholder="ejemplo@ejemplo.com"
                {...secondForm.getInputProps("emailAddresse")}
                autoCapitalize="none"
                ype="email"
              />
            </Grid.Col>

            <Grid.Col>
              <PhoneInput
                label="Número de Teléfono"
                placeholder="Ingrese su número de teléfono"
                className="custom-phone-input"
                value={secondForm.values.phoneAddresse}
                onChange={(value) =>
                  secondForm.setFieldValue("phoneAddresse", value)
                }
                error={secondForm.errors.phoneAddresse}
              />
            </Grid.Col>
          </>
        )}

        {/* Piso */}
        {/* <Grid.Col md={2}>
            <TextInput
                label={"Piso"}
                radius={8}
                size="lg"
                placeholder="Piso"
                className={classes.input}
                classNames={{
                    label: classes.label,
                }}
                {...secondForm.getInputProps("pisoEntrega")}
                hideControls
            />
        </Grid.Col> */}
        {/* Departamento */}
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
                {...secondForm.getInputProps(
                    "deptoEntrega"
                )}
            />
        </Grid.Col> */}
   

        {showMap && (
          <Grid.Col className={classes.mapContainer} span={6}>
            <GoogleMapsDest
              destinationMarker={destinationMarker}
              handleMapClick={handleDestinationMapClick}
              destination={destination}
              setDestination={setDestination}
              destinationRef={destinationRef}
            />
          </Grid.Col>
        )}


      </Grid>
    </Grid.Col>
  );
};

export default DestinationForm;
