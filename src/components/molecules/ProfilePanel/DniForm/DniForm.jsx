import { useState } from "react";
import {
  Box,
  Grid,
  Text,
  Flex,
  Group
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconCircleCheck,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import useStyles from "../MyTransportation/myTransportation.styles";
import useStaticData from "@/hooks/useStaticData";
import { useFormValidation } from "@/hooks/useFormValidation";
import { modals } from "@mantine/modals";
import { IconCircleX } from "@tabler/icons-react";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import Loader from "../../Loader/Loader";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconId } from "@tabler/icons-react";

const DniForm = ({ profile }) => {
  const userId = profile.current?.id
  // console.log(profile.token)
  const token = profile?.token
  const { classes, theme } = useStyles();
  const [loading, setLoading] = useState(false)
  // const { id } = profile.current;
  const [dniFrontFile, setDniFrontFile] = useState(null);
  const [dniBackFile, setDniBackFile] = useState(null);

  const { emptyValidation, licenceValidation, accountNumberValidation } = useFormValidation();

  // const transportBrands = transports.map((item) => {
  //   return item.name;
  // });

  const notificationStylees = (theme) => ({
    root: {
      borderRadius: 8,
    },

    title: {
      color: "black.0",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "24px",
    },
    description: { fontSize: 16, fontWeight: 300, lineHeight: "19px" },
    icon: {
      width: 50,
      height: 50,
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  });





  const verificationForm = useForm({
    initialValues: {
      dniFront: "",
      dniBack: "",
    },
    validate: {
      // accountNumber: validateAccountNumber,
      dniFront: emptyValidation,
      dniBack: emptyValidation,
    },
  });


 

  const handleUpload = async (files) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('dniFront', files[0]); // Imagen del frente
    formData.append('dniBack', files[1]);  // Imagen del dorso

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${token}`,
        },
      });



      if (response?.status === 201 || response?.status === 200) {
        setLoading(false);
        notifications.show({
          title: "Buen trabajo!",
          message: "DNI actualizado correctamente",
          icon: <IconCircleCheck />,
          color: "teal",
        });
      } else {
        setLoading(false);
        notifications.show({
          title: "Oh no!",
          message: "Ha habido un problema",
          icon: <IconCircleX />,
          color: "red",
        });
      }
    } catch (error) {
      console.log('Error en la subida', error);
      setLoading(false);
      notifications.show({
        title: "Oh no!",
        message: "Ha habido un problema",
        icon: <IconCircleX />,
        color: "red",
      });
    }
  };

  const handleFilesUpload = () => {
    if (dniFrontFile && dniBackFile) {
      handleUpload([dniFrontFile, dniBackFile]);
    }
  };


  if (loading) {
    return <Loader visible />
  }


  return (
    <Box mt={24} className={classes.box}>
      {/* Imagen del frente */}
      <Grid.Col md={12}>
        <Text>{"Frente:"}</Text>
      </Grid.Col>

      <Grid.Col md={12}>
        <Dropzone
          onDrop={(files) => {
     
            setDniFrontFile(files[0]);
            verificationForm.setFieldValue("dniFront", files[0]);
            handleFilesUpload();  // Intentar la subida si ya están ambas imágenes
          }}
          onReject={(files) => {
   
            verificationForm.setFieldError("dniFront", "Formato o tamaño de archivo inválido");
          }}
          maxSize={3 * 1024 ** 2}
          accept={['image/jpeg', 'image/png']}
          {...verificationForm.getInputProps("dniFront")}
        >
          {/* Contenido del Dropzone (Frente) */}
          <Group position="center" spacing="xl" style={{ pointerEvents: "none" }}>
            <Dropzone.Accept>
              <IconUpload size="3.2rem" stroke={1.5} color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Reject>
            <Flex justify="center" align="center" direction="column">
              <Dropzone.Idle>
                <IconId size="3.2rem" className={classes.dniImage} />
              </Dropzone.Idle>
              <Text size="xl">{"Anexa tus imágenes aquí o busca archivos"}</Text>
              <Text size="sm" color="dimmed" mt={7}>{"Jpeg, png son formatos permitidos"}</Text>
            </Flex>
          </Group>
        </Dropzone>
      </Grid.Col>

      {/* Imagen del dorso */}
      <Grid.Col md={12}>
        <Text>{"Dorso:"}</Text>
      </Grid.Col>

      <Grid.Col md={12}>
        <Dropzone
          onDrop={(files) => {
           
            setDniBackFile(files[0]);
            verificationForm.setFieldValue("dniBack", files[0]);
            handleFilesUpload();  // Intentar la subida si ya están ambas imágenes
          }}
          onReject={(files) => {

            verificationForm.setFieldError("dniBack", "Formato o tamaño de archivo inválido");
          }}
          maxSize={3 * 1024 ** 2}
          accept={['image/jpeg', 'image/png']}
          {...verificationForm.getInputProps("dniBack")}
        >
          {/* Contenido del Dropzone (Dorso) */}
          <Group position="center" spacing="xl" style={{ pointerEvents: "none" }}>
            <Dropzone.Accept>
              <IconUpload size="3.2rem" stroke={1.5} color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Reject>
            <Flex justify="center" align="center" direction="column">
              <Dropzone.Idle>
                <IconId size="3.2rem" className={classes.dniImage} />
              </Dropzone.Idle>
              <Text size="xl">{"Anexa tus imágenes aquí o busca archivos"}</Text>
              <Text size="sm" color="dimmed" mt={7}>{"Jpeg, png son formatos permitidos"}</Text>
            </Flex>
          </Group>
        </Dropzone>
      </Grid.Col>

      {/* Botón para guardar cambios */}
      <Grid.Col md={6}>
        <Flex direction="column" mt={10} gap={20}>
          <ButtonPackApp
            size="lg"
            w={"100%"}
            type="submit"
            onClick={handleFilesUpload}
            disabled={!dniFrontFile || !dniBackFile}  // Deshabilitar si faltan archivos
          >
            {"Guardar cambios"}
          </ButtonPackApp>
        </Flex>
      </Grid.Col>
    </Box>
  )
}

export default DniForm