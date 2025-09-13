import { useRouter } from "next/router";
import useStyles from "./modalSession.style";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import NextImage from "next/image";

import {
  Divider,
  Flex,
  Grid,
  Image,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export const ModalSession = ({ opened, setOpenModalSession }) => {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <Modal
      onClose={() => setOpenModalSession(false)}
      opened={opened}
      centered
      size={"xl"}
      scrollAreaComponent={ScrollArea.Autosize}
    > 
    {/* <Divider py={15} /> */}
    <Flex gap={10} align={'start'}>
      <Image
        compoent={NextImage}
        src="/assets/antError.svg"
        alt="image"
        fit="contain"
        width={"auto"}
        height={"100%"}
      />
      <Stack justify="flex-start" spacing="xs" ali>
        <Title className={classes.title}>Debes Iniciar Sesión</Title>
        <Text className={classes.text}>Debes iniciar sesión o registrarte para ver los detalles de los envíos y realizar ofertas.</Text>
      </Stack>
    </Flex>
      <Flex align={"center"} gap={10}>
        <ButtonPackApp
          size="lg"
          onClick={() => router.push("/signin")}
          w={"100%"}
        >
          {"Iniciar Sesión"}
        </ButtonPackApp>
        <ButtonPackApp
          size="lg"
          variant="filled"
          onClick={() => router.push("/registration")}
          w={"100%"}
        >
          {"Registrarte"}
        </ButtonPackApp>
      </Flex>
    </Modal>
  );
};
