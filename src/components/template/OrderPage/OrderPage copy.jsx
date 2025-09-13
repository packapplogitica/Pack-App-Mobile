import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Menu,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import useStyles from "./orderPage.style";
import { PaddingBox } from "@/components/atoms";
import Link from "next/link";
import Icons from "@/icons";
import { ClassNames } from "@emotion/react";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";

export const OrderPage = () => {
  const { classes, theme, cx } = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const elements = [
    {
      id: 6,
      name: "Anahi",
      destino: "Calle 123 - Av Ready 500",
      fecha: "2023-05-01",
      packState: "Solicitado",
      price: 1500,
    },
    {
      id: 7,
      name: "Guillermo",
      destino: "Normal 2500 - San Lorenzo 1360",
      fecha: "2022-03-12",
      packState: "Activo",
      price: 24000,
    },
    {
      id: 39,
      name: "Florencia",
      destino: "Y 1450 - Z 345",
      fecha: "2024-11-11",
      packState: "Rechazado",
      price: 35000,
    },
  ];

  const elementTH = [
    {
      title: "ID del producto",
      filters: [
        {
          value: "De mayor a menor",
        },
        {
          value: "De menor a mayor",
        },
      ],
    },
    {
      title: "Fecha",
      filters: [
        {
          value: "Más recientes",
        },
        {
          value: "Mas antiguas",
        },
      ],
    },
    {
      title: "Cliente",
      filters: [
        {
          value: "Alfabeticamente de la A - Z",
        },
        {
          value: "Alfabeticamente de la Z - A",
        },
      ],
    },
    {
      title: "Origen - Destino",
      filters: [
        {
          value: "Alfabeticamente de la A - Z",
        },
        {
          value: "Alfabeticamente de la Z - A",
        },
      ],
    },
    {
      title: "Presupuesto",
      filters: [
        {
          value: "De mayor a menor",
        },
        {
          value: "De menor a mayor",
        },
      ],
    },
    {
      title: "Estado",
      filters: [
        {
          value: "Solicitado",
        },
        {
          value: "Activo",
        },
        {
          value: "Rechazado",
        },
        {
          value: "Todos los campos",
        },
      ],
    },
  ];
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredElements = elements?.filter(
    (element) =>
      element.id.toString().includes(searchQuery) ||
      element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      element.destino.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let rows;
  if (filteredElements.length === 0) {
    rows = (
      <tr>
        <td colSpan="6">No se encontraron resultados</td>
      </tr>
    );
  } else {
    rows = filteredElements.map((element) => (
      <tr
        key={element.id}
        className={classes.tr}
        onClick={() => router.push(`/oferta`)}
      >
        <td>{element.id}</td>
        <td>{element.fecha}</td>
        <td>{element.name}</td>
        <td>{element.destino}</td>
        <td>{element.price}</td>
        <td c>
          <Text
            className={classes.boxState}
            sx={(theme) => ({
              background:
                (element.packState === "Solicitado" && "#E18802") ||
                (element.packState === "En camino" && "#71BBDB") ||
                (element.packState === "Rechazado" && "#D61919") ||
                (element.packState === "Activo" && "#61C453"),
            })}
          >
            {element.packState}
          </Text>
        </td>
      </tr>
    ));
  }

  return (
    <Box className={classes.root}>
      <PaddingBox>
        <Container size={"xxl"} p={0}>
          <Grid gutter={16} mb="sm">
            <Grid.Col>
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: theme.colors.orangePrimary[6],
                  fontWeight: 400,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {Icons.arrowL} Volver a la pagina principal{" "}
              </Link>
            </Grid.Col>
          </Grid>
          <Card radius={8} padding={16}>
            <Grid gutter={16} my={"xs"} about="center">
              <Grid.Col md={6}>
                <Flex direction={"column"} gap={"tiny"}>
                  <Title order={1} size={24} weight={500}>
                    {" "}
                    Mis Ofertas
                  </Title>
                  <Text c="#16C098" weight={400}>
                    Todos los paquetes
                  </Text>
                </Flex>
              </Grid.Col>
              <Grid.Col md={6}>
                <Flex align="center" justify="end">
                  <TextInput
                    placeholder="ID - Origen,destino - Nombre"
                    value={searchQuery}
                    onChange={handleSearch}
                    size="lg"
                    radius={36}
                    icon={<IconSearch />}
                  />
                </Flex>
              </Grid.Col>
            </Grid>

            <Table
              sx={(theme) => ({
                "th,td": {
                  padding: "16px",
                },
              })}
              mb="sm"
            >
              <thead>
                <tr>
                  {elementTH?.map((item, index) => (
                    <th
                      key={index}
                      style={{
                        color: "#B5B7C0",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      <Flex gap={20} align={"center"}>
                        {item.title}
                        <Menu
                          position="bottom-end"
                          transitionProps={500}
                          width={300}
                          radius={8}
                          offset={0}
                        >
                          <Menu.Target>
                            <Button
                              sx={{
                                color: "#191F1F",
                                fontWeight: 300,
                                background: "transparent",
                                "&:hover": {
                                  background: "transparent",
                                },
                              }}
                            >
                              <Flex align="center">{Icons.arrowRD}</Flex>
                            </Button>
                          </Menu.Target>

                          <Menu.Dropdown
                            mt={5}
                            className={classes.dropDown}
                            p="xxs"
                          >
                            {item.filters?.map((item, index) => {
                              return (
                                <Menu.Item
                                  component="button"
                                  className={classes.item}
                                  key={item.value}
                                  onClick={() => setState(item.value)}
                                >
                                  {item.value}
                                </Menu.Item>
                              );
                            })}
                          </Menu.Dropdown>
                        </Menu>
                      </Flex>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Card>
        </Container>
      </PaddingBox>
    </Box>
  );
};
