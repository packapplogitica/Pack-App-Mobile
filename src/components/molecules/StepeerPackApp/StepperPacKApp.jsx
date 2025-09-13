import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import useStyles from "./stepperPackApp.style";
import { useMediaQuery } from "@mantine/hooks";

export const StepperPackApp = ({ status }) => {
  const [active, setActive] = useState(0);
  const { classes, theme } = useStyles();

  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );

  const steps = [
    {
      label: "Paso 1",
      description: "Solicitado",
      value: 1,
      status: "Solicitado",
    },
    {
      label: "Paso 2",
      description: "Con oferta",
      value: 2,
      status: "Con oferta",
    },
    {
      label: "Paso 3",
      description: "A origen",
      value: 3,
      status: "En camino a origen",
    },
    {
      label: "Paso 4",
      description: "A destino",
      value: 4,
      status: "En camino a destino",
    },
    {
      label: "Paso 5",
      description: "Entregado",
      value: 5,
      status: "Entregado",
    },
  ];

  const currentStatus = steps.filter((step) => {
    if( status === 'Oferta aceptada') return step.status === 'Con oferta'
    return step.status === status
  });

  return (
    <>
      {steps?.length && (
        <Stepper
          active={currentStatus[0]?.value}
          orientation={!isSmallerThanMd ? "horizontal" : "vertical"}
          classNames={{
            root: classes.root,
            steps: classes.steps,
            separator: classes.separator,
            verticalSeparator: classes.verticalSeparator,
            content: classes.content,
            stepWrapper: classes.stepWrapper,
            step: `${
              !isSmallerThanMd ? classes.stepHorizontal : classes.stepVertical
            }`,
            stepIcon: classes.stepIcon,
            stepCompletedIcon: classes.stepCompletedIcon,
            stepBody: `${classes.stepBody}`,
            stepLabel: classes.stepLabel,
            stepDescription: classes.stepDescription,
            stepLoader: classes.stepLoader,
          }}
          styles={{ separatorActive: { backgroundColor: "#F39929" } }}
          iconSize={60}
        >
          {steps?.map((item, index) => (
            <Stepper.Step
              label={item?.label}
              description={item?.description}
              key={index}
              // classNames={{stepBody:classes.stepBodyVertical}}
              // styles={{stepBody:{background:'blue'}}}
            />
          ))}
        </Stepper>
      )}
    </>
  );
};
