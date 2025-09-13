import { Accordion, Card, Divider, Title } from "@mantine/core";
import useStyles from "./slugCard.style";
import Icons from "@/icons";

export const SlugCard = ({ item }) => {
  const { classes } = useStyles();

  return (
    <Card padding={16} radius={8}>
      <Title order={2} className={classes.title}>
        {item.name}
      </Title>
      <Divider my="tiny" />

      <Accordion
        variant="default"
        classNames={{
          item: classes.item,
          content: classes.content,
          control: classes.control,
          label: classes.label,
          chevron: classes.chevron,
        }}
        chevron={Icons.arrowR}
      >
        {item.faqs?.map((faq, index) => (
          <Accordion.Item key={index} value={faq.faq}>
            <Accordion.Control>{faq.faq}</Accordion.Control>
            <Accordion.Panel>{faq.response}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
};
