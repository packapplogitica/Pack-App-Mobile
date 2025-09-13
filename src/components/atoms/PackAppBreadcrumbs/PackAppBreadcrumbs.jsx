import { Breadcrumbs } from "@mantine/core";
import useStyles from "./packAppBreadcrumbs.style";

export const PackAppBreadcrumbs = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Breadcrumbs
      separator=">"
      classNames={{
        root: classes.root,
        separator: classes.separator,
      }}
    >
      {children}
    </Breadcrumbs>
  );
};
