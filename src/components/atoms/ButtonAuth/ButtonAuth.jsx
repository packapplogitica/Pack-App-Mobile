import { useSessionProvider } from "../../../context/SessionProvider";
import { theme } from "@/libs/theme";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ButtonAuth() {
  const { data, status } = useSession();
  const {logout} = useSessionProvider()
  const session =data.user
  const router = useRouter();

  if (session) {
    return (
      <>
        <Link href="/perfil">{session?.firstName}</Link>
        <Button
          onClick={() => {
            logout({
              redirect: false,
            });
            notifications.show({
              title: "Sesión cerrada",
              message: "Cierre de Sesión exitoso!",
              icon: <IconCheck />,
              onClose: 500,
            });
            router.push("/");
          }}
          color="orange"
        >
          Log Out
        </Button>
      </>
    );
  }
  return (
    <ul>
      <li>
        <Link href="/signin">Login</Link>
      </li>
      <li>
        <Link href="/registration">Register</Link>
      </li>
    </ul>
  );
}
