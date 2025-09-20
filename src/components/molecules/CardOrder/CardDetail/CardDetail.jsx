import { useRouter } from "next/router";
import useStyles from "./cardDetail.style";
import { useDate } from "../../../../hooks/useDate";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { MapsLocation } from "@/components/organisms/MapsLocation/MapsLocation";
import {
    Accordion,
    Card,
    Divider,
    Flex,
    Grid,
    Modal,
    ScrollArea,
    Stack,
    Text,
} from "@mantine/core";
import {
    IconAlertTriangle,
    IconFlag,
    IconClockBolt,
    IconPackageExport,
} from "@tabler/icons-react";
import useStaticData from "@/hooks/useStaticData";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

const libraries = ["places"];

export const CardDetail = ({
    owner,
    item,
    type,
    opened,
    handleDetailModal,
    handleOfferModal,
    detailPage = false,
    price,
}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyC-i1VPN6L1-zpJnNxsm5hR_-6u20BCig4", // Replace with your actual API key
        libraries,
    });

    const router = useRouter();
    const { defaultData } = useStaticData();
    const { classes } = useStyles();
    const { fullDateFormatter } = useDate();

    const coords = {
        latEntrega: item?.latEntrega,
        lngEntrega: item?.longEntrega,
        latDestino: item?.latDestino,
        longDestino: item?.longDestino,
    };

    const handleOffer = () => {
        handleOfferModal();
        handleDetailModal();
    };

    const obtenerPresupuestoMinimo = (item) => {
        if (!item?.applications || item?.applications.length === 0) {
            return null;
        }

        const presupuestoMinimo = Math.min(
            ...item?.applications.map((oferta) => parseFloat(oferta.budget))
        );

        return presupuestoMinimo ?? 0;
    };

    const packagesTypes = defaultData.packagesType;
    return (
        <Modal
            onClose={handleDetailModal}
            opened={opened}
            centered
            size={"xl"}
            scrollAreaComponent={ScrollArea.Autosize}
            // title={`Envío #${item?.id} - Creado el ${fullDateFormatter(
            //     item?.createdAt
            // )}`}
            classNames={{ title: classes.title }}
        >

            <Flex gap="xxs" direction="column">

                {/* Locations */}
                <Text
                    size={18}
                    c={"grey.6"}
                    weight={400}
                    className={classes.location}
                >
                    {<IconPackageExport />}
                    {`Desde ${item?.citySender?.toLowerCase().includes("capital")
                        ? `${item?.provinceSender}, ${item?.citySender}`
                        : item?.citySender == item?.provinceSender
                            ? `${item?.provinceSender}, Capital`
                            : `${item?.citySender}, ${item?.provinceSender}`
                        }`}
                </Text>
                <Text
                    size={18}
                    c={"grey.6"}
                    weight={400}
                    className={classes.location}
                >
                    {<IconFlag />}
                    {`Hasta ${item?.cityAddressee?.toLowerCase().includes("capital")
                        ? `${item?.provinceAddressee}, ${item?.cityAddressee}`
                        : item?.cityAddressee == item?.provinceAddressee
                            ? `${item?.provinceAddressee}, Capital`
                            : `${item?.cityAddressee}, ${item?.provinceAddressee}`
                        }.`}
                </Text>
                {/* {
                    item?.packages.map((pkg) =>
                    (
                        <>

                            <Accordion variant="separated" styles={{ label: { paddingLeft: '1rem' } }}>
                        
                                <Accordion.Item key={pkg.id + 1} value={pkg.clase}>
                                    <Accordion.Control>Detalles:</Accordion.Control>
                                    <Accordion.Panel> {pkg?.isFragil && (
                                        <>
                                            <div className={classes.fragile}>
                                                {<IconAlertTriangle />}
                                                {"FRÁGIL"}
                                            </div>
                                        </>
                                    )}</Accordion.Panel>
                                    <Accordion.Panel>
                                        <Flex align="center" justify="space-between">
                                            <Text c={"grey.6"}>{"Tipo"}</Text>
                                            <Text c={"grey.6"}>
                                                {
                                                    packagesTypes.find(
                                                        (it) => it.value === pkg.clase
                                                    )?.name
                                                }
                                            </Text>
                                        </Flex>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        {pkg?.details && (
                                            <>
                                                <Stack spacing={0}>
                                                    <Flex align="center" justify="space-between">
                                                        <Text c={"grey.6"}>{"Detalles"}</Text>
                                                        <Text c={"grey.6"}>{pkg?.details}</Text>
                                                    </Flex>
                                                </Stack>
                                                <Divider />
                                            </>
                                        )}
                                    </Accordion.Panel>
        
                                </Accordion.Item>
             
                            </Accordion>
                        </>
                    )
                    )
                } */}

                {/* Precio estimado */}
                {owner && (
                    <>
                        <Stack spacing={0}>
                            <Flex align="center" justify="space-between">
                                <Text c={"grey.6"}>{"Minima oferta hasta ahora"}</Text>
                                <Text c={"grey.6"}>
                                    ${obtenerPresupuestoMinimo(item) ?? 0}
                                </Text>
                            </Flex>
                        </Stack>
                        <Divider />
                    </>
                )}

                {/* Minima oferta hasta ahora */}
                {owner && (
                    <>
                        <Stack spacing={0}>
                            <Flex align="center" justify="space-between">
                                <Text c={"grey.6"}>{"Precio sugerido"}</Text>
                                <Text c={"grey.6"}>{`$${Math.floor(owner ? price : price * 0.7)} ARS`}</Text>
                            </Flex>
                        </Stack>
                        <Divider />
                    </>

                )}

                {item?.secretWord && (
                    <>
                        <Stack spacing={0}>
                            <Flex align="center" justify="space-between">
                                <Text c={"grey.6"}>{"Palabra secreta"}</Text>
                                <Text c={"grey.6"}>
                                    {`${item?.secretWord}`}
                                </Text>
                            </Flex>
                        </Stack>
                        <Divider />
                    </>
                )}
                {/* Mapas */}
                <Stack>
                    <MapsLocation coords={coords} />
                </Stack>
            </Flex>
            {!detailPage && (
                <Grid gutter={16} mt={16}>
                    <Grid.Col md={6}>
                        <ButtonPackApp
                            fullWidth
                            type="submit"
                            size="lg"
                            onClick={() => handleDetailModal()}
                        >
                            Cancelar
                        </ButtonPackApp>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        {!owner ? (
                            <ButtonPackApp
                                fullWidth
                                type="submit"
                                variant="filled"
                                size="lg"
                                onClick={handleOffer}
                            >
                                {"¡Ofertar envío!"}
                            </ButtonPackApp>
                        ) : (
                            <ButtonPackApp
                                fullWidth
                                type="submit"
                                variant="filled"
                                size="lg"
                                onClick={() => router.push("/mis-paquetes")}
                            >
                                {"Mis Paquetes"}
                            </ButtonPackApp>
                        )}
                    </Grid.Col>
                </Grid>
            )}
        </Modal>
    );
};