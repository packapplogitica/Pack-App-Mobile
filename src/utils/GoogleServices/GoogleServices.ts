import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface OriginChangedParams {
    originRef: MutableRefObject<any>;
    fetchGeocodeTypping: (address: string, flag: boolean) => void;
    setOriginMarker: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
    secondForm: any;
    setIsValidOrigin: Dispatch<SetStateAction<boolean>>;
}

interface FetchGeocodeParams {
    setOrigin?: Dispatch<SetStateAction<any>>;
    setDestination?: Dispatch<SetStateAction<any>>;
    setIsValidOrigin?: Dispatch<SetStateAction<boolean>>;
    setIsValidDestination?: Dispatch<SetStateAction<boolean>>;
    setFormatedOriginAddress?: Dispatch<SetStateAction<string>>;
    setFormatedDestinationAddress?: Dispatch<SetStateAction<string>>;
    secondForm: any;
    address:string,
    isOrigin:boolean
}

const addressFormater = (address:any) :string => {
    /* 
  Formatea el objeto recibido en address_components
  types lo pasa como propiedad
  el valor long_name como el valor de cada type
*/
    const result = {};
    address.forEach((item:any) => {
        const propertyName = item.types[0];
        result[propertyName] = item.long_name;
    });
    return result as string;
};

export const geocodeTyping =
    ({
        setOrigin,
        setDestination,
        setIsValidOrigin,
        setIsValidDestination,
        setFormatedOriginAddress,
        setFormatedDestinationAddress,
        secondForm,
    }: FetchGeocodeParams) =>
    (address: string, isOrigin: boolean = false) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK") {
                const formattedAddress = results[0].formatted_address;

                if (isOrigin) {
                    setOrigin({
                        addres: formattedAddress,
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng(),
                    });
                    secondForm.setFieldValue("direccionEntrega", formattedAddress);
                    setFormatedOriginAddress(addressFormater(results[0].address_components));
                    formattedAddress && setIsValidOrigin(true);
                } else {
                    setFormatedDestinationAddress(addressFormater(results[0].address_components));
                    formattedAddress && setIsValidDestination(true);
                    secondForm.setFieldValue("direccionDestino", formattedAddress);
                    setDestination({
                        addres: formattedAddress,
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng(),
                    });
                }
            } else {
                console.error("Geocode was not successful for the following reason: " + status);
            }
        });
    };



    export const fetchGeocodeConfigured =
    ({
        setOrigin,
        setDestination,
        setIsValidOrigin,
        setIsValidDestination,
        setFormatedOriginAddress,
        setFormatedDestinationAddress,
        secondForm,
    }: FetchGeocodeParams) =>
    (location: { lat: number; lng: number }, isOrigin: boolean) => {
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ location: location }, (results, status) => {
            if (status === "OK") {
                const address = results[0].formatted_address;

                if (isOrigin) {
                    secondForm.setFieldValue("direccionEntrega", address);
                    setOrigin({
                        addres: address,
                        lat: location.lat,
                        lng: location.lng,
                    });
                    setFormatedOriginAddress(addressFormater(results[0].address_components));
                    address && setIsValidOrigin(true);
                } else {
                    setFormatedDestinationAddress(addressFormater(results[0].address_components));
                    address && setIsValidDestination(true);
                    secondForm.setFieldValue("direccionDestino", address);
                    setDestination({
                        addres: address,
                        lat: location.lat,
                        lng: location.lng,
                    });
                }
            } else {
                console.error("Geocode was not successful for the following reason: " + status);
            }
        });
    };


export const originChanged = ({
    originRef,
    fetchGeocodeTypping,
    setOriginMarker,
    secondForm,
    setIsValidOrigin,
}: OriginChangedParams) => {
    return () => {
        if (originRef.current) {
            const place = originRef.current.getPlace();
            if (place && place.formatted_address) {
                fetchGeocodeTypping(place?.formatted_address || "", true);
                setOriginMarker({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                });
                secondForm.setFieldValue(
                    "direccionEntrega",
                    place.formatted_address
                );
                setIsValidOrigin(true);
            } else {
                setIsValidOrigin(false);
            }
        } else {
            // Si no hay referencia actual, consideramos la dirección inválida
            setIsValidOrigin(false);
        }
        // console.log("Dirección:", isValid, place.formatted_address);
    };
};


export const destinationChanged = ({
    destinationRef,
    fetchGeocodeTypping,
    setFormatedDestinationAddress,
    secondForm,
    setIsValidDestination,
    setDestinationMarker,
}: any) => {
    return () => {
        if (destinationRef.current) {
            const place = destinationRef.current.getPlace();
            if (place && place.formatted_address) {
                setFormatedDestinationAddress(
                    addressFormater(place?.address_components)
                );
                fetchGeocodeTypping(place?.formatted_address || "");
                setDestinationMarker({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                });
                setIsValidDestination(true);
                secondForm.setFieldValue(
                    "direccionDestino",
                    place.formatted_address
                );
            } else {
                setIsValidDestination(false);
            }
        }
    }
};