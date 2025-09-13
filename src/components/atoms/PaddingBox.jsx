import { theme } from "@/libs/theme";
import { Box } from "@mantine/core";

export const PaddingBox = ({ children, ...others }) => {
  return (
    <Box
      sx={{
        padding: theme.spacing.xxs,
      }}
      {...others}
    >
      {children}
    </Box>
  );
};
