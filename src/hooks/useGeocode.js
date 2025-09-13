import { useState, useRef, useCallback } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

export const useGeocode = (apikey) => {

    // const [originData, setOriginData] = useState({});
    // const [destinationData, setDestinationData] = useState({});

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apikey,
        libraries,
    });

    const autocompleteRef = useRef(null);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const onLoad = useCallback((autocomplete) => {
        autocompleteRef.current = autocomplete;
    }, []);

    const onPlaceChanged = useCallback(() => {
        const place = autocompleteRef.current.getPlace();
        setSelectedPlace(place);
    }, []);

    return {
        // originData,
        // setOriginData,
        // destinationData,
        // setDestinationData,
        isLoaded,
        loadError,
        onLoad,
        onPlaceChanged,
        selectedPlace,
    }
}