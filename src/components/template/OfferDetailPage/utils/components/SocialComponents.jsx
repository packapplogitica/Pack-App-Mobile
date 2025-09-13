import { IconBrandWhatsapp, IconCheck, IconCircleX } from "@tabler/icons-react";
import {
  Box,
  Button,
  Flex,
  Menu,
  Text,
  TextInput,
} from "@mantine/core";
import { UserAvatar } from "@/components/molecules/UserAvatar/UserAvatar";
import Link from "next/link";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { submitState } from "./componentActions";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";
import { modals } from "@mantine/modals";
import Icons from "@/icons";
import { useState } from "react";


export const WhatsappLink = ({ status, existingApplication, classes }) => {
  //   // const classes = useStyles();
  const comingToSender = (status === "En camino a origen" || status === 'Solicitado' || status === 'Oferta aceptada') ?? false
  // Construir la URL de WhatsApp
  const phoneNumberSender = '54' + existingApplication?.order?.phoneSender
  const phoneNumberAdresse = '54' + existingApplication?.order?.phoneAddresse

  const whatsappUrl = `https://wa.me/${comingToSender ? phoneNumberSender : phoneNumberAdresse}`;

  return (
    <Link href={whatsappUrl} className={classes.link} target="_blank" rel="noopener noreferrer">
      <IconBrandWhatsapp />
      Enviar mensaje
    </Link>
  );
};

export const CallButton = ({ status, existingApplication, classes }) => {
  const comingToSender = (status === "En camino a origen" || status === 'Solicitado' || status === 'Oferta aceptada') ?? false

  const phoneNumberSender = existingApplication?.order?.phoneSender
  const phoneNumberAdresse = existingApplication?.order?.phoneAddresse
  // Construir la URL de llamada telefónica
  const telUrl = `tel:${comingToSender ? phoneNumberSender : phoneNumberAdresse}`;

  return (
    <Link href={telUrl} className={classes.button} target="_blank" rel="noopener noreferrer">
      <Text className={classes.textBox}>  Llamar {comingToSender ? 'despachante' : 'destinatario'}</Text>
    </Link>
  );
}


export const InfoUser = ({ status, existingApplication, classes }) => {

  const comingToSender = (status === "En camino a origen" || status === 'Oferta aceptada') ?? false
  return (
    <Flex gap={25} align="center">
      <Box><UserAvatar firstName={existingApplication?.order.nameSender} lastName={existingApplication?.order.lastNameSender} /></Box>
      {
        comingToSender ? (
          <Text
            className={classes.senderTitle}
            weight={400}
          >{`Despachante: ${existingApplication?.order.nameSender + ' ' + existingApplication?.order.lastNameSender} `}
          </Text>
        ) :
          <Text
            className={classes.senderTitle}
            weight={400}
          >{`Destinatario: ${existingApplication?.order.nameAddressee + ' ' + existingApplication?.order.lastNameAddressee} `}
          </Text>
      }
      {existingApplication?.isTaken && (
        <>
          <WhatsappLink status={status} existingApplication={existingApplication} classes={classes} />
        </>

      )}
    </Flex>
  )
}

const Form = ({ existingApplication, status, notificationStylees, router, setLoading, classes }) => {

  const [searchTerm, setSearchTerm] = useState();
  const handleSubmit = async (value) => {
    setLoading(true)
    value.preventDefault();

    try {
      const body = {
        status,
        secretWord: searchTerm,
      };
      const data = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/${existingApplication?.order.id}`,
        body,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (data.status === 200) {
        setLoading(false)
        notifications.show({
          title: "Felicitaciones!",
          message: "Entregaste un paquete",
          icon: <IconCheck />,
          // color: "red",
          // styles: notificationStylees,
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
      console.log('el error', error)
      setLoading(false)
      notifications.show({
        title: "Oh no!",
        message: "Ha habido un problema",
        icon: <IconCircleX />,
        color: "red",
        styles: notificationStylees,
      });
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        classNames={{ label: classes.label }}
        value={searchTerm}
        label="Introduce la palabra secreta"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <Button
        style={{ background: "orange", marginTop: "12px" }}
        w="100%"
        size="lg"
        variant="filled"
        type="submit"
      >
        Aceptar
      </Button>
    </form>
  );
};

const onClickSubmit = async (e, existingApplication, setLoading, router, notificationStylees, classes) => {
  if (e.value === "Entregado") {
    const confirmModal = () => {
      // console.log('la palabra secretas', secretWord)
      // router.push("/mis-paquetes");
    };
    // console.log('la palabra secretas', secretWord)
    const closeModal = () => {
      modals.closeAll();
      // router.reload();
    };
    modals.open({
      children:
        <Form
          existingApplication={existingApplication}
          status={e.value}
          notificationStylees={notificationStylees}
          router={router}
          setLoading={setLoading}
          classes={classes}
        />,
      centered: true,
      closeOnClickOutside: false,
      styles: {
        header: {
          padding: "16px 40px",
        },
      },
    });
  } else {
    setLoading(true)
    const result = await submitState(e.value, existingApplication, setLoading, router)
    if (result) {
      showNotification({
        title: result.title,
        message: result.message, // Ahora esto es un string válido
        icon: result.icon,
        color: result.color,
        notificationStyles: notificationStylees
      })
    }
  }

};

export const MenuState = ({
  existingApplication,
  setLoading,
  router,
  notificationStylees,
  classes
}) => {
  const orderExpress = existingApplication?.order.typeOrder === 'express'
  console.log('la oferta', existingApplication)
  const menuItems = [
    {
      title: "En camino a origen",
      value: "En camino a origen",
    },
    {
      title: "En camino a destino",
      value: "En camino a destino",
    },
    {
      title: "Entregado",
      value: "Entregado",
    },
    {
      title: "No se ha podido entregar",
      value: "No se ha podido entregar",
    },
  ];

  const menuItemsExpres = [
    {
      title: "Entregado",
      value: "Entregado",
    },
    {
      title: "No se ha podido entregar",
      value: "No se ha podido entregar",
    },
  ];
  return (
    <Menu
      position="bottom-end"
      transitionProps={500}
      width={300}
      radius={8}
      offset={0}
      trigger="hover"
    >
      <Menu.Target>
        <Button
          sx={{
            color: "#191F1F",
            fontWeight: 300,
            background: "transparent",
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <Flex gap={30} align="center">
            Modificar estado
            {Icons.arrowRD}
          </Flex>
        </Button>
      </Menu.Target>

      <Menu.Dropdown mt={10} className={classes.dropDown} p="xxs">

        {orderExpress ?

          menuItemsExpres?.map((item, index) => {
            return (
              <Menu.Item
                component="button"
                className={classes.item}
                key={index}
                onClick={() => onClickSubmit(
                  item,
                  existingApplication,
                  setLoading,
                  router,
                  notificationStylees,
                  classes
                )}
              >
                {item.title}
              </Menu.Item>
            );
          })
          :
          menuItems?.map((item, index) => {
            return (
              <Menu.Item
                component="button"
                className={classes.item}
                key={index}
                onClick={() => onClickSubmit(
                  item,
                  existingApplication,
                  setLoading,
                  router,
                  notificationStylees,
                  classes
                )}
              >
                {item.title}
              </Menu.Item>
            );
          })}


      </Menu.Dropdown>
    </Menu>
  );
};