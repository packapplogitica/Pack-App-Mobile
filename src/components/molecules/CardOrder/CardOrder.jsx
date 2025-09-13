import { useState, useMemo, useEffect } from "react";
import { useSession } from "next-auth/react";
import NextImage from "next/image";

import useStaticData from "@/hooks/useStaticData";
import { useDate } from "@/hooks/useDate";
import { useWeigth } from "@/hooks/useWeigth";
import useStyles from "./cardOrder.style";

import { Card, Divider, Flex, Grid, Image, Stack, Text } from "@mantine/core";

import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

import { CardDetail } from "./CardDetail/CardDetail";
import { OrderForm } from "./OrderForm/OrderForm";
import { ModalSession } from "./ModalSession/ModalSession";
import calculateDistanceFromCoordinates from "@/components/organisms/GoogleDistanceCalculator/calculateDistanceCoordinates";
import { calculatePrice } from "@/components/organisms/GoogleDistanceCalculator/calculatePrice";
import { useLoadScript } from "@react-google-maps/api";


const libraries = ["places"];

export const CardOrder = ({ item, initialOpenDetail = false }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4", // Replace with your actual API key
        libraries,
    });
    const [price, setPrice] = useState(null); // State for the calculated price

    const despacahnte = item.despacahnte ?? item.preUser
    const { data: session } = useSession();

    const [openDetail, setOpenDetail] = useState(initialOpenDetail);
    const [openOffer, setOpenOffer] = useState(false);
    const [openModalSession, setOpenModalSession] = useState(false);
    const { formatCustomDateOrders } = useDate();
    const { weightFormatter } = useWeigth();

    const { theme } = useStyles();

    const { defaultData } = useStaticData();

    useEffect(() => {
        setOpenDetail(initialOpenDetail);
    }, [initialOpenDetail]);

    const typeLabel = () => {
        const types = defaultData?.packagesType.map((type) => ({
            value: type.value,
            label: type.name,
            description: type.description,
        }));
        if (item.clase === "envelope") return "Sobre";
        if (item.clase === "custom") return "Personalizado";
        return types.find((type) => type.value === item.clase)?.label;
    };

    const measures = () => {
        const types = defaultData?.packagesType.map((type) => ({
            value: type.value,
            label: type.name,
            description: type.description,
        }));
        if (item.clase === "envelope") return "Sobre";
        if (item.clase === "custom")
            return `Alto: ${item.height}cm, Largo: ${item.length}, Ancho: ${item.width}`;
        return types.find((type) => type.value === item.clase)?.description;
    };

    const handleDetailModal = () => {
        // setOpenDetail(!openDetail);
        if (!session) {
            setOpenModalSession(true);
        } else {
            setOpenDetail(!openDetail);
        }
    };

    const handleOfferModal = () => {
        // setOpenOffer(!openOffer);
        if (!session) {
            setOpenModalSession(true);
        } else {
            setOpenOffer(!openOffer);
        }
    };

    const coords = {
        latEntrega: item?.latEntrega,
        lngEntrega: item?.longEntrega,
        latDestino: item?.latDestino,
        longDestino: item?.longDestino,
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
            const packageType = item?.clase; // Update this based on where the correct package type is stored
            
            const price = calculatePrice(
                calculateVolume(item ), result.distanceKm, item.clase
            );
            setPrice(price)
            return price;
        } catch (error) {
           // console.error("Error calculating distance:", error.message);
        }
    };


    useEffect(() => {
        const fetchDistance = async () => {
            const result = await handleDistanceCalculation();
            setPrice(result);
        };

        fetchDistance();
    }, [isLoaded]);

    return (
        <>
            <Card radius={8} padding={16}>
                {session?.user.id === despacahnte && (
                    <Divider
                        my="xs"
                        label="Este envío es tuyo"
                        labelPosition="center"
                    />
                )}
                <Grid gutter={16}>
                    <Grid.Col lg={6}>
                        <Flex gap="xs" wrap="wrap">
                            <Image
                                compoent={NextImage}
                                src="/assets/paquete.png"
                                alt="image"
                                fit="contain"
                                width={"auto"}
                                height={"100%"}
                            />
                            <Stack spacing="tiny">
                                <Text>#{item.id}</Text>
                                <Text weight={400}>
                                    {`Desde ${
                                        item?.citySender
                                            ?.toLowerCase()
                                            .includes("capital")
                                            ? `${item?.provinceSender}, ${item?.citySender}`
                                            : item?.citySender ==
                                              item?.provinceSender
                                            ? `${item?.provinceSender}, Capital`
                                            : `${item?.citySender}, ${item?.provinceSender}`
                                    }`}
                                </Text>
                                <Text weight={400}>
                                    {`Hasta ${
                                        item?.cityAddressee
                                            ?.toLowerCase()
                                            .includes("capital")
                                            ? `${item?.provinceAddressee}, ${item?.cityAddressee}`
                                            : item?.cityAddressee ==
                                              item?.provinceAddressee
                                            ? `${item?.provinceAddressee}, Capital`
                                            : `${item?.cityAddressee}, ${item?.provinceAddressee}`
                                    }`}
                                </Text>

                                <Text weight={400} c={"grey.6"}>
                                    {typeLabel()}
                                </Text>
                                <Stack spacing={4}>
                                    {item.details && (
                                        <Text weight={400}>{item.details}</Text>
                                    )}
                                    <Text weight={300} c={theme.colors.grey[6]}>
                                        {item.weight
                                            ? item.weight &&
                                              `Peso: Hasta ${weightFormatter(
                                                  item.weight
                                              )}`
                                            : null}
                                    </Text>
                                    {item.isFragil && (
                                        <Text
                                            weight={300}
                                            c={theme.colors.grey[6]}
                                        >
                                            Frágil
                                        </Text>
                                    )}
                                    <Text weight={300} c={theme.colors.grey[6]}>
                                        Fecha:{" "}
                                        {formatCustomDateOrders(item.createdAt)}
                                    </Text>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col lg={6}>
                        <Stack
                            justify="space-between"
                            spacing="xs"
                            sx={(theme) => ({
                                height: "100%",
                                textAlign: "right",
                                [theme.fn.smallerThan("lg")]: {
                                    textAlign: "left",
                                },
                            })}
                        >
                            <Text
                                span
                                c="#61c453"
                                weight={400}
                                transform="uppercase"
                            >
                                {item.isUrgent === true && "Urgente"}
                            </Text>
                            <Flex
                                gap={16}
                                justify="center"
                                align="center"
                                sx={(theme) => ({
                                    [theme.fn.smallerThan("md")]: {
                                        flexDirection: "column",
                                    },
                                })}
                            >
                                <ButtonPackApp
                                    size="lg"
                                    onClick={handleDetailModal}
                                    w={"100%"}
                                >
                                    {"Ver detalles"}
                                </ButtonPackApp>
                                {session?.user.id !== despacahnte?.id && (
                                    <ButtonPackApp
                                        size="lg"
                                        variant="filled"
                                        onClick={handleOfferModal}
                                        w={"100%"}
                                    >
                                        {"¡Quiero Realizar este envío!"}
                                    </ButtonPackApp>
                                )}
                            </Flex>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Card>
            {/* Detail Modal */}
            <CardDetail
                owner={session?.user.id === item?.despachante?.id}
                handleDetailModal={handleDetailModal}
                handleOfferModal={handleOfferModal}
                opened={openDetail}
                item={item}
                type={measures}
                price={price}
            />
            {/* OrderForm */}
            <OrderForm
                owner={session?.user.id === despacahnte.id}
                item={item}
                handleOfferModal={handleOfferModal}
                opened={openOffer}
                setOpenOffer={setOpenOffer}
                type={measures}
                price={price}
            />
            {/* Modal Inicio de Sesion */}
            <ModalSession
                opened={openModalSession}
                setOpenModalSession={setOpenModalSession}
            />
        </>
    );
};
