import { Anchor, Button, Collapse, List, Menu } from "@mantine/core";
import useStyles from "./dropDownMenu.style";
import { Fragment, useEffect, useState } from "react";
import Icons from "@/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { signOut } from "next-auth/react";
import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

export const DropDownMenu = ({
  data,
  children,
  userName,
  itemMobile,
  ...others
}) => {
  const router = useRouter();
  const landingPage = router.pathname === "/nosotros";
  const { classes, cx } = useStyles({ landingPage });

  const [opened, { toggle }] = useDisclosure(false);

  const DropDownDekstop = () => (
    <div className={classes.menu}>
      <Menu
        position="bottom-end"
        transitionProps={500}
        width={300}
        radius={5}
        offset={0}
        trigger="hover"
      >
        <Menu.Target>
          <button className={classes.services} {...others}>
            {children}
          </button>
        </Menu.Target>

        {data?.length && (
          <Menu.Dropdown mt={10} className={classes.dropDown} p="xxs">
            {data?.map((item, index) => {
              if (item.isButton) {
                return (
                  <Menu.Item
                    key={index}
                    component="button"
                    className={classes.item}
                    onClick={() => {
                      signOut({
                        redirect: false,
                        
                      });

                      notifications.show({
                        title: "Sesión cerrada",
                        message: "Adios " + userName,
                        icon: <IconCheck />,
                        onClose: 500,
                      });
                      router.push('/signin')
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item
                  key={index}
                  component={Link}
                  href={item.link}
                  className={classes.item}
                >
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        )}
      </Menu>
    </div>
  );

  const DropDownMobile = () => (
    <div className={classes.mobile}>
      <button className={classes.services} onClick={toggle} {...others}>
        {children}
      </button>
      <Collapse
        in={opened}
        transitionDuration={500}
        className={classes.mobileContent}
      >
        <List listStyleType="none">
          {data?.map((item, index) => (
            <List.Item key={index} my={10}>
              {item.isButton ? (
                <button
                  variant="filled"
                  size="md"
                  // defaultRadius
                  onClick={() => {
                    signOut({
                      redirect: false,
                    });

                    notifications.show({
                      title: "Sesión cerrada",
                      message: "Adios " + userName,
                      icon: <IconCheck />,
                      onClose: 500,
                    });
                    router.push("/");
                  }}
                >
                  {item.isButton && item.label}
                </button>
              ) : (
                <Anchor href={item.link}>{item.label}</Anchor>
              )}
            </List.Item>
          ))}
        </List>
      </Collapse>
    </div>
  );

  return (
    <>
      <DropDownDekstop />
      <DropDownMobile />
    </>
  );
};
