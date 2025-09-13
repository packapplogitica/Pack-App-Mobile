import { createStyles } from "@mantine/core";

const useStyles=createStyles((theme, params) => {
  const { variant} = params;

  let variantStyles ={};

  switch (variant) {
    case  "filled":
      variantStyles={
        backgroundColor:theme.colors.orangePrimary[6],
        color:theme.colors.white[0],

        "&:hover":{
          background:theme.colors.orangePrimary[7],
        },
        "&:focus":{},
      };
      break;

    case "default" :
      variantStyles={
        backgroundColor:"#fff",
        borderColor:theme.colors.orangePrimary[6],
        color:theme.colors.orangePrimary[6],
        "&:hover":{
          backgroundColor:"#fff",
          color:theme.colors.orangePrimary[6],
         },
        svg:{
          circle:{
            "&:hover":{
              Fill:"red",
            } ,
          } ,
        } ,
        "&:focus":{},
      } ;
      break;

    case "subtle" :
      variantStyles ={
        backgroundColor:"transparent",
        color:theme.colors.orangePrimary[6],
        "&:hover":{
          background:theme.colors.orangePrimary[6],
          color:theme.colors.white[0],
        },
        "&:focus":{},
      } ;
      break;

    case "outline" :
      variantStyles ={
        borderColor:theme.colors.orangePrimary[6],
        color:theme.colors.orangePrimary[6],

        "&:hover":{
          backgroundColor:theme.colors.orangePrimary[6],
          borderColor:theme.colors.orangePrimary[6],
          color:theme.colors.white[0],
        },
        "&:focus":{},
      };
      break ;

    default :
      break ;
  }

  return{
    button:{
       ...variantStyles,
       textDecoration: "none",
       lineHeight: 1,
       borderRadius: 0,
    },
  };
});
const ButtonPackAppStyle =(params) => useStyles(params);
export default ButtonPackAppStyle
