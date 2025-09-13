import { PaddingBox } from "@/components/atoms";
import useStyles from "./gridCardsRegister.style";
import {
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import Icons from "@/icons";
import { useRouter } from "next/router";

export const GridCardsRegister = ({ cards }) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <PaddingBox>
      <Container size="xxl" p={0}>
        {cards?.length && (
          <Grid gutter={30} mb="md">
            {cards?.map((item, index) => (
              <Grid.Col key={index} md={6}>
                <Card
                  radius={16}
                  withBorder
                  className={classes.card}
                  onClick={() => {
                    router.push(`/registro/${item.link}`);
                  }}
                >
                  <Flex align="center" justify="space-between">
                    <Flex gap="sm" align="center">
                      <Image
                        src={`/assets/${item.icon}.png`}
                        alt={`Icon ${item.title}`}
                        width={65}
                        height={65}
                      />
                      <Title order={2} className={classes.title}>
                        {item.title}
                      </Title>
                    </Flex>
                    <Box>{Icons.arrowRight}</Box>
                  </Flex>

                  <Divider my="md" />

                  <Text className={classes.content}>{item.content}</Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </PaddingBox>
  );
};
