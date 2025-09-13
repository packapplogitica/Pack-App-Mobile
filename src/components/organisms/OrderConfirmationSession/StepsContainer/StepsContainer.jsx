import { useState } from "react";
import {
    Flex,
    Stack,
    Text,
} from "@mantine/core";

import useStyles from "./stepsContainer.style";

export const StepsContainer = ({ steps = [] }) => {
    const [step, setStep] = useState(1);
    const { classes, cx } = useStyles({ step });
    return (
        <Flex gap="sm" wrap="wrap">
            {steps?.map((item, index) => {
                return (
                    <Stack
                        key={item.value}
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