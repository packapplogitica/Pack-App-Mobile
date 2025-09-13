import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Text,
  TextInput,
  Title,
  Flex,
  Image,
  Stack,
  Select,
  Group
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
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
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const CbuForm = ({profile}) => {

    const [selectedBrand, setSelectedBrand] = useState('');


    const { classes, theme } = useStyles();
    const [loading, setLoading] = useState(false)
    // const { cbu,id } = profile.current;
    const { transports, carColors } = useStaticData();
    const { emptyValidation, licenceValidation, accountNumberValidation } = useFormValidation();
    const { update, data } = useSession()
    const router = useRouter()
  
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
  
  
    const validateLicence = (value) => {
      if (emptyValidation(value)) return emptyValidation(value);
      if (licenceValidation(value)) return licenceValidation(value);
    };
  
    const validateAccountNumber = (value) => {
      if (emptyValidation(value)) return emptyValidation(value);
      if (accountNumberValidation(value)) return accountNumberValidation(value);
    }
  
  
    const verificationForm = useForm({
      initialValues: {
        accountNumber: profile?.current?.cbu?? "",
      },
      validate: {
        accountNumber: validateAccountNumber,
      },
    });
  
    const handleMyTransportation = async (value) => {
      console.log(value);
    };

    const handelSubmit = async () => {
        // router.push(init_point)
        setLoading(true)
        try {
          const body = { cbu: verificationForm.values.accountNumber }
          const updateProfile = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profiles/${profile?.current.id}/update`,
            body,
            {
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${profile.token}`,
              },
            }
          )

          if (updateProfile?.status === 200 || updateProfile?.status === 201) {

            update({
              ...data,
              user: {
                ...data.user,
                cbu:body.cbu,
              },
            });
            setLoading(false)
            notifications.show({
              title: "Buen trabajo!",
              message: "CBU actualizado correctamente",
              icon: <IconCircleCheck/>,
              color: "teal",
              styles: notificationStylees,
            });
            router.reload()
          } else {
            setLoading(false)
            notifications.show({
              title: "Oh no!",
              message: "Ha habido un problema",
              icon: <IconCircleX />,
              color: "red",
              styles: notificationStylees,
            });
          }
        } catch (error) {
          console.log('el error',error)
          setLoading(false)
          notifications.show({
            title: "Oh no!",
            message: "Ha habido un problema",
            icon: <IconCircleX />,
            color: "red",
            styles: notificationStylees,
          });
        }
      }
    
    
      const enviarSolicitud = async (e) => {
        e.preventDefault()
        try {
          if (verificationForm.values.accountNumber.length !== 0) {
            const closeModal = () => {
              modals.closeAll();
            };
            modals.open({
              children: (
                <Flex direction="column" gap={16} align="baseline" w={"100%"}>
                  <Grid gutter={25} mt="sm" w={"100%"}>
                    <Grid.Col>
                      <Stack spacing={12}>
                        <Text size={14} weight={400} align="center">
                          Recuerda que tu CBU debe coincidir con la informacion de tu cuenta de PackApp, no aceptamos cuenta de terceros.
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <ButtonPackApp w="100%" size="lg" onClick={closeModal}>
                        Volver a la web
                      </ButtonPackApp>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <ButtonPackApp
                        w="100%"
                        size="lg"
                        variant="filled"
                        onClick={handelSubmit}
                      >
                        Aceptar
                      </ButtonPackApp>
                    </Grid.Col>
                  </Grid>
                </Flex>
              ),
              centered: true,
              closeOnClickOutside: false,
              styles: {
                header: {
                  padding: "16px 40px",
                },
              },
            });
          } else {
            notifications.show({
              title: "Oh no!",
              message: "Ha habido un problema",
              icon: <IconCircleX />,
              color: "red",
              styles: notificationStylees,
            });
          }
        } catch (error) {
          notifications.show({
            title: "Hay un problema",
            message: "El campo esta vacio",
            icon: <IconCircleX />,
            color: "red",
            styles: notificationStylees,
          });
          // Manejar errores
          console.error("Error al enviar solicitud:", error);
        }
      };
    
    
  return (
    <>
      <Box p={0} mt={24} className={classes.box}>
        <Title order={3} className={classes.title}>
          {"Verificación"}
        </Title>
        <Text className={classes.subText}>
          {"Impulsá tu negocio en un par de clicks y crece con nosotros. "}
        </Text>
        <Divider my="xs" />
        <form onSubmit={enviarSolicitud}>
          <Grid gutter={16} my={12}>
            <Grid.Col md={12}>
              <Flex gap={6} align={"center"} className={classes.cardType}>
                <IconCircleCheckFilled />
                <Text>{"CBU o CVU"}</Text>
              </Flex>
              <Divider className={classes.cardDivider} />
            </Grid.Col>
            <Grid.Col md={12}>
              <TextInput
                placeholder="Número de CBU ó CVU"
                size="lg"
                className={classes.generalInput}
                {...verificationForm.getInputProps("accountNumber")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Flex direction="column" mt={10} gap={20}>
                <ButtonPackApp size="lg" w={"100%"} type="submit">
                  {"Guardar cambios"}
                </ButtonPackApp>
              </Flex>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    </>
  )
}

export default CbuForm