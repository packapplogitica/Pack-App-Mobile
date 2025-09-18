import useStyles from "./userAvatar.style";
export const UserAvatar = ({ firstName, lastName }) => {

    const { classes } = useStyles();
    
    console.log('el nombre',firstName)
    const firstLetter = firstName[0]??''
    const secondLetter = lastName[0]?? ''

    return (
        <div className={classes.avatarContainer}>
            <p className={classes.letter}>{firstLetter}</p>
            <p className={classes.letter}>{secondLetter}</p>
        </div>
    )
}