import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Text,
  TextInput,
  Title,
  Select,
} from "@mantine/core";
import useStyles from "../MyTransportation/myTransportation.styles";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useForm } from "@mantine/form";
import useStaticData from "@/hooks/useStaticData";
import Loader from "../../Loader/Loader";
import { notifications } from "@mantine/notifications";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import axios from "axios";
import { getErrorMessage } from "@/utils/getError/getError";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


const VehicleForm = ({ profile, token }) => {
  const router = useRouter();
  const { update, data } = useSession();
  const { classes, theme } = useStyles();
  const { transports, carColors } = useStaticData();

  const { emptyValidation, licenceValidation, accountNumberValidation } = useFormValidation();
  const [loading, setLoading] = useState(false);

  const [selectedType, setSelectedType] = useState('');

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  const [models, setModels] = useState([]);

  // Tipos de vehiculos
  const types = transports.map((items) => {
    return items.type;
  });

  const modelOptions = brands.map(brand => ({ value: brand.name, label: brand.name }))

  const vehicle = profile.vehicles[0]
  const handleTypeChange = (value) => {
    setSelectedType(value);
    setSelectedBrand('');
    setModels([]);
    const transport = transports.find(t => t.type === value);
    myTransportationForm.setFieldValue('type', value);
    myTransportationForm.setFieldValue('brand', '');
    return transport ? setBrands(transport.items) : setSelectedType('');
  }

  // Marca de vehiculos
  const handleBrandChange = (value) => {
    setSelectedBrand(value);
    setModels([]);
    const brand = brands.find(b => b.name === value);
    myTransportationForm.setFieldValue('brand', value);
    myTransportationForm.setFieldValue('model', '');
    return brand ? setModels(brand.models) : setSelectedBrand('');
  };

  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({ value: year.toString(), label: year.toString() });
    }
    return years;
  };

  const colors = carColors.map(color => ({ value: `${color.charAt(0).toUpperCase()}${color.slice(1)}`, label: `${color.charAt(0).toUpperCase()}${color.slice(1)}` }))

  const currentYear = new Date().getFullYear();
  const years = generateYears(1980, currentYear);

  const validateLicence = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (licenceValidation(value)) return licenceValidation(value);
  };

  // Mi Vehículo
  const myTransportationForm = useForm({
    initialValues: {
      brand: vehicle?.brand,
      model:vehicle?.model,
      year: vehicle?.year,
      patent: vehicle?.patent,
      color: vehicle?.color,
      type: vehicle?.type,
    },
    validate: {
      brand: emptyValidation,
      model: emptyValidation,
      year: emptyValidation,
      patent: emptyValidation,
      color: emptyValidation,
    },
  });

  const notificationStylees = (theme) => ({
    root: {
      borderRadius: 8,
    },

    title: {
      color: "black.0",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "24px",
    },
    description: { fontSize: 16, fontWeight: 300, lineHeight: "19px" },
    icon: {
      width: 50,
      height: 50,
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  });

  const handleMyTransportation = async () => {
    // router.push(init_point)
    setLoading(true)
    try {
      const body =
      {
        type: myTransportationForm.values.type,
        brand: myTransportationForm.values.brand,
        model: myTransportationForm.values.model,
        year: myTransportationForm.values.year,
        patent: myTransportationForm.values.patent,
        color: myTransportationForm.values.color,
        type: myTransportationForm.values.type
      }
      const updateProfile = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/vehicles`,
        body,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )

      if (updateProfile?.status === 201 || updateProfile?.status === 200) {

        // Función para actualizar:
        
        update({
          ...data,
          user: {
            ...data.user,
            vehicles: [...(data.user.vehicles || []), body], // Si ya existe vehicles, añade body, si no, lo inicializa
          },
        });
        setLoading(false)
        notifications.show({
          title: "Buen trabajo!",
          message: "Auto registrado",
          icon: <IconCircleCheck />,
          color: "teal",
          styles: notificationStylees,
        });
        router.reload()
      } else {
        setLoading(false)
        notifications.show({
          title: "Oh no!",
          message: "Ha habido un problema",
          icon: <IconCircleX />,
          color: "red",
          styles: notificationStylees,
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
        styles: notificationStylees,
      });
    }
  }

  if (loading) {
    return <Loader visible></Loader>
  }

  return (
    <Box mt={24} className={classes.box}>
      <Title order={3} className={classes.title}>
        {"Mi Vehículo"}
      </Title>
      <Divider my="xs" />
      {
          <form onSubmit={myTransportationForm.onSubmit(handleMyTransportation)}>
            <Grid gutter={16} my={12}>
              <Grid.Col md={12}>
                <Select
                  data={types}
                  label={'Tipo de Vehículo'}
                  placeholder={"Elija el tipo de vehículo"}
                  size="lg"
                  className={classes.generalInput}
                  {...myTransportationForm.getInputProps("type")}
                  onChange={handleTypeChange}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <Select
                  data={modelOptions}
                  label="Marca"
                  placeholder={!selectedType ? '...' : "Elija una marca"}
                  size="lg"
                  className={classes.generalInput}
                  {...myTransportationForm.getInputProps("brand")}
                  onChange={handleBrandChange}
                  disabled={!selectedType}
                />
              </Grid.Col>

              <Grid.Col md={6}>
                <Select
                  data={models.map((model) => ({ value: model.name, label: model.name }))}
                  searchable
                  label="Modelo"
                  placeholder={!selectedBrand ? '...' : 'Elija un modelo'}
                  size="lg"
                  className={classes.generalInput}
                  disabled={!selectedBrand}
                  {...myTransportationForm.getInputProps("model")}
                />
              </Grid.Col>

              <Grid.Col md={6}>
                <Select
                  data={years}
                  label="Año"
                  placeholder="2007"
                  size="lg"
                  className={classes.generalInput}
                  {...myTransportationForm.getInputProps("year")}
                />
              </Grid.Col>

              <Grid.Col md={6}>
                <Select
                  data={colors}
                  searchable
                  label="Color"
                  placeholder="Gris"
                  size={"lg"}
                  className={classes.generalInput}
                  {...myTransportationForm.getInputProps("color")}
                />
              </Grid.Col>

              <Grid.Col md={6}>
                <TextInput
                  label="Patente"
                  placeholder="ABC123 ó AB123CD"
                  size={"lg"}
                  className={classes.generalInput}
                  {...myTransportationForm.getInputProps("patent")}
                />
              </Grid.Col>
            </Grid>
            <Grid gutter={16} my={12}>

              <Grid.Col md={6}>
                <ButtonPackApp
                  variant="filled"
                  size="lg"
                  w={"100%"}
                  type="submit"
                >
                  {"Cargar Vehículo"}
                </ButtonPackApp>
              </Grid.Col>
            </Grid>
          </form>
      }
    </Box>
  )
}

export default VehicleForm 