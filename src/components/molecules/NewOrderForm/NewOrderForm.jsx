import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  NumberInput,
  Select,
  Switch,
  Text,
  TextInput,
  Tabs,
} from "@mantine/core";

import { IconX } from "@tabler/icons-react";

import { PaddingBox, TooltipInfo } from "@/components/atoms";
import stylesCss from "./newOrderForm.module.css";

// Hooks
import { useState } from "react";
import useStyles from "./newOrderForm.style";
import { useData } from "@/libs/DataProvider";
import useStaticData from "@/hooks/useStaticData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";
import { SenderandRecipientInformationForm } from "..";

export const NewOrderForm = ({
  setStep,
  setInsuranceValue,
  formValues,
  handleRemovePackage,
  orders,
  typeShipping,
  setSteep,
}) => {
  const [showCustomFields, setShowCustomFields] = useState(false);
  const { classes } = useStyles(true);
  const { updateData } = useData();
  const { data } = useSession();
  const router = useRouter();

  const session = data?.user;
  // Static Data
  const { defaultData } = useStaticData();

  const types = defaultData?.packagesType.map((type) => ({
    value: type.value,
    label: type.name,
    description: type.description,
    height: type.height,
    length: type.length,
    width: type.width,
    weight: type.weight,
    icon: type.icon,
    iconSize: type.iconSize,
  }));

  const handleChange = (event, index) => {
    setShowCustomFields(event === "custom");
    const selectedType = types.find((type) => type.value === event);
    if (event === "envelope") {
      formValues.setFieldValue(`packages.${index}.clase`, event);
      formValues.setFieldValue(`packages.${index}.length`, "");
      formValues.setFieldValue(`packages.${index}.width`, "");
      formValues.setFieldValue(`packages.${index}.height`, "");
      formValues.setFieldValue(`packages.${index}.weight`, "");
    } else if (event !== "custom") {
      formValues.setFieldValue(`packages.${index}.clase`, event);
      formValues.setFieldValue(
        `packages.${index}.length`,
        selectedType.length || ""
      );
      formValues.setFieldValue(
        `packages.${index}.width`,
        selectedType.width || ""
      );
      formValues.setFieldValue(
        `packages.${index}.height`,
        selectedType.height || ""
      );
      formValues.setFieldValue(
        `packages.${index}.weight`,
        selectedType.weight || ""
      );
    } else {
      formValues.setFieldValue(`packages.${index}.clase`, event);
      formValues.setFieldValue(`packages.${index}.length`, "");
      formValues.setFieldValue(`packages.${index}.width`, "");
      formValues.setFieldValue(`packages.${index}.height`, "");
      formValues.setFieldValue(`packages.${index}.weight`, "");
    }
  };

  // Componente a parte
  const SelectItem = ({
    icon,
    iconSize,
    height,
    length,
    width,
    weight,
    label,
    ...rest
  }) => {
    return (
      <div {...rest}>
        <Flex justify={"flex-start"} align={"center"} gap={10}>
          <Avatar>{icon}</Avatar>
          <Text className={stylesCss.selectLabelTitle}>{label}</Text>
        </Flex>
        <Flex align={"flex-end"} gap={5} wrap={"nowrap"}>
          <Text className={stylesCss.selectInfo}>
            {height ? `Hasta:` : null}
          </Text>
          <Text className={stylesCss.selectInfo}>
            {height ? `Alto: ${height} cm,` : null}
          </Text>
          <Text className={stylesCss.selectInfo}>
            {length ? `Largo: ${length} cm,` : null}
          </Text>
          <Text className={stylesCss.selectInfo}>
            {width ? `Ancho: ${width} cm,` : null}
          </Text>
          <Text className={stylesCss.selectInfo}>
            {weight ? `Peso: Hasta ${parseFloat(weight / 1000)}kg` : null}
          </Text>
        </Flex>
      </div>
    );
  };

  const notificationStyles = () => ({
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

  const validateInsurance = (packages) => {
    for (const pkg of packages) {
      if (pkg.insuranceValue < 40000 || pkg.insuranceValue > 500000) {
        return "El seguro del paquete debe estar entre los $40000 y $500000";
      }
      if (pkg.insuranceValue === 0) {
        return "Agrega un valor para el seguro";
      }
    }
    return null;
  };

  const handleSubmit = (value) => {
    const insuranceError = validateInsurance(formValues.values.packages);
    if (insuranceError) {
      return showNotification({
        title: "Oh no!",
        message: insuranceError,
        notificationStyles: notificationStyles,
      });
    }

    if (!session) {
      router.push("/signin");
      return showNotification({
        title: "Oh no!",
        message: "Debes iniciar sesión para cargar un paquete",
        notificationStyles: notificationStyles,
      });
    }
    updateData(value);
    setStep(3);
  };

  return (
    <Grid
      className={stylesCss.container}
      p={0}
      mx={10}
      sx={{ height: "100%" }}
      radius={8}
      display={'block'}
    >
      <form onSubmit={formValues.onSubmit(handleSubmit)}>
        {formValues.values.packages.map((packageItem, index) => {
          return (
            <Box key={index}>
              <PaddingBox px={0} py={0}>
                {/* Tipo paquete | Fragil | Urgente */}
                <Grid
                  gutter={25}
                  sx={{ height: "100%" }}
                  align="flex-end "
                  p={16}
                >
                  <Grid.Col md={12}>
                    {/* TABS en lugar del select */}
                    <Tabs
                      color="orange"
                      variant="pills"
                      defaultValue="paqueteria"
                    >
                      <Tabs.Panel
                        value="paqueteria"
                        className={classes.tabContainer}
                      >
                        <Grid>
                          <Grid.Col md={6} className={classes.inputContainer}>
                            <Select
                              label={
                                <Flex align="center" gap={8}>
                                  <TooltipInfo label="Elige el tipo de Paquete que quieras enviar." />
                                  {"Tipo de Paquete:"}
                                  <Text color="red">{"*"}</Text>
                                </Flex>
                              }
                              placeholder="Seleccionar"
                              size="md"
                              data={types}
                              onChange={(event) => handleChange(event, index)}
                              error={
                                formValues.errors?.packages?.[index]?.clase
                              }
                              classNames={{
                                label: classes.labelInput,
                                item: classes.itemSelect,
                                error: classes.error,
                              }}
                              itemComponent={SelectItem}
                            />
                          </Grid.Col>

                          <Grid.Col md={6} className={classes.inputContainer}>
                            <TextInput
                              label={
                                <Flex
                                  justify="center"
                                  gap={8}
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <TooltipInfo
                                    label={
                                      "Descripción de lo que quieres enviar."
                                    }
                                  />
                                  {"Detalles del paquete:"}
                                </Flex>
                              }
                              placeholder="Ejemplo: cristalería, indumentaria, etc..."
                              size="md"
                              className={classes.input}
                              classNames={{
                                label: classes.labelInput,
                                error: classes.error,
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.details`
                              )}
                            />
                          </Grid.Col>
                          {showCustomFields && (
                            <Grid
                              mb="xs"
                              gutter={25}
                              sx={{ height: "100%" }}
                              align="center"
                              justify="center"
                              p={16}
                            >
                              <Grid.Col md={3}>
                                <NumberInput
                                  hideControls
                                  label="Largo"
                                  placeholder="CM"
                                  size="md"
                                  className={classes.input}
                                  classNames={{
                                    label: classes.labelInput,
                                    error: classes.error,
                                  }}
                                  {...formValues.getInputProps(
                                    `packages.${index}.length`
                                  )}
                                  disabled={
                                    formValues.values.clase === "Personalizado"
                                  }
                                  min={0}
                                />
                              </Grid.Col>

                              <Grid.Col md={3}>
                                <NumberInput
                                  hideControls
                                  label="Ancho"
                                  placeholder="CM"
                                  size="md"
                                  className={classes.input}
                                  classNames={{
                                    label: classes.labelInput,
                                    error: classes.error,
                                  }}
                                  {...formValues.getInputProps(
                                    `packages.${index}.width`
                                  )}
                                  disabled={
                                    formValues.values.clase === "Personalizado"
                                  }
                                  min={0}
                                />
                              </Grid.Col>

                              <Grid.Col md={3}>
                                <NumberInput
                                  hideControls
                                  label="Alto"
                                  placeholder="CM"
                                  size="md"
                                  className={classes.input}
                                  classNames={{
                                    label: classes.labelInput,
                                    error: classes.error,
                                  }}
                                  {...formValues.getInputProps(
                                    `packages.${index}.height`
                                  )}
                                  disabled={
                                    formValues.values.clase === "Personalizado"
                                  }
                                  min={0}
                                />
                              </Grid.Col>

                              <Grid.Col md={3}>
                                <NumberInput
                                  hideControls
                                  label="Peso"
                                  placeholder="KG"
                                  size="md"
                                  className={classes.input}
                                  classNames={{
                                    label: classes.labelInput,
                                    error: classes.error,
                                  }}
                                  {...formValues.getInputProps(
                                    `packages.${index}.weight`
                                  )}
                                  disabled={
                                    formValues.values.clase === "Personalizado"
                                  }
                                  min={0}
                                />
                              </Grid.Col>
                            </Grid>
                          )}
                        </Grid>
                        <Grid mb="xs" sx={{ height: "100%" }}>
                          <Grid.Col md={4} className={classes.inputContainer}>
                            <Flex gap={"xxs"}>
                              <TooltipInfo
                                label={"Marcalo si tu paquete es fragil."}
                              />
                              <Text className={classes.labelInput}>
                                ¿Es frágil?
                              </Text>
                              <Switch
                                color={"orangePrimary.6"}
                                {...formValues.getInputProps(
                                  `packages.${index}.isFragil`
                                )}
                                size="md"
                              />
                            </Flex>
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <Flex gap="xxs">
                              <TooltipInfo
                                label={"Marcalo si necesitas un envío urgente."}
                              />
                              <Text
                                className={classes.labelInput}
                                sx={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ¿Este envío es urgente?
                              </Text>
                              <Switch
                                color="orangePrimary.6"
                                {...formValues.getInputProps(
                                  `packages.${index}.isUrgent`
                                )}
                                size="md"
                              />
                            </Flex>
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <Text className={classes.labelInput}>
                              Asegura tu paquete
                            </Text>
                            <NumberInput
                              min={0}
                              // value={insuranceValue}
                              onChange={setInsuranceValue}
                              parser={(value) =>
                                value
                                  .replace(/\$\s?|\.(?=\d{3})/g, "")
                                  .replace(/,/g, ".")
                              }
                              formatter={(value) => {
                                const number = parseFloat(value);
                                if (!value || number === 0) return "$ ";
                                return `$ ${value}`.replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  "."
                                );
                              }}
                              placeholder="Valor declarado"
                              size="md"
                              className="w-full"
                              classNames={{
                                input:
                                  "w-full rounded-md border border-gray-300 px-4 py-2",
                                label: "text-sm font-medium text-gray-700",
                                error: "text-red-500 text-sm mt-1",
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.insuranceValue`
                              )}
                            />
                          </Grid.Col>
                        </Grid>
                      </Tabs.Panel>

                      <Tabs.Panel value="pallet">
                        <Grid>
                          <Grid.Col md={4} className={classes.inputContainer}>
                            <TextInput
                              label={
                                <Flex
                                  justify="center"
                                  gap={8}
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <TooltipInfo
                                    label={
                                      "Descripción de lo que quieres enviar."
                                    }
                                  />
                                  {"Detalles del pallet:"}
                                </Flex>
                              }
                              placeholder="Ejemplo: tipo de mercadería..."
                              size="md"
                              className={classes.input}
                              classNames={{
                                label: classes.labelInput,
                                error: classes.error,
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.details`
                              )}
                            />
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <NumberInput
                              min={0}
                              onChange={setInsuranceValue}
                              parser={(value) =>
                                value
                                  .replace(/\$\s?|\.(?=\d{3})/g, "")
                                  .replace(/,/g, ".")
                              }
                              formatter={(value) => {
                                const number = parseFloat(value);
                                if (!value || number === 0) return "$ ";
                                return `$ ${value}`.replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  "."
                                );
                              }}
                              placeholder="Valor declarado"
                              size="md"
                              className={classes.input}
                              classNames={{
                                input:
                                  "w-full rounded-md border border-gray-300 px-4 py-2",
                                label: classes.labelInput,
                                error: classes.error,
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.insuranceValue`
                              )}
                              label={
                                <Flex
                                  justify="space-between"
                                  gap="xxs"
                                  // gap={8}
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <TooltipInfo
                                    label={"Valor de lo que quieras asegurar."}
                                  />
                                  {"Asegurá tu pallet:"}
                                </Flex>
                              }
                            />
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <Flex gap={8}>
                              <TooltipInfo
                                label={"Marcalo si necesitas un envío urgente."}
                              />
                              <Text
                                className={classes.labelInput}
                                sx={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ¿Este envío es urgente?
                              </Text>
                              <Switch
                                color="orangePrimary.6"
                                {...formValues.getInputProps(
                                  `packages.${index}.isUrgent`
                                )}
                                size="md"
                              />
                            </Flex>
                          </Grid.Col>
                        </Grid>
                      </Tabs.Panel>
                      <Tabs.Panel value="truck">
                        <Grid>
                          <Grid.Col md={4} className={classes.inputContainer}>
                            <TextInput
                              label={
                                <Flex
                                  justify="center"
                                  gap={8}
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <TooltipInfo
                                    label={
                                      "Descripción de lo que quieres enviar."
                                    }
                                  />
                                  {"Detalles del envío:"}
                                </Flex>
                              }
                              placeholder="Describí el contenido..."
                              size="md"
                              className={classes.input}
                              classNames={{
                                label: classes.labelInput,
                                error: classes.error,
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.details`
                              )}
                            />
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <NumberInput
                              min={0}
                              onChange={setInsuranceValue}
                              parser={(value) =>
                                value
                                  .replace(/\$\s?|\.(?=\d{3})/g, "")
                                  .replace(/,/g, ".")
                              }
                              formatter={(value) => {
                                const number = parseFloat(value);
                                if (!value || number === 0) return "$ ";
                                return `$ ${value}`.replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  "."
                                );
                              }}
                              placeholder="Valor declarado"
                              size="md"
                              className={classes.input}
                              classNames={{
                                input:
                                  "w-full rounded-md border border-gray-300 px-4 py-2",
                                label: classes.labelInput,
                                error: classes.error,
                              }}
                              {...formValues.getInputProps(
                                `packages.${index}.insuranceValue`
                              )}
                              label={
                                <Flex
                                  justify="space-between"
                                  gap="xxs"
                                  // gap={8}
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <TooltipInfo
                                    label={"Valor de lo que quieras asegurar."}
                                  />
                                  {"Asegurá tu envío:"}
                                </Flex>
                              }
                            />
                          </Grid.Col>

                          <Grid.Col md={4} className={classes.inputContainer}>
                            <Flex gap={8}>
                              <TooltipInfo
                                label={"Marcalo si necesitas un envío urgente."}
                              />
                              <Text
                                className={classes.labelInput}
                                sx={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ¿Este envío es urgente?
                              </Text>
                              <Switch
                                color="orangePrimary.6"
                                {...formValues.getInputProps(
                                  `packages.${index}.isUrgent`
                                )}
                                size="md"
                              />
                            </Flex>
                          </Grid.Col>
                        </Grid>
                      </Tabs.Panel>
                    </Tabs>
                    {/* TABS */}
                  </Grid.Col>
                </Grid>
                {formValues.values.packages.length > 1 && (
                  <Box className={classes.deleteButtonContainer}>
                    <Button
                      onClick={() => handleRemovePackage(index)}
                      variant="outline"
                      className={classes.addButton}
                    >
                      <IconX className={classes.deleteIcon} /> Eliminar paquete
                    </Button>
                  </Box>
                )}
              </PaddingBox>
            </Box>
          );
        })}
        {/* <Box className={classes.addButtonContainer}>
          <Button
            onClick={() => handleAddPackage()}
            variant="outline"
            className={classes.addButton}
          >
            <IconPlus className={classes.addIcon} /> Agregar otro paquete
          </Button>
        </Box> */}
        {/* <ButtonNextStep
          variant="filled"
          w="100%"
          size="lg"
          uppercase
          type="submit"
        >
          Siguiente paso
        </ButtonNextStep> */}
      </form>

      <SenderandRecipientInformationForm
        setSteep={setSteep}
        orders={orders}
        form={formValues}
        data={data}
        typeShipping={typeShipping}
      />
    </Grid>
  );
};
