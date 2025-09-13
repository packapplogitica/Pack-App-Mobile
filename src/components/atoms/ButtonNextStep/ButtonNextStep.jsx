import { Button } from "@mantine/core";
import useStyles from "./buttonNextStepstyles";
import Link from "next/link";

export const ButtonNextStep=({
  children ,
  href ,
  variant="outline",
  defaultRadius=false,
  className ,
  onClick ,
   ...others
})=>{
  const {classes, cx} = useStyles({ variant, href });

  return href ?(
    <Link href={href} className={cx(classes.button)} >
      <Button className={classes.button} {...others} variant={variant} >
        {children }
      </Button >
    </Link >
  ) :(
    <Button  className={cx(classes.button)} {...others} variant={variant} onClick={onClick} >
      {children }
    </Button >
  )

 };
