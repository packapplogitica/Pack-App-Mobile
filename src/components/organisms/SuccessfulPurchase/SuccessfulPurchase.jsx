
import { Box, Text, Center, Button, Flex } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useRouter } from "next/router";

function SuccessfulPurchase({ orderUuid }) {
    const clipboard = useClipboard({ timeout: 1000 });
    const router = useRouter()

    return (
        <Center style={{ height: "50vh" }}>
            <Box
                style={{ width: "300px", maxWidth: "100%" }}
                ta="center"
                py={10}
                px={6}
            >
                <h2>Compra exitosa</h2>
                <Text c="white" fw={500} mb="sm">
                    ¡Gracias por su compra!
                </Text>
                <Text c="white" mb="md">
                    Se ha procesado su pago correctamente guarda el id de tu pedido para tener un trackqueo del mismo.
                </Text>

                {/* Mostrar el UUID */}
                <Text c="white" fw={500} mb="xs">
                    ID de tu pedido:
                </Text>
                <Text
                    c="white"
                    mb="sm"
                    style={{
                        fontFamily: "monospace",
                        backgroundColor: "#1a1a1a",
                        padding: "6px 10px",
                        borderRadius: "8px",
                    }}
                >
                    {orderUuid}
                </Text>

                {/* Botón para copiar */}
                <Flex direction={'column'} gap={22} align={'center'}>

                    <Button
                        color={clipboard.copied ? "teal" : "blue"}
                        onClick={() => clipboard.copy(orderUuid)}
                        fullWidth
                    >
                        {clipboard.copied ? "¡Copiado!" : "Copiar UUID"}
                    </Button>

                    <Button

                        onClick={() => router.push(`addresseTrack/${orderUuid}`)}
                        fullWidth
                    >
                        Ir a seguimiento del envio
                    </Button>
                </Flex>

            </Box>
        </Center>
    );
}

export default SuccessfulPurchase;

