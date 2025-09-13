import axios from "axios";

export const useLocation = () => {
  const getProvinces = async () => {
    try {
      const response = await axios.get(
        `https://apis.datos.gob.ar/georef/api/provincias`
      );

      return response.data.provincias
        .filter((prov) => prov.id !== "02")
        .map((prov) => ({
          value: prov.id,
          label: prov.id === "94" ? "Tierra del Fuego" : prov.nombre,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };
  
  const getCities = async (provinceId) => {
    try {
      const response = await axios.get(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinceId}&campos=id,nombre&max=1000`
      );

      const cities = response.data.municipios.map((city) => ({
        value: city.id,
        label: city.nombre,
      }));

      if (provinceId === "06") {
        cities.push({
          value: "02",
          label: "Ciudad Autónoma de Buenos Aires",
        });
      }

      if (provinceId === "78") {
        const staCruzCities = [
          { value: "01", label: "Río Gallegos" },
          { value: "02", label: "Puerto Deseado" },
          { value: "03", label: "Caleta Olivia" },
          { value: "04", label: "Pico Truncado" },
          { value: "05", label: "Las Heras" },
          { value: "06", label: "Perito Moreno" },
          { value: "07", label: "Los Antiguos" },
          { value: "08", label: "Puerto San Julián" },
          { value: "09", label: "Gobernador Gregores" },
          { value: "10", label: "Comandante L. Piedra Buena" },
          { value: "11", label: "Puerto Santa Cruz" },
          { value: "12", label: "El Chaltén" },
          { value: "13", label: "El Calafate" },
          { value: "14", label: "Río Turbio" },
          { value: "15", label: "28 de Noviembre" },
        ];
        cities.push(...staCruzCities);
      }

      if (provinceId === "86") {
        const stgoEsteroCities = [
          { value: "1", label: "Añatuya" },
          { value: "2", label: "Bandera" },
          { value: "3", label: "Beltrán" },
          { value: "4", label: "Campo Gallo" },
          { value: "5", label: "Clodomira" },
          { value: "6", label: "Colonia Dora" },
          { value: "7", label: "Fernández" },
          { value: "8", label: "Frías" },
          { value: "9", label: "Ingeniero Forres" },
          { value: "10", label: "La Banda" },
          { value: "11", label: "Loreto" },
          { value: "12", label: "Los Juríes" },
          { value: "13", label: "Los Telares" },
          { value: "14", label: "Monte Quemado" },
          { value: "15", label: "Nueva Esperanza" },
          { value: "16", label: "Pampa de los Guanacos" },
          { value: "17", label: "Pinto" },
          { value: "18", label: "Pozo Hondo" },
          { value: "19", label: "Quimilí" },
          { value: "20", label: "San Pedro de Guasayán" },
          { value: "21", label: "Santiago del Estero" },
          { value: "22", label: "Selva" },
          { value: "23", label: "Sumampa" },
          { value: "24", label: "Suncho Corral" },
          { value: "25", label: "Termas de Río Hondo" },
          { value: "26", label: "Tintina" },
          { value: "27", label: "Villa Atamisqui" },
          { value: "28", label: "Villa Ojo de Agua" },
        ];

        cities.push(...stgoEsteroCities);
      }

      return cities;
    } catch (error) {
      console.log("Error fetching cities:", error);
    }
  };

  return { getProvinces, getCities };
};
