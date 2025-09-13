import { Grid, Text, TextInput } from "@mantine/core";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";
import { SenderLocationAutocomplete } from "../SenderLocationAutocomplete";

const OriginForm = ({
  secondForm,
  origin,
  setOrigin,
  originMarker,
  handleOriginMapClick,
  onOriginChanged,
  originRef,
  handleOriginChange,
  classes,
  acceptPayment,
  typeShipping,
}) => {
  return (
    <Grid.Col md={6} className={classes.divider}>
      <Grid gutter={25} p={16}>
        <Grid.Col>
          <Text size={20} weight={500}>
            {"Domicilio de Origen:"}
          </Text>
        </Grid.Col>

        <SenderLocationAutocomplete
          origin={origin}
          setOrigin={setOrigin}
          originMarker={originMarker}
          handleOriginMapClick={handleOriginMapClick}
          onOriginChanged={onOriginChanged}
          originRef={originRef}
          handleOriginChange={handleOriginChange}
          secondForm={secondForm}
          classes={classes}
        />
        {acceptPayment && (
          <>
            <Grid.Col>
              <Text size={20} weight={500}>
                {"Datos de Origen:"}
              </Text>
            </Grid.Col>
            {/* Nombre */}
            <Grid.Col>
              <TextInput
                withAsterisk
                size="lg"
                radius={8}
                label="Nombre"
                placeholder="Nombre"
                className={classes.input}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...secondForm.getInputProps("nameSender")}
              // error={secondForm.isTouched("nameSender") ? secondForm.errors.nameSender : null}
              // readOnly
              />
            </Grid.Col>
            {typeShipping !== "express" && (
              <>
                <Grid.Col>
                  <TextInput
                    min={0}
                    withAsterisk
                    size="lg"
                    radius={8}
                    label="DNI"
                    placeholder="DNI"
                    className={classes.input}
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                    }}
                    {...secondForm.getInputProps("dniSender")}
                    hideControls
                    readOnly
                  />
                </Grid.Col>


              </>
            )}

            {/* Email */}
            {/* Email */}
            <Grid.Col>
              <TextInput
                withAsterisk
                radius={8}
                size="lg"
                className={classes.input}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                label="Email"
                placeholder="ejemplo@ejemplo.com"
                {...secondForm.getInputProps("emailSender")}
                autoCapitalize="none"
                type="email"
              />
            </Grid.Col>

            {/* Codigo de area */}
            <Grid.Col>
              <PhoneInput
                label="Número de Teléfono"
                placeholder="Ingrese su número de teléfono"
                className="custom-phone-input"
                value={secondForm.values.phoneSender}
                onChange={(value) =>
                  secondForm.setFieldValue("phoneSender", value)
                }
                error={secondForm.errors.phoneSender}
              />
            </Grid.Col>
          </>
        )}
        {/* TITULO Origen*/}
      </Grid>
    </Grid.Col>
  );
};

export default OriginForm;
