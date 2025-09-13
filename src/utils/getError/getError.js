export const getErrorMessage = (error) => {
  console.log('el error',error)
    const statusCode = error?.response?.data?.statusCode;
    const defaultMessage = "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.";

    switch (statusCode) {
      // case 400:
      //   return "Solicitud incorrecta. Por favor, verifica los datos ingresados.";
      case 401:
        return "No autorizado. Por favor, inicia sesión.";
      case 403:
        return "Acceso denegado. No tienes permisos para realizar esta acción.";
      case 404:
        return "Recurso no encontrado. Es posible que el elemento que estás buscando no exista.";
      case 409:
        return "Conflicto en la solicitud. Es posible que el recurso ya exista o haya un conflicto de datos.";
      case 422:
        return `Error de validación: ${error?.response?.data?.message.message[0] || "Por favor, revisa los datos ingresados."}`;
      case 500:
        return 'Intentalo en unos minutos';
      default:
        return error?.response?.data?.message?.message || defaultMessage;
    }
  };