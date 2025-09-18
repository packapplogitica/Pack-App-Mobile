import Link from "next/link";
import { useRouter } from "next/router";
import { Badge, } from "@mantine/core";
import { useDate } from "@/hooks/useDate";

export const getFilteredAndSortedElements = ({ orders, orderCriteria, currentPage, itemsPerPage, searchQuery }) => {
    // Aplicar búsqueda
    const filteredElements = orders.length > 0?  orders?.filter(
        (element) =>
            element.id.toString().includes(searchQuery) ||
            element.nameAddressee
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            element.lastNameAddressee
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            element.cityAddressee
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            element.citySender.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.provinceAddressee
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            element.provinceSender.toLowerCase().includes(searchQuery.toLowerCase())
    ): [];

    // Aplicar ordenación si hay un criterio definido
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
                sortedElements.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                break;
            case "Mas antiguas":
                sortedElements.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
                break;
            case "Alfabeticamente de la A - Z":
                sortedElements.sort((a, b) => a.destino.localeCompare(b.destino));
                break;
            case "Alfabeticamente de la Z - A":
                sortedElements.sort((a, b) => b.destino.localeCompare(a.destino));
                break;
            case "Solicitado":
                sortedElements = sortedElements.filter(
                    (element) => element.status === "Solicitado"
                );
                break;
            case "Con oferta":
                sortedElements = sortedElements.filter(
                    (element) => element.status === "Con oferta"
                );
                break;
            case "En camino":
                sortedElements = sortedElements.filter(
                    (element) => element.status === "En camino a origen"  ||  element.status === "En camino a destino"
                );
                break;
            case "Entregado":
                sortedElements = sortedElements.filter(
                    (element) => element.status === "Entregado"
                );
                break;
            case "Inactivo":
                sortedElements = sortedElements.filter(
                    (element) => element.status === "Paquete Cancelado"
                );
                break;
            case "Todos los estados":
                sortedElements = orders;
                break;
            default:
                break;
        }
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedElements.slice(startIndex, startIndex + itemsPerPage);
};

const statusColor = (status) => {
    console.log(status)
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
            return "";
    }
};

// Función para renderizar las filas de la tabla
export const renderRows = (params) => {
    const { formatCustomDateOrders } = useDate();
    const sortedElements = getFilteredAndSortedElements(params);
      const router = useRouter();

    if (sortedElements.length === 0) {
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
        return sortedElements.map((element) => (
            <tr
                key={element.id}
                className={params.classes.tr}
                onClick={(e) => router.push(`/paquete/${element.id}`)}
            >
                <td>{`#${element.id}`} </td>
                <td>{formatCustomDateOrders(element.createdAt) ?? "Sin Fecha"}</td>
                <td>{element.nameAddressee + " " + element.lastNameAddressee}</td>
                <td>{`${element.citySender}, ${element.provinceSender}`}</td>
                <td>{`${element.cityAddressee}, ${element.provinceAddressee}`}</td>
                {/* <td>{element.price}</td> */}
                <td>
                    {/* <div style={{backgroundColor:statusColor(element.status)}}> */}
                    <Badge
                        variant={"filled"}
                        fullWidth
                        color='none'
                        style={{ backgroundColor: statusColor(element.status) }}
                        radius={"sm"}
                    >
                        {element.status}
                    </Badge>
                    {/* </div> */}

                </td>
            </tr>
        ));
    }
};