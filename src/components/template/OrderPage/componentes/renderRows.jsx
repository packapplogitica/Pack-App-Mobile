
import Link from "next/link";
import { useRouter } from "next/router";
import { Badge, } from "@mantine/core";
import useStyles from "../orderPage.style";
import { formatAmount } from "@/libs/utils";
import { useDate } from "@/hooks/useDate";
import { cancelOffer } from "../utils/orderActions";

export const getFilteredAndSortedElements = ({ applications, orderCriteria, currentPage, itemsPerPage, searchQuery }) => {
  const filteredElements = applications?.filter(
    (element) =>
      element.id.toString().includes(searchQuery) ||
      element.order.nameSender
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      element.order.cityAddressee
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      element.order.citySender
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      element.order.provinceAddressee
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      element.order.provinceSender
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  let sortedElements = [...filteredElements];
  if (orderCriteria) {
    switch (orderCriteria) {
      case "De mayor a menor":
        sortedElements.sort((a, b) => b.id - a.id);
        break;
      case "De menor a mayor":
        sortedElements.sort((a, b) => a.id - b.id);
        break;
      case "Más recientes":
        sortedElements.sort(
          (a, b) => new Date(b.outDate) - new Date(a.outDate)
        );
        break;
      case "Mas antiguas":
        sortedElements.sort(
          (a, b) => new Date(a.outDate) - new Date(b.outDate)
        );
        break;
      case "Alfabeticamente de la A - Z":
        sortedElements.sort((a, b) =>
          a.order.citySender.localeCompare(b.order.citySender)
        );
        break;
      case "Alfabeticamente de la Z - A":
        sortedElements.sort((a, b) =>
          b.order.citySender.localeCompare(a.order.citySender)
        );
        break;
      case "Solicitado":
        sortedElements = sortedElements.filter(
          (element) => element.order.status === "Solicitado"
        );
        break;
      case "Oferta Aceptada":
        sortedElements = sortedElements.filter(
          (element) => element.order.status === "Oferta Aceptada"
        );
        break;
      case "Entregado":
        sortedElements = sortedElements.filter(
          (element) => element.order.status === "Entregado"
        );
        break;
      case "Inactivo":
        sortedElements = sortedElements.filter( 
          (element) => element.order.status === "Paquete Cancelado"
        );
        break;
      case "En camino a camino":
        sortedElements = sortedElements.filter(
          (element) => element.status === "En camino a origen"  ||  element.status === "En camino a destino"
        );
        break;
      case "Todos los estados":
        sortedElements = applications;
        break;
      default:
        break;
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  return sortedElements.slice(startIndex, startIndex + itemsPerPage);
};

const statusColor = (status) => {
  console.log('el status',status)
  switch (status) {
    case "Solicitado":
      return "#blue";
    case "Con oferta":
      return "#5ab3fd";
    case "Oferta aceptada":
      return "green";
    case "En camino a origen":
      return "#c1c148";
    case "En camino a destino":
      return "orange";
    case "Inactivo":
      return "red";
    case "Entregado":
      return "#1b530c";
    case "Paquete Cancelado":
      return "red";
    default:
      return "red";
  }
};

const OfferRow = ({ element, setLoading }) => {
  const { dateFormatter } = useDate();
  const router = useRouter();
  const { classes } = useStyles();

  console.log('el elemento',element)
  const handleSelectClick = (event) => {
    event.stopPropagation();
  };


  const handleSelectChange = async (event, offer) => {
    const selectedValue = event.target.value;
    if (selectedValue === "cancel") {
      await cancelOffer(offer, setLoading, router);
    }
  };

  return (
    <tr key={element.id} className={classes.tr} onClick={() => router.push(`/oferta/${element.id}`)}>
      <td>
        <select defaultValue="" onClick={handleSelectClick} onChange={(e) => handleSelectChange(e, element)}>
          <option value="" disabled>Selecciona una opción</option>
          <option value="cancel">Cancelar Oferta</option>
        </select>
      </td>
      <td>{`#${element.id}`}</td>
      <td>{element.order.typeOrder?? dateFormatter(element.outDate)}</td>
      <td>{element.order.nameSender}</td>
      <td>{`${element.order.citySender}, ${element.order.provinceSender}`}</td>
      <td>{`${element.order.cityAddressee}, ${element.order.provinceAddressee}`}</td>
      <td>{formatAmount(element.budget)}</td>
      <td>
        <Badge variant="filled" fullWidth color={statusColor(element.order.status)} radius="sm">
          {element.offerCanceled ? "Oferta Cancelada" : element.offerExpired ? "Oferta Expirada" : element.order.status}
        </Badge>
      </td>
    </tr>
  );
};




export const renderRows = (params) => {
  const filteredElements = getFilteredAndSortedElements(params);
  if (filteredElements.length === 0) {
    return (
      <tr>
        <td colSpan="6">
          No se encontraron resultados. Hacé una oferta haciendo click{" "}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: params.theme.colors.orangePrimary[6],
              fontWeight: 400,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            acá
          </Link>
          .
        </td>
      </tr>

    );
  } else {
    return filteredElements.map((element) => (
      <OfferRow key={element.id} element={element} setLoading={params.setLoading} />
    ));
  }
};