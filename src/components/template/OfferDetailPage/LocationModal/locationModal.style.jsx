import { createStyles } from "@mantine/core";

const LocationModal = createStyles((theme, params) => {
  return {
    title: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "30px",
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
    maps: {
      height: "400px",
      borderRadius: 10,
    },
  };
});

export default LocationModal;
