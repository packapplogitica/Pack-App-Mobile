import { Tabs } from "@mantine/core";

import useStyles from "./profilePanel.style";
import { MyData } from "./MyData/MyData";
import { MyTransportation } from "./MyTransportation/MyTransportation";
import { MyTrips } from "./MyTrips/MyTrips";
import MyVehicles from "../MyVehicles/MyVehicles";
import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";

export default function ProfilePanel({user}) {
  console.log("desde el panel",user)
  const router = useRouter();
  const { tab } = router.query;
  const { classes } = useStyles();

  const menuData = [
    {
      title: "Mis Datos",
      value: 1,
      component: <MyData user={user} />
    },
    {
      title: "Quiero Transportar",
      value: 2,
      component: <MyTransportation  profile={user?.profile} />
    },
    {
      title: "Mis Viajes",
      value: 3,
      component: <MyTrips profile={user?.profile}/>
    },
    // {
    //   title: "Calendario",
    //   value: 4,
    // },
    // {
    //   title: "Mis Direcciones",
    //   value: 5,
    // },
  ];

  return (
    <>
      {!!menuData?.length && (
        <Tabs color="orange" defaultValue={tab === undefined ? "Mis Datos" : tab}>
          <Tabs.List grow position="left" className={classes.tabList}>
            {menuData.map((item) => (
              <Tabs.Tab value={item.title} key={item.value} className={classes.tabTab}>
                {item.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {menuData.map((item) => (
            <Tabs.Panel value={item.title} key={item.value}>
              {item.component}
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </>
  );
}
