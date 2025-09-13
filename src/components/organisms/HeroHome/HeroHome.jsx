// import {
//   BackgroundImage,
//   Button,
//   Card,
//   Checkbox,
//   Container,
//   Flex,
//   Grid,
//   Group,
//   NumberInput,
//   Progress,
//   Select,
//   Stack,
//   Text,
//   TextInput,
//   Title,
// } from "@mantine/core";
// import useStyles from "./heroHome.style";
// import { PaddingBox, TooltipInfo } from "@/components/atoms";
// import { useState } from "react";
// import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
// import Icons from "@/icons";
// import {
//   NewOrderForm,
//   SenderandRecipientInformationForm,
// } from "@/components/molecules";

// export const HeroHome = () => {
//   const [step, setStep] = useState(1);
//   const { classes, cx, theme } = useStyles({ step });

//   const StepsContainer = () => {
//     const steps = [
//       { title: "Paso 1", content: "Datos del paquete", value: 1 },
//       {
//         title: "Paso 2",
//         content: "Datos del remitente y destinatario",
//         value: 2,
//       },
//     ];

//     return (
//       <Flex gap="sm" wrap="wrap">
//         {steps?.map((item, index) => {
//           return (
//             <Stack
//               key={index}
//               spacing="tiny"
//               className={cx({
//                 [classes.active]: item.value === step,
//               })}
//             >
//               {item.title && (
//                 <Text size={20} weight={900}>
//                   {item.title}
//                 </Text>
//               )}

//               {item.content && (
//                 <Text size={20} weight={400}>
//                   {item.content}
//                 </Text>
//               )}
//             </Stack>
//           );
//         })}
//       </Flex>
//     );
//   };

//   return (
//     <>
//       <PaddingBox>
//         <Container size="xxl" p={0}>
//           <Flex direction="column" gap="xs" my="md">
//             <Title order={1} className={classes.title}>
//               PackApp Clientes: Envíos eficientes y sin estrés
//             </Title>
//             <StepsContainer />
//           </Flex>
//         </Container>
//       </PaddingBox>
//       <BackgroundImage
//         src="/assets/banner.jpg"
//         className={classes.background}
//         mb="xl"
//       >
//         <PaddingBox
//           sx={{
//             height: "100%",
//           }}
//         >
//           <Container
//             size="xxl"
//             p={0}
//             sx={{
//               height: "100%",
//             }}
//           >
//             <Grid
//               justify="center"
//               align="center"
//               py="md"
//               sx={{
//                 height: "100%",
//               }}
//             >
//               <Grid.Col>
//                 {step === 1 && <NewOrderForm setStep={setStep} />}
//                 {step === 2 && (
//                   <SenderandRecipientInformationForm setStep={setStep} />
//                 )}
//               </Grid.Col>
//             </Grid>
//           </Container>
//         </PaddingBox>
//       </BackgroundImage>
//     </>
//   );
// };
