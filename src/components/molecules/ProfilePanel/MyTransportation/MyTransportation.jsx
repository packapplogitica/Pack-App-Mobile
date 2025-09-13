import VehicleForm from "../VehicleForm/VehicleForm";
import MyVehicles from "../MyVehicles/MyVehicles";


export const MyTransportation = ({ profile }) => {

  return (
    <>
      {profile.current.vehicles.length === 0 && <VehicleForm profile={profile?.current} token={profile?.token} />}
      <MyVehicles vehicles={profile.current.vehicles} />
    </>
  );
};
