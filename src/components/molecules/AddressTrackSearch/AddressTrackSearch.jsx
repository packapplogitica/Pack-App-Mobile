import { useState } from "react";
import { Button, Flex, TextInput, Card, Text, Grid } from "@mantine/core";
import { useRouter } from "next/router";

import useStyles from "./addressTrackSearch.styles";

function AddressTrackSearch() {
  const [value, setValue] = useState(""); // 👈 string, no array
  const router = useRouter();
  const { classes } = useStyles();

  const handleSearch = () => {
    if (value.trim() !== "") {
      router.push(`/addresseTrack/${value}`);
    }
  };

  return (
    <Card padding={0} sx={{ height: "100%" }} radius={8}>
      <Grid>
        <Grid.Col p={15}>
          <Text size={20} weight={500}>
            {"Buscar paquete:"}
          </Text>
        </Grid.Col>
        <Grid.Col p={15}>
          <TextInput
            placeholder="Ingrese UUID"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            radius={8}
            size="lg"
            className={classes.input}
          />
        </Grid.Col>
      </Grid>
      <Grid.Col>
        <Flex justify="center" mt="md">
          <Button
            onClick={handleSearch}
            disabled={value.trim() === ""}
            color="orange"
            size="lg"
            fullWidth
          >
            BUSCAR
          </Button>
        </Flex>
      </Grid.Col>
    </Card>
  );
}

export default AddressTrackSearch;
