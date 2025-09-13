import { useEffect, useState } from "react";

import { SocialLinks } from "../../atoms";

import useStaticData from "@/hooks/useStaticData";

import {
    Container,
    Grid,
    Title,
    Text,
    Textarea,
    TextInput,
    Button,
    MediaQuery,
    Image,
} from '@mantine/core';

// import Image from "next/image";
import useStyles from "./contactUs.styles";

export const ContactUs = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });
    const { defaultData } = useStaticData();
    const socialLinks = defaultData.nosotrosPage.socialLinks;

    const { classes } = useStyles();


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/api/sendEmail', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         console.log(response)
    //         const data = await response.json();
    //         console.log(data.message);
    //     } catch (error) {
    //         console.error('Error al enviar el formulario:', error);
    //     }
    //     console.log('Datos enviados:', formData);
    // };

    return (
        <Container className={classes.contactContainer}>
            <Grid grow className={classes.contactGrid}>
                <Grid.Col span={6} className={classes.contactCol}>
                    {/* <Title order={3} className={classes.title}>Contáctanos</Title>
                    <Text className={classes.text}>Estamos aquí para ti. ¿Cómo podemos ayudarte?</Text>
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <TextInput
                            name={"name"}
                            classNames={{ label: classes.label }}
                            className={classes.input}
                            required
                            label="Nombre"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextInput
                            name={"email"}
                            classNames={{ label: classes.label }}
                            className={classes.input}
                            required
                            type="email"
                            label="Email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <Textarea
                            name={"message"}
                            classNames={{ label: classes.label }}
                            className={classes.input}
                            required
                            label="Mensaje"
                            placeholder="Escribe tu mensaje aquí"
                            value={formData.message}
                            onChange={(e) => handleChange(e)}
                        />
                        <Button className={classes.button} type="submit">Enviar</Button>
                    </form> */}
                    <Container className={classes.socialContainer}>
                        <Title className={classes.socialTitle}>
                            Nuestras Redes
                        </Title>
                        <SocialLinks socialLinks={socialLinks} />
                    </Container>
                </Grid.Col>
                <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                    <Grid.Col span={6} className={classes.contactCol}>
                        <Image src={"/assets/contactImage.png"} alt={"Random image"} />
                    </Grid.Col>
                </MediaQuery>
            </Grid>
        </Container>
    )
}