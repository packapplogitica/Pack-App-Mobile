import {
    Flex,
    Stack,
    Text,
} from "@mantine/core";

import useStyles from "./StepsContainer.style";

export const StepsContainer = ({step}) => {
    const steps = [
        { 
            title: "Paso 1",
            content: "Datos del paquete",
            value: 1
        },
        {
            title: "Paso 2",
            content: "Datos del remitente y destinatario",
            value: 2,
        },
    ];
    const { classes, cx } = useStyles({ step });

    return (
        <Flex gap="sm" wrap="wrap">
            {steps?.map((item, index) => {
                return (
                    <Stack
                        key={index}
                        spacing="tiny"
                        className={cx({
                            [classes.active]: item.value === step,
                        })}
                    >
                        {item.title && (
                            <Text size={20} weight={900}>
                                {item.title}
                            </Text>
                        )}

                        {item.content && (
                            <Text size={20} weight={400}>
                                {item.content}
                            </Text>
                        )}
                    </Stack>
                );
            })}
        </Flex>
    );
};