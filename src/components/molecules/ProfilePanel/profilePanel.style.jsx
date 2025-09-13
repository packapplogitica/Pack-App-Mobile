import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    title: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 32,
    },
    tabList: {
      height: "auto",
    },
    tabTab: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: "Inder",
      paddingTop: 10,
      paddingBottom: 5,
    },
    active: {
      borderRadius: 8,
      borderBottom: `5px solid #000000`,
    },
    line: {
      height: 20,
      backgroundColor: theme.fn.rgba("#606367", 0.23),
      borderRadius: 8,
    },
    form: {
      label: {
        fontWeight: 300,
        marginBottom: 4,
        fontSize: 16,
        color: "#3D4043",
      },
      input: {
        fontSize: 18,
        borderRadius: 8,
      },
    },
    label: {
      fontWeight: 300,
      marginBottom: 4,
      fontSize: 16,
      color: "#3D4043",
    },
  };
});

const ProfilePanelStyle = (params) => useStyles(params);

export default ProfilePanelStyle;
