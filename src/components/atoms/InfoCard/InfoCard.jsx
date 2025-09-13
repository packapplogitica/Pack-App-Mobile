import { Box, Container, Flex, Grid, Text, Title } from "@mantine/core";
import { PaddingBox } from "../PaddingBox";
import useStyles from "./infoCard.style";
import Icons from "@/icons";

export const InfoCard = ({ data }) => {
  const { classes } = useStyles();

  return (
    <PaddingBox>
      <Container size="xxl" p={0}>
        <Grid justify="center" align="center" py="lg">
          <Grid.Col md={6}>
            <Flex direction="column" align="center" justify="center" gap="xs">
              <Box>{Icons.logo}</Box>
              {data.title && (
                <Title className={classes.title}>{data.title}</Title>
              )}
              {data.content && (
                <Text className={classes.content}>{data.content}</Text>
              )}
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </PaddingBox>
  );
};
