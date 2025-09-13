import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { getErrorMessage } from "@/utils/getError/getError";
import { Flex, Grid, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCircleX } from "@tabler/icons-react";
import Image from "next/image";

export const handleOrderSuccess = (secondForm, router, session,setLoading,successfullMesassge,confirmModalRoute,confirmModalButton) => {
    secondForm.reset();
    setLoading(false);
    const confirmModal = () => {
        modals.closeAll();
        router.push(confirmModalRoute);
    };
    return modals.open({
        children: (
            <Flex
                direction="column"
                gap={16}
                align="baseline"
                w={"100%"}
            >
                <Image
                    src="/assets/antConfettiVector.svg"
                    width={600}
                    height={500}
                    alt="image"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <Grid gutter={25} mt="sm" w={"100%"}>
                    <Grid.Col>
                        <Stack spacing={12}>
                            <Text
                                size={24}
                                weight={500}
                                align="center"
                            >
                                Buen trabajo,{" "}
                                {session?.user?.firstName}!
                            </Text>
                            <Text
                                size={16}
                                weight={400}
                                align="center"
                                c={"grey.6"}
                            >
                                
                                    {successfullMesassge}
                                    
                                
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col md={12}>
                        <ButtonPackApp
                            w="100%"
                            size="lg"
                            variant="filled"
                            onClick={confirmModal}
                        >
                        {confirmModalButton}
                        </ButtonPackApp>
                    </Grid.Col>
                </Grid>
            </Flex>
        ),
        centered: true,
        closeOnClickOutside: false,
        styles: {
            header: {
                padding: "16px 40px",
            },
        },
    });
};



export const handleCatchError = (error, setLoading) => {
    setLoading(false);
    return {
        title: "Oh no!",
        message: getErrorMessage(error) || "Error al procesar la solicitud.",
        icon: <IconCircleX />,
        color: "red",
    };
};