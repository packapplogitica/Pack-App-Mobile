import { useSessionProvider } from "../../context/SessionProvider";
import { Profile } from "../organisms";

export const ProfilePage = ({ profile, info }) => {

    const { session } = useSessionProvider()
    console.log('session',session.user)
  return <Profile user={session?.user} info={info} />;
};
