import { HeroHome } from "@/components/organisms";
import { MapsLocation } from "@/components/organisms/MapsLocation/MapsLocation";
import PackDetail from "@/components/template/PackDetail/PackDetail";
import { getSession } from "next-auth/react";

const LocationMaps = ({ coords }) => {
  return (
    <>
      <MapsLocation coords={coords}/>
    </>
  );
};

// export async function getServerSideProps(context) {
//   const latEntrega = context.query.latEntrega
//   const lngEntrega = context.query.lngEntrega
//   const latDestino =context.query.latDestino
//   const longDestino =context.query.longDestino



//   const coords = {
//     latEntrega,
//     lngEntrega,
//     latDestino,
//     longDestino
//   }
  
//   return {
//     props: {
//       coords,
//     },
//   };
// }

export default LocationMaps;
