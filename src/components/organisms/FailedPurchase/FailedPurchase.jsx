import { useState } from "react";
import axios from "axios";
import { Box, Text, Center, Button } from "@mantine/core";

function FailedPurchase() {
    return (
        <Center style={{ height: "50vh" }}>
            {" "}
            {/* Center the Box horizontally and vertically */}
            <Box
                textAlign="center"
                py={10}
                px={6}
                style={{ width: "300px", maxWidth: "100%" }}
            >
                {/* <CheckCircle boxSize={'50px'} color={'green.500'} backgroundColor="transparent"/> */}
                <h2>Compra fallida</h2>
                <Text className="psucce" color="white">
                Lo sentimos, no se pudo procesar su compra.
                </Text>
                <Text color="white">
                Para más información revise el email que mandamos a su correo.
                </Text>

            </Box>
        </Center>
    );
}

export default FailedPurchase;
