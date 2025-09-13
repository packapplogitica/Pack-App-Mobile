import React from 'react';
import { List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

const RegisterVehiclePopUp = ({ user }) => {
  // Definir las variables del usuario
  const carrierContract = user?.carrierContract;
  const dniCredentials = user?.dniCredentials;

  // Función para renderizar ítems con icono dependiendo de la existencia de la propiedad
  const renderListItem = (label, isCompleted) => (
 
    <List.Item
      icon={
        <ThemeIcon color={isCompleted ? 'teal' : 'red'} size={24} radius="xl">
          {isCompleted ? (
            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
          ) : (
            <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
          )}
        </ThemeIcon>
      }
    >
      {label}
    </List.Item>
  );

  return (
    <>
    <h3> Ponte en contacto con soporte@packapp.com.ar y cumplí los siguientes requisitos:</h3>
    <List
      spacing="xs"
      size="sm"
      center
    >
      <h2>Lo que te falta para poder ofertar</h2>

      {/* Verificar si tiene vehículos registrados */}
      {renderListItem('Suscripción contrato de adhesión como transportista.', carrierContract)}

      {/* Verificar si el usuario está registrado como conductor */}
      {renderListItem('Foto DNI atras,dorso y selfie con el mismo', dniCredentials)}

    </List>
    </>
  );
 
};

export default RegisterVehiclePopUp;
