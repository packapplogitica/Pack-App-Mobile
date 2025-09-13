// HOOKS
import { useState } from "react";
import Link from "next/link";
import useStyles from "./packPage.style";
// COMPONENTS
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
import { useMediaQuery } from "@mantine/hooks";
import { PaddingBox } from "@/components/atoms";
import Icons from "@/icons";
import { IconSearch } from "@tabler/icons-react";
import { getFilteredAndSortedElements, renderRows } from "./components/renderRows";

export const PackPage = ({ orders }) => {
  const { classes, theme } = useStyles();
  const isMd = useMediaQuery("(min-width: 960px)");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderCriteria, setOrderCriteria] = useState("De mayor a menor");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const elementTH = [
    {
      title: "#ID",
      filters: [
        {
          value: "De mayor a menor",
          type: "asc",
        },
        {
          value: "De menor a mayor",
          type: "desc",
        },
      ],
    },
    {
      title: "Fecha",
    },
    {
      title: "Destinatario",
    },
    {
      title: "Origen",
    },
    {
      title: "Destino",
    },
    {
      title: "Estado",
      filters: [
        {
          value: "Solicitado",
        },
        {
          value: "Con oferta",
        },
        {
          value: "En camino",
        },
        {
          value: "Entregado",
        },
        {
          value: "Inactivo",
        },
        {
          value: "Todos los estados",
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
        {/* <Center> */}
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
                  <Title order={1} className={classes.title}>
                    {" "}
                    Mis Paquetes
                  </Title>
                  <Text c="#16C098" weight={400}>
                    Todos los paquetes
                  </Text>
                </Flex>
              </Grid.Col>

              <Grid.Col md={6}>
                <Flex align="center" justify={isMd ? "end" : "start"}>
                  <TextInput
                    placeholder="ID - Nombre - Origen, destino"
                    value={searchQuery}
                    onChange={handleSearch}
                    size="lg"
                    radius={36}
                    icon={<IconSearch />}
                    className={classes.searchInput}
                  />
                </Flex>
              </Grid.Col>
            </Grid>
            <ScrollArea type="always" offsetScrollbars>
              {orders && (
                <Box
                  w={"100%"}
                  mb={(() => {
                    const renderedElements = getFilteredAndSortedElements({orders,searchQuery}).length;
                    const baseMargin = 400;
                    const rowHeight = 50;
                    const calculatedMargin = baseMargin - (rowHeight * renderedElements);
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

                              {item.filters && (

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
                        orders,
                        orderCriteria,
                        currentPage,
                        itemsPerPage,
                        searchQuery,
                        theme,
                        classes
                      })}
                    </tbody>
                  </Table>
                </Box>
              )}
            </ScrollArea>
            <Text className={classes.total}>{`Total: ${orders.length} ${orders.length === 1 ? "entrada" : "entradas"
              }`}</Text>
          </Card>
        </Container>
        {/* </Center> */}
        {orders.length > itemsPerPage && (
          <Container mt={25} fluid className={classes.paginationContainer}>
            <Pagination
              className={classes.pagination}
              total={Math.ceil(orders.applications?.length / itemsPerPage)}
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
