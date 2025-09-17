
import { UbicationDetail } from "@/components/organisms/UbicationDetail/UbicationDetail";
import { getSession } from "next-auth/react";

const LocationMaps = ({ coords }) => {
  return (
    <>
    <h1>hgola</h1>
      {/* <UbicationDetail coords={coords}/> */}
    </>
  );
};

// export async function getServerSideProps(context) {
//   const latEntrega = context.query.latEntrega
//   const lngEntrega = context.query.lngEntrega

//   const coords = {
//     latEntrega,
//     lngEntrega,
//   }
  
//   return {
//     props: {
//       coords,
//     },
//   };
// }

export default LocationMaps;