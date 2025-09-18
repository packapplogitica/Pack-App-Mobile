import { PaddingBox } from "@/components/atoms";
import useStyles from "./orderConfirmationSession.style";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  MediaQuery,
  Pagination,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState, useEffect } from "react";

import { SidebarCategory } from "..";
import { CardOrder } from "@/components/molecules";
// Child components
import { StepsContainer } from "./StepsContainer/StepsContainer";
import { FreightSearchHub } from "./FreightSearchHub/FreightSearchHub";

import { useRouter } from "next/router";

export const OrderConfirmationSession = ({
  sortedItems,
  categories,
  packages,
  total,
  selectedPackageId,
  session
}) => {
  const [packs, setPacks] = useState([]);
  const [locationsInfo, setLocationsInfo] = useState([]);

  useEffect(() => {
    if (packages) {
      setPacks(packages);

      const result = [];
      // Agrupar por citySender y provinceSender
      packages.forEach(
        ({ citySender, provinceSender, cityAddressee, provinceAddressee }) => {
          // Buscar si ya existe un objeto con este sender
          let senderGroup = result.find(
            (item) =>
              item.citySender === citySender &&
              item.provinceSender === provinceSender
          );

          if (!senderGroup) {
            // Si no existe, crear uno nuevo
            senderGroup = {
              citySender,
              provinceSender,
              addressees: [],
            };
            result.push(senderGroup);
          }

          // Verificar si el addressee ya está incluido
          const addresseeExists = senderGroup.addressees.some(
            (addressee) =>
              addressee.cityAddressee === cityAddressee &&
              addressee.provinceAddressee === provinceAddressee
          );

          if (!addresseeExists) {
            // Agregar el addressee único
            senderGroup.addressees.push({ cityAddressee, provinceAddressee });
          }
        }
      );
      setLocationsInfo(result);
    } else {
      setPacks([]);
    }
  }, [packages]);

  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: newPage,
        limit,
      },
    });
  };

  const [filterSelected, setFilterSelected] = useState("todos");
  const [orderedBy, setOrderedBy] = useState("new");
  const { page = 1, limit = 50 } = router.query;

  const totalPages = Math.ceil(total / limit);

  const [originData, setOriginData] = useState({});
  const [destinationData, setDestinationData] = useState({});

  const [step, setStep] = useState(1);
  const { classes, cx, theme } = useStyles({ step });
  const steps = [
    { content: "Descubrir envios", value: 1 },
    // {
    //   content: "Quiero transportar con Packapp",
    //   value: 2,
    // },
  ];
  const getSearchedElements = () => {
    const elements = packs;
    // Busqueda
    let searchElements = [...elements];
    // Busqueda por origen y por destino
    if (originData.province && destinationData.province) {
      searchElements = searchElements.filter(
        (pkg) =>
          pkg?.provinceSender?.includes(originData.province) &&
          pkg?.provinceAddressee?.includes(destinationData.province)
      );

      if (originData.city && destinationData.city) {
        const fullMatch = searchElements.filter(
          (pkg) =>
            pkg.citySender === originData.city &&
            pkg.cityAddressee === destinationData.city
        );
        const partialMatch = searchElements.filter(
          (pkg) =>
            pkg.citySender === originData.city ||
            pkg.cityAddressee === destinationData.city
        );

        const filteredPartialMatch = partialMatch.filter(
          (pkg) =>
            !fullMatch.some(
              (fullPkg) =>
                fullPkg.citySender === pkg.citySender &&
                fullPkg.cityAddressee === pkg.cityAddressee
            )
        );
        searchElements = [...fullMatch, ...filteredPartialMatch];
      }
    }
    return searchElements;
  }

  const getFilteredAndSortedElements = () => {
    // Filtros
    let filteredElements = getSearchedElements();
    if (filterSelected) {
      switch (filterSelected) {
        case "envios-urgentes":
          filteredElements = filteredElements.filter((item) => item.isUrgent);
          break;
        case "fragil":
          filteredElements = filteredElements.filter((item) => item.isFragil);
          break;
        case "no-fragil":
          filteredElements = filteredElements.filter((item) => !item.isFragil);
          break;
        case "envelope":
          filteredElements = filteredElements.filter(
            (item) => item.clase === "envelope"
          );
          break;
        case "grandes":
          filteredElements = filteredElements.filter(
            (item) => item.clase === "large"
          );
          break;
        case "medianos":
          filteredElements = filteredElements.filter(
            (item) => item.clase === "medium"
          );
          break;
        case "pequenos":
          filteredElements = filteredElements.filter(
            (item) => item.clase === "small"
          );
          break;
        case "custom":
          filteredElements = filteredElements.filter(
            (item) => item.clase === "custom"
          );
          break;
        case "reload":
          setFilterSelected("todos");
          setOrderedBy("new");
          setOriginData({});
          setDestinationData({});
          filteredElements = packs;
          break;
        default:
          break;
      }
    }

    // Orden
    let sortedElements = [...filteredElements];
    if (orderedBy) {
      switch (orderedBy) {
        case "old":
          sortedElements = sortedElements.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        case "new":
          sortedElements = sortedElements.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        default:
          break;
      }
    }

    return sortedElements;
  };

  const renderCards = () => {
    const elements = getFilteredAndSortedElements();

    if (!elements || elements.length === 0) {
      return (
        <Text size={30} weight={400}>
          {"No se encontraron paquetes"}
        </Text>
      );
    } else {
      return (
        <Stack spacing="xs">
          {elements?.map((item) => (
            <CardOrder 
              key={item.id} 
              item={item}
              initialOpenDetail={selectedPackageId === item.id.toString()} 
              session={session}
            />
          ))}
        </Stack>
      );
    }
  };

  return (
    <>
      <PaddingBox mt="md">
        <Container size="xxl" p={0}>
          <Stack spacing="xs">
            <Title order={2} className={classes.title} id="transporte">
              Packapp Transportistas: Optimizá tu logística
            </Title>
            <Flex justify={"space-between"}>
              <StepsContainer steps={steps} />
              <a className={classes.button} href="/perfil?tab=Mis Viajes">
                Programar un Viaje
              </a>
            </Flex>
            <Divider my="xxs" />
            <Grid>
              <MediaQuery
                smallerThan="md"
                styles={{
                  order: 2,
                  marginTop: 20,
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Grid.Col m={0} md={3} className={classes.categoryContainer}>
                  <SidebarCategory
                    sortedItems={sortedItems}
                    categories={categories}
                    setFilterSelected={setFilterSelected}
                    filterSelected={filterSelected}
                    setOrderedBy={setOrderedBy}
                  />
                </Grid.Col>
              </MediaQuery>

              <MediaQuery
                smallerThan="md"
                styles={{ order: 1, textAlign: "center" }}
              >
                <Grid.Col md={9}>
                  <FreightSearchHub
                    step={step}
                    setOriginData={setOriginData}
                    setDestinationData={setDestinationData}
                    locationsInfo={locationsInfo}
                  />
                </Grid.Col>
              </MediaQuery>
            </Grid>
          </Stack>
        </Container>
      </PaddingBox>

      <Box
        sx={(theme) => ({
          background: theme.fn.rgba(theme.colors.grey[6], 0.13),
          padding: `0`,
        })}
      >
        <Container fluid p={0}>
          <Grid
            justify="space-between"
            align="stretch"
            className={classes.cardsContainer}
          >
            <Grid.Col
              sx={(theme) => ({
                padding: 12,
                [theme.fn.smallerThan("md")]: {
                  margin: "20px 0",
                  padding: 0,
                },
              })}
              className={classes.renderContainer}
            >
              {renderCards()}
              <Pagination
                className={classes.pagination}
                total={totalPages}
                value={parseInt(page, 50)}
                onChange={handlePageChange}
                color="orange"
              ></Pagination>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
