import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      background: theme.fn.rgba(theme.colors.grey[0], 0.3),
      padding: theme.spacing.md,
      height: "100%",
      [theme.fn.smallerThan("md")]: {
        padding: 0,
      },
    },
    profile: {
      background: "#fff",
      borderRadius: theme.spacing.tiny,
    },
  };
});

const ProfileStyle = (params) => useStyles(params);

export default ProfileStyle;
