import { useState, useEffect } from "react";
// Mantine Core
import { Grid, Text, MediaQuery, Button, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import useStyles from "./freitghSearchHub.styles";

export const FreightSearchHub = ({
  step,
  setOriginData,
  setDestinationData,
  locationsInfo,
}) => {
  const { classes } = useStyles({ step });

  // Estados
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  useEffect(() => {
    const uniqueOrigins = locationsInfo.map(
      ({ citySender, provinceSender }) => ({
        value: `${citySender}, ${provinceSender}`,
        label: `${citySender}, ${provinceSender}`,
      })
    );
    setOriginOptions(
      [...new Set(uniqueOrigins.map(JSON.stringify))].map(JSON.parse)
    );
  }, [locationsInfo]);

  useEffect(() => {
    if (selectedOrigin) {
      // Limpiamos el destino actual al cambiar el origen
      setSelectedDestination("");

      const [city, province] = selectedOrigin.split(", ");
      const matchingLocation = locationsInfo.find(
        (loc) => loc.citySender === city && loc.provinceSender === province
      );

      if (matchingLocation) {
        const uniqueDestinations = matchingLocation.addressees.map(
          ({ cityAddressee, provinceAddressee }) => ({
            value: `${cityAddressee}, ${provinceAddressee}`,
            label: `${cityAddressee}, ${provinceAddressee}`,
          })
        );
        setDestinationOptions(
          [...new Set(uniqueDestinations.map(JSON.stringify))].map(JSON.parse)
        );
      } else {
        // Si no hay destinos válidos, vaciamos las opciones
        setDestinationOptions([]);
      }
    } else {
      // Si no hay origen seleccionado, también vaciamos destinos
      setDestinationOptions([]);
      setSelectedDestination("");
    }
  }, [selectedOrigin, locationsInfo]);

  const handleSearch = () => {
    const [originCity, originProvince] = selectedOrigin.split(", ");
    const [destinationCity, destinationProvince] =
      selectedDestination.split(", ");
    setOriginData({ city: originCity, province: originProvince });
    setDestinationData({
      city: destinationCity,
      province: destinationProvince,
    });
  };

  return (
    <>
      <Text className={classes.searchTitle}>
        {"Filtrá envíos por localidad."}
      </Text>

      <Grid className={classes.container}>
        <Grid.Col sm={5}>
          <MediaQuery
            smallerThan="sm"
            styles={{ input: { borderRadius: "0.25rem !important" } }}
          >
            <Select
              className={classes.fromSearch}
              classNames={{
                item: classes.itemSelect,
              }}
              label="Origen"
              placeholder="Desde"
              data={originOptions}
              value={selectedOrigin}
              onChange={setSelectedOrigin}
              searchable
              nothingFound="No hay envíos con este origen"
            />
          </MediaQuery>
        </Grid.Col>

        <Grid.Col sm={5}>
          <MediaQuery smallerThan="sm" styles={{ borderRadius: "0.25rem" }}>
            <Select
              className={classes.toSearch}
              classNames={{
                item: classes.itemSelect,
              }}
              label="Destino"
              placeholder="Hasta"
              data={destinationOptions}
              value={selectedDestination}
              onChange={setSelectedDestination}
              disabled={!selectedOrigin}
              searchable
              nothingFound="No hay envíos con este destino"
            />
          </MediaQuery>
        </Grid.Col>

        <Grid.Col sm={2}>
          <MediaQuery
            smallerThan="sm"
            styles={{ width: "100%", marginTop: 20, borderRadius: "2rem" }}
          >
            <Button
              radius="xl"
              size="lg"
              leftIcon={<IconSearch />}
              className={classes.searchButton}
              onClick={() => handleSearch()}
            >
              {"Buscar"}
            </Button>
          </MediaQuery>
        </Grid.Col>
      </Grid>
    </>
  );
};
