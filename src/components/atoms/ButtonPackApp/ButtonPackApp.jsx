import { Button } from "@mantine/core";
import useStyles from "./buttonPackApp.style";
import Link from "next/link";

export const ButtonPackApp = ({
  children,
  href,
  variant = "outline",
  defaultRadius = false,
  className,
  onClick,
  ...others
}) => {
  const { classes, cx } = useStyles({ variant, href, defaultRadius });

  return href ? (
    <Link href={href} className={cx(classes.button)}>
      <Button className={classes.button} {...others} variant={variant}>
        {children}
      </Button>
    </Link>
  ) : (
    <Button className={cx(classes.button)} {...others} variant={variant} onClick={onClick} >
      {children}
    </Button>
  );
};
