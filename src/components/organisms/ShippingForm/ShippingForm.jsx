import { useState } from 'react';
import {
  Container,
  Title,
  Button,
  Group,
  TextInput,
  Paper,
  Stack,
  Text,
  Center,
  rem
} from '@mantine/core';
import { IconPackage, IconMotorbike } from '@tabler/icons-react';

export default function ShippingForm() {
  const [selected, setSelected] = useState('express');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [quote, setQuote] = useState('');

  return (
    <div
      style={{
        // background: 'white', // reemplaza con tu imagen o Next.js Image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >


      {/* Formulario */}
      <Paper shadow="xl" radius="md" p="xl" withBorder w="100%" maw={400}>
        <Stack>
          <TextInput
            label="Domicilio de origen"
            placeholder="Ingresá el domicilio de origen"
            value={origin}
            onChange={(e) => setOrigin(e.currentTarget.value)}
          />
          <TextInput
            label="Domicilio de destino"
            placeholder="Ingresá el domicilio de destino"
            value={destination}
            onChange={(e) => setDestination(e.currentTarget.value)}
          />
          <TextInput
            label="Cotización"
            placeholder="Ej: $1.000"
            value={quote}
            onChange={(e) => setQuote(e.currentTarget.value)}
          />
          <Button fullWidth color="orange" radius="md">
            Aceptar
          </Button>
        </Stack>
      </Paper>
    </div>
  );
}
