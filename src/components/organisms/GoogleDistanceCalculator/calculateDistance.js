const calculateDistance = async (pointA, pointB) => {
    if (!pointA || !pointB) {
        return null;
    }

    if (!window.google || !window.google.maps) {
        throw new Error('Google Maps not loaded');
    }

    try {
        const service = new window.google.maps.DistanceMatrixService();
        
        const response = await new Promise((resolve, reject) => {
            service.getDistanceMatrix(
                {
                    origins: [pointA],
                    destinations: [pointB],
                    travelMode: window.google.maps.TravelMode.DRIVING,
                    unitSystem: window.google.maps.UnitSystem.METRIC,
                },
                (result, status) => {
                    if (status === 'OK') {
                        resolve(result);
                    } else {
                        reject(new Error(`Distance Matrix failed: ${status}`));
                    }
                }
            );
        });

        const route = response.rows[0]?.elements[0];
        if (!route || route.status !== 'OK') {
            throw new Error('Route not found');
        }

        const distanceStr = route.distance.text;
        
        const cleanStr = distanceStr.replace(/,/g, '');
        const distanceKm = parseFloat(cleanStr.replace(/[^\d.]/g, ''));

        const result = {
            distanceKm: route.distance.value,
            originalText: route.distance.text,
            duration: route.duration.text
        };
             console.log('el result',result)
        
        return result;

    } catch (error) {
        return 'No fue posible calcular la distancia'
    }
};

export default calculateDistance;