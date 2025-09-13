import argAreaCodes from "@/data/argAreaCodes.json";
export const useFormValidation = () => {
  // Campo Vacio
  const emptyValidation = (value) => {
    return value ? null : "El campo no puede estar vacío.";
  };

  // Caracteres minimos
  const minimumCharacters = (value) => {
    return value.length >= 3 ? null : "Como mínimo debe contener 3 caracteres.";
  };

  //Sin numeros
  const noNumbers = (value) => {
    return /\d/.test(value) ? "No puede contener números." : null;
  }

  // Email
  const emailValidation = (value) => {
    return /^\S+@\S+\.\S+$/.test(value) ? null : "Email inválido.";
  };

  // Confirmar email
  const confirmemailValidation = (value, email) => {
    switch (true) {
      case value === "":
        return "El campo esta vacío.";
      case value !== email:
        return "Los correos electrónicos no coinciden.";
      default:
        return null;
    }
  };

  // Codigos de area
  const areaCodeValidation = (value) => {
    return argAreaCodes.includes(Number(value))
      ? null
      : "Código de Area inválido.";
  };

  // Telefono
  const phoneValidation = (value) => {
    const stringValue = String(value); // Convertir el valor a cadena
    console.log(stringValue, stringValue.length < 10, 'es menor que 10')

    return stringValue.length < 10
      ? "El campo debe tener 10 caracteres."
      : null;
  };
  // DNI
  const dniValidation = (value) => {
    return /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(value)
      ? null
      : "DNI inválido.";
  };

  // Passwords
  const signinPasswordValidation = (value) => {
    return value.trim() !== "" ? null : "La contraseña no puede estar vacía.";
  };

  const passwordValidation = (value) => {
    switch (true) {
      case value === "":
        return "La contraseña no puede estar vacía.";
      case value.length < 8:
        return "La contraseña debe tener al menos 8 caracteres.";
      case !/[A-Z]/.test(value):
        return "La contraseña debe contener al menos una letra mayúscula.";
      case /\s/.test(value):
        return "La contraseña no puede contener espacios.";
      default:
        return null;
    }
  };

  // Password confirmation
  const confirmPasswordValidation = (value, formData) => {
    switch (true) {
      case value === "":
        return "El campo no puede estar vacío.";
      case value !== formData.password:
        return "Las contraseñas no coinciden";
      default:
        return null;
    }
  };

  // Presupuesto
  const budgetValidation = (value) => {
    value < 1 ? null : "El monto no puede ser menor a 0";
  };

  // Patentes argentinas:
  const licenceValidation = (value) => {
    return /^[A-Z]{3}[0-9]{3}$|^[A-Z]{2}[0-9]{3}[A-Z]{2}$/.test(value) ? null : "Debe usar el formato: ABC123 ó AB123CD";
  }

  // CBU o CVU
  const accountNumberValidation = (num) => {
    return !(num.length !== 22 || !/^\d+$/.test(num)) ? null : "El número de cuenta debe tener 22 dígitos.";
  }

  const validateEmail = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (emailValidation(value)) return emailValidation(value);
  };

  const validateDni = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (dniValidation(value)) return dniValidation(value);
  };

  /*     const validateAreaCode = (value) => {
      if (emptyValidation(value)) return emptyValidation(value);
      if (areaCodeValidation(value)) return areaCodeValidation(value);
  };
*/


  const validateAreaCode = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (areaCodeValidation(value)) return areaCodeValidation(value);
  };

  return {
    validateEmail,
    validateDni,
    //////
    minimumCharacters,
    noNumbers,
    confirmemailValidation,
    phoneValidation,
    signinPasswordValidation,
    passwordValidation,
    confirmPasswordValidation,
    budgetValidation,
    licenceValidation,
    accountNumberValidation,
    validateAreaCode,
    emptyValidation,
    emailValidation,
    dniValidation
  };
};
