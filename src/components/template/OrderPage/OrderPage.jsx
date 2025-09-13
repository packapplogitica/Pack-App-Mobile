import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Menu,
  Pagination,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { PaddingBox } from "@/components/atoms";
import useStyles from "./orderPage.style";
import Icons from "@/icons";
import { IconSearch } from "@tabler/icons-react";
import Loader from "@/components/molecules/Loader/Loader";
import { getFilteredAndSortedElements, renderRows } from "./componentes/renderRows";

export const OrderPage = ({ applications }) => {
  const { classes, theme } = useStyles();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderCriteria, setOrderCriteria] = useState("De mayor a menor");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (loading) return <Loader visible />
  const elementTH = [
    {
      title: "Actions",
    },
    {
      title: "#ID",
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
      title: "Fecha de recogida",
    },
    {
      title: "Cliente",
    },
    {
      title: "Origen",
    },
    {
      title: "Destino",
    },
    {
      title: "Presupuesto",
    },
    {
      title: "Estado",
      filters: [
        {
          value: "Solicitado",
        },
        {
          value: "Aceptado",
        },
        {
          value: "Rechazado",
        },
        {
          value: "Todos los estados",
        },
        {
          value: "En camino a destino",
        },
      ],
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (criteria) => {
    setOrderCriteria(criteria);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box className={classes.root}>
      <PaddingBox>
        <Container size={"xxl"} p={0}>
          <Grid gutter={16} my="sm">
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
          <Card
            radius={8}
            padding={16}
            sx={{
              height: "100%",
            }}
          >
            <Grid
              gutter={16}
              my={"xs"}
              about="center"
              sx={{
                height: "100%",
              }}
            >
              <Grid.Col md={6}>
                <Flex direction={"column"} gap={"tiny"}>
                  <Title className={classes.title} order={1}>
                    {" "}
                    Mis Ofertas
                  </Title>
                  <Text c="#16C098" weight={400}>
                    Todas las ofertas
                  </Text>
                </Flex>
              </Grid.Col>
              <Grid.Col md={6}>
                <Flex align="center" justify="end">
                  <TextInput
                    className={classes.searchInput}
                    placeholder="ID, origen, destino, nombre"
                    value={searchQuery}
                    onChange={handleSearch}
                    size="lg"
                    radius={36}
                    icon={<IconSearch />}
                  />
                </Flex>
              </Grid.Col>
            </Grid>
            <ScrollArea type="always" offsetScrollbars>
              {applications && (
                <Box
                  w={"100%"}
                  mb={(() => {
                    const renderedElements =
                      getFilteredAndSortedElements({applications,searchQuery}).length;
                    const baseMargin = 400;
                    const rowHeight = 50;
                    const calculatedMargin =
                      baseMargin - rowHeight * renderedElements;
                    return calculatedMargin > 0 ? calculatedMargin : 0;
                  })()}
                >
                  <Table
                    sx={(theme) => ({
                      "th,td": {
                        padding: "16px",
                      },
                    })}
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
                            <Flex
                              gap={20}
                              align={"center"}
                              justify={"space-between"}
                            >
                              {item.title}
                              {item?.filters &&
                                (
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
                                            onClick={() => handleSort(item.value)}
                                          >
                                            {item.value}
                                          </Menu.Item>
                                        );
                                      })}
                                    </Menu.Dropdown>
                                  </Menu>
                                )}
                            </Flex>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>{
                    renderRows({
                      applications,
                      orderCriteria,
                      currentPage,
                      itemsPerPage,
                      searchQuery,
                      theme,
                      setLoading
                      })}
                    </tbody>
                  </Table>
                </Box>
              )}
            </ScrollArea>
            <Text className={classes.total}>{`Total: ${applications.length} ${applications.length === 1 ? "entrada" : "entradas"
              }`}</Text>
          </Card>
        </Container>
        {applications.length > itemsPerPage && (
          <Container mt={25} fluid className={classes.paginationContainer}>
            <Pagination
              className={classes.pagination}
              total={Math.ceil(applications.length / itemsPerPage)}
              siblings={1}
              defaultValue={currentPage}
              color="orange"
              onChange={handlePageChange}
            />
          </Container>
        )}
      </PaddingBox>
    </Box>
  );
};
