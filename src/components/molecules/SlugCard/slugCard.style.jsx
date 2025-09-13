import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    title: {
      fontSize: theme.fontSizes.h6[0],
      fontWeight: "bold",
      color: theme.colors.grey[6],
    },
    content: {
      padding: `${theme.spacing.xs}px `,
      lineHeight: "20px",
    },
    control: {
      gap: 0,
      padding: `${theme.spacing.tiny}px 0`,
      "&:hover": {
        background: theme.colors.orangePrimary[6],
        color: "#fff",
        svg: {
          path: {
            fill: "#fff",
          },
        },
      },
    },
    item: {
      border: 0,
      marginBottom: 8,
    },
    label: {
      padding: `${theme.spacing.tiny}px `,
      lineHeight: "20px",
    },
    chevron: {
      "&[data-rotate]": {
        transform: "rotate(90deg)",
      },
    },
  };
});

const SlugCardStyle = (params) => useStyles(params);

export default SlugCardStyle;
