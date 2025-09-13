import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {

    return {
        contactContainer: {
            background: "#F0F2F2",
            // padding: 0,
            margin: 0,
            maxWidth: "100%",
            padding: "60px 32px",
        },
        contactGrid: {
            background: "#fff",
            borderRadius: 20,
            // padding: "38px 35px 38px 94px",
        },
        title: {
            fontFamily: "Inder",
            fontWeight: 400,
            fontSize: 30,
            color: "#F27405",
        },
        text: {
            fontFamily: "Roboto",
            fontWeight: 300,
            fontSize: 18,
        },
        formContainer: {
            marginTop: 40,
        },
        label: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 16,
            margin: "15px 0"
        },
        input: {
            border: 2,
            borderColor: "rgba(37, 38, 40, 38)",
            borderRadius: 10,
            // maxWidth: '100%'
        },
        socialContainer: {
            textAlign: "center",
            marginTop: 30,
            maxWidth: "100%",
        },
        socialTitle: {
            fontFamily: "Inder",
            fontWeight: 400,
            fontSize: 24,
            color: "#F27405",
            marginBottom: 30,
        },
        contactCol: {
            padding: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "100%",
        },
        button: {
            marginTop: 20,
            fontFamily: "Roboto",
            backgroundColor: "#F27405",
            fontWeight: 500,
            fontSize: 16,
            height: 40,
            borderRadius: 36,
            paddingInline: 25,
            "&:hover": {
                backgroundColor: "#DB8A25",
            },
        },
        '@media (max-width: 600px)': {
            contactGrid: {
                padding: 0,
            }
        }
    }
});

const ContactUsStyle = (params) => useStyles(params);

export default ContactUsStyle;
