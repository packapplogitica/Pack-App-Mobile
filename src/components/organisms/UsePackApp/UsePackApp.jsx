import { PaddingBox } from "@/components/atoms";
import { Button, Container, Divider, Grid, Title } from "@mantine/core";
import useStyles from "./usePackApp.style";
import { theme } from "@/libs/theme";
import { CardPackApp } from "@/components/molecules";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

export const UsePackApp = ({ usePackApp }) => {
  const { title, cards } = usePackApp;
  const { classes } = useStyles();

  return (
    <PaddingBox mt="xl" mb="md">

      <Container className={classes.titleContainer}>
        <Title className={classes.title}>
          {title}
        </Title>
      </Container>

      <Container size="xxl" p={0}>
        {cards?.length && (
          <Grid grow gutter={"xl"}>
            {cards?.map((item, index) => (
              <Grid.Col key={index} md={4}>
                <CardPackApp {...item} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </PaddingBox>
  );
};
