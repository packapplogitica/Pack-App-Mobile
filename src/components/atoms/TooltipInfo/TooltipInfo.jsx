import { Tooltip } from "@mantine/core";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import useStyles from "./tooltipInfo.style";

export const TooltipInfo = ({ label }) => {
  const { classes } = useStyles();
  return (
    <Tooltip
      label={label}
      position="bottom-end"
      offset={10}
      multiline
      withArrow
      arrowOffset={34}
      arrowSize={6}
      arrowRadius={2}
      classNames={{
        arrow: classes.arrow,
        tooltip: classes.tooltip,
      }}
    >
      <IconInfoCircleFilled className={classes.icon} size={30} />
    </Tooltip>
  );
};
