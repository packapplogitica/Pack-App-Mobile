import { useState } from "react";
import useStyles from "./orderForm.style";
import { useSession } from "next-auth/react";
import { useForm } from "@mantine/form";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useRouter } from "next/router";
import "dayjs/locale/es";
import { Grid,Modal,NumberInput,ScrollArea,Select,Text,Checkbox} from "@mantine/core";
import { DatesProvider, DatePickerInput } from "@mantine/dates";
import { IconCalendar, IconCircleX } from "@tabler/icons-react";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import Loader from "@/components/molecules/Loader/Loader";
import RegisterVehiclePopUp from "../../RegisterVehiclePopUp/RegisterVehiclePopUp";
import { submitApplication } from "./utils/applicationhelper";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";
import { TransportMethod } from "./components/TransportMethod";
export const OrderForm = ({
  item,
  handleOfferModal,
  opened,
  setOpenOffer,
  type,
  price,
  owner
}) => {
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();
  const router = useRouter();
  const { data } = useSession();
  const [checkedCarrierTerms, setCheckedCarrierTerms] = useState(false);
  const session = data;
  const userData = session?.user;
  const token = session?.user?.token;
  const { emptyValidation, budgetValidation } = useFormValidation();

  // const detailsData = {
  //   tipo:
  //     type() === "Sobre"
  //       ? "Un Sobre"
  //       : `Envío ${type().replace(/, Peso: \d+kg/, "")}`,
  //   id: item.id,
  //   cityOrigin: item.citySender,
  //   provinceOrigin: item.provinceSender,
  //   cityDestination: item.cityAddressee,
  //   provinceDestination: item.provinceAddressee,
  // };
  const validateBudget = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (budgetValidation(value)) return budgetValidation(value);
  };
  const validateComingDate = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    return form.values.outDate <= value
      ? null
      : "La fecha de salida tiene que ser menor a la fecha de llegada.";
  };
  const form = useForm({
    initialValues: {
      outDate: null,
      comingDate: null,
      // vehicleId:data.user.vehicles[0].brand,
      budget: "",
      details: "",
    },
    validate: {
      outDate: emptyValidation,
      comingDate: validateComingDate,
      // conveyance: emptyValidation,
      budget: validateBudget,
      details: emptyValidation,
    },
  });
  const notificationStyles = () => ({
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

  const handleSubmit = async (value) => {
    if (session) {
      const result = await submitApplication({
        userData,
        token,
        setLoading,
        form,
        router,
        item,
        checkedCarrierTerms,
        setOpenOffer
      });

      if (result) {
        showNotification({
          title: result.title,
          message: result.message, // Ahora esto es un string válido
          icon: result.icon,
          color: result.color,
          notificationStyles: notificationStyles
        })
      }
    } else {
      showNotification({
        title: "Oh no!",
        message: "Debes iniciar sesión para realizar una oferta",
        icon: <IconCircleX />,
        color: "red",
        notificationStyles: notificationStyles,
      })
    }
  }

  if (loading) {
    return <Loader visible />;
  }

  if (!data?.user?.carrierContract || !data?.user?.dniCredentials) {
    return (
      <Modal
        onClose={handleOfferModal}
        opened={opened}
        title={`No puedes hacer oferta de envios`}
        classNames={{ title: classes.title }}
        centered
        size={"xl"}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <RegisterVehiclePopUp user={data?.user}></RegisterVehiclePopUp>
      </Modal>
    );
  }

  return (
    <Modal
      onClose={handleOfferModal}
      opened={opened}
      title={`Haz la mejor oferta para el envío #${item.id}`}
      classNames={{ title: classes.title }}
      centered
      size={"xl"}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <form onSubmit={form.onSubmit(handleSubmit)} className={classes.formRoot}>
        {/* <Text>{`${detailsData.tipo}, desde ${detailsData.cityOrigin}, ${detailsData.provinceOrigin} a ${detailsData.cityDestination}, ${detailsData.provinceDestination}`}</Text> */}
        <Grid
          gutter={25}
          sx={(theme) => ({
            marginBottom: theme.spacing.xxl,
            [theme.fn.smallerThan("md")]: {
              marginBottom: theme.spacing.xs,
            },
          })}
        >
          {/* Fecha Salida */}
          <Grid.Col md={6}>
            <DatesProvider settings={{ locale: "es" }}>
              <DatePickerInput
                className={classes.input}
                label="Fecha de salida"
                size="lg"
                icon={<IconCalendar />}
                valueFormat="DD/MM/YYYY"
                placeholder="Elige una fecha"
                withAsterisk
                minDate={new Date()}
                classNames={{
                  icon: classes.iconDataPicker,
                }}
                {...form.getInputProps("outDate")}
              />
            </DatesProvider>
          </Grid.Col>
          {/* Fecha Llegada */}
          <Grid.Col md={6}>
            <DatePickerInput
              className={classes.input}
              locale="es"
              label="Fecha de llegada"
              size="lg"
              icon={<IconCalendar />}
              valueFormat="DD/MM/YYYY"
              placeholder="Elige una fecha"
              withAsterisk
              minDate={new Date()}
              //   value={outDate}
              classNames={{
                icon: classes.iconDataPicker,
              }}
              {...form.getInputProps("comingDate")}
            />
          </Grid.Col>
          {/* Medio de Transporte */}

          <TransportMethod carrier={data?.user} classes={classes} />
          
          {/* Precio */}
          <Grid.Col md={6}>
            <NumberInput
              size="lg"
              label="Precio"
              className={classes.input}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(
                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                    ","
                  )
                  : "$ "
              }
              placeholder="4000"
              hideControls
              withAsterisk
              min={0}
              {...form.getInputProps("budget")}
            />
            <Text size="xl" color="#363636cf" weight='normal'>
              Precio sugerido  {`$${Math.floor(owner ? price : price * 0.7)} ARS`}
            </Text>
          </Grid.Col>

          <Grid.Col md={6}>
            <Select
              className={classes.input}
              label="Tipo se Servicio"
              placeholder="Tipo se Servicio"
              size="lg"
              data={["Puerta a Puerta", "Punto de encuentro"]}
              {...form.getInputProps("details")}
              withAsterisk
              classNames={{
                item: classes.itemSelect,
              }}
            />
          </Grid.Col>
          <Grid.Col
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Checkbox
              label="Aceptar Términos de Condiciones de Transportistas"
              color="orange"
              {...form.getInputProps("carrierTerms")}
              withAsterisk
              checked={checkedCarrierTerms}
              onChange={(event) => {
                setCheckedCarrierTerms(
                  event.currentTarget.checked
                );
              }}
              styles={(theme) => ({
                inner: {
                  alignSelf: "center",
                },
                label: {
                  display: "flex",
                  alignItems: "center",
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              })}
            />
          </Grid.Col>
        </Grid>
        <Grid gutter={16} mt={16}>
          <Grid.Col md={6}>
            <ButtonPackApp
              fullWidth
              size="lg"
              onClick={() => handleOfferModal()}
            >
              {"Cancelar"}
            </ButtonPackApp>
          </Grid.Col>
          <Grid.Col md={6}>
            <ButtonPackApp
              fullWidth
              type="submit"
              variant="filled"
              size="lg"
            >
              {"Enviar Oferta"}
            </ButtonPackApp>
          </Grid.Col>
        </Grid>
      </form>
    </Modal>
  );
};
