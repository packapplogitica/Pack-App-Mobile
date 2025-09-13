export const useDate = () => {

  const days = [
    {
      num: "01",
      name: "lunes",
      nick: "lun",
      min: "l",
    },
    {
      num: "02",
      name: "martes",
      nick: "mar",
      min: "m",
    },
    {
      num: "03",
      name: "miércoles",
      nick: "mar",
      min: "x",
    },
    {
      num: "04",
      name: "jueves",
      nick: "jue",
      min: "j",
    },
    {
      num: "05",
      name: "viernes",
      nick: "vie",
      min: "v",
    },
    {
      num: "06",
      name: "sábado",
      nick: "sab",
      min: "s",
    },
    {
      num: "07",
      name: "domingo",
      nick: "dom",
      min: "d",
    },
  ];

  const months = [
    {
      num: "01",
      name: "enero",
      nick: "ene",
    },
    {
      num: "02",
      name: "febrero",
      nick: "feb",
    },
    {
      num: "03",
      name: "marzo",
      nick: "mar",
    },
    {
      num: "04",
      name: "abril",
      nick: "abr",
    },
    {
      num: "05",
      name: "mayo",
      nick: "may",
    },
    {
      num: "06",
      name: "junio",
      nick: "jun",
    },
    {
      num: "07",
      name: "julio",
      nick: "jul",
    },
    {
      num: "08",
      name: "agosto",
      nick: "ago",
    },
    {
      num: "09",
      name: "septiembre",
      nick: "sep",
    },
    {
      num: "10",
      name: "octubre",
      nick: "oct",
    },
    {
      num: "11",
      name: "noviembre",
      nick: "nov",
    },
    {
      num: "12",
      name: "diciembre",
      nick: "dic",
    },
  ];

  const getDay = (date) => {
    const newDate = new Date(date);
    const dayIndex = newDate.getDay();
    return days[dayIndex];
  };

  const getMonth = (date) => {
    const newDate = new Date(date);
    const monthIndex = newDate.getMonth();
    return months[monthIndex];
  };

  const dateFormatter = (dateInput) => {
    let date;

    // Si es un string, intentar parsearlo como fecha
    if (typeof dateInput === 'string') {
      date = new Date(dateInput);
    } else if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      return 'Fecha inválida';
    }

    if (isNaN(date.getTime())) {
      return 'Fecha inválida';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // los meses van de 0 a 11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  function formatCustomDateOrders(dateString) {
    // Dividimos el string por la Z
    const fechaUTC = new Date(dateString);

    const options = {
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const diaFormateado = new Intl.DateTimeFormat(options).format(fechaUTC);
    return diaFormateado
  }


  const fullDateFormatter = (isoDateString) => {
    const newDate = new Date(isoDateString);
    const day = getDay(isoDateString)?.name;
    const date = newDate.getDate()
    const month = getMonth(isoDateString)?.name;
    const year = newDate.getFullYear();

    return `${day}, ${date} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
  }

  return { dateFormatter, fullDateFormatter, formatCustomDateOrders };
};
