import React from "react";
import { theme } from "./theme";
import { useMediaQuery } from "@mantine/hooks";

export const ModalProps = () => {
  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );
  return { size: 850, radius: 8, fullScreen: isSmallerThanMd ? true : false };
};
