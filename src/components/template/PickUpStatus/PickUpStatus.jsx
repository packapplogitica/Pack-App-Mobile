import { useEffect, useState } from "react";
import Loader from "@/components/molecules/Loader/Loader";
// import { Link } from "react-router-dom";
import SuccessfulPurchase from "@/components/organisms/SuccessfulPurchase/SuccessfulPurchase";
import FailedPurchase from "../../organisms/FailedPurchase/FailedPurchase";
import { Flex } from "@mantine/core";


export const PickUpStatus = ( {data} ) => {
    console.log('dentro',data)
    const [params, setParams] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
          const searchParams = new URLSearchParams(window.location.search);
    
          const status = searchParams.get("status");
    
          setParams({
            status,
          });
        }
      }, []);

    return (
        <>
            {/* {params?.status === "approved" ? (
                <Flex
                    height="100vh"
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    'Has acpetado la oferta'
                </Flex>
            ) : (
                <Flex
                    height="100vh"
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    No has aceptado
                </Flex>
            )} */}
            <h2>{data.message.message ?? data.message}</h2>
        </>
    );
};