import { Card, Flex, Text } from "@mantine/core";
import useStyles from "./faqCard.style";
import Link from "next/link";
import { slugify } from "@/libs/utils";

export const FAQCard = ({ item }) => {
  const { classes } = useStyles();

  return (
    <Card
      href={`/faq/${slugify(item.name)}`}
      component={Link}
      className={classes.root}
      padding={24}
    >
      <Flex direction="column" gap="xs" justify="space-between">
        <Text weight={700}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text
          weight={300}
          size={18}
        >{`${item.subarticles.length} articulos`}</Text>
      </Flex>
    </Card>
  );
};
