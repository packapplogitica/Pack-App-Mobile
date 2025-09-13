import { Box, Button, Divider, List, Rating, Stack, Text } from "@mantine/core";
import useStyles from "./cardProfile.style";
import Icons from "@/icons";
import { theme } from "@/libs/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const CardProfile = ({ profile, info, offers }) => {
  const { classes, cx } = useStyles();
  // const user = data?.user;
  const router = useRouter();

  return (
    <Stack className={classes.root} spacing={theme.spacing.xxs}>
      <Stack spacing={theme.spacing.xs} justify="space-between">
        <Box>
          <UserAvatar
            firstName={profile?.firstName}
            lastName={profile?.lastName}
          />
        </Box>
        <Text className={classes.name}>
          {profile?.firstName} {profile?.lastName}
        </Text>
        <Rating readOnly defaultValue={profile.rating} />

        <Divider my="tiny" />
      </Stack>
      <Stack spacing={theme.spacing.xxs} justify="space-between" mt="tiny">
        {/* <Text className={classes.email}>{profile?.email}</Text> */}

        {info?.primaryLinks?.length && (
          <List listStyleType="none">
            {info?.primaryLinks.map((item, index) => (
              <List.Item key={index} className={classes.link}>
                <Link href={item.link}>{item.label}</Link>
              </List.Item>
            ))}
          </List>
        )}

        <Divider my="tiny" />
      </Stack>

      <Stack spacing={theme.spacing.xxs} justify="space-between">
        <Text weight={300} c={theme.colors.grey[6]}>
          {"Mas opciones"}
        </Text>

        {info?.secondaryLinks?.length && (
          <List listStyleType="none">
            {info?.secondaryLinks.map((item, index) => {
              if (item?.isButton) {
                return (
                  <List.Item
                    key={index}
                    mb="xxs"
                    className={cx(classes.link, classes.secondaryLinks)}
                  >
                    <Button
                      onClick={() => {
                        signOut({
                          redirect: false,
                        });

                        notifications.show({
                          title: "Sesión cerrada",
                          message: "Adios " + profile?.firstName,
                          icon: <IconCheck />,
                          onClose: 500,
                        });
                        router.push("/");
                      }}
                    >
                      {item.label}
                    </Button>
                  </List.Item>
                );
              }

              return (
                <List.Item
                  key={index}
                  mb="xxs"
                  className={cx(classes.link, classes.secondaryLinks)}
                >
                  <Link href={item.link}>{item.label}</Link>
                </List.Item>
              );
            })}
          </List>
        )}
      </Stack>
    </Stack>
  );
};
