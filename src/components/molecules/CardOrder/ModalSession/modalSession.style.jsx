import { createStyles } from "@mantine/core";

const ModalSession = createStyles((theme, params) => {
  return {
    title: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 20,
      color: 'rgba(84, 89, 94, 1)'
    },
    text: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(84, 89, 94, 0.6)'
    },
    header: {
      padding: "16px 40px",
    },
    location: {
      display: "flex",
      alignItems: "center",
      gap: 5,
    },
    urgent: {
      alignItems: "center",
      color: "red",
      display: "flex",
      fontWeight: 500,
      gap: 5,
    },
    fragile: {
      alignItems: "center",
      color: "orange",
      display: "flex",
      fontWeight: 500,
      gap: 5,
    },
  };
});

export default ModalSession;
