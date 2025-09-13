import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  Box,
  Divider,
  Grid,
  Text,
  Title,
  Select,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

import useStyles from "./tripsForm.styles";

import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import Loader from "@/components/molecules/Loader/Loader";

import { useFormValidation } from "@/hooks/useFormValidation";
import { useLocation } from "@/hooks/useLocation";

import {
  IconCalendar,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";
import { getErrorMessage } from "@/utils/getError/getError";
import { notifications } from "@mantine/notifications";
import axios from "axios";

const TripsForm = ({ profile, token }) => {
  const router = useRouter();
  const { update, data } = useSession();
  const { classes, theme } = useStyles();
  const { getProvinces, getCities } = useLocation();

  const { emptyValidation, licenceValidation, accountNumberValidation } =
    useFormValidation();
  const [loading, setLoading] = useState(false);

  const [states, setStates] = useState([]);
  const [citiesOrigin, setCitiesOrigin] = useState([]);
  const [citiesDestination, setCitiesDestination] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const data = await getProvinces();
      setStates(data);
    };

    fetchStates();
  }, []);

  const tripForm = useForm({
    initialValues: {
      // Origen
      initDate: null,
      initState: "",
      initCity: "",
      // Destino
      arrivalDate: null,
      arrivalState: "",
      arrivalCity: "",
    },
    validate: {
      initDate: (value) =>
        value ? (new Date(value) >= new Date() ? null : "La fecha debe ser hoy o en el futuro") : "Campo requerido",
      arrivalDate: (value, values) =>
        value
          ? new Date(value) > new Date(values.initDate)
            ? null
            : "La fecha de llegada debe ser posterior a la fecha de salida"
          : "Campo requerido",
      initState: emptyValidation,
      initCity: emptyValidation,
      arrivalState: emptyValidation,
      arrivalCity: emptyValidation,
    },
  });

  const handleOriginStateChange = async (value) => {
   
    const selectedState = states.filter((state)=> state.value === value )
    tripForm.setFieldValue("initState", selectedState[0].label);
    if (value) {
      tripForm.setFieldValue("initCity", "");
      setCitiesOrigin([]);
      tripForm.setFieldValue("initCity", "");
      
      const cities = await getCities(value);

      setCitiesOrigin(cities.sort((a, b) => a.label.localeCompare(b.label, 'es', { sensitivity: 'base' })));
    } else {
      setCitiesOrigin([]);
      tripForm.setFieldValue("initCity", "");
    }
  };

  const handleDestinationStateChange = async (value) => {
    const selectedState = states.filter((state)=> state.value === value )
    tripForm.setFieldValue("arrivalState", selectedState[0].label);
    if (value) {
      tripForm.setFieldValue("arrivalCity", "");
      setCitiesDestination([]);
      tripForm.setFieldValue("arrivalCity", "");
      
      const cities = await getCities(value);
      setCitiesDestination(cities.sort((a, b) => a.label.localeCompare(b.label, 'es', { sensitivity: 'base' })));
    } else {
      setCitiesDestination([]);
      tripForm.setFieldValue("arrivalCity", "");
    }
  };

  const handleMyTransportation = async () => {
    // router.push(init_point)
    setLoading(true)
    try {
      const body =
      {
        initDate: tripForm.values.initDate,
        initState: tripForm.values.initState,
        initCity: tripForm.values.initCity,
        arrivalDate: tripForm.values.arrivalDate,
        arrivalState: tripForm.values.arrivalState,
        arrivalCity: tripForm.values.arrivalCity,
      }
      const updateMyTrips = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/trips`,
        body,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )

      if (updateMyTrips?.status === 201 || updateMyTrips?.status === 200) {

        // Función para actualizar:
        update({
          ...data,
          user: {
            ...data.user,
            myTrips: [...(data.user.myTrips || []), body], // Si ya existe vehicles, añade body, si no, lo inicializa
          },
        });
        setLoading(false)
        notifications.show({
          title: "Buen trabajo!",
          message: "Viaje registrado",
          icon: <IconCircleCheck />,
          color: "teal",
          // styles: notificationStylees,
        });
        router.reload()
      } else {
        setLoading(false)
        notifications.show({
          title: "Oh no!",
          message: "Ha habido un problema",
          icon: <IconCircleX />,
          color: "red",
          // styles: notificationStylees,
        });
      }
    } catch (error) {
      const erroformated = getErrorMessage(error)
      console.log('el error', error)
      setLoading(false)
      notifications.show({
        title: "Oh no!",
        message: `Ha habido un problema: ${erroformated}`,
        icon: <IconCircleX />,
        color: "red",
        // styles: notificationStylees,
      });
    }
  }

  if (loading) {
    return <Loader visible></Loader>;
  }

  return (
    <Box mt={24} className={classes.box}>
      <Title order={3} className={classes.title}>
        {"Mis Rutas"}
      </Title>
      <Text className={classes.subText}>
        {"Planificá tus viajes para una mejor experiencia de transporte."}
      </Text>
      <Divider my="xs" />

      <form onSubmit={tripForm.onSubmit(handleMyTransportation)}>
        <Grid gutter={16} my={12}>
          {/* Origen - Left Column */}
          <Grid.Col md={6}>
            <Title order={4} className={classes.sectionTitle}>
              Origen
            </Title>

            {/* Fecha de Salida */}
            <DatePickerInput
              className={classes.input}
              label="Fecha de salida"
              size="lg"
              icon={<IconCalendar />}
              valueFormat="DD/MM/YYYY"
              placeholder="Elige una fecha"
              withAsterisk
              minDate={new Date()}
              value={tripForm.values.initDate}
              classNames={{ icon: classes.iconDataPicker }}
              onChange={(value) => tripForm.setFieldValue("initDate", value)}
              error={tripForm.errors.initDate}
            />

            {/* Provincia de Origen */}
            <Select
              data={states}
              label="Provincia de origen"
              placeholder="Elegir una provincia"
              size="lg"
              className={classes.generalInput}
              withAsterisk
              onChange={(label) => {
                handleOriginStateChange(label)}}
            />

            {/* Ciudad de Origen */}
            <Select
              data={citiesOrigin}
              label="Ciudad de origen"
              placeholder="Elegir una ciudad"
              size="lg"
              className={classes.generalInput}
              withAsterisk
              // value={tripForm.values.initCity}
              onChange={(value) => {
              
                const selectedCity = citiesOrigin.filter((state)=> state.value === value )
                tripForm.setFieldValue("initCity", selectedCity[0].label)
              }}
              disabled={!tripForm.values.initState || citiesOrigin.length === 0}
            />
          </Grid.Col>

          {/* Destino - Right Column */}
          <Grid.Col md={6}>
            <Title order={4} className={classes.sectionTitle}>
              Destino
            </Title>

            {/* Fecha de Llegada */}
            <DatePickerInput
              className={classes.input}
              label="Fecha de llegada"
              size="lg"
              icon={<IconCalendar />}
              valueFormat="DD/MM/YYYY"
              placeholder="Elige una fecha"
              withAsterisk
              minDate={tripForm.values.initDate ? new Date(tripForm.values.initDate) : new Date()}
              value={tripForm.values.arrivalDate}
              classNames={{ icon: classes.iconDataPicker }}
              error={tripForm.errors.arrivalDate}
              onChange={(value) => tripForm.setFieldValue("arrivalDate", value)}
            />

            {/* Provincia de Destino */}
            <Select
              data={states}
              label="Provincia de destino"
              placeholder="Elegir una provincia"
              size="lg"
              className={classes.generalInput}
              withAsterisk
              onChange={handleDestinationStateChange}
            />

            {/* Ciudad de Destino */}
            <Select
              data={citiesDestination}
              label="Ciudad de destino"
              placeholder="Elegir una ciudad"
              size="lg"
              className={classes.generalInput}
              withAsterisk
              // value={tripForm.values.arrivalCity}
              onChange={(value) =>{
                const selectedCity = citiesDestination.filter((state)=> state.value === value )
                tripForm.setFieldValue("arrivalCity", selectedCity[0].label)}}
              disabled={!tripForm.values.arrivalState || citiesDestination.length === 0}
            />
          </Grid.Col>
        </Grid>

        {/* Botón de enviar */}
        <Grid gutter={16} my={12}>
          <Grid.Col md={6}>
            <ButtonPackApp variant="filled" size="lg" w={"100%"} type="submit">
              {"Cargar Viaje"}
            </ButtonPackApp>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default TripsForm;
