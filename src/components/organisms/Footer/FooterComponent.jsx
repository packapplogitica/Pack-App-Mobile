import { PaddingBox } from "@/components/atoms";
import useStyles from "./footerComponent.style";
import { Container, Flex, Grid, List, Text, Title } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/libs/theme";

export const FooterComponent = ({ footer }) => {
  const { logo, mainLinks, privacy, copy } = footer;

  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Grid gutter={25} my="md">
            <Grid.Col md={6}>
              <Link href="/">
                <Image src={logo} alt="logo" width={150} height={50} priority />
              </Link>
            </Grid.Col>
            <Grid.Col md={6}>
              {mainLinks?.length && (
                <Grid gutter={25}>
                  {mainLinks?.map((item, index) => (
                    <Grid.Col md={6} key={index} className={classes.col}>
                      <Flex direction="column" gap={20}>
                        <Title order={5} size={20} weight={400}>
                          {item.title}
                        </Title>
                        {item.links?.length && (
                          <List listStyleType="none">
                            {item.links?.map((link, i) => (
                              <List.Item key={i} mb={10}>
                                <Link href={link.link}>{link.label}</Link>
                              </List.Item>
                            ))}
                          </List>
                        )}
                      </Flex>
                    </Grid.Col>
                  ))}
                </Grid>
              )}
            </Grid.Col>
          </Grid>
          <Grid gutter={15}>
            <Grid.Col md={6}>
              <Text>{copy}</Text>
            </Grid.Col>
          </Grid>
        </Container>
      </PaddingBox>
    </footer>
  );
};
