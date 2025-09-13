import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useLoadScript } from "@react-google-maps/api";
import { useData } from "@/libs/DataProvider";
import { useFormValidation } from "@/hooks/useFormValidation";
import useStyles from "./senderandRecipientInformationForm.style";
import { useForm } from "@mantine/form";
import { Card, Flex, Grid, Text, } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCircleX } from "@tabler/icons-react";
import Loader from "@/components/molecules/Loader/Loader";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import calculateDistance from "@/components/organisms/GoogleDistanceCalculator/calculateDistance";
import { calculatePrice } from "@/components/organisms/GoogleDistanceCalculator/calculatePrice";
import { destinationChanged, fetchGeocodeConfigured, geocodeTyping, originChanged } from "@/utils/GoogleServices/GoogleServices";
import { submitOrder } from "./utils/orderHelpers";
import DestinationForm from "./senderComponent/DestinationForm";
import OriginForm from "./senderComponent/OriginForm";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";

const libraries = ["places"];
export const SenderandRecipientInformationForm = ({ orders, form, typeShipping }) => {
    /**
     * ATENCION
     * direccionEntrega hace referencia a la direccion de ORIGEN
     * direccionDestino hace referencia a la direccion de DESTINO
     * TODO: Corregir el nombre para que sea representativo desde la DB hasta el FRONT pasando por el BACK
     */
    const { classes, cx, theme } = useStyles();
    const router = useRouter();
    const [originMarker, setOriginMarker] = useState(null);
    const [price, setPrice] = useState();
    const [destinationMarker, setDestinationMarker] = useState(null);
    const [formatedOriginAddress, setFormatedOriginAddress] = useState({});
    const [formatedDestinationAddress, setFormatedDestinationAddress] = useState({});
    const [distanceMaxPassed, setDistanceMaxPassed] = useState(false);
    const [acceptPayment, setAcceptPayment] = useState(false);
    const [isValidOrigin, setIsValidOrigin] = useState(false);
    const [isValidDestination, setIsValidDestination] = useState(false);
    const [loading, setLoading] = useState(false);
    const originRef = useRef();
    const destinationRef = useRef();
    const { data } = useSession();
    const session = data;
    const token = session?.user.token;
    // verificar como llega el email
    const { firstName, lastName, DNI, email, areaCode, phone } = session?.user  || {};
    const { updateData } = useData();
    const { emptyValidation } = useFormValidation();

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4",
    libraries,
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

  const originAddressValidation = (value, isValidOrigin) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (!isValidOrigin) return "Debes seleccionar una dirección válida.";
  };

