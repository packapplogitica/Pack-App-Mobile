import {
  Container,
  Grid,
  List,
  Menu,
} from "@mantine/core";
import useStyles from "./headerComponent.style";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ButtonUser } from "../../molecules/ButtonUser/ButtonUser";
import { use, useEffect } from "react";
import { useSessionProvider } from "../../../context/SessionProvider";
// import { useAuth } from "@/hooks/useAuth";
// src/components/molecules/ButtonUser/ButtonUser.jsx
export const HeaderComponent = ({ header,user}) => {
  const router = useRouter();
  const { secondaryLinks, logo, userItems } = header;
  const landingPage = router.pathname === "/nosotros";
  const { classes, cx } = useStyles({ landingPage });
  const  {data} = useSession();
  //  const { user, loading } = useAuth();
   const { session, getPreferences, } = useSessionProvider()

  // console.log('el usuarios',useAuth())
  const Logo = () => {
    return (
      <Link
        href={
          router.asPath !== "/nosotros" && router.asPath !== "/registration"
            ? "/"
            : ""
        }
      >
        <Image
          src={logo ?? null}
          alt="Logo de Pack App"
          width={150}
          height={50}
          priority 
          onClick={() => router.push('/')}
        />
      </Link>
    );
  };

  const mainSecondaryLinks = secondaryLinks?.map((item, index) => {
    return (
      <List.Item key={index}>
        <Menu.Item
          component={Link}
          href={item.link ?? "/"}
          className={cx(classes.item, {
            [classes.active]: item.link === router.pathname,
            [classes.getStared]: item.label === "Registro",
          })}
        >
          {item.label}
        </Menu.Item>
      </List.Item>
    );
  });

  const LogMenu = () => (
    <nav
      role="navigation"
      aria-label="Primary menu"
      className={classes.logMenu}
    >
      {/* <div className="ribbon">
        <span>Versión Beta</span>
      </div> */}
      {session ? (
        <List listStyleType="none" className={classes.secondaryLinks}>
          <List.Item>
            <ButtonUser item={userItems} session={session.profile} />
          </List.Item>
        </List>
      ) : (
        <List listStyleType="none" className={classes.secondaryLinks}>
          {mainSecondaryLinks}
        </List>
      )}
    </nav>
  );

  return (
    <header className={classes.header}>
      <Container p={0} m={0} size="100%">
        <Menu
          offset={0}
          width="100%"
          radius={0}
          transitionProps={{ duration: 500 }}
        >
          <Grid align="center">
            {/* Logo */}
            <Grid.Col span={4}>
              <Logo />
            </Grid.Col>
            {router.asPath !== "/nosotros" &&
              router.asPath !== "/registration" && (
                <Grid.Col span={8}>
                  <LogMenu />
                </Grid.Col>
              )}
          </Grid>
        </Menu>
      </Container>
    </header>
  );
};
