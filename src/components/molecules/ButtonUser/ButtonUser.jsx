import { useSession } from "next-auth/react";
import { DropDownMenu } from "..";
import useStyles from "./buttonUser.style";
import Icons from "@/icons";
import { Flex, MediaQuery } from "@mantine/core";
import { useState } from "react";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const ButtonUser = ({ item, itemMobile ,session}) => {

  const { classes } = useStyles();
console.log('la sessison',session)

  return (
    <DropDownMenu
      data={item}
      userName={session?.profile.firstName}
      itemMobile={itemMobile}
    >
      <Flex align="center" gap={20} className={classes.root} p={10}>
        {session?.profile.firstName} {<UserAvatar firstName={session?.profile.firstName} lastName={session?.profile.lastName}/>}
        {Icons.arrowRD}
      </Flex>
    </DropDownMenu>
  );
};