const secondForm = useForm({
    ...form,
    initialValues: {
      ...form.initialValues,
      // Origen
      nameSender: firstName || "",
      lastNameSender: lastName || "",
      dniSender: DNI || "",
      emailSender: email || session?.email || "",
      codeSender: areaCode,
      phoneSender: phone,
      direccionEntrega: "",
      pisoOrigen: "",
      deptoOrigen: "",
      // Destino
      nameAddressee: "",
      lastNameAddressee: "",
      dniAddresse: "",
      codeAddresse: "",
      phoneAddresse: "",
      direccionDestino: "",
      pisoEntrega: "",
      deptoEntrega: "",
      emailAddresse: "",
      distanceKm:0
    },
    validate: {
      ...form.validate,
      // Origen
      nameSender: emptyValidation,
      // lastNameSender: emptyValidation,
      // dniSender: validateDni,
      // emailSender: validateEmail,
      // codeSender: validateAreaCode,
      //  codeAddresse: validateAreaCode,
      phoneSender: emptyValidation,
      direccionEntrega: originAddressValidation,
      // Destino
      nameAddressee: emptyValidation,
      // lastNameAddressee: emptyValidation,
      // dniAddresse: validateDni,
      // emailAddresse: validateEmail,
      phoneAddresse: emptyValidation,
      direccionDestino: originAddressValidation,
    },
  });


  // const isFormReady =
  //   secondForm.values.nameSender &&
  //   secondForm.values.nameAddressee &&
  //   secondForm.values.phoneSender &&
  //   secondForm.values.phoneAddresse &&
  //   !secondForm.errors.nameSender &&
  //   !secondForm.errors.nameAddressee &&
  //   !secondForm.errors.phoneSender &&
  //   !secondForm.errors.phoneAddresse;





    const handleSubmitOrder = async (value) => {
        const result = await submitOrder({
            session,
            value,
            formatedOriginAddress,
            formatedDestinationAddress,
            origin,
            destination,
            token,
            setLoading,
            secondForm,
            router,
            orders,
            price,
        });

        if (result) {
            showNotification({
                title: result.title,
                message: result.message, // Ahora esto es un string válido
                icon: result.icon,
                color: result.color,
                notificationStyles: notificationStylees
            })
        }
    };


  const handleSubmit = (value) => {
    updateData(value);
    // setSteep(3);
    // setLoading(true)
    setLoading(true)
    handleSubmitOrder(value, price);
  };

  const handleOriginMapClick = (event) => {
    if (!originMarker) setOriginMarker(null);

    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setTimeout(() => {
      setOriginMarker(clickedLocation);
      fetchGeocode(clickedLocation, true);
    }, 0);
  };

  const handleDestinationMapClick = (event) => {
    if (!destinationMarker) setDestinationMarker(null);

    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setTimeout(() => {
      setDestinationMarker(clickedLocation);
      fetchGeocode(clickedLocation, false);
    }, 0);
  };

  const calculateTotalVolume = (order) => {
    if (!order?.packages || !Array.isArray(order.packages)) return 0;

    return order.packages.reduce((total, paquete) => {
      const height = parseFloat(paquete.height) || 0;
      const width = parseFloat(paquete.width) || 0;
      const length = parseFloat(paquete.length) || 0;

      const volume = height * width * length;
      return total + volume;
    }, 0);
  };


  useEffect(() => {
    console.log(price);
    if (
      secondForm.values.direccionEntrega &&
      secondForm.values.direccionDestino
    ) {
      updatePrice({ secondForm, orders, setPrice });
    }
  }, [secondForm.values.direccionEntrega, secondForm.values.direccionDestino]);

    const updatePrice = async ({ secondForm, orders, setPrice }) => {
        const { direccionEntrega, direccionDestino } = secondForm.values;

        try {
            const calculatedDistance = await calculateDistance(direccionEntrega, direccionDestino);
            secondForm.setFieldValue("distanceKm", calculatedDistance.distanceKm);
            const price = calculatePrice(
                orders,
                calculateTotalVolume(orders),
                calculatedDistance?.distanceKm,
                typeShipping,
                setDistanceMaxPassed
            );
            setPrice(price);
        } catch (error) {
            console.error("Error calculating price:", error);
        }
    };

    // useEffect(() => {
    //     updatePrice({ secondForm, orders, setPrice });
    // }, [secondForm.values.direccionEntrega, secondForm.values.direccionDestino]);


    const fetchGeocodeTypping = geocodeTyping({
        setOrigin,
        setDestination,
        setIsValidOrigin,
        setIsValidDestination,
        setFormatedOriginAddress,
        setFormatedDestinationAddress,
        secondForm,
    });

    const fetchGeocode = fetchGeocodeConfigured({
        setOrigin,
        setDestination,
        setIsValidOrigin,
        setIsValidDestination,
        setFormatedOriginAddress,
        setFormatedDestinationAddress,
        secondForm,
    });

    const onOriginChanged = originChanged({
        originRef,
        fetchGeocodeTypping,
        setOriginMarker,
        secondForm,
        setIsValidOrigin,
    });

    const onDestinationChanged = destinationChanged({
        destinationRef,
        fetchGeocodeTypping,
        setFormatedDestinationAddress,
        setIsValidDestination,
        secondForm,
        setDestinationMarker,
    });

    const handleOriginChange = (e) => {
        setIsValidOrigin(false);
        setIsOrigin(false);
        setOrigin({ ...origin, address: e.target.value });
    };

    const acceptPaymentHandle = async () => {
        const { direccionEntrega, direccionDestino } = secondForm.values;

        const calculatedDistance = await calculateDistance(direccionEntrega, direccionDestino);
        if (calculatedDistance?.distanceKm / 1000 > 25) {
            console.log('la distancia dentro del handel',calculatedDistance)
            setDistanceMaxPassed(true)
            setPrice('Precio no disponible')
            return showNotification({
                title: 'Distancia maxima superada',
                message: 'No puedes realizar este envio con este servicio', // Ahora esto es un string válido
                notificationStyles: notificationStylees
            })
        }else{
            setAcceptPayment(true)
        }
    }

  if (!isLoaded || loading) return <Loader visible />;


  return (
    <Card padding={0} sx={{ height: "100%" }} radius={8}>
      {/* <Button onClick={() => setSteep(1)}>Volver</Button> */}
      <form
        className={classes.form}
        onSubmit={secondForm.onSubmit(handleSubmit)}
      >
        {/* CONTAINER GENERAL */}
        <Grid my={"xxs"} p={16}>
          {/* ORIGEN */}
          <OriginForm
            secondForm={secondForm}
            origin={origin}
            setOrigin={setOrigin}
            originMarker={originMarker}
            handleOriginMapClick={handleOriginMapClick}
            onOriginChanged={onOriginChanged}
            originRef={originRef}
            handleOriginChange={handleOriginChange}
            classes={classes}
            acceptPayment={acceptPayment}
            typeShipping={typeShipping}
          />

          {/* DESTINO */}
          <DestinationForm
            secondForm={secondForm}
            destination={destination}
            setDestination={setDestination}
            destinationRef={destinationRef}
            onDestinationChanged={onDestinationChanged}
            classes={classes}
            destinationMarker={destinationMarker}
            handleDestinationMapClick={handleDestinationMapClick}
            acceptPayment={acceptPayment}
            typeShipping={typeShipping}
          />
        </Grid>
        <Flex
          gap={20}
          dir="column"
          justify="center"
          my={10}
          px={10}
          align={"center"}
        >
          {/* <Flex gap={4}> */}
          <Text
            size={{ base: "md", sm: "lg", md: "xl" }}
            ta={{ base: "center", md: "right" }}
            style={{ width: "100%" }}
          >
            Precio sugerido:{" "}
          </Text>
          <Text
            size={{ base: "lg", sm: "xxl", md: "xxl" }}
            weight="bold"
            ta={{ base: "center", md: "left" }}
            style={{ width: "100%" }}
          >
            {price > 0 ? `$${price} ARS` : price}
          </Text>
          {/* </Flex> */}
        </Flex>
        {!distanceMaxPassed && acceptPayment && (
          <ButtonPackApp
            // disabled={!isFormReady}x
            variant="filled"
            w="100%"
            size="lg"
            uppercase
            type="submit"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            Pedir envio
          </ButtonPackApp>
        )}
        {!acceptPayment && (
          <ButtonPackApp
            disabled={!(typeof price === "number" && price > 0)}
            variant="filled"
            w="100%"
            size="lg"
            uppercase
            type="submit"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            onClick={acceptPaymentHandle}
          >
            Aceptar Pago
          </ButtonPackApp>
        )}
      </form>
    </Card>
  );
};

