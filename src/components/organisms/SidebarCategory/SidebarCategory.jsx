import { Box, Button, Menu } from "@mantine/core";
import useStyles from "./sidebarCategory.style";

export const SidebarCategory = ({
  sortedItems,
  categories,
  setFilterSelected,
  filterSelected,
  setOrderedBy,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.buttonContainer}>
      <Menu
        className={classes.accordion}
        classNames={{
          item: classes.item,
          content: classes.content,
          control: classes.control,
          label: classes.label,
          chevron: classes.chevron,
        }}
        variant="default"
      >
        <Menu.Target className={classes.targetButton}>
          <Button className={classes.button}>Ordenar Por</Button>
        </Menu.Target>

        <Menu.Dropdown className={classes.content}>
          <Menu.Label className={classes.label}>Ordenar por:</Menu.Label>
          {sortedItems?.map((item) => (
            <Menu.Item
              onClick={() => setOrderedBy(item.value)}
              style={{ fontFamily: "Roboto" }}
              key={item.value}
              className={
                filterSelected === item.value
                  ? classes.categoryActive
                  : classes.itemList
              }
            >
              {item.label}
            </Menu.Item>
          ))}
          <Menu.Label className={classes.label}>Filtrar por:</Menu.Label>
          {categories?.map((item) => (
            <Menu.Item
              onClick={() => {
                setFilterSelected(item.value);
              }}
              key={item.value}
              className={
                filterSelected === item.value
                  ? classes.categoryActive
                  : classes.itemList
              }
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
