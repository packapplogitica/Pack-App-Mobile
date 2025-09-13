import TripsForm from "./TripsForm/TripsForm";
import MyTripsList from "./MyTripsList/MyTripsList";
import { DatesProvider } from "@mantine/dates";
import 'dayjs/locale/es';

export const MyTrips = ({ profile }) => {
  return (
    <>
      <DatesProvider settings={{ locale: "es" }}>
        <TripsForm profile={profile?.current} token={profile?.token} />
      </DatesProvider>
      <MyTripsList profile={profile?.current}  token={profile?.token}/>
    </>
  );
};
