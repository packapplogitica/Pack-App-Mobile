import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    avatarContainer: {
        backgroundColor: 'rgb(225, 136, 2)',
        color: 'white',
        width: 50,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        fontSize: '1rem'
    }
  };
});

const UserAvatarStyle = (params) => useStyles(params);

export default UserAvatarStyle;