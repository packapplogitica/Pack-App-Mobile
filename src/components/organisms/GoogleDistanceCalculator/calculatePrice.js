import { showNotification } from "../ShowNotification/ShowNotification";

const notificationStylees = (theme) => ({
  root: {
    borderRadius: 8,
  },

  title: {
    color: "black.0",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "24px",
  },
  description: { fontSize: 16, fontWeight: 300, lineHeight: "19px" },
  icon: {
    width: 50,
    height: 50,
    svg: {
      width: "100%",
      height: "100%",
    },
  },
});
// Constants for volume ranges
const VOLUME_RANGES = {
  SMALL: { min: 0, max: 0.02799 },
  MEDIUM: { min: 0.028, max: 0.06499 },
  LARGE: { min: 0.065, max: 1.2599 },
  EXTRA_LARGE: { min: 1.26, max: 1.699 },
  MEGA_LOAD: { min: 1.699, max: 2.0 },
};

// Price matrix for each package type and distance range
const PACKAGE_PRICES = {
  small: {
    "0-10.99": 3000,
    "11-20.99": 4900,
    "21-30.99": 5500,
    "31-711.99": 8000,
    "712-900.99": 11000,
    "901-1399": 14000, // Fixed typo: was 140000
    "1400+": 3000, // Added minimum price for distances beyond range
  },
  medium: {
    "0-10.99": 3600,
    "11-20.99": 5880,
    "21-30.99": 6600,
    "31-711.99": 9600,
    "712-900.99": 13200,
    "901-1399": 16800,
    "1400+": 3600, // Added minimum price for distances beyond range
  },
  large: {
    "0-10.99": 4500,
    "11-20.99": 7350,
    "21-30.99": 8250,
    "31-711.99": 12000,
    "712-900.99": 16500,
    "901-1399": 21000,
    "1400+": 4500, // Added minimum price for distances beyond range
  },
  extraLarge: {
    "0-10.99": 6000,
    "11-20.99": 9800,
    "21-30.99": 11000,
    "31-711.99": 16000,
    "712-900.99": 22000,
    "901-1399": 28000,
    "1400+": 6000, // Added minimum price for distances beyond range
  },
  megaLoad: {
    "0-10.99": 7500,
    "11-20.99": 12250,
    "21-30.99": 13750,
    "31-711.99": 20000,
    "712-900.99": 27500,
    "901-1399": 35000,
    "1400+": 7500, // Added minimum price for distances beyond range
  },
};

/**
 * Determines the package type based on volume
 * @param {number} volume - Volume in cubic meters
 * @returns {string} Package type
 */
const determinePackageType = (volume) => {
  if (volume <= VOLUME_RANGES.SMALL.max) return "small";
  if (volume <= VOLUME_RANGES.MEDIUM.max) return "medium";
  if (volume <= VOLUME_RANGES.LARGE.max) return "large";
  if (volume <= VOLUME_RANGES.EXTRA_LARGE.max) return "extraLarge";
  if (volume <= VOLUME_RANGES.MEGA_LOAD.max) return "megaLoad";
  throw new Error("Volume exceeds maximum package size");
};

/**
 * Determines the price range based on distance
 * @param {number} distanceKm - Distance in kilometers
 * @returns {string} Price range key
 */
const determineDistanceRange = (distanceKm) => {
  if (distanceKm < 0) throw new Error("Distance cannot be negative");
  if (distanceKm <= 10.99) return "0-10.99";
  if (distanceKm <= 20.99) return "11-20.99";
  if (distanceKm <= 30.99) return "21-30.99";
  if (distanceKm <= 711.99) return "31-711.99";
  if (distanceKm <= 900.99) return "712-900.99";
  if (distanceKm <= 1399) return "901-1399";
  return "901-1399"; // Return minimum price range instead of throwing error
};

/**
 * Calculates shipping price based on volume and distance
 * @param {number} volume - Volume in cubic meters
 * @param {number} distanceKm - Distance in kilometers
 * @param {string} [forcePackageType] - Optional override for package type
 * @returns {string} Calculated price
 */
export const calculatePrice = (
  orders,
  volume,
  distanceKm,
  forcePackageType = null,
  setDistanceMaxPassed
) => {
  if (isNaN(distanceKm)) return "No hay ruta disponible";
  // if (!volume || !distanceKm) return 0;

  const distance = distanceKm / 1000;

  // Operar sobre los tipos de paquete y sus distancias
  if (forcePackageType === "express" && distance > 25) {
    return "La distancia no puede superar los 25 km";
  }

  if (forcePackageType === "paqueteria" && distance > 1100) {
    return "La distancia no puede superar los 1100 km";
  }

  try {
    let packageType = forcePackageType;
    let price;

    if (forcePackageType === "custom") {
      packageType = determinePackageType(volume / 1000000);
    }

    // const distanceRange = determineDistanceRange(distanceKm / 1000);
    //   Empezar la lagoica aqui

    if (forcePackageType === "express") {
      console.log("Entra en primer first");
      price = calcularTarifa(distance, setDistanceMaxPassed);
    } else {
      console.log("Entra en segundo");
      price = calcularTarifaFinal(
        distance,
        orders.packages[0].width,
        orders.packages[0].length,
        orders.packages[0].height,
        orders.packages.length
      );
    }

    return price;
  } catch (error) {
    console.log("el error", error);
    return "El paquete no es posible cotizar";
  }
};

function calcularTarifa(distanciaKm, setDistanceMaxPassed) {
  const tarifaMinima = 800;
  const tarifaMaxima = 9000;
  const kmMaximo = 25;

  if (distanciaKm <= 0) {
    return tarifaMinima;
  }

  if (distanciaKm >= kmMaximo) {
    setDistanceMaxPassed(false);
    return tarifaMaxima;
  }

  setDistanceMaxPassed(false);

  // Tarifa flotante entre 0 y 25 km
  const incrementoPorKm = (tarifaMaxima - tarifaMinima) / kmMaximo;
  return parseFloat(
    (tarifaMinima + distanciaKm * incrementoPorKm).toFixed(2)
  );
}


function calcularTarifaFinal(
  distanciaKm,
  anchoCm,
  altoCm,
  profundoCm,
  cantidad
) {
  try {
    // 1. Calcular volumen y peso volumétrico
    const volumenCm3 = anchoCm * altoCm * profundoCm;
    const pesoVolumetricoKg = volumenCm3 / 5000;

    // 2. Calcular tarifa base
    let tarifaBase;
    if (pesoVolumetricoKg <= 5.4) {
      tarifaBase = 13000;
    } else if (pesoVolumetricoKg >= 25) {
      tarifaBase = 25000;
    } else {
      tarifaBase =
        13000 + (pesoVolumetricoKg - 5.4) * ((25000 - 13000) / (25 - 5.4));
    }

    // 3. Descuento por cantidad
    let descuento = 1;
    if (cantidad <= 1) descuento = 1;
    else if (cantidad <= 4) descuento = 0.7;
    else if (cantidad <= 6) descuento = 0.65;
    else if (cantidad <= 8) descuento = 0.6;
    else if (cantidad <= 9) descuento = 0.53;
    else if (cantidad <= 10) descuento = 0.5;
    else if (cantidad <= 12) descuento = 0.47;
    else if (cantidad <= 14) descuento = 0.44;
    else if (cantidad <= 16) descuento = 0.42;
    else if (cantidad <= 18) descuento = 0.4;
    else if (cantidad <= 24) descuento = 0.35;

    // 4. Tarifa base final
    const tarifaBaseFinal = cantidad * tarifaBase * descuento;

    // 5. Coeficiente por distancia
    let coefDistancia = 1;
    if (distanciaKm <= 15) coefDistancia = 0.2;
    else if (distanciaKm <= 50) coefDistancia = 0.3;
    else if (distanciaKm <= 150) coefDistancia = 0.5;
    else if (distanciaKm <= 250) coefDistancia = 0.65;
    else if (distanciaKm <= 400) coefDistancia = 0.7;
    else if (distanciaKm <= 600) coefDistancia = 0.8;
    else if (distanciaKm <= 800) coefDistancia = 0.9;
    else if (distanciaKm <= 1000) coefDistancia = 1;

    // 6. Tarifa final
    const tarifaFinal = Math.max(3500, tarifaBaseFinal * coefDistancia);

    // 7. Retornar resultado detallado
    return tarifaFinal.toFixed(2);
  } catch (error) {
    console.error("el error", error);
  }
}
