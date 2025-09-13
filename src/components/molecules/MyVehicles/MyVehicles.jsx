import React from 'react'
import { Accordion } from '@mantine/core';

const MyVehicles = ({profile}) => {
    const vehicles = profile?.current?.vehicles
    const items = vehicles.map((vehicle) => (
        <Accordion.Item key={vehicle.id +1} value={vehicle.brand}>
          <Accordion.Control>{vehicle.brand}</Accordion.Control>
          <Accordion.Panel>Modelo: {vehicle.model}</Accordion.Panel>
          <Accordion.Panel>Año: {vehicle.year}</Accordion.Panel>
          <Accordion.Panel>Color: {vehicle.color}</Accordion.Panel>
          <Accordion.Panel>Patente: {vehicle.patent}</Accordion.Panel>
        </Accordion.Item>
      ));
    
      return (
     <Accordion variant="separated" defaultValue="Apples">
      {items}
    </Accordion>
      );
}

export default MyVehicles