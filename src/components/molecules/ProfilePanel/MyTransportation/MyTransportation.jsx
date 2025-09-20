import VehicleForm from "../VehicleForm/VehicleForm";
import MyVehicles from "../MyVehicles/MyVehicles";


export const MyTransportation = ({ profile }) => {

  return (
    <>
      {profile.vehicles.length === 0 && <VehicleForm profile={profile} token={profile?.token} />}
      <MyVehicles vehicles={profile.vehicles} />
    </>
  );
};
