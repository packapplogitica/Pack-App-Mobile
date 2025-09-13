import React, { useState, useEffect } from "react";
import { Input, Text, Grid } from "@mantine/core";
import argAreaCodes from "../../../../src/data/argAreaCodes.json";

const PhoneInput = ({
  label = "Número de Teléfono",
  placeholder = "Ingrese su número de teléfono",
  className,
  value,
  onChange,
  error,
  disabled,
  myData,
}) => {
  const [formattedNumber, setFormattedNumber] = useState("");

  const formatPhoneNumber = (input) => {
    // Eliminar todos los caracteres no numéricos
    const cleanedNumber = input.replace(/\D/g, "");

    // Limitar a 10 caracteres
    const limitedNumber = cleanedNumber.slice(0, 10);

    // Buscar código de área
    const matchedAreaCode = argAreaCodes.find((code) =>
      limitedNumber.startsWith(code.toString())
    );

    if (
      matchedAreaCode &&
      limitedNumber.length > matchedAreaCode.toString().length
    ) {
      const areaCodePart = `(${matchedAreaCode})`;
      const restOfNumber = limitedNumber.slice(
        matchedAreaCode.toString().length
      );
      return `${areaCodePart} ${restOfNumber}`;
    }

    // Si no hay un código de área completo, devolver el número tal cual
    return limitedNumber;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Eliminar paréntesis, espacios y guiones
    const cleanInput = inputValue.replace(/[\(\)\s-]/g, "");

    // Limitar a 10 caracteres
    const limitedCleanInput = cleanInput.slice(0, 10);

    // Formatear el número
    setFormattedNumber(formatPhoneNumber(inputValue));

    if (onChange) {
      onChange(limitedCleanInput);
    }
  };

  return (
    <div className={className}>
      <Text
        size={18}
        style={{ fontWeight: myData && "500" }}
        color={myData && "#212529"}
      >
        {label}
      </Text>
      <Input
        disabled={disabled}
        value={formattedNumber || value}
        onChange={handleInputChange}
        placeholder={placeholder}
        radius={8}
        size="lg"
        withAsterisk
      />
      {error && (
        <Text
          size="xs"
          color="red"
          mt={4}
          style={{
            fontWeight: 500,
            letterSpacing: 0.2,
            borderRadius: 4,
            background: "#fff0f0",
            padding: "4px 8px",
            display: "inline-block",
          }}
        >
          * El número de teléfono debe tener 10 caracteres contando el código de
          área.
        </Text>
      )}
    </div>
  );
};

export default PhoneInput;
