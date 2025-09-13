import { IconSquareArrowRight, IconTruck } from "@tabler/icons-react";
import useStyles from "./directAccess.style";

const DirectAccess = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <a href="#envios" className={classes.button}><IconSquareArrowRight /> Quiero enviar</a>
            <a href="#transporte" className={classes.button}><IconTruck />Transportista</a>
        </div>
    );
};

export default DirectAccess;