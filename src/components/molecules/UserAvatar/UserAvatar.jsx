import useStyles from "./userAvatar.style";
export const UserAvatar = ({ firstName, lastName }) => {

    const { classes } = useStyles();
    
    const firstLetter = firstName[0]?.toUpperCase();
    const secondLetter = lastName[0]?.toUpperCase();

    return (
        <div className={classes.avatarContainer}>
            <p className={classes.letter}>{firstLetter}</p>
            <p className={classes.letter}>{secondLetter}</p>
        </div>
    )
}