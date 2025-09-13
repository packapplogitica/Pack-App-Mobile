import calculateDistance from "./calculateDistance";

const calculateDistanceFromCoordinates = async (latEntrega, longEntrega, latDestino, longDestino) => {
    // Convert input coordinates into Google Maps API format
    const pointA = { lat: parseFloat(latEntrega), lng: parseFloat(longEntrega) };
    const pointB = { lat: parseFloat(latDestino), lng: parseFloat(longDestino) };

    // Call the calculateDistance function
    try {
        const result = await calculateDistance(pointA, pointB);
        return result;
    } catch (error) {
        console.error('[Distance Debug] Error:', error.message);
        throw error;
    }
};


export default calculateDistanceFromCoordinates;
