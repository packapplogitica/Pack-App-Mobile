
import "dayjs/locale/es";
import {
  Grid,
  TextInput,
} from "@mantine/core";

 export  const TransportMethod = ({carrier,classes} ) => {
    console.log('el carrier',carrier)
    if (carrier?.driverRegistrated && carrier?.vehicles?.length !== 0) {
      return (
        <Grid.Col md={6}>
          <TextInput
            className={classes.input}
            label="Metodo de transporte"
            placeholder="Transporte"
            size="lg"
            value={
              carrier?.vehicles[0]?.brand + " " + carrier?.vehicles[0]?.model
            }
            // {...form.getInputProps("vehicleId")}
            withAsterisk
            classNames={{
              item: classes.itemSelect,
            }}
            readOnly
          />
        </Grid.Col>
      );
    } else if (carrier?.driverCompany) {
      return (
        <Grid.Col md={6}>
          <TextInput
            type="text"
            className={classes.input}
            label="Metodo de transporte"
            size="lg"
            value="Flota de vehiculos"
            // {...form.getInputProps("conveyance")}
            withAsterisk
            classNames={{
              item: classes.itemSelect,
            }}
            readOnly
          />
        </Grid.Col>
      );
    } else {
      return (
        <Grid.Col md={6}>
          <TextInput
            className={classes.input}
            label="Añade un medio de transporte"
            placeholder="Transporte"
            size="lg"
            value="Vehiculo no declarado"
            // {...form.getInputProps("conveyance")}
            withAsterisk
            classNames={{
              item: classes.itemSelect,
            }}
          />
        </Grid.Col>
      );
    }
  };