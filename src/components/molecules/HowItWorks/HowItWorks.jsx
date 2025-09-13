import { PaddingBox } from "@/components/atoms";
import { theme } from "@/libs/theme";
import {
  Box,
  Container,
  Flex,
  MediaQuery,
  Text,
  Title,
  Image,
} from "@mantine/core";
import useStyles from "./howItWorks.style";
import Icons from "@/icons";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";

export const HowItWorks = ({ howItWorks }) => {
  const { header, cards } = howItWorks;

  const { classes } = useStyles();

  const GridsCards = () => {
    return (
      <Container size="xxl" className={classes.dekstop}>
        {cards?.length && (
          <>
            {cards?.map((item, index) => (
              <Flex
                // mb={0}
                align="center"
                justify="center"
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                gap="xl"
                key={index}
                className={classes.cardContainer}
              >
                <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                  <Box className={classes.imageContainer}>
                    <Image
                      className={classes.image}
                      maxWidth={699}
                      maxHeight={466}
                      src={`/assets/${item.image}`}
                      alt={item.image}
                      radius="md"
                      fit="cover"
                    />
                  </Box>
                </MediaQuery>
                <Box>
                  <Title order={4} className={classes.title} mb="xs">
                    {item.title}
                  </Title>
                  <Title order={4} className={classes.subTitle} mb="xs">
                    {item.subTitle}
                  </Title>
                  <Text className={classes.content}>{item.content}</Text>
                </Box>
              </Flex>
            ))}
          </>
        )}
      </Container>
    );
  };

  return (
    <Box className={classes.cards}>
      <GridsCards />
    </Box>
  );
};
