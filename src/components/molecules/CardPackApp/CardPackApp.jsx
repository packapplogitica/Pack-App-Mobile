import { Box, Container, Card, Flex, Grid, Text, Title } from "@mantine/core";
import useStyles from "./cardPackApp.style";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import Icons from "@/icons";

export const CardPackApp = ({
  title,
  content,
  cat,
  image,
  icon,
  variant = "primary",
}) => {
  const { classes } = useStyles({ variant });
  return (
    <Card className={classes.card} radius={variant === "primary" ? 16 : 0}>
      <Flex
        direction="column"
        justify="center"
        gap="md"
        sx={{
          height: "100%",
        }}
      >
        <Flex
          className={classes.cardContainer}
          justify={"center"}
          align={"center"}
          direction={"column"}
          gap={"xl"}
        >          
          <Title className={classes.cardTitle}>{title}</Title>
          <Text className={classes.cardContent}>{content}</Text>
          <Box className={classes.cardIcon}>{icon}</Box>
        </Flex>
      </Flex>
    </Card>
  );
};
