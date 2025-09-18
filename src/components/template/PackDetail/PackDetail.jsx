import { Box, Container, Grid, Loader } from "@mantine/core";
import useStyles from "./packDetail.style";
import { PaddingBox } from "@/components/atoms";
import Link from "next/link";
import Icons from "@/icons";
import MyShipments from "@/components/organisms/MyShipments/MyShipments";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import calculateDistanceFromCoordinates from "@/components/organisms/GoogleDistanceCalculator/calculateDistanceCoordinates";
import { calculatePrice } from "@/components/organisms/GoogleDistanceCalculator/calculatePrice";
import { useApiQuery } from "../../../utils/apiClient/reactQueryHooks";
// /utils/apiClient/reactQueryHooks
const libraries = ["places"];

export default function PackDetail() {

    const [price, setPrice] = useState(null); // State for the calculated price
    const { theme, classes } = useStyles();

    const router = useRouter();
    const idOrder = router.query.idOrder;


    // solo ejecuta el fetch si idOrder existe
    const { data: order, isLoading, error } = useApiQuery(
        ["order", idOrder],
        `/orders/addresse/${idOrder}`,
        {
            enabled: !!idOrder, // <-- no ejecuta hasta que idOrder está definido
        }
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4", // Replace with your actual API key
        libraries,
    });
    const isAdressePage = router?.asPath?.includes("addresseTrack");
    console.log('idOrder', order)

    if (!idOrder) {
        return <p>Cargando parámetros...</p>;
    }
    
    if ((!router.isReady && isLoading) && isLoaded) return <Loader />
    if (!order || order.length === 0) return <p>No se encontró la orden</p>;

    const coords = {
        latEntrega: order[0]?.latEntrega,
        lngEntrega: order[0]?.longEntrega,
        latDestino: order[0]?.latDestino,
        longDestino: order[0]?.longDestino,
    };



    const calculateVolume = (paquete) => {
        return (paquete.height * paquete.width * paquete.length);
    };

    const handleDistanceCalculation = async () => {
        if (!isLoaded) {
            console.error("Google Maps not loaded yet");
            return;
        }
        try {
            const result = await calculateDistanceFromCoordinates(
                coords.latEntrega,
                coords.lngEntrega,
                coords.latDestino,
                coords.longDestino
            );

            // Ensure packageType is available
            const packageType = order.package[0]?.clase; // Update this based on where the correct package type is stored
            const price = calculatePrice(
                calculateVolume(order[0]),
                result.distanceKm,
                packageType,
            );
            setPrice(price);
            return price;
        } catch (error) {
            console.error("Error calculating distance:", error.message);
        }
    };

    // useEffect(() => {
    //     const fetchDistance = async () => {
    //         if (isLoaded) {
    //             console.log("CARGADO");
    //             const result = await handleDistanceCalculation();
    //             setPrice(result);
    //         }
    //     };

    //     fetchDistance();
    // }, [isLoaded]);
    return (
        <Box className={classes.root}>
            <PaddingBox>
                <Container size={"xxl"} p={0}>
                    {!isAdressePage && (
                        <Link
                            href="/"
                            style={{
                                textDecoration: "none",
                                color: theme.colors.orangePrimary[6],
                                fontWeight: 400,
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            {Icons.arrowL} Volver a la pagina principal{" "}
                        </Link>
                    )}
                </Container>

                <Container size={"xxl"} p={0} >
                    <Grid justify={"center"}>
                        <Grid.Col md={8} >
                            <MyShipments
                                applications={order[0]?.applications}
                                order={order[0]}
                                hasRated={order.hasRated}
                                ratingOrder={order?.ratingOrder}
                                isAdressePage={isAdressePage}
                                price={order[0]?.price}
                            />
                        </Grid.Col>
                    </Grid>
                </Container>
            </PaddingBox>
        </Box>
    );
}
