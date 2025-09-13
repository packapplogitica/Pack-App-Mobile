import { useRouter } from "next/router";
import { IconMail, IconPackage, IconDimensions } from "@tabler/icons-react";
import Icons from "../icons";

const useStaticData = () => {
  const { basePath, pathname } = useRouter();

  const defaultData = {
    packagesType: [
      // Alto, largo y ancho
      {
        value: "small",
        name: "Pequeño",
        description: "Alto: 30cm, Largo: 30cm, Ancho: 30cm, Peso: 2kg",
        height: 30,
        length: 30,
        width: 30,
        weight: 2000,
        icon: <IconPackage />,
        iconSize: 22,
      },
      {
        value: "medium",
        name: "Mediano",
        description: "Alto: 40cm, Largo: 40cm, Ancho: 34cm, Peso: 15kg",
        height: 40,
        length: 40,
        width: 40,
        weight: 15000,
        icon: <IconPackage />,
        iconSize: 33,
      },
      {
        value: "large",
        name: "Grande",
        description: "Alto: 50cm, Largo: 50cm, Ancho: 50cm, Peso: 25kg",
        height: 50,
        length: 50,
        width: 50,
        weight: 25000,
        icon: <IconPackage />,
        iconSize: 44,
      },
      {
        value: "custom",
        name: "Personalizado",
        description: "Ingresa las medidas",
        height: undefined,
        length: undefined,
        width: undefined,
        weight: undefined,
        icon: <IconDimensions />,
        iconSize: 44,
      },
    ],
    layout: {
      header: {
        mainLinks: [
          {
            label: "Inicio",
            link: "/",
          },
          {
            label: "Nosotros",
            link: "/nosotros",
          },
          {
            label: "Ayuda",
            link: "/faq",
          },
          {
            label: "Seguimiento",
            link: "/tracking",
          },
        ],
        secondaryLinks: [
          {
            label: "Ingreso",
            link: "/signin",
          },
          {
            label: "Registro",
            link: "/registration",
          },
        ],
        userItems: [
          {
            label: "Inicio",
            link: "/",
          },
          {
            label: "Mi Perfil",
            link: "/perfil",
          },
          {
            label: "Mis Ofertas",
            link: "/mis-ofertas",
          },
          {
            label: "Mis Paquetes",
            link: "/mis-paquetes",
          },

          {
            label: "Ayuda & Soporte",
            link: "/support",
          },

          {
            label: "Log Out",
            isButton: true,
          },
        ],

        logo: `${basePath}/logo/${
          pathname === "/nosotros" ? "logo" : "logo2"
        }.svg`,
      },
      footer: {
        logo: `${basePath}/logo/logo.svg`,

        mainLinks: [
          {
            title: "Servicios PackApp",
            links: [
              {
                label: "Inicia Sesión",
                link: "/signin",
              },
              {
                label: "Registrate",
                link: "/registration",
              },
              {
                label: "Contacto",
                link: "/support",
              },
            ],
          },
          {
            title: "Obtén Ayuda",
            links: [
              {
                label: "Soporte",
                link: "/support",
              },
              {
                label: "FAQ",
                link: "/faq",
              },
              {
                label: "Términos y Condiciones",
                link: "/terminos-condiciones",
              },
            ],
          },
        ],
        copy: `@ ${new Date().getFullYear()} PACKAPP, inc.`,
      },
    },
    contactPage: {
      data: {
        title: "Contacto",
        content: "¡Hola! contactanos por cualquier duda",
      },
    },
    signUpPage: {
      data: {
        title: "¡Bienvenido a PackApp! ",
        content:
          "Regístrate y comienza a descubrir los beneficios de enviar con PackApp",
      },

      // cards: [
      //   {
      //     icon: "dispatch",
      //     title: "Despacha",
      //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //     link: "despachante",
      //   },
      //   {
      //     icon: "transports",
      //     title: "Transporta",
      //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //     link: "transportista",
      //   },
      // ],
    },
    signInPage: {
      data: {
        title: "Inicio de Sesión",
        content:
          "¡Hola, te echábamos de menos! Ingresa a tu cuenta de PackApp con tu e-mail y contraseña.",
      },
    },
    forgotPasswordPage: {
      data: {
        title: "Recuperar Contraseña",
        content:
          "¡Te estabamos esperando! Recuperá tu cuenta de PackApp con tu e-mail.",
      },
    },
    faqPage: {
      articles: [
        {
          name: "Uso de la plataforma",
          description: "Uso de la plataforma",
          cards: [
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
            {
              title: "Titutlo 1",
              description: "Uso de la plataforma",
            },
          ],
        },
      ],
    },
    homePage: {
      sortedItems: [
        {
          label: "Antigüos",
          value: "old",
        },
        {
          label: "Nuevos",
          value: "new",
        },
        // {
        //   label: "Menor Distancia",
        //   value: "nearby",
        // },
        // {
        //   label: "Mayor Distancia",
        //   value: "distant",
        // },
      ],

      categories: [
        { label: "Todos los Paquetes", value: "todos" },
        { label: "Envios urgentes", value: "envios-urgentes" },
        { label: "Pequeños", value: "pequenos" },
        { label: "Medianos", value: "medianos" },
        { label: "Grandes", value: "grandes" },
        { label: "Personalizados", value: "custom" },
        { label: "Sobres", value: "envelope" },
        { label: "Fragil", value: "fragil" },
        { label: "No fragil", value: "no-fragil" },
        { label: "Mostrar Todos", value: "reload" }, 
      ],
    },
    profilePage: {
      header: {
        title: "Bienvenido a tu cuenta,",
        content: "Descubre los beneficios de usar PackApp",
      },
      stylableLinksBlock: {
        header: {
          title: "Completa tus datos para un envío seguro ",
          content: "Tu información se encontrara segura con nosotros.",
        },
        cat: {
          label: "Set it up",
          link: "/",
        },
      },
      user: {
        // primaryLinks: [
        //   {
        //     label: "Cambiar Contraseña",
        //     link: "/",
        //   },
        // ],
        secondaryLinks: [
          // {
          //   label: "Quiero ser transportista",
          //   link: "/",
          // },
          // {
          //   label: "Configuración",
          //   link: "/",
          // },
          {
            label: "Soporte",
            link: "/support",
          },
          {
            label: "Salir",
            isButton: true,
          },
        ],
      },
    },
    nosotrosPage: {
      socialLinks: [
        {
          label: "instagram",
          link: "https://www.instagram.com/packappar/",
        },
        // {
        //   label: "facebook",
        //   link: "/",
        // },
        {
          label: "linkedin",
          link: "https://www.linkedin.com/company/packapp-ar/",
        },
      ],
      hero: {
        header: {
          title: "Tu forma de enviar",
          span: "cambiará pronto",
          content: "Envíos eficientes y sin estrés.",
        },
        background: `${basePath}/assets/banner2.svg`,
        truckImage: `${basePath}/assets/truck2.svg`,
        clockImage: `${basePath}/assets/landingClock.svg`,
        cats: [
          {
            label: "Enviar paquete",
            link: "/",
            variant: "filled",
          },
          {
            label: "Unirme al equipo",
            link: "/",
            variant: "outline",
          },
        ],
      },

      usePackApp: {
        title: "¿Por que usar PackApp?",
        cards: [
          {
            title: "Transportistas",
            content:
              "¿Deseas hacer dinero extra? Se parte de nuestra comunidad, filtra cargas y elige a tus clientes llevando sus paquetes a destino.",
            icon: Icons.rocketWorld,
          },
          {
            title: "Negocios y Empresas",
            content:
              "¿Buscas simplificar tus envíos? Envía múltiples paquetes al mismo tiempo y elige el precio más conveniente.",
            icon: Icons.suitCase,
          },
          {
            title: "Particulares",
            content:
              "Nuestro servicio de envío rápido y amigable está diseñado para personas como tú. Sin estrés, sin complicaciones, solo entregas seguras y a tiempo.",
            icon: Icons.businessMan,
          },
        ],
      },

      howItWorks: {
        cards: [
          {
            title: "Para particulares",
            subTitle: "Ahorra dinero y elige a tu transportista ideal.",
            content:
              "Siéntate y relájate mientras tu artículo es entregado de forma segura por el transportista que hayas elegido. Ofrecemos una opción de entrega más rápida, flexible y escalable que los transportistas tradicionales y las empresas de mensajería del mercado.",
            image: "particulares.jpeg",
          },
          // ¿Querés hacer crecer tu negocio y reputación profesional? consultar sobre esta pregunta si es necesaria, hace muy largo el texto e irrelevante
          {
            title: "Transportistas Profesionales",
            subTitle:
              "Nuevas oportunidades laborales y clientes de todas las provincias de Argentina.",
            content:
              "¿Querés hacer crecer tu negocio y reputación profesional?, conecta con una amplia base de clientes en todo el país. Expandí tu alcance geográfico y diversificá tus fuentes de ingresos de manera significativa. PackApp te ofrece la posibilidad de fortalecer tu presencia en el mercado del transporte.",
            image: "profesionales.jpeg",
          },
          {
            title: "Transportistas Ocasionales",
            subTitle:
              "Ofrece tu presupuesto y puja por el envío que quieras realizar.",
            content:
              "Conseguí ingresos adicionales de manera esporádica, nuestra plataforma ofrece la flexibilidad de trabajar según tu propio horario y disponibilidad.",
            image: "ocasionales.jpeg",
          },
        ],
      },
      nationalShipingService: {
        title: (
          <>
            ¿Listo para llevar tus <br></br> envíos al{" "}
            <span style={{ color: "#F27405" }}>siguiente nivel</span>?
          </>
        ),
        content: (
          <>
            Regístrate ahora y obtén beneficios por dos meses. La comunidad de
            Packapp te <br></br> está esperando para descubrir junto a vos un
            mundo de oportunidades.
          </>
        ),
        cards: [
          {
            title: "Empresas",
            content:
              " Con nuestra experiencia en logística empresarial, te ofrecemos entregas confiables y rápidas para mantener a tus clientes satisfechos. ",
            image: "enterprise",
          },
          {
            title: "Negocios pequeños",
            content:
              "¿Buscas simplificar tus envíos? Nosotros te respaldamos. Con nuestra ayuda, puedes centrarte en lo que más importa: hacer crecer tu negocio.",
            image: "smallBussiness",
          },
          {
            title: "Particulares",
            content:
              "Nuestro servicio de envío rápido y amigable está diseñado para personas como tú. Sin estrés, sin complicaciones, solo entregas seguras y a tiempo.",
            image: "particulares",
          },
        ],

        description:
          "Relájate y deja que el equipo de Packapp haga todo el trabajo ",
      },
    },
  };

  // https://nuestrosautos.com.ar/lista-de-precios-autos
  const transports = [
    {
      type: "Automotor",
      id: 1,
      items: [
        {
          name: "Agrale",
          models: [
            {
              name: "Marrua",
              id: 1,
            },
            {
              name: "Agrale",
              id: 2,
            },
            {
              name: "6000",
              id: 744,
            },
            {
              name: "7500",
              id: 745,
            },
            {
              name: "8500",
              id: 746,
            },
            {
              name: "8700",
              id: 747,
            },
            {
              name: "9200",
              id: 748,
            },
            {
              name: "10000",
              id: 749,
            },
            {
              name: "13000",
              id: 750,
            },
            {
              name: "14000",
              id: 751,
            },
          ],
        },
        {
          name: "Alfa Romeo",
          models: [
            {
              name: "147",
              id: 3,
            },
            {
              name: "159",
              id: 4,
            },
            {
              name: "Brera",
              id: 5,
            },
            {
              name: "Giulia",
              id: 6,
            },
            {
              name: "Giulietta",
              id: 7,
            },
            {
              name: "Gt",
              id: 8,
            },
            {
              name: "Mito",
              id: 9,
            },
            {
              name: "Spider",
              id: 10,
            },
            {
              name: "Stelvio",
              id: 11,
            },
            {
              name: "Alfa Romeo",
              id: 12,
            },
          ],
        },
        {
          name: "Audi",
          models: [
            {
              name: "A1",
              id: 13,
            },
            {
              name: "A3",
              id: 14,
            },
            {
              name: "A4",
              id: 15,
            },
            {
              name: "A5",
              id: 16,
            },
            {
              name: "A6",
              id: 17,
            },
            {
              name: "A7",
              id: 18,
            },
            {
              name: "A8",
              id: 19,
            },
            {
              name: "Allroad ",
              id: 20,
            },
            {
              name: "E-tron",
              id: 21,
            },
            {
              name: "Q 2",
              id: 22,
            },
            {
              name: "Q 3",
              id: 23,
            },
            {
              name: "Q 5",
              id: 24,
            },
            {
              name: "Q 7",
              id: 25,
            },
            {
              name: "Q 8",
              id: 26,
            },
            {
              name: "R8",
              id: 27,
            },
            {
              name: "Rs3",
              id: 28,
            },
            {
              name: "Rs4",
              id: 29,
            },
            {
              name: "Rs5",
              id: 30,
            },
            {
              name: "Rs6",
              id: 31,
            },
            {
              name: "Rs7",
              id: 32,
            },
            {
              name: "Rs Q8",
              id: 33,
            },
            {
              name: "Rs E-tron",
              id: 34,
            },
            {
              name: "4p Gt Quattro",
              id: 35,
            },
            {
              name: "S",
              id: 36,
            },
            {
              name: "Tt",
              id: 37,
            },
            {
              name: "Audi",
              id: 38,
            },
            {
              name: "4p 2,0 Tfsi 40 190cv Advance  S Tronic",
              id: 890,
            },
            {
              name: "5p 1,4 Tfsi Sportback 35 150cv 8trip",
              id: 891,
            },
            {
              name: "Q 5 Sportback",
              id: 997,
            },
            {
              name: "5p 2,0 Tfsi 245cv Quattro S Tronic Hybrid Advance",
              id: 998,
            },
            {
              name: "5p 2,0 Tfsi 245cv Quattro S Tronic Hybrid S-line",
              id: 999,
            },
            {
              name: "5p 2,0 Tfsi 245cv Quattro S-tronic Hybrid Advance",
              id: 1044,
            },
            {
              name: "5p 2,0 Tfsi 245cv Quattro S-tronic Hybrid S-line",
              id: 1045,
            },
          ],
        },
        {
          name: "Baic",
          models: [
            {
              name: "D20",
              id: 39,
            },
            {
              name: "Ex 260 Crossover Electric",
              id: 40,
            },
            {
              name: "Senova Elite",
              id: 41,
            },
            {
              name: "X25 Crossover",
              id: 42,
            },
            {
              name: "X35 Crossover",
              id: 43,
            },
            {
              name: "X55 Crossover",
              id: 44,
            },
            {
              name: "X65 Crossover",
              id: 45,
            },
            {
              name: "Baic",
              id: 46,
            },
            {
              name: "5p 1,5 T At Ii 2023",
              id: 935,
            },
            {
              name: "Bj40 Plus",
              id: 1046,
            },
            {
              name: "5p 2,0 T 8at 4x4",
              id: 1047,
            },
            {
              name: "5p 1,5 T Cvt Fashion",
              id: 1048,
            },
            {
              name: "5p 1,5 T Cvt Luxury",
              id: 1049,
            },
          ],
        },
        {
          name: "Bmw",
          models: [
            {
              name: "116",
              id: 47,
            },
            {
              name: "118",
              id: 48,
            },
            {
              name: "120",
              id: 49,
            },
            {
              name: "125",
              id: 50,
            },
            {
              name: "130",
              id: 51,
            },
            {
              name: "135",
              id: 52,
            },
            {
              name: "218 I",
              id: 53,
            },
            {
              name: "220 I",
              id: 54,
            },
            {
              name: "235 I",
              id: 55,
            },
            {
              name: "318",
              id: 56,
            },
            {
              name: "320",
              id: 57,
            },
            {
              name: "320 I",
              id: 58,
            },
            {
              name: "323",
              id: 59,
            },
            {
              name: "325",
              id: 60,
            },
            {
              name: "328",
              id: 61,
            },
            {
              name: "330",
              id: 62,
            },
            {
              name: "335",
              id: 63,
            },
            {
              name: "428 I",
              id: 64,
            },
            {
              name: "430 I",
              id: 65,
            },
            {
              name: "435 I",
              id: 66,
            },
            {
              name: "440 I",
              id: 67,
            },
            {
              name: "525",
              id: 68,
            },
            {
              name: "528",
              id: 69,
            },
            {
              name: "530",
              id: 70,
            },
            {
              name: "530 I",
              id: 71,
            },
            {
              name: "535",
              id: 72,
            },
            {
              name: "535 I",
              id: 73,
            },
            {
              name: "540 I",
              id: 74,
            },
            {
              name: "550",
              id: 75,
            },
            {
              name: "640",
              id: 76,
            },
            {
              name: "640 I",
              id: 77,
            },
            {
              name: "650",
              id: 78,
            },
            {
              name: "650 I",
              id: 79,
            },
            {
              name: "750",
              id: 80,
            },
            {
              name: "750 I",
              id: 81,
            },
            {
              name: "M1",
              id: 82,
            },
            {
              name: "M2",
              id: 83,
            },
            {
              name: "M3",
              id: 84,
            },
            {
              name: "M4",
              id: 85,
            },
            {
              name: "M5",
              id: 86,
            },
            {
              name: "M6",
              id: 87,
            },
            {
              name: "M135i",
              id: 88,
            },
            {
              name: "M140i",
              id: 89,
            },
            {
              name: "M235i",
              id: 90,
            },
            {
              name: "M240i",
              id: 91,
            },
            {
              name: "M340i",
              id: 92,
            },
            {
              name: "M440i",
              id: 93,
            },
            {
              name: "M850i",
              id: 94,
            },
            {
              name: "X1",
              id: 95,
            },
            {
              name: "X2",
              id: 96,
            },
            {
              name: "X3",
              id: 97,
            },
            {
              name: "X4",
              id: 98,
            },
            {
              name: "X5",
              id: 99,
            },
            {
              name: "X6 ",
              id: 100,
            },
            {
              name: "X7",
              id: 101,
            },
            {
              name: "Z4",
              id: 102,
            },
            {
              name: "Bmw",
              id: 103,
            },
            {
              name: "Coupe 2,0 T 8at Advantage 2023",
              id: 915,
            },
            {
              name: "Gran Coupe 2,0 T Sportline 8at 2023",
              id: 916,
            },
            {
              name: "330e",
              id: 936,
            },
            {
              name: "4p 2,0 T Sportline ",
              id: 937,
            },
            {
              name: "Coupe Competition Mrace Track 510cv",
              id: 1000,
            },
            {
              name: "5p 1,8 I Sdrive Xline",
              id: 1001,
            },
            {
              name: "5p 2,0 I Sdrive Xline",
              id: 1002,
            },
            {
              name: "5p 2,0 I Sdrive Black Edition",
              id: 1003,
            },
            {
              name: "5p 3,0 I Xdrive Lci Xline 292cv",
              id: 1004,
            },
            {
              name: "5p 4,0 I Xdrive Msportpro",
              id: 1005,
            },
          ],
        },
        {
          name: "Changan",
          models: [
            {
              name: "Cs15",
              id: 104,
            },
            {
              name: "Cs75",
              id: 105,
            },
            {
              name: "M",
              id: 106,
            },
            {
              name: "Md",
              id: 107,
            },
            {
              name: "201 Cargo Refrigerado",
              id: 108,
            },
            {
              name: "Changan",
              id: 109,
            },
          ],
        },
        {
          name: "Chery",
          models: [
            {
              name: "Arrizo 5",
              id: 110,
            },
            {
              name: "Face",
              id: 111,
            },
            {
              name: "Fulwin",
              id: 112,
            },
            {
              name: "Qq",
              id: 113,
            },
            {
              name: "Skin",
              id: 114,
            },
            {
              name: "Tiggo",
              id: 115,
            },
            {
              name: "Tiggo 2",
              id: 116,
            },
            {
              name: "Tiggo 3",
              id: 117,
            },
            {
              name: "Tiggo 4",
              id: 118,
            },
            {
              name: "Tiggo 5",
              id: 119,
            },
            {
              name: "Tiggo 8",
              id: 120,
            },
            {
              name: "5p 1,6 T 4x2 Luxury Cvt Pro Adas",
              id: 121,
            },
            {
              name: "Chery",
              id: 122,
            },
          ],
        },
        {
          name: "Chevrolet",
          models: [
            {
              name: "Agile",
              id: 123,
            },
            {
              name: "Astra",
              id: 124,
            },
            {
              name: "Aveo",
              id: 125,
            },
            {
              name: "Blazer",
              id: 126,
            },
            {
              name: "Camaro Ss",
              id: 127,
            },
            {
              name: "Captiva",
              id: 128,
            },
            {
              name: "Celta",
              id: 129,
            },
            {
              name: "Classic",
              id: 130,
            },
            {
              name: "Cobalt",
              id: 131,
            },
            {
              name: "Corsa",
              id: 132,
            },
            {
              name: "Corvette",
              id: 133,
            },
            {
              name: "Cruze",
              id: 134,
            },
            {
              name: "Equinox",
              id: 135,
            },
            {
              name: "Joy",
              id: 136,
            },
            {
              name: "Meriva",
              id: 137,
            },
            {
              name: "Montana Pick - Up",
              id: 138,
            },
            {
              name: "Onix",
              id: 139,
            },
            {
              name: "Prisma",
              id: 140,
            },
            {
              name: "S-10 Pick - Up",
              id: 141,
            },
            {
              name: "Sonic",
              id: 142,
            },
            {
              name: "Spark",
              id: 143,
            },
            {
              name: "Spin",
              id: 144,
            },
            {
              name: "Tracker",
              id: 145,
            },
            {
              name: "Trailblazer",
              id: 146,
            },
            {
              name: "Vectra ",
              id: 147,
            },
            {
              name: "Zafira ",
              id: 148,
            },
            {
              name: "Chevrolet",
              id: 149,
            },
            {
              name: "D/c 1,2 T Ltz At",
              id: 892,
            },
            {
              name: "D/c 1,2 T Premier At",
              id: 893,
            },
            {
              name: "D/c 2,8 Td Midnight Ss At 4x4 2024",
              id: 1050,
            },
            {
              name: "5p 1,2 T 6at Premier 170 2024",
              id: 1070,
            },
            {
              name: "5p 1,2 T 6at Rs",
              id: 1071,
            },
          ],
        },
        {
          name: "Chrysler",
          models: [
            {
              name: "300",
              id: 150,
            },
            {
              name: "Caravan",
              id: 151,
            },
            {
              name: "Pt Cruiser",
              id: 152,
            },
            {
              name: "Town & Country",
              id: 153,
            },
            {
              name: "Chrysler",
              id: 154,
            },
          ],
        },
        {
          name: "Citroen",
          models: [
            {
              name: "Berlingo",
              id: 155,
            },
            {
              name: "C 3",
              id: 156,
            },
            {
              name: "5p 1,2 82 Pure Tech Feel Look",
              id: 157,
            },
            {
              name: "5p 1,2 Feel Design",
              id: 158,
            },
            {
              name: "5p 1,6 Vti 115 Fell 6at Pack Look",
              id: 159,
            },
            {
              name: "5p 1,6 Vti 115 Fell 6at Pack Look Bitono ",
              id: 160,
            },
            {
              name: "5p 1,6 Vti Fell At Pk Desing",
              id: 161,
            },
            {
              name: "5p 1,6 Vti Fell At Pk Desing Bitono",
              id: 162,
            },
            {
              name: "C 3 Aircross",
              id: 163,
            },
            {
              name: "C 3 Picasso",
              id: 164,
            },
            {
              name: "C 4",
              id: 165,
            },
            {
              name: "C 4 Aircross",
              id: 166,
            },
            {
              name: "C 4 Cactus",
              id: 167,
            },
            {
              name: "5p 1,6 Vti 115 Feel Pack Look",
              id: 168,
            },
            {
              name: "5p 1,6 Vti 115 Feel Pack Eat6 Look",
              id: 169,
            },
            {
              name: "5p 1,6 Vti 115 Feel 2023",
              id: 170,
            },
            {
              name: "C 4 Lounge",
              id: 171,
            },
            {
              name: "C 4 Picasso",
              id: 172,
            },
            {
              name: "C 4 Grand Picasso",
              id: 173,
            },
            {
              name: "C 4 Spacetourer",
              id: 174,
            },
            {
              name: "C 4 Grand Spacetourer",
              id: 175,
            },
            {
              name: "C 5",
              id: 176,
            },
            {
              name: "C 5 Aircross",
              id: 177,
            },
            {
              name: "C 6",
              id: 178,
            },
            {
              name: "C-elysÉe",
              id: 179,
            },
            {
              name: "Jumper",
              id: 180,
            },
            {
              name: "Jumpy",
              id: 181,
            },
            {
              name: "Spacetourer",
              id: 182,
            },
            {
              name: "Xsara Picasso",
              id: 183,
            },
            {
              name: "Citroen",
              id: 184,
            },
            {
              name: "5p 1,6 Vti 115 Feel At 2023",
              id: 894,
            },
            {
              name: "5p 1,6 Vti 115 Feel + At 2023",
              id: 895,
            },
            {
              name: "5p 1,6 Vti 115 Feel + At Bitono 2023",
              id: 896,
            },
            {
              name: "5p 1,6 Thp 165 Shine Eat6 2023",
              id: 897,
            },
            {
              name: "5p 1,6 Thp 165 Shine Eat6 Bitono 2023",
              id: 898,
            },
            {
              name: "5p 1,6 Thp 165 Noir Eat6",
              id: 956,
            },
            {
              name: "4p 2,0 Hdi X",
              id: 1006,
            },
            {
              name: "5p 1,6 Vti 115 Feel Pack E6at Look",
              id: 1051,
            },
            {
              name: "5p 1,6 Vti Live 2024",
              id: 1072,
            },
            {
              name: "5p 1,6 Vti Feel Pk 2024",
              id: 1073,
            },
            {
              name: "5p 1,6 Vti Feel 7p 2024",
              id: 1074,
            },
            {
              name: "5p T200 Shine Cvt 2024",
              id: 1075,
            },
            {
              name: "5p T200 Shine Cvt Bitono 2024",
              id: 1076,
            },
            {
              name: "5p T200 Shine Cvt 7p 2024",
              id: 1077,
            },
            {
              name: "5p T200 Shine Cvt 7p Bitono 2024",
              id: 1078,
            },
          ],
        },
        {
          name: "Dfsk",
          models: [
            {
              name: "Serie C",
              id: 185,
            },
            {
              name: "Serie K",
              id: 186,
            },
            {
              name: "Dfsk",
              id: 187,
            },
          ],
        },
        {
          name: "Dodge",
          models: [
            {
              name: "Journey",
              id: 188,
            },
            {
              name: "Dodge",
              id: 189,
            },
          ],
        },
        {
          name: "Ds Automobiles",
          models: [
            {
              name: "Ds 3",
              id: 190,
            },
            {
              name: "Ds 3 Crossback",
              id: 191,
            },
            {
              name: "Ds 4",
              id: 192,
            },
            {
              name: "Ds 7",
              id: 193,
            },
            {
              name: "5p 1,6 T 215 8at Bastille",
              id: 194,
            },
            {
              name: "5p 1,6 T 215 8at Rivoli",
              id: 195,
            },
            {
              name: "Ds 7 Crossback",
              id: 196,
            },
            {
              name: "Ds 9",
              id: 197,
            },
            {
              name: "Ds Automobiles",
              id: 198,
            },
          ],
        },
        {
          name: "Faw",
          models: [
            {
              name: "Actis",
              id: 199,
            },
            {
              name: "T33 Bestune",
              id: 200,
            },
            {
              name: "5p 1,2 T Dct7 ",
              id: 201,
            },
            {
              name: "X 40",
              id: 202,
            },
            {
              name: "Faw",
              id: 203,
            },
          ],
        },
        {
          name: "Ferrari",
          models: [
            {
              name: "California ",
              id: 204,
            },
            {
              name: "California T",
              id: 205,
            },
            {
              name: "F 8 Tributo",
              id: 206,
            },
            {
              name: "F 430",
              id: 207,
            },
            {
              name: "F 488 ",
              id: 208,
            },
            {
              name: "F 599",
              id: 209,
            },
            {
              name: "F 612",
              id: 210,
            },
            {
              name: "F 812 ",
              id: 211,
            },
            {
              name: "Ferrari",
              id: 212,
            },
          ],
        },
        {
          name: "Fiat",
          models: [
            {
              name: "500",
              id: 213,
            },
            {
              name: "500 L",
              id: 214,
            },
            {
              name: "500 X",
              id: 215,
            },
            {
              name: "Argo",
              id: 216,
            },
            {
              name: "Bravo",
              id: 217,
            },
            {
              name: "Cronos",
              id: 218,
            },
            {
              name: "4p 1,3 Like Gse 2023",
              id: 219,
            },
            {
              name: "4p 1,3 Drive Gse Pack Plus 2023",
              id: 220,
            },
            {
              name: "4p 1,3 Stile Gse 2023",
              id: 221,
            },
            {
              name: "DoblÓ",
              id: 222,
            },
            {
              name: "DoblÓ Cargo",
              id: 223,
            },
            {
              name: "Ducato ",
              id: 224,
            },
            {
              name: "Fiorino",
              id: 225,
            },
            {
              name: "Fiorino Qubo",
              id: 226,
            },
            {
              name: "Grand Siena",
              id: 227,
            },
            {
              name: "Idea",
              id: 228,
            },
            {
              name: "Linea",
              id: 229,
            },
            {
              name: "Mobi",
              id: 230,
            },
            {
              name: "Palio",
              id: 231,
            },
            {
              name: "Pulse",
              id: 232,
            },
            {
              name: "5p 1,0 T Audace Cvt",
              id: 233,
            },
            {
              name: "Punto",
              id: 234,
            },
            {
              name: "Qubo",
              id: 235,
            },
            {
              name: "Siena",
              id: 236,
            },
            {
              name: "Stilo",
              id: 237,
            },
            {
              name: "Strada Pick - Up",
              id: 238,
            },
            {
              name: "D/c 1,3 Fire Ranch Cvt",
              id: 239,
            },
            {
              name: "Tipo",
              id: 240,
            },
            {
              name: "Toro Pick Up",
              id: 241,
            },
            {
              name: "D/c 2,0 16v Td Multijet Ranch 4x4 9at 2023",
              id: 242,
            },
            {
              name: "Uno",
              id: 243,
            },
            {
              name: "Uno Cargo",
              id: 244,
            },
            {
              name: "Fiat",
              id: 245,
            },
            {
              name: "D/c 1,3 Fire Fly Gse Volcano Cvt",
              id: 917,
            },
            {
              name: "D/c 1,4 Fire Freedom Tech",
              id: 938,
            },
            {
              name: "D/c 1,8 Freedom S-design 4x2 6at 2023",
              id: 939,
            },
            {
              name: "4p 1,3 Precision Gse Cvt 2023",
              id: 957,
            },
            {
              name: "D/c 1,8 Freedom 4x2 6at S-design",
              id: 958,
            },
            {
              name: "D/c 1,4 Fire Freedom 2024",
              id: 1052,
            },
            {
              name: "D/c 1,3 Fire Volcano Cvt 2024",
              id: 1053,
            },
            {
              name: "D/c 1,3 Fire Ranch Cvt 2024",
              id: 1054,
            },
            {
              name: "Fastback",
              id: 1079,
            },
            {
              name: "5p 1,3 Turbo 270 At6",
              id: 1080,
            },
            {
              name: "5p 1,3 Turbo 270 At6 Abarth",
              id: 1081,
            },
            {
              name: "D/c T200 Ultra Cvt 2025",
              id: 1082,
            },
          ],
        },
        {
          name: "Ford",
          models: [
            {
              name: "Bronco Sport",
              id: 246,
            },
            {
              name: "Courier",
              id: 247,
            },
            {
              name: "Ecosport ",
              id: 248,
            },
            {
              name: "Ecosport Kinetic Design Attraction",
              id: 249,
            },
            {
              name: "F-100 Pick - Up",
              id: 250,
            },
            {
              name: "F-150 Pick - Up ",
              id: 251,
            },
            {
              name: "Fiesta",
              id: 252,
            },
            {
              name: "Fiesta Kinetic Design Attraction",
              id: 253,
            },
            {
              name: "Focus",
              id: 254,
            },
            {
              name: "Focus Kinetic Design Attraction",
              id: 255,
            },
            {
              name: "Ka",
              id: 256,
            },
            {
              name: "Ka +",
              id: 257,
            },
            {
              name: "Ka Freestyle",
              id: 258,
            },
            {
              name: "Kuga",
              id: 259,
            },
            {
              name: "Maverick Pick - Up",
              id: 260,
            },
            {
              name: "Mondeo",
              id: 261,
            },
            {
              name: "Mustang",
              id: 262,
            },
            {
              name: "Ranger Pick - Up",
              id: 263,
            },
            {
              name: "D/c 3,0 T V6 Raptor 2023",
              id: 264,
            },
            {
              name: "S-max",
              id: 265,
            },
            {
              name: "Territory",
              id: 266,
            },
            {
              name: "Transit",
              id: 267,
            },
            {
              name: "Van 2,0 Td 10at L3h3",
              id: 268,
            },
            {
              name: "Minibus 2,0 Td 6mt 17+1",
              id: 269,
            },
            {
              name: "Minibus 2,0 Td 10at 17+1",
              id: 270,
            },
            {
              name: "Ford",
              id: 271,
            },
            {
              name: "Cargo",
              id: 756,
            },
            {
              name: "F 4000",
              id: 757,
            },
            {
              name: "D/c 2,5 Hibrida Lariat 4x2 Ecvt",
              id: 899,
            },
            {
              name: "D/c 2,0 Td Xl 4x2 6mt 2023  ",
              id: 900,
            },
            {
              name: "D/c 2,0 Td Xl 4x4 6mt 2023  ",
              id: 901,
            },
            {
              name: "D/c 2,0 Td Xls 4x2 6mt 2023  ",
              id: 902,
            },
            {
              name: "D/c 3,0 Td V6 Lion Xls 4x4 10at 2023  ",
              id: 903,
            },
            {
              name: "D/c 2,0 Bi Td Xlt 4x2 10at 2023  ",
              id: 904,
            },
            {
              name: "D/c 2,0 Bi Td Xlt 4x4 10at 2023  ",
              id: 905,
            },
            {
              name: "D/c 2,0 Bi Td Ltd 4x4 10at 2022",
              id: 906,
            },
            {
              name: "D/c 3,0 Td V6 Lion Ltd + 4x4 10at 2023  ",
              id: 907,
            },
            {
              name: "Chasis 2,0 Td 2023",
              id: 944,
            },
            {
              name: "5p Mach E-gt Performance At",
              id: 959,
            },
            {
              name: "Chasis 2,2 Td 2023",
              id: 960,
            },
            {
              name: "Van 2,2 Td 10at L3h3",
              id: 961,
            },
            {
              name: "Minibus 2,2 Td 6mt 17+1",
              id: 962,
            },
            {
              name: "Minibus 2,2 Td 10at 17+1",
              id: 963,
            },
            {
              name: "E-transit",
              id: 1007,
            },
            {
              name: "Chasis Cabina ",
              id: 1008,
            },
            {
              name: "Van Mediana ",
              id: 1009,
            },
            {
              name: "Van Mediana Te ",
              id: 1010,
            },
            {
              name: "Van Larga Te",
              id: 1011,
            },
            {
              name: "5p 2,7 Bt 4wd 10at Wildtrak",
              id: 1055,
            },
            {
              name: "5p 2,5 Hibrido Platinum Cvt",
              id: 1056,
            },
            {
              name: "Van 2,2 Td Mediana ",
              id: 1083,
            },
            {
              name: "Van 2,2 Td Mediana  Te",
              id: 1084,
            },
            {
              name: "Van 2,2 Td Larga  Te",
              id: 1085,
            },
          ],
        },
        {
          name: "Foton",
          models: [
            {
              name: "Gratour T3",
              id: 272,
            },
            {
              name: "Tunland Pick-up",
              id: 273,
            },
            {
              name: "View Cs2",
              id: 274,
            },
            {
              name: "Foton",
              id: 275,
            },
            {
              name: "Auman",
              id: 758,
            },
            {
              name: "Est-m 245 6,7 Tdi Cummins 17tn",
              id: 759,
            },
            {
              name: "Aumark ",
              id: 760,
            },
            {
              name: "E-aumark ",
              id: 761,
            },
            {
              name: "3,2 Tn Electrico",
              id: 762,
            },
          ],
        },
        {
          name: "Geely",
          models: [
            {
              name: "515",
              id: 276,
            },
            {
              name: "Emgrand 7 ",
              id: 277,
            },
            {
              name: "Emgrand Fe 3 ",
              id: 278,
            },
            {
              name: "Emgrand Gs",
              id: 279,
            },
            {
              name: "Emgrand X7",
              id: 280,
            },
            {
              name: "Lc",
              id: 281,
            },
            {
              name: "Geely",
              id: 282,
            },
          ],
        },
        {
          name: "Great Wall",
          models: [
            {
              name: "Poer Pick -up",
              id: 283,
            },
            {
              name: "Wingle 5 Pick -up",
              id: 284,
            },
            {
              name: "Wingle 6 Pick -up",
              id: 285,
            },
            {
              name: "Wingle 7 Pick -up",
              id: 286,
            },
            {
              name: "Great Wall",
              id: 287,
            },
          ],
        },
        {
          name: "Haval",
          models: [
            {
              name: "H 1",
              id: 288,
            },
            {
              name: "H 2",
              id: 289,
            },
            {
              name: "H 6 ",
              id: 290,
            },
            {
              name: "5p 2,0 T 7at 2wd 3° Generacion",
              id: 291,
            },
            {
              name: "5p 2,0 T 7at 4wd 3° Generacion",
              id: 292,
            },
            {
              name: "Jolion",
              id: 293,
            },
            {
              name: "5p 1,5 T 7at",
              id: 294,
            },
            {
              name: "Haval",
              id: 295,
            },
          ],
        },
        {
          name: "Honda",
          models: [
            {
              name: "Accord",
              id: 296,
            },
            {
              name: "City",
              id: 297,
            },
            {
              name: "Civic",
              id: 298,
            },
            {
              name: "Cr-v",
              id: 299,
            },
            {
              name: "F I T ",
              id: 300,
            },
            {
              name: "Hr-v",
              id: 301,
            },
            {
              name: "Legend",
              id: 302,
            },
            {
              name: "Pilot",
              id: 303,
            },
            {
              name: "Wr-v",
              id: 304,
            },
            {
              name: "Honda",
              id: 305,
            },
            {
              name: "Zr-v",
              id: 945,
            },
            {
              name: "5p 2,0 Cvt Lx",
              id: 946,
            },
            {
              name: "5p 2,0 Cvt Touring",
              id: 947,
            },
            {
              name: "5p 1,5 Lx Cvt 2023",
              id: 964,
            },
            {
              name: "5p 1,5 Exl Cvt 2023",
              id: 965,
            },
            {
              name: "5p 1,5 T Lx 2wd Cvt 2024",
              id: 1012,
            },
            {
              name: "5p 1,5 T Ex 2wd Cvt 2024",
              id: 1013,
            },
          ],
        },
        {
          name: "Hyundai",
          models: [
            {
              name: "Atos",
              id: 306,
            },
            {
              name: "Coupe",
              id: 307,
            },
            {
              name: "Creta",
              id: 308,
            },
            {
              name: "Elantra ",
              id: 309,
            },
            {
              name: "Grand I 10",
              id: 310,
            },
            {
              name: "Grand Santa Fe",
              id: 311,
            },
            {
              name: "H 1",
              id: 312,
            },
            {
              name: "H 100",
              id: 313,
            },
            {
              name: "H 350",
              id: 314,
            },
            {
              name: "I 10",
              id: 315,
            },
            {
              name: "I 30",
              id: 316,
            },
            {
              name: "Ioniq",
              id: 317,
            },
            {
              name: "Kona",
              id: 318,
            },
            {
              name: "Santa Fe ",
              id: 319,
            },
            {
              name: "Staria",
              id: 320,
            },
            {
              name: "Tucson",
              id: 321,
            },
            {
              name: "Veloster",
              id: 322,
            },
            {
              name: "Veracruz",
              id: 323,
            },
            {
              name: "Hyundai",
              id: 324,
            },
            {
              name: "Hd",
              id: 766,
            },
            {
              name: "5p 2,2 Crdi  8at Safety 11pas",
              id: 918,
            },
            {
              name: "5p 2,2 Crdi 4wd 8at Ultimate 11pas",
              id: 1086,
            },
          ],
        },
        {
          name: "Isuzu",
          models: [
            {
              name: "Atos",
              id: 306,
            },
            {
              name: "Coupe",
              id: 307,
            },
            {
              name: "Creta",
              id: 308,
            },
            {
              name: "Elantra ",
              id: 309,
            },
            {
              name: "Grand I 10",
              id: 310,
            },
            {
              name: "Grand Santa Fe",
              id: 311,
            },
            {
              name: "H 1",
              id: 312,
            },
            {
              name: "H 100",
              id: 313,
            },
            {
              name: "H 350",
              id: 314,
            },
            {
              name: "I 10",
              id: 315,
            },
            {
              name: "I 30",
              id: 316,
            },
            {
              name: "Ioniq",
              id: 317,
            },
            {
              name: "Kona",
              id: 318,
            },
            {
              name: "Santa Fe ",
              id: 319,
            },
            {
              name: "Staria",
              id: 320,
            },
            {
              name: "Tucson",
              id: 321,
            },
            {
              name: "Veloster",
              id: 322,
            },
            {
              name: "Veracruz",
              id: 323,
            },
            {
              name: "Hyundai",
              id: 324,
            },
            {
              name: "Hd",
              id: 766,
            },
            {
              name: "5p 2,2 Crdi  8at Safety 11pas",
              id: 918,
            },
            {
              name: "5p 2,2 Crdi 4wd 8at Ultimate 11pas",
              id: 1086,
            },
          ],
        },
        {
          name: "Jac",
          models: [
            {
              name: "S2",
              id: 327,
            },
            {
              name: "S3",
              id: 328,
            },
            {
              name: "S5",
              id: 329,
            },
            {
              name: "S7",
              id: 330,
            },
            {
              name: "T6 Pick Up",
              id: 331,
            },
            {
              name: "T8 Pick Up",
              id: 332,
            },
            {
              name: "D/c 2,0 Tdi 4x4 Int 6mt",
              id: 333,
            },
            {
              name: "Jac",
              id: 334,
            },
            {
              name: "X 200",
              id: 801,
            },
            {
              name: "D/c 2,0 Tdi 4x4 Intelligent 6mt",
              id: 919,
            },
          ],
        },
        {
          name: "Jaguar",
          models: [
            {
              name: "F Pace",
              id: 335,
            },
            {
              name: "F Type",
              id: 336,
            },
            {
              name: "S Type",
              id: 337,
            },
            {
              name: "Xe",
              id: 338,
            },
            {
              name: "Xf",
              id: 339,
            },
            {
              name: "Xj",
              id: 340,
            },
            {
              name: "Xk",
              id: 341,
            },
            {
              name: "X Type",
              id: 342,
            },
            {
              name: "",
              id: 343,
            },
          ],
        },
        {
          name: "Jeep",
          models: [
            {
              name: "Cherokee",
              id: 344,
            },
            {
              name: "Cherokee Grand",
              id: 345,
            },
            {
              name: "Commander",
              id: 346,
            },
            {
              name: "Compass",
              id: 347,
            },
            {
              name: "5p 1,3 T At6 Serie-s Fwd 2023",
              id: 348,
            },
            {
              name: "Gladiator Pick-up",
              id: 349,
            },
            {
              name: "Patriot",
              id: 350,
            },
            {
              name: "Renegade",
              id: 351,
            },
            {
              name: "Wrangler",
              id: 352,
            },
            {
              name: "Jeep",
              id: 353,
            },
            {
              name: "5p 1,3 T At6 Longitude 4x2 2023",
              id: 908,
            },
            {
              name: "5p 1,3 T At9 Trailhawk 4x4 2023",
              id: 909,
            },
            {
              name: "5p 3,6 Limited 8at Awd 2023",
              id: 948,
            },
            {
              name: "5p 1,3 T 6at Sport 4x2 2024",
              id: 1087,
            },
            {
              name: "5p 1,3 T 6at Longitude 4x2 2024",
              id: 1088,
            },
            {
              name: "5p 1,3 T 6at Longitude Plus 4x2 2021",
              id: 1089,
            },
            {
              name: "5p 1,3 T 6at Limited 4x2 2024",
              id: 1090,
            },
            {
              name: "5p 1,3 T 6at Serie-s Fwd 2024",
              id: 1091,
            },
            {
              name: "5p 2,0 Td 350 At9 Trailhawk 4x4",
              id: 1092,
            },
          ],
        },
        {
          name: "Jetour",
          models: [
            {
              name: "X 70",
              id: 354,
            },
            {
              name: "Jetour",
              id: 355,
            },
            {
              name: "5p 1,5 T 7a 8at Lujo",
              id: 1057,
            },
            {
              name: "5p 1,5 T 7a 8at Luxury",
              id: 1093,
            },
          ],
        },
        {
          name: "Kia",
          models: [
            {
              name: "Carnival",
              id: 356,
            },
            {
              name: "Carnival Grand",
              id: 357,
            },
            {
              name: "Cerato",
              id: 358,
            },
            {
              name: "Magentis",
              id: 359,
            },
            {
              name: "Mohave",
              id: 360,
            },
            {
              name: "Opirus",
              id: 361,
            },
            {
              name: "Picanto",
              id: 362,
            },
            {
              name: "Rio",
              id: 363,
            },
            {
              name: "Rondo",
              id: 364,
            },
            {
              name: "Seltos",
              id: 365,
            },
            {
              name: "Sorento",
              id: 366,
            },
            {
              name: "Soul",
              id: 367,
            },
            {
              name: "Sportage",
              id: 368,
            },
            {
              name: "Kia",
              id: 369,
            },
            {
              name: "K",
              id: 804,
            },
          ],
        },
        {
          name: "Kyc",
          models: [
            {
              name: "Mamut",
              id: 370,
            },
            {
              name: "Box 1,5 Dual Refrigerado My 2022",
              id: 371,
            },
            {
              name: "Kyc",
              id: 372,
            },
            {
              name: "Box 1,5 Dual Refrigerado Gnc",
              id: 1094,
            },
          ],
        },
        {
          name: "Land Rover",
          models: [
            {
              name: "Defender",
              id: 373,
            },
            {
              name: "Discovery",
              id: 374,
            },
            {
              name: "Evoque",
              id: 375,
            },
            {
              name: "Freelander",
              id: 376,
            },
            {
              name: "Range Rover",
              id: 377,
            },
            {
              name: "Range Rover Evoque",
              id: 378,
            },
            {
              name: "5p 2,0 T Hibrido 9at Hst 2023",
              id: 379,
            },
            {
              name: "Range Rover Se Vogue",
              id: 380,
            },
            {
              name: "Range Rover Velar",
              id: 381,
            },
            {
              name: "Land Rover",
              id: 382,
            },
          ],
        },
        {
          name: "Lexus",
          models: [
            {
              name: "Es",
              id: 383,
            },
            {
              name: "Gs",
              id: 384,
            },
            {
              name: "Is",
              id: 385,
            },
            {
              name: "Lc",
              id: 386,
            },
            {
              name: "Ls",
              id: 387,
            },
            {
              name: "Lx",
              id: 388,
            },
            {
              name: "Nx",
              id: 389,
            },
            {
              name: "Rc",
              id: 390,
            },
            {
              name: "Rx",
              id: 391,
            },
            {
              name: "Ux",
              id: 392,
            },
            {
              name: "Lexus",
              id: 393,
            },
            {
              name: "Lbx",
              id: 1095,
            },
          ],
        },
        {
          name: "Lifan",
          models: [
            {
              name: "Foison",
              id: 394,
            },
            {
              name: "Myway",
              id: 395,
            },
            {
              name: "M 7",
              id: 396,
            },
            {
              name: "X 50",
              id: 397,
            },
            {
              name: "X 60",
              id: 398,
            },
            {
              name: "X 70",
              id: 399,
            },
            {
              name: "Lifan",
              id: 400,
            },
          ],
        },
        {
          name: "Lotus",
          models: [
            {
              name: "Elise",
              id: 401,
            },
            {
              name: "Evora",
              id: 402,
            },
            {
              name: "Exige",
              id: 403,
            },
            {
              name: "Lotus",
              id: 404,
            },
            {
              name: "Emira",
              id: 949,
            },
            {
              name: "Coupe 3,5 V6 405cv Mt6",
              id: 950,
            },
            {
              name: "Coupe 3,5 V6 405cv At6",
              id: 951,
            },
          ],
        },
        {
          name: "Maserati",
          models: [
            {
              name: "Coupe",
              id: 405,
            },
            {
              name: "Ghibli",
              id: 406,
            },
            {
              name: "Gran Turismo ",
              id: 407,
            },
            {
              name: "Levante",
              id: 408,
            },
            {
              name: "Quatroporte",
              id: 409,
            },
            {
              name: "Maserati",
              id: 410,
            },
          ],
        },
        {
          name: "Mercedes Benz",
          models: [
            {
              name: "A 35 ",
              id: 411,
            },
            {
              name: "A 45 ",
              id: 412,
            },
            {
              name: "A 200",
              id: 413,
            },
            {
              name: "A 250",
              id: 414,
            },
            {
              name: "B 170",
              id: 415,
            },
            {
              name: "B 180",
              id: 416,
            },
            {
              name: "B 200",
              id: 417,
            },
            {
              name: "C 43",
              id: 418,
            },
            {
              name: "C 63",
              id: 419,
            },
            {
              name: "C 200",
              id: 420,
            },
            {
              name: "C 220",
              id: 421,
            },
            {
              name: "C 230",
              id: 422,
            },
            {
              name: "C 250",
              id: 423,
            },
            {
              name: "C 280",
              id: 424,
            },
            {
              name: "C 300",
              id: 425,
            },
            {
              name: "C 320",
              id: 426,
            },
            {
              name: "C 350",
              id: 427,
            },
            {
              name: "C 400",
              id: 428,
            },
            {
              name: "Cla 45",
              id: 429,
            },
            {
              name: "Cla 200",
              id: 430,
            },
            {
              name: "Cla 250",
              id: 431,
            },
            {
              name: "Clc 230",
              id: 432,
            },
            {
              name: "Clc 250",
              id: 433,
            },
            {
              name: "Clc 350",
              id: 434,
            },
            {
              name: "Clk 350",
              id: 435,
            },
            {
              name: "Clk 500",
              id: 436,
            },
            {
              name: "Cls 63",
              id: 437,
            },
            {
              name: "Cls 350",
              id: 438,
            },
            {
              name: "E 53",
              id: 439,
            },
            {
              name: "E 63",
              id: 440,
            },
            {
              name: "E 220d",
              id: 441,
            },
            {
              name: "E 250",
              id: 442,
            },
            {
              name: "E 280",
              id: 443,
            },
            {
              name: "E 300",
              id: 444,
            },
            {
              name: "E 320",
              id: 445,
            },
            {
              name: "E 350",
              id: 446,
            },
            {
              name: "E 400",
              id: 447,
            },
            {
              name: "E 450",
              id: 448,
            },
            {
              name: "E 500",
              id: 449,
            },
            {
              name: "G 500",
              id: 450,
            },
            {
              name: "Gl 500",
              id: 451,
            },
            {
              name: "Gla 45",
              id: 452,
            },
            {
              name: "Gla 200",
              id: 453,
            },
            {
              name: "Gla 250",
              id: 454,
            },
            {
              name: "Glb 200",
              id: 455,
            },
            {
              name: "Glb 250",
              id: 456,
            },
            {
              name: "Glc 43",
              id: 457,
            },
            {
              name: "Glc 63",
              id: 458,
            },
            {
              name: "Glc 300",
              id: 459,
            },
            {
              name: "5p 2,0 T 4matic Amg-line 9at Mhev",
              id: 460,
            },
            {
              name: "Glc 350e",
              id: 461,
            },
            {
              name: "Gle 53 ",
              id: 462,
            },
            {
              name: "Gle 63 S",
              id: 463,
            },
            {
              name: "Gle 400",
              id: 464,
            },
            {
              name: "Gle 450",
              id: 465,
            },
            {
              name: "Gle 500",
              id: 466,
            },
            {
              name: "Glk 300",
              id: 467,
            },
            {
              name: "Gls 500",
              id: 468,
            },
            {
              name: "Mercedes-amg Gt C ",
              id: 469,
            },
            {
              name: "Mercedes-amg Gt 4",
              id: 470,
            },
            {
              name: "Mercedes-amg Gt R",
              id: 471,
            },
            {
              name: "Mercedes-amg Gt S",
              id: 472,
            },
            {
              name: "Ml",
              id: 473,
            },
            {
              name: "S 500",
              id: 474,
            },
            {
              name: "4p 3,0 4matic Mhev",
              id: 475,
            },
            {
              name: "Sl 63",
              id: 476,
            },
            {
              name: "Sl 65",
              id: 477,
            },
            {
              name: "Sl 500",
              id: 478,
            },
            {
              name: "Slc 43",
              id: 479,
            },
            {
              name: "Slk",
              id: 480,
            },
            {
              name: "Sls",
              id: 481,
            },
            {
              name: "Sprinter",
              id: 482,
            },
            {
              name: "Viano",
              id: 483,
            },
            {
              name: "Vito 111",
              id: 484,
            },
            {
              name: "Vito 119",
              id: 485,
            },
            {
              name: "Vito 121",
              id: 486,
            },
            {
              name: "Mercedes Benz",
              id: 487,
            },
            {
              name: "Accelo",
              id: 805,
            },
            {
              name: "Actros",
              id: 806,
            },
            {
              name: "Actros Nuevo",
              id: 807,
            },
            {
              name: "Arocs",
              id: 808,
            },
            {
              name: "Atego",
              id: 809,
            },
            {
              name: "Atron",
              id: 810,
            },
            {
              name: "Axor",
              id: 811,
            },
            {
              name: "Fpn",
              id: 812,
            },
            {
              name: "7",
              id: 813,
            },
            {
              name: "13",
              id: 814,
            },
            {
              name: "16",
              id: 815,
            },
            {
              name: "24",
              id: 816,
            },
            {
              name: "Eqa",
              id: 920,
            },
            {
              name: "5p 350 4matic",
              id: 921,
            },
            {
              name: "815-39 Ce",
              id: 928,
            },
            {
              name: "815-39 Ce At",
              id: 929,
            },
            {
              name: "1036-39 Ce ",
              id: 930,
            },
            {
              name: "1036-39 Ce At",
              id: 931,
            },
            {
              name: "2548 Ls/33 6x2 Bitren P12 199",
              id: 932,
            },
            {
              name: "2548 Ls/33 6x2 Bitren ",
              id: 933,
            },
            {
              name: "1726/42 C/ext ",
              id: 934,
            },
            {
              name: "1016-39 Ce ",
              id: 993,
            },
            {
              name: "1016-39 Ce At",
              id: 994,
            },
            {
              name: "5p 2,0 T 4matic Off-road 9at Mhev Coupe",
              id: 1014,
            },
            {
              name: "Vito 114",
              id: 1097,
            },
            {
              name: "Furgon Cdi V2",
              id: 1098,
            },
            {
              name: "Furgon Cdi Plus",
              id: 1099,
            },
          ],
        },
        {
          name: "Mini Cooper",
          models: [
            {
              name: "Clubman",
              id: 488,
            },
            {
              name: "Countryman",
              id: 489,
            },
            {
              name: "Mini Cooper",
              id: 490,
            },
            {
              name: "Paceman",
              id: 491,
            },
          ],
        },
        {
          name: "Mitsubishi",
          models: [
            {
              name: "Lancer",
              id: 492,
            },
            {
              name: "L 200 Pick - Up",
              id: 493,
            },
            {
              name: "Montero",
              id: 494,
            },
            {
              name: "Outlander ",
              id: 495,
            },
            {
              name: "Mitsubishi",
              id: 496,
            },
          ],
        },
        {
          name: "Nissan",
          models: [
            {
              name: "Altima",
              id: 497,
            },
            {
              name: "Coupe",
              id: 498,
            },
            {
              name: "Frontier Pick - Up",
              id: 499,
            },
            {
              name: "Kicks",
              id: 500,
            },
            {
              name: "5p 1,6 Sense 2023",
              id: 501,
            },
            {
              name: "5p 1,6 Advance Cvt 2023",
              id: 502,
            },
            {
              name: "5p 1,6 Advance Cvt Plus 2023",
              id: 503,
            },
            {
              name: "5p 1,6 Xplay 2023",
              id: 504,
            },
            {
              name: "5p 1,6 Exclusive Cvt 2023",
              id: 505,
            },
            {
              name: "Leaf",
              id: 506,
            },
            {
              name: "March",
              id: 507,
            },
            {
              name: "Murano",
              id: 508,
            },
            {
              name: "Note",
              id: 509,
            },
            {
              name: "Np 300 Pick Up",
              id: 510,
            },
            {
              name: "Np 300 Pick Up Frontier",
              id: 511,
            },
            {
              name: "Pathfinder",
              id: 512,
            },
            {
              name: "Sentra",
              id: 513,
            },
            {
              name: "Teana",
              id: 514,
            },
            {
              name: "Tiida",
              id: 515,
            },
            {
              name: "Versa",
              id: 516,
            },
            {
              name: "Xterra",
              id: 517,
            },
            {
              name: "Xtrail",
              id: 518,
            },
            {
              name: "Nissan",
              id: 519,
            },
            {
              name: "4p 1,6 Exclusive Cvt 2023",
              id: 910,
            },
            {
              name: "4p 1,6 Sense 2023",
              id: 911,
            },
            {
              name: "4p 1,6 Advance 2023",
              id: 912,
            },
            {
              name: "4p 1,6 Advance Cvt 2023",
              id: 913,
            },
            {
              name: "5p 2,5 4x4 Exclusive Cvt 2023",
              id: 922,
            },
            {
              name: "5p 1,5 4x4 E-power Cvt 2023",
              id: 923,
            },
            {
              name: "5p 1,6 X-play-iii 2024",
              id: 1015,
            },
            {
              name: "4p 2,0 Advance Cvt",
              id: 1016,
            },
            {
              name: "4p 2,0 Sr Cvt",
              id: 1017,
            },
            {
              name: "4p 2,0 Exclusive Cvt",
              id: 1018,
            },
            {
              name: "4p 1,6 Sr Cvt 2024",
              id: 1019,
            },
          ],
        },
        {
          name: "Peugeot",
          models: [
            {
              name: "206",
              id: 520,
            },
            {
              name: "207",
              id: 521,
            },
            {
              name: "208",
              id: 522,
            },
            {
              name: "5p 1,2 Like New 2023",
              id: 523,
            },
            {
              name: "5p 1,6 Active 2023",
              id: 524,
            },
            {
              name: "5p 1,6 Active Pack 2023",
              id: 525,
            },
            {
              name: "5p 1,6 Active Tipt6 2023",
              id: 526,
            },
            {
              name: "5p 1,6 Active Tipt6 Pack 2023",
              id: 527,
            },
            {
              name: "5p 1,6 Allure 2023",
              id: 528,
            },
            {
              name: "5p 1,6 Allure Pack 2023",
              id: 529,
            },
            {
              name: "5p 1,6 Allure Tipt6 2023",
              id: 530,
            },
            {
              name: "5p 1,6 Allure Tipt6 Pack 2023",
              id: 531,
            },
            {
              name: "5p 1,6 Feline Tipt6  2023",
              id: 532,
            },
            {
              name: "5p 1,6 Style 2023",
              id: 533,
            },
            {
              name: "5p 1,6 Style Tipt6 2023",
              id: 534,
            },
            {
              name: "301",
              id: 535,
            },
            {
              name: "307",
              id: 536,
            },
            {
              name: "308",
              id: 537,
            },
            {
              name: "407",
              id: 538,
            },
            {
              name: "408",
              id: 539,
            },
            {
              name: "508",
              id: 540,
            },
            {
              name: "607",
              id: 541,
            },
            {
              name: "807",
              id: 542,
            },
            {
              name: "2008",
              id: 543,
            },
            {
              name: "3008",
              id: 544,
            },
            {
              name: "4008",
              id: 545,
            },
            {
              name: "5008",
              id: 546,
            },
            {
              name: "Boxer",
              id: 547,
            },
            {
              name: "Expert",
              id: 548,
            },
            {
              name: "Hoggar Pick Up",
              id: 549,
            },
            {
              name: "Partner",
              id: 550,
            },
            {
              name: "Rcz",
              id: 551,
            },
            {
              name: "Traveller",
              id: 552,
            },
            {
              name: "Peugeot",
              id: 553,
            },
            {
              name: "Furgon Hdi 140 L2h2 M23",
              id: 941,
            },
            {
              name: "Furgon Hdi 140 L3h2 M23",
              id: 942,
            },
          ],
        },
        {
          name: "Porsche",
          models: [
            {
              name: "911",
              id: 554,
            },
            {
              name: "911 (992)",
              id: 555,
            },
            {
              name: "Coupe Gt3 Paquete Touring",
              id: 556,
            },
            {
              name: "911 Turbo Pdk",
              id: 557,
            },
            {
              name: "Coupe Dakar",
              id: 558,
            },
            {
              name: "Boxster 718",
              id: 559,
            },
            {
              name: "Conv Style Edition",
              id: 560,
            },
            {
              name: "Cayenne",
              id: 561,
            },
            {
              name: "5p Cayenne 2023",
              id: 562,
            },
            {
              name: "5p E-hybrid 2023",
              id: 563,
            },
            {
              name: "5p Cayenne S 2023",
              id: 564,
            },
            {
              name: "Cayenne Coupe",
              id: 565,
            },
            {
              name: "5p Turbo Gt 2023",
              id: 566,
            },
            {
              name: "Cayman 718",
              id: 567,
            },
            {
              name: "2p Cayman Style Edition",
              id: 568,
            },
            {
              name: "Macan",
              id: 569,
            },
            {
              name: "Panamera",
              id: 570,
            },
            {
              name: "Spyder 718",
              id: 571,
            },
            {
              name: "Conv Rs",
              id: 572,
            },
            {
              name: "Taycan (electrico)",
              id: 573,
            },
            {
              name: "Porsche",
              id: 574,
            },
            {
              name: "Cabriolet Edition 50 Years ",
              id: 914,
            },
            {
              name: "Coupe S/t",
              id: 943,
            },
            {
              name: "5p Turbo E-hybrid 2023",
              id: 966,
            },
            {
              name: "5p E-hybrid 2024",
              id: 1020,
            },
            {
              name: "5p 4 Electric",
              id: 1021,
            },
            {
              name: "5p 4 Electric Turbo",
              id: 1022,
            },
            {
              name: "4p 300 Kw/408ps 2024",
              id: 1058,
            },
            {
              name: "4p 4 S At 530cv 2024",
              id: 1059,
            },
            {
              name: "4p 4 Turbo At 680cv 2024",
              id: 1060,
            },
            {
              name: "4p 4 Turbo S At 761cv 2024",
              id: 1061,
            },
            {
              name: "4p Turbo Gt",
              id: 1062,
            },
            {
              name: "4p Turbo Gt Weissach",
              id: 1063,
            },
            {
              name: "5p 4 Cross Turismo 2024",
              id: 1064,
            },
            {
              name: "5p 4 S Cross Turismo 2024",
              id: 1065,
            },
            {
              name: "5p 4 Turbo Cross Turismo 2024",
              id: 1066,
            },
            {
              name: "Coupe Carrera 2024",
              id: 1100,
            },
            {
              name: "Coupe Carrera Gts 2024",
              id: 1101,
            },
            {
              name: "Coupe Carrera 4 Gts 2024",
              id: 1102,
            },
            {
              name: "Cabriolet Carrera 2024",
              id: 1103,
            },
            {
              name: "Cabriolet Carrera Gts 2024",
              id: 1104,
            },
            {
              name: "Cabriolet Carrera 4 Gts 2024",
              id: 1105,
            },
            {
              name: "Cabriolet Targa 4 Gts 2024",
              id: 1106,
            },
            {
              name: "5p E-hybrid S 2024",
              id: 1107,
            },
            {
              name: "5p Gts 2024",
              id: 1108,
            },
            {
              name: "5p 4s E-hybryd 2024",
              id: 1109,
            },
            {
              name: "5p Turbo-hybryd 2024",
              id: 1110,
            },
          ],
        },
        {
          name: "Ram",
          models: [
            {
              name: "1500 Pick - Up",
              id: 575,
            },
            {
              name: "D/c 5,7 V8 Hemi Laramie Night Edition 4x4 8at 2023",
              id: 576,
            },
            {
              name: "2500 Pick - Up",
              id: 577,
            },
            {
              name: "Ram",
              id: 578,
            },
            {
              name: "D/c 5,7 V8 Hemi Rebel 4x4 8at 2023",
              id: 952,
            },
            {
              name: "Rampage Pick -up",
              id: 1023,
            },
            {
              name: "D/c 2,0 T Rebel 4x4 At9",
              id: 1024,
            },
            {
              name: "D/c 2,0 T R/t 4x4 At9",
              id: 1025,
            },
          ],
        },
        {
          name: "Renault",
          models: [
            {
              name: "Alaskan Pick - Up",
              id: 579,
            },
            {
              name: "D/c 2,3 Dci T 160cv 2wd Confort 6mt",
              id: 580,
            },
            {
              name: "D/c 2,3 Dci T 160cv 4wd Confort 6mt",
              id: 581,
            },
            {
              name: "D/c 2,3 Dci T 190cv 2wd Emotion 6mt",
              id: 582,
            },
            {
              name: "D/c 2,3 Dci T 190cv 4wd Emotion 6mt",
              id: 583,
            },
            {
              name: "D/c 2,3 Dci T 190cv 2wd Intens 6mt",
              id: 584,
            },
            {
              name: "D/c 2,3 Dci T 190cv 2wd Intens At",
              id: 585,
            },
            {
              name: "D/c 2,3 Dci T 190cv 4wd Intens 6mt",
              id: 586,
            },
            {
              name: "D/c 2,3 Dci T 190cv 4wd Intens At",
              id: 587,
            },
            {
              name: "D/c 2,3 Dci T 190cv 4wd Iconic 6mt",
              id: 588,
            },
            {
              name: "D/c 2,3 Dci T 190cv 4wd Iconic 7at",
              id: 589,
            },
            {
              name: "Captur",
              id: 590,
            },
            {
              name: "Clio",
              id: 591,
            },
            {
              name: "Clio Mio",
              id: 592,
            },
            {
              name: "Clio Work",
              id: 593,
            },
            {
              name: "Duster",
              id: 594,
            },
            {
              name: "5p 1,6 4x2 Intens Mt",
              id: 595,
            },
            {
              name: "Duster Oroch Pick - Up",
              id: 596,
            },
            {
              name: "Fluence",
              id: 597,
            },
            {
              name: "Kangoo",
              id: 598,
            },
            {
              name: "Kangoo Ii Express",
              id: 599,
            },
            {
              name: "Kangoo Ii Version Pasajeros",
              id: 600,
            },
            {
              name: "Koleos",
              id: 601,
            },
            {
              name: "5p 2,5 Intens 4wd Cvt X Tronic 2023",
              id: 602,
            },
            {
              name: "Kwid",
              id: 603,
            },
            {
              name: "Latitude",
              id: 604,
            },
            {
              name: "Logan",
              id: 605,
            },
            {
              name: "Master",
              id: 606,
            },
            {
              name: "Megane",
              id: 607,
            },
            {
              name: "Megane Ii",
              id: 608,
            },
            {
              name: "Megane Iii",
              id: 609,
            },
            {
              name: "Sandero",
              id: 610,
            },
            {
              name: "Sandero Stepway",
              id: 611,
            },
            {
              name: "Scenic",
              id: 612,
            },
            {
              name: "Scenic Ii Grand",
              id: 613,
            },
            {
              name: "Symbol",
              id: 614,
            },
            {
              name: "Renault",
              id: 615,
            },
            {
              name: "Kerax",
              id: 817,
            },
            {
              name: "Midlum",
              id: 818,
            },
            {
              name: "Premiun",
              id: 819,
            },
            {
              name: "5p 1,6 4x2 Intens Mt 2023",
              id: 967,
            },
            {
              name: "5p 1,6 4x2 Intens Cvt 2023",
              id: 968,
            },
            {
              name: "5p 1,3 T 4x2 Iconic Cvt 2023",
              id: 969,
            },
            {
              name: "5p 1,3 T 4x4 Iconic 2023",
              id: 970,
            },
            {
              name: "Furgon 1,6 Sce Confort 114",
              id: 1026,
            },
            {
              name: "Furgon 1,6 Sce Confort 114 5a",
              id: 1027,
            },
            {
              name: "Furgon 1,5 Dci Confort 89",
              id: 1028,
            },
            {
              name: "Furgon 1,5 Dci Confort 89 5a",
              id: 1029,
            },
            {
              name: "1,6 Sce Stepway 2024",
              id: 1030,
            },
            {
              name: "1,5 Dci Stepway 2024",
              id: 1031,
            },
            {
              name: "Kwid E-tech",
              id: 1032,
            },
            {
              name: "5p E-tech",
              id: 1033,
            },
            {
              name: "5p 1,6 4x2 Intens Mt 2024",
              id: 1111,
            },
            {
              name: "5p 1,3 T 4x2 Iconic Cvt 2024",
              id: 1112,
            },
            {
              name: "5p 1,3 T 4x4 Iconic Mt 2024",
              id: 1113,
            },
            {
              name: "1,6 Sce Zen 2024",
              id: 1114,
            },
            {
              name: "Megane E-tech",
              id: 1115,
            },
            {
              name: "5p At",
              id: 1116,
            },
          ],
        },
        {
          name: "Seat",
          models: [
            {
              name: "Altea",
              id: 616,
            },
            {
              name: "Cordoba",
              id: 617,
            },
            {
              name: "Ibiza",
              id: 618,
            },
            {
              name: "Leon",
              id: 619,
            },
            {
              name: "Toledo",
              id: 620,
            },
            {
              name: "Seat",
              id: 621,
            },
          ],
        },
        {
          name: "Shineray",
          models: [
            {
              name: "T 30",
              id: 622,
            },
            {
              name: "T 32",
              id: 623,
            },
            {
              name: "Swm G01",
              id: 624,
            },
            {
              name: "X7",
              id: 625,
            },
            {
              name: "X 30",
              id: 626,
            },
            {
              name: "Shineray",
              id: 627,
            },
          ],
        },
        {
          name: "Smart",
          models: [
            {
              name: "Fortwo",
              id: 628,
            },
            {
              name: "Forfour",
              id: 629,
            },
            {
              name: "Smart",
              id: 630,
            },
          ],
        },
        {
          name: "Soueast",
          models: [
            {
              name: "Dx 3",
              id: 631,
            },
            {
              name: "Soueast",
              id: 632,
            },
          ],
        },
        {
          name: "Ssangyong",
          models: [
            {
              name: "Actyon",
              id: 633,
            },
            {
              name: "Korando",
              id: 634,
            },
            {
              name: "Kyron",
              id: 635,
            },
            {
              name: "Stavic",
              id: 636,
            },
            {
              name: "Ssangyong",
              id: 637,
            },
          ],
        },
        {
          name: "Subaru",
          models: [
            {
              name: "Forester",
              id: 638,
            },
            {
              name: "Forester All New",
              id: 639,
            },
            {
              name: "Impreza",
              id: 640,
            },
            {
              name: "Legacy",
              id: 641,
            },
            {
              name: "Outback",
              id: 642,
            },
            {
              name: "Tribeca",
              id: 643,
            },
            {
              name: "Wrx",
              id: 644,
            },
            {
              name: "Xv",
              id: 645,
            },
            {
              name: "Subaru",
              id: 646,
            },
          ],
        },
        {
          name: "Suzuki",
          models: [
            {
              name: "Baleno",
              id: 647,
            },
            {
              name: "Fun",
              id: 648,
            },
            {
              name: "Grand Vitara",
              id: 649,
            },
            {
              name: "Jimmy",
              id: 650,
            },
            {
              name: "Swift",
              id: 651,
            },
            {
              name: "Vitara",
              id: 652,
            },
            {
              name: "Suzuki",
              id: 653,
            },
            {
              name: "3p 1,5 Gl",
              id: 1034,
            },
          ],
        },
        {
          name: "Toyota",
          models: [
            {
              name: "86",
              id: 654,
            },
            {
              name: "Coupe 2,4 Gr 6mt",
              id: 655,
            },
            {
              name: "Avensis",
              id: 656,
            },
            {
              name: "Camry",
              id: 657,
            },
            {
              name: "C-hr",
              id: 658,
            },
            {
              name: "Corolla",
              id: 659,
            },
            {
              name: "4p 2,0 Xli Mt 2023",
              id: 660,
            },
            {
              name: "4p 2,0 Xli Cvt 2023",
              id: 661,
            },
            {
              name: "4p 2,0 Xei Cvt 2023",
              id: 662,
            },
            {
              name: "4p 2,0 Seg Cvt 2023",
              id: 663,
            },
            {
              name: "4p 2,0 Gr-s 10cvt 2023",
              id: 664,
            },
            {
              name: "4p Hv 1,8 Xei Ecvt 2023",
              id: 665,
            },
            {
              name: "4p Hv 1,8 Seg Ecvt 2023",
              id: 666,
            },
            {
              name: "Corolla Cross",
              id: 667,
            },
            {
              name: "Etios",
              id: 668,
            },
            {
              name: "5p 1,5 Xls 4at 2022",
              id: 669,
            },
            {
              name: "Etios Cross",
              id: 670,
            },
            {
              name: "Hiace",
              id: 671,
            },
            {
              name: "Hilux Pick - Up",
              id: 672,
            },
            {
              name: "D/c 2,8 Tdi 4x4 Gr-s Iv 6 A/t 2023",
              id: 673,
            },
            {
              name: "Hilux Pick - Up Cover",
              id: 674,
            },
            {
              name: "Hilux Sw4",
              id: 675,
            },
            {
              name: "Innova",
              id: 676,
            },
            {
              name: "Land Cruiser",
              id: 677,
            },
            {
              name: "Prius",
              id: 678,
            },
            {
              name: "Rav - 4",
              id: 679,
            },
            {
              name: "Yaris",
              id: 680,
            },
            {
              name: "Toyota",
              id: 681,
            },
            {
              name: "4p 2,5 Hev E Cvt",
              id: 953,
            },
            {
              name: "5p 4,0 V6 Prado Vx A/t 2023",
              id: 954,
            },
            {
              name: "5p Hev Limited Awd Cvt",
              id: 955,
            },
            {
              name: "4p 2,0 Xli Cvt 2024",
              id: 971,
            },
            {
              name: "4p 2,0 Xei Cvt 2024",
              id: 972,
            },
            {
              name: "4p 2,0 Seg Cvt 2024",
              id: 973,
            },
            {
              name: "4p 2,0 Gr-s 10cvt 2024",
              id: 974,
            },
            {
              name: "4p Hv 1,8 Xei Ecvt 2024",
              id: 975,
            },
            {
              name: "4p Hv 1,8 Seg Ecvt 2024",
              id: 976,
            },
            {
              name: "5p 2,0 Xli Cvt 2024",
              id: 977,
            },
            {
              name: "5p 2,0 Xei Cvt 2024",
              id: 978,
            },
            {
              name: "5p 2,0 Seg Cvt 2024",
              id: 979,
            },
            {
              name: "5p Hev 1,8 Xei Ecvt 2024",
              id: 980,
            },
            {
              name: "5p Hev 1,8 Seg Ecvt 2024",
              id: 981,
            },
            {
              name: "5p 2,0 Gr-sport Cvt 2024",
              id: 982,
            },
            {
              name: "5p 1,5 Xs Cvt 2023",
              id: 983,
            },
            {
              name: "Furgon 2,8 Tdi L1h1 Tb 6at 3a 4p 2024",
              id: 1035,
            },
            {
              name: "Wagon 2,8 Tdi 6at 10a 2024",
              id: 1036,
            },
            {
              name: "Furgon 2,8 Tdi L2h2 6at 3a 5p 2024",
              id: 1037,
            },
            {
              name: "Commuter 2,8 Tdi 6at 14a 2024",
              id: 1038,
            },
            {
              name: "5p 2,0 Xli Cvt 2025",
              id: 1117,
            },
            {
              name: "5p 2,0 Xei Cvt 2025",
              id: 1118,
            },
            {
              name: "5p 2,0 Seg Cvt 2025",
              id: 1119,
            },
            {
              name: "5p Hev 1,8 Xei Ecvt 2025",
              id: 1120,
            },
            {
              name: "5p Hev 1,8 Seg Ecvt 2025",
              id: 1121,
            },
            {
              name: "5p 2,0 Gr-sport Cvt 2025",
              id: 1122,
            },
          ],
        },
        {
          name: "Volkswagen",
          models: [
            {
              name: "Amarok Pick - Up",
              id: 682,
            },
            {
              name: "D/c 3,0 Tdi V6 4x4 8a/t High 258cv P1",
              id: 683,
            },
            {
              name: "Bora",
              id: 684,
            },
            {
              name: "Caddy",
              id: 685,
            },
            {
              name: "Crossfox",
              id: 686,
            },
            {
              name: "Fox",
              id: 687,
            },
            {
              name: "Gol",
              id: 688,
            },
            {
              name: "Gol Country",
              id: 689,
            },
            {
              name: "Gol Trend",
              id: 690,
            },
            {
              name: "Golf",
              id: 691,
            },
            {
              name: "Golf Variant",
              id: 692,
            },
            {
              name: "Multivan",
              id: 693,
            },
            {
              name: "New Beetle",
              id: 694,
            },
            {
              name: "Nivus",
              id: 695,
            },
            {
              name: "Passat",
              id: 696,
            },
            {
              name: "Passat Cc",
              id: 697,
            },
            {
              name: "Passat Variant",
              id: 698,
            },
            {
              name: "Polo ",
              id: 699,
            },
            {
              name: "5p 1,6 Msi Track 2023",
              id: 700,
            },
            {
              name: "Polo Classic",
              id: 701,
            },
            {
              name: "Saveiro Pick - Up",
              id: 702,
            },
            {
              name: "Saveiro Pick - Up Cross",
              id: 703,
            },
            {
              name: "Scirocco",
              id: 704,
            },
            {
              name: "Sharan",
              id: 705,
            },
            {
              name: "Suran",
              id: 706,
            },
            {
              name: "Suran Cross",
              id: 707,
            },
            {
              name: "Taos",
              id: 708,
            },
            {
              name: "5p 1,4 Tsi 250 Comfortline Tipt 2023",
              id: 709,
            },
            {
              name: "5p 1,4 Tsi 250 Highline Tipt 2023",
              id: 710,
            },
            {
              name: "5p 1,4 Tsi 250 Highline Bitono Tipt 2023",
              id: 711,
            },
            {
              name: "T-cross",
              id: 712,
            },
            {
              name: "The Beetle",
              id: 713,
            },
            {
              name: "Tiguan",
              id: 714,
            },
            {
              name: "Tiguan Allspace",
              id: 715,
            },
            {
              name: "5p 350 Tsi Life 4motion 7dsg",
              id: 716,
            },
            {
              name: "Touareg",
              id: 717,
            },
            {
              name: "Transporter",
              id: 718,
            },
            {
              name: "Up!",
              id: 719,
            },
            {
              name: "Vento",
              id: 720,
            },
            {
              name: "4p 2,0 Tsi 230cv 350 Gli Dsg",
              id: 721,
            },
            {
              name: "Vento Variant",
              id: 722,
            },
            {
              name: "Virtus",
              id: 723,
            },
            {
              name: "Voyage",
              id: 724,
            },
            {
              name: "Volkswagen",
              id: 725,
            },
            {
              name: "5",
              id: 861,
            },
            {
              name: "6",
              id: 862,
            },
            {
              name: "8",
              id: 863,
            },
            {
              name: "9",
              id: 864,
            },
            {
              name: "10",
              id: 865,
            },
            {
              name: "11",
              id: 866,
            },
            {
              name: "13",
              id: 867,
            },
            {
              name: "14",
              id: 868,
            },
            {
              name: "15",
              id: 869,
            },
            {
              name: "17",
              id: 870,
            },
            {
              name: "19",
              id: 871,
            },
            {
              name: "24",
              id: 872,
            },
            {
              name: "25",
              id: 873,
            },
            {
              name: "25 Constellation",
              id: 874,
            },
            {
              name: "26",
              id: 875,
            },
            {
              name: "28 Meteor",
              id: 876,
            },
            {
              name: "460 6x2 ",
              id: 877,
            },
            {
              name: "31",
              id: 878,
            },
            {
              name: "32",
              id: 879,
            },
            {
              name: "5p 1,6 Msi Track 1st Edition 2023",
              id: 924,
            },
            {
              name: "5p 1,6 Msi 2023",
              id: 925,
            },
            {
              name: "5p 1,0 Tsi 170 Highline At6 2023",
              id: 926,
            },
            {
              name: "5p 1,4 Tsi 250 Gts At6 2023",
              id: 927,
            },
            {
              name: "5p 1,6 Msi Track 2024",
              id: 984,
            },
            {
              name: "5p 1,6 Msi Track Phu 2024",
              id: 985,
            },
            {
              name: "4p 1,6 Msi 2023",
              id: 986,
            },
            {
              name: "4p 1,6 Msi Comfortline 2023",
              id: 987,
            },
            {
              name: "4p 170 Tsi Highline At",
              id: 988,
            },
            {
              name: "4p 250 Tsi Exclusive At",
              id: 989,
            },
            {
              name: "180 4x4",
              id: 996,
            },
            {
              name: "5p 1,0 Tsi 200 At6 Comfortline Ph4 2024",
              id: 1039,
            },
            {
              name: "C/s 1,6 Msi Trend 2024",
              id: 1040,
            },
            {
              name: "D/c 1,6 Msi Comf 2024",
              id: 1041,
            },
            {
              name: "D/c 1,6  Msi Extreme 2024",
              id: 1042,
            },
            {
              name: "5p 5,0 V10 Tdi Tipt",
              id: 1043,
            },
            {
              name: "D/c 3,0 Tdi V6 4x4 8at High 258cv P1",
              id: 1067,
            },
            {
              name: "5p 1,0 Tsi 200 6at Comfortline Ph4 2024",
              id: 1068,
            },
            {
              name: "D/c 1,6 Msi Extreme 2024",
              id: 1069,
            },
          ],
        },
        {
          name: "Volvo",
          models: [
            {
              name: "C 30",
              id: 726,
            },
            {
              name: "C 70",
              id: 727,
            },
            {
              name: "S 40",
              id: 728,
            },
            {
              name: "S 60",
              id: 729,
            },
            {
              name: "S 80",
              id: 730,
            },
            {
              name: "S 90",
              id: 731,
            },
            {
              name: "V 40",
              id: 732,
            },
            {
              name: "V 50",
              id: 733,
            },
            {
              name: "V 60",
              id: 734,
            },
            {
              name: "V 70",
              id: 735,
            },
            {
              name: "Xc40",
              id: 736,
            },
            {
              name: "Xc60",
              id: 737,
            },
            {
              name: "Xc70",
              id: 738,
            },
            {
              name: "Xc90 ",
              id: 739,
            },
            {
              name: "Volvo",
              id: 740,
            },
            {
              name: "Fh",
              id: 880,
            },
            {
              name: "Fh Euro V",
              id: 881,
            },
            {
              name: "Fm",
              id: 882,
            },
            {
              name: "Fm Euro V",
              id: 883,
            },
            {
              name: "Fm X",
              id: 884,
            },
            {
              name: "Fm X Euro V",
              id: 885,
            },
            {
              name: "Fm 13",
              id: 886,
            },
            {
              name: "Vm",
              id: 887,
            },
            {
              name: "Vm Euro V",
              id: 888,
            },
          ],
        },
        {
          name: "Zanella",
          models: [
            {
              name: "Force Truck",
              id: 741,
            },
            {
              name: "Z Truck",
              id: 742,
            },
            {
              name: "Zanella",
              id: 743,
            },
          ],
        },
        {
          name: "D F M",
          models: [
            {
              name: "1063",
              id: 752,
            },
            {
              name: "1216",
              id: 753,
            },
            {
              name: "T 01",
              id: 754,
            },
            {
              name: "D F M",
              id: 755,
            },
          ],
        },
        {
          name: "Hino",
          models: [
            {
              name: "Serie 300",
              id: 763,
            },
            {
              name: "Serie 500",
              id: 764,
            },
            {
              name: "Hino",
              id: 765,
            },
          ],
        },
        {
          name: "Iveco",
          models: [
            {
              name: "Cavallino",
              id: 773,
            },
            {
              name: "Cursor",
              id: 774,
            },
            {
              name: "450c33 T T/b Eu5",
              id: 775,
            },
            {
              name: "Daily",
              id: 776,
            },
            {
              name: "36 150 C/cabina A/c 2abg",
              id: 777,
            },
            {
              name: "45 170 Vetrato Bus 8+1",
              id: 778,
            },
            {
              name: "55 170 Chasis Cab 2abg",
              id: 779,
            },
            {
              name: "55 170 Chasis D/cab 6+1 2abg",
              id: 780,
            },
            {
              name: "55 170 Furgon H2 12m3 2abg",
              id: 781,
            },
            {
              name: "Eurocargo",
              id: 782,
            },
            {
              name: "Eurocargo Attack",
              id: 783,
            },
            {
              name: "Stralis",
              id: 784,
            },
            {
              name: "530s36ty/p Tronic  Hr Susp 3200",
              id: 785,
            },
            {
              name: "530s36ty/p Tronic Hr Tb Ft Susp 3200",
              id: 786,
            },
            {
              name: "600s44ty/p Tronic Hr Susp 3200",
              id: 787,
            },
            {
              name: "600s44ty/p Tronic Hr Susp 3500",
              id: 788,
            },
            {
              name: "600s44ty/p Tronic H Way Susp 3200",
              id: 789,
            },
            {
              name: "Tector",
              id: 790,
            },
            {
              name: "Tector Attack",
              id: 791,
            },
            {
              name: "170e21 N Mlc 4185",
              id: 792,
            },
            {
              name: "170e21 N Mlc 4815",
              id: 793,
            },
            {
              name: "170e22 Rsu 4185",
              id: 794,
            },
            {
              name: "170e28 Rsu 4185 At",
              id: 795,
            },
            {
              name: "240e28 Rsu 4185 At",
              id: 796,
            },
            {
              name: "Tector New",
              id: 797,
            },
            {
              name: "Trakker",
              id: 798,
            },
            {
              name: "Vertis",
              id: 799,
            },
            {
              name: "Iveco",
              id: 800,
            },
            {
              name: "460s36t Hr Tb 3500",
              id: 990,
            },
            {
              name: "460s36t Hr At 3500 Susp Neum",
              id: 991,
            },
            {
              name: "490s44ty/p Tronic 4x2 Hi-way Susp Meum",
              id: 992,
            },
          ],
        },
        {
          name: "Jmc",
          models: [
            {
              name: "X 200",
              id: 802,
            },
            {
              name: "Jmc",
              id: 803,
            },
          ],
        },
        {
          name: "Scania",
          models: [
            {
              name: "G340",
              id: 820,
            },
            {
              name: "G380",
              id: 821,
            },
            {
              name: "G420",
              id: 822,
            },
            {
              name: "G470",
              id: 823,
            },
            {
              name: "G Motor Dl Larga Dist",
              id: 824,
            },
            {
              name: "G Motor Dl Construccion",
              id: 825,
            },
            {
              name: "Hormigoneros Eu5",
              id: 826,
            },
            {
              name: "Ntg",
              id: 827,
            },
            {
              name: "G410 A 6x2 Gnc Combustible",
              id: 828,
            },
            {
              name: "G540 B 8x4 Ht",
              id: 829,
            },
            {
              name: "P220 B 4x2",
              id: 830,
            },
            {
              name: "P280 B 6x2",
              id: 831,
            },
            {
              name: "P340 A 4x2 Gnc Combustible",
              id: 832,
            },
            {
              name: "P340 A 4x2 Gnc Vehiculos",
              id: 833,
            },
            {
              name: "P340 B 4x2 Gnc Hormigonero",
              id: 834,
            },
            {
              name: "P360 A 4x2 Vehiculos",
              id: 835,
            },
            {
              name: "P380 B 4x4",
              id: 836,
            },
            {
              name: "P410 A 6x2 H",
              id: 837,
            },
            {
              name: "R410 A 6x2 Ec",
              id: 838,
            },
            {
              name: "R450 A 6x2 Ec",
              id: 839,
            },
            {
              name: "R620 B 10x4/6 Ht",
              id: 840,
            },
            {
              name: "P270",
              id: 841,
            },
            {
              name: "P310",
              id: 842,
            },
            {
              name: "P340",
              id: 843,
            },
            {
              name: "P380",
              id: 844,
            },
            {
              name: "P420",
              id: 845,
            },
            {
              name: "P Motor Dl Larga Dist",
              id: 846,
            },
            {
              name: "P Motor Dl Construccion",
              id: 847,
            },
            {
              name: "Prg Eu5 Dist",
              id: 848,
            },
            {
              name: "Pgr Eu5 Gral",
              id: 849,
            },
            {
              name: "Pgr Eu5 Const",
              id: 850,
            },
            {
              name: "R380",
              id: 851,
            },
            {
              name: "R420",
              id: 852,
            },
            {
              name: "R470",
              id: 853,
            },
            {
              name: "R500",
              id: 854,
            },
            {
              name: "R Motor Dl Larga Dist",
              id: 855,
            },
            {
              name: "Rh Eu5",
              id: 856,
            },
            {
              name: "Rn Eu5",
              id: 857,
            },
            {
              name: "Trans Combustible Eu5",
              id: 858,
            },
            {
              name: "Volquete Urbano Eu5",
              id: 859,
            },
            {
              name: "Scania",
              id: 860,
            },
          ],
        },
      ],
    },
    {
      type: "Motocicleta",
      id: 2,
      items: [
        {
          name: "Appia",
          models: [
            {
              id: "1",
              name: "ANDINA 110",
            },
            {
              id: "2",
              name: "BERAKA 125",
            },
            {
              id: "3",
              name: "BLESS 150",
            },
            {
              id: "4",
              name: "BREZZA 150",
            },
            {
              id: "5",
              name: "BREZZA EURO 150",
            },
            {
              id: "6",
              name: "CITIPLUS 110",
            },
            {
              id: "7",
              name: "CITIPLUS 110 T",
            },
            {
              id: "8",
              name: "CITIPLUS110",
            },
            {
              id: "9",
              name: "DCN 110",
            },
            {
              id: "10",
              name: "GEREMY 125",
            },
            {
              id: "11",
              name: "HARDWIND 200",
            },
            {
              id: "12",
              name: "LEYENDA 150",
            },
            {
              id: "13",
              name: "MONTERO 150",
            },
            {
              id: "14",
              name: "REGIA 125",
            },
            {
              id: "15",
              name: "STRONGER 150",
            },
            {
              id: "16",
              name: "STRONGER 250",
            },
            {
              id: "17",
              name: "VECTRA 110",
            },
            {
              id: "18",
              name: "VECTRA 110 N",
            },
          ],
        },
        {
          name: "Aprilia",
          models: [
            {
              id: "19",
              name: "APRILIA SR 160",
            },
            {
              id: "20",
              name: "DORSODURO 900",
            },
            {
              id: "21",
              name: "RSV4 RF",
            },
            {
              id: "22",
              name: "RSV4 RR",
            },
            {
              id: "23",
              name: "SHIVER 900",
            },
            {
              id: "24",
              name: "STX150",
            },
            {
              id: "25",
              name: "TUAREG 660",
            },
            {
              id: "26",
              name: "TUONO V4 1100 FACTORY",
            },
            {
              id: "27",
              name: "TUONO V4 1100 RR",
            },
            {
              id: "28",
              name: "TUONO V4 FACTORY",
            },
            {
              id: "29",
              name: "TUONO V4 RR",
            },
          ],
        },
        {
          name: "Artic cat",
          models: [
            {
              id: "30",
              name: "300",
            },
            {
              id: "31",
              name: "ALTERRA 450",
            },
            {
              id: "32",
              name: "DVX300",
            },
            {
              id: "33",
              name: "XR 500",
            },
          ],
        },
        {
          name: "Bajaj",
          models: [
            {
              id: "34",
              name: "AVENGER 200",
            },
            {
              id: "35",
              name: "BOXER BM 150",
            },
            {
              id: "36",
              name: "DISCOVER 125",
            },
            {
              id: "37",
              name: "DOMINAR 250",
            },
            {
              id: "38",
              name: "DOMINAR D400",
            },
            {
              id: "39",
              name: "PULSAR 150",
            },
            {
              id: "40",
              name: "PULSAR 180",
            },
            {
              id: "41",
              name: "PULSAR 200",
            },
            {
              id: "42",
              name: "ROUSER 135",
            },
            {
              id: "43",
              name: "ROUSER 135 LS",
            },
            {
              id: "44",
              name: "ROUSER 180",
            },
            {
              id: "45",
              name: "ROUSER 200",
            },
            {
              id: "46",
              name: "ROUSER 220",
            },
            {
              id: "47",
              name: "ROUSER AS 200",
            },
            {
              id: "48",
              name: "ROUSER N 250",
            },
            {
              id: "49",
              name: "ROUSER NS 125",
            },
            {
              id: "50",
              name: "ROUSER NS 150",
            },
            {
              id: "51",
              name: "ROUSER NS 160",
            },
            {
              id: "52",
              name: "ROUSER NS 200 FI ABS",
            },
            {
              id: "53",
              name: "ROUSER RS 200",
            },
            {
              id: "54",
              name: "ROUSER220F",
            },
            {
              id: "55",
              name: "V 15",
            },
            {
              id: "56",
              name: "XCD125",
            },
          ],
        },
        {
          name: "Benelli",
          models: [
            {
              id: "57",
              name: "180 S",
            },
            {
              id: "58",
              name: "302 R",
            },
            {
              id: "59",
              name: "302 S",
            },
            {
              id: "60",
              name: "502C",
            },
            {
              id: "61",
              name: "752S",
            },
            {
              id: "62",
              name: "CAFFENERO",
            },
            {
              id: "63",
              name: "IMPERIALE 400",
            },
            {
              id: "64",
              name: "LEONCINO 250",
            },
            {
              id: "65",
              name: "LEONCINO 500",
            },
            {
              id: "66",
              name: "SETA ",
            },
            {
              id: "67",
              name: "TNT 135",
            },
            {
              id: "68",
              name: "TNT 600",
            },
            {
              id: "69",
              name: "TNT15",
            },
            {
              id: "70",
              name: "TNT25",
            },
            {
              id: "71",
              name: "TNT300",
            },
            {
              id: "72",
              name: "TNT600GT",
            },
            {
              id: "73",
              name: "TRK 502",
            },
            {
              id: "74",
              name: "TRK 502 X",
            },
            {
              id: "75",
              name: "TRK251",
            },
            {
              id: "76",
              name: "ZAFFERANO",
            },
          ],
        },
        {
          name: "Betamotor",
          models: [
            {
              id: "77",
              name: "AKVO",
            },
            {
              id: "78",
              name: "ARK",
            },
            {
              id: "79",
              name: "ARROW",
            },
            {
              id: "80",
              name: "ARROW 150",
            },
            {
              id: "81",
              name: "ARROW 80",
            },
            {
              id: "82",
              name: "BK",
            },
            {
              id: "83",
              name: "BK150",
            },
            {
              id: "84",
              name: "BOY",
            },
            {
              id: "85",
              name: "BS 110-1",
            },
            {
              id: "86",
              name: "BS110-1",
            },
            {
              id: "87",
              name: "CAYMAN",
            },
            {
              id: "88",
              name: "CHRONO 2.5",
            },
            {
              id: "89",
              name: "EIKON",
            },
            {
              id: "90",
              name: "ENDURO",
            },
            {
              id: "91",
              name: "ENDURO MX 50",
            },
            {
              id: "92",
              name: "EURO",
            },
            {
              id: "93",
              name: "FINDER",
            },
            {
              id: "94",
              name: "FOUR",
            },
            {
              id: "95",
              name: "FOXTER",
            },
            {
              id: "96",
              name: "GRINDER",
            },
            {
              id: "97",
              name: "LX250-8",
            },
            {
              id: "98",
              name: "MASTER XLF",
            },
            {
              id: "99",
              name: "MINICROSS",
            },
            {
              id: "100",
              name: "MINICROSS LEM",
            },
            {
              id: "101",
              name: "MOTARD 2.0",
            },
            {
              id: "102",
              name: "MOTARD 2.5",
            },
            {
              id: "103",
              name: "NEOS",
            },
            {
              id: "104",
              name: "PANDA",
            },
            {
              id: "105",
              name: "QM 125 T 10V",
            },
            {
              id: "106",
              name: "QM 200 GY",
            },
            {
              id: "107",
              name: "QM200GY CHRONO",
            },
            {
              id: "108",
              name: "QM200GY CRHONO",
            },
            {
              id: "109",
              name: "QM200GY MOTARD 2.0",
            },
            {
              id: "110",
              name: "QM200GY TR2.0",
            },
            {
              id: "111",
              name: "QUADRA",
            },
            {
              id: "112",
              name: "RK6 CROSS",
            },
            {
              id: "113",
              name: "RK6 ENDURO",
            },
            {
              id: "114",
              name: "RR 125 2T",
            },
            {
              id: "115",
              name: "RR 125 MINI",
            },
            {
              id: "116",
              name: "RR 300 2T",
            },
            {
              id: "117",
              name: "RR 350 X",
            },
            {
              id: "118",
              name: "RR 390",
            },
            {
              id: "119",
              name: "RR 430",
            },
            {
              id: "120",
              name: "RR 450",
            },
            {
              id: "121",
              name: "RR 450 X",
            },
            {
              id: "122",
              name: "RR 480",
            },
            {
              id: "123",
              name: "RR 4T 430",
            },
            {
              id: "124",
              name: "RR450",
            },
            {
              id: "125",
              name: "RT250 ST",
            },
            {
              id: "126",
              name: "RT250 ST2",
            },
            {
              id: "127",
              name: "SCOOBY",
            },
            {
              id: "128",
              name: "TEMPO",
            },
            {
              id: "129",
              name: "TR 2.0",
            },
            {
              id: "130",
              name: "TR 2.5",
            },
            {
              id: "131",
              name: "URBA",
            },
            {
              id: "132",
              name: "X-TRAINER 300",
            },
            {
              id: "133",
              name: "ZONTES 310R",
            },
            {
              id: "134",
              name: "ZONTES 310X",
            },
            {
              id: "135",
              name: "ZONTES 350 GK",
            },
            {
              id: "136",
              name: "ZONTES 350 X",
            },
            {
              id: "137",
              name: "ZONTES V 350",
            },
            {
              id: "138",
              name: "ZT155-G",
            },
            {
              id: "139",
              name: "ZT155-U",
            },
            {
              id: "140",
              name: "ZT310M",
            },
            {
              id: "141",
              name: "ZT310R",
            },
            {
              id: "142",
              name: "ZT310T",
            },
            {
              id: "143",
              name: "ZT310V",
            },
            {
              id: "144",
              name: "ZT310X",
            },
            {
              id: "145",
              name: "ZT350T",
            },
          ],
        },
        {
          name: "Blackstone",
          models: [
            {
              id: "146",
              name: "BKS110",
            },
            {
              id: "147",
              name: "BKS200",
            },
            {
              id: "148",
              name: "BKS200 II",
            },
            {
              id: "149",
              name: "BKS200S",
            },
            {
              id: "150",
              name: "BKS250",
            },
            {
              id: "151",
              name: "BKS250 II",
            },
            {
              id: "152",
              name: "BKS250S",
            },
            {
              id: "153",
              name: "BKS250S II",
            },
            {
              id: "154",
              name: "BKS300",
            },
            {
              id: "155",
              name: "BKS300 4V",
            },
            {
              id: "156",
              name: "BKS300S",
            },
            {
              id: "157",
              name: "BKS300S 2V",
            },
            {
              id: "158",
              name: "BKS300S 4V",
            },
            {
              id: "159",
              name: "BKS50",
            },
            {
              id: "160",
              name: "JX200ST-3",
            },
            {
              id: "161",
              name: "JX250ST",
            },
            {
              id: "162",
              name: "JX250ST-2",
            },
            {
              id: "163",
              name: "JX250ST-4A",
            },
            {
              id: "164",
              name: "JX50ST-4",
            },
          ],
        },
        {
          name: "Bmw",
          models: [
            {
              id: "165",
              name: "650",
            },
            {
              id: "166",
              name: "C 600 SPORT",
            },
            {
              id: "167",
              name: "C650 SPORT",
            },
            {
              id: "168",
              name: "C650GT",
            },
            {
              id: "169",
              name: "F 650",
            },
            {
              id: "170",
              name: "F 650 GS",
            },
            {
              id: "171",
              name: "F 650 GS DAKAR",
            },
            {
              id: "172",
              name: "F 650 SM",
            },
            {
              id: "173",
              name: "F 650 ST",
            },
            {
              id: "174",
              name: "F 700 GS",
            },
            {
              id: "175",
              name: "F 750 GS",
            },
            {
              id: "176",
              name: "F 800 GS",
            },
            {
              id: "177",
              name: "F 800 GS ADVENTURE",
            },
            {
              id: "178",
              name: "F 800 R",
            },
            {
              id: "179",
              name: "F 850 GS",
            },
            {
              id: "180",
              name: "F650",
            },
            {
              id: "181",
              name: "F650 CS",
            },
            {
              id: "182",
              name: "F800ST",
            },
            {
              id: "183",
              name: "G 310 GS",
            },
            {
              id: "184",
              name: "G 450 X",
            },
            {
              id: "185",
              name: "G 650 GS",
            },
            {
              id: "186",
              name: "G310R",
            },
            {
              id: "187",
              name: "G650 X CHALLENGE",
            },
            {
              id: "188",
              name: "G650 X COUNTRY",
            },
            {
              id: "189",
              name: "G650GS SERTAO",
            },
            {
              id: "190",
              name: "GR 1200",
            },
            {
              id: "191",
              name: "K1200 R",
            },
            {
              id: "192",
              name: "K1200GT",
            },
            {
              id: "193",
              name: "K1200LT",
            },
            {
              id: "194",
              name: "K1200S",
            },
            {
              id: "195",
              name: "K1300GT",
            },
            {
              id: "196",
              name: "K1300R",
            },
            {
              id: "197",
              name: "K1600B",
            },
            {
              id: "198",
              name: "K1600GT",
            },
            {
              id: "199",
              name: "K1600GTL",
            },
            {
              id: "200",
              name: "K1600GTL EXCLUSIVE",
            },
            {
              id: "201",
              name: "R 1100 GS",
            },
            {
              id: "202",
              name: "R 1100 R",
            },
            {
              id: "203",
              name: "R 1100 RS",
            },
            {
              id: "204",
              name: "R 1100 RT",
            },
            {
              id: "205",
              name: "R 1150 RT",
            },
            {
              id: "206",
              name: "R 1250 GS",
            },
            {
              id: "207",
              name: "R 1250 GS ADVENTURE",
            },
            {
              id: "208",
              name: "R 1250 RT",
            },
            {
              id: "209",
              name: "R 1300 GS",
            },
            {
              id: "210",
              name: "R 18",
            },
            {
              id: "211",
              name: "R 18 CLASSIC",
            },
            {
              id: "212",
              name: "R NINE T",
            },
            {
              id: "213",
              name: "R NINE T PURE",
            },
            {
              id: "214",
              name: "R NINE T RACER",
            },
            {
              id: "215",
              name: "R NINE T SCRAMBLER",
            },
            {
              id: "216",
              name: "R NINE T URBAN G/S",
            },
            {
              id: "217",
              name: "R1100S",
            },
            {
              id: "218",
              name: "R1150 GS ADVENTURE",
            },
            {
              id: "219",
              name: "R1150GS",
            },
            {
              id: "220",
              name: "R1150R",
            },
            {
              id: "221",
              name: "R1200",
            },
            {
              id: "222",
              name: "R1200C",
            },
            {
              id: "223",
              name: "R1200C INDEPENDENT",
            },
            {
              id: "224",
              name: "R1200CL",
            },
            {
              id: "225",
              name: "R1200GS",
            },
            {
              id: "226",
              name: "R1200GS ADVENTURE",
            },
            {
              id: "227",
              name: "R1200R",
            },
            {
              id: "228",
              name: "R1200RS",
            },
            {
              id: "229",
              name: "R1200RT",
            },
            {
              id: "230",
              name: "S1000R",
            },
            {
              id: "231",
              name: "S1000RR",
            },
            {
              id: "232",
              name: "S1000XR",
            },
          ],
        },
        {
          name: "Brava",
          models: [
            {
              id: "233",
              name: "ALPINA 110",
            },
            {
              id: "234",
              name: "ALPINA 125",
            },
            {
              id: "235",
              name: "ALTINO 150",
            },
            {
              id: "236",
              name: "ALTINO 180",
            },
            {
              id: "237",
              name: "ALTINO 200",
            },
            {
              id: "238",
              name: "APOLO 110",
            },
            {
              id: "239",
              name: "AQUILA 200",
            },
            {
              id: "240",
              name: "ATHENE 125",
            },
            {
              id: "241",
              name: "BR200 JUMPER",
            },
            {
              id: "242",
              name: "BR250 ADVENTURE",
            },
            {
              id: "243",
              name: "DAYSTAR 250",
            },
            {
              id: "244",
              name: "DAYSTAR ROUTIER 250",
            },
            {
              id: "245",
              name: "ELEKTRA 150",
            },
            {
              id: "246",
              name: "LAZER 150",
            },
            {
              id: "247",
              name: "LAZER 150SP",
            },
            {
              id: "248",
              name: "LAZER 70",
            },
            {
              id: "249",
              name: "NEPAL 250",
            },
            {
              id: "250",
              name: "NEVADA 100",
            },
            {
              id: "251",
              name: "NEVADA 110 SP",
            },
            {
              id: "252",
              name: "NEVADA 125",
            },
            {
              id: "253",
              name: "NEVADA 125 SP",
            },
            {
              id: "254",
              name: "TEXANA HS 200",
            },
            {
              id: "255",
              name: "TEXANA HS 250",
            },
            {
              id: "256",
              name: "WINSTAR 150",
            },
          ],
        },
        {
          name: "can-am",
          models: [
            {
              id: "257",
              name: "DS 250",
            },
            {
              id: "258",
              name: "DS 450 X",
            },
            {
              id: "259",
              name: "DS 450 X MS",
            },
            {
              id: "260",
              name: "DS 90",
            },
            {
              id: "261",
              name: "DS 90 X",
            },
            {
              id: "262",
              name: "DS450",
            },
            {
              id: "263",
              name: "DS450 EFI XMX",
            },
            {
              id: "264",
              name: "DS450 EFI XXC",
            },
            {
              id: "265",
              name: "OUTLANDER 1000",
            },
            {
              id: "266",
              name: "OUTLANDER 1000 EFI",
            },
            {
              id: "267",
              name: "OUTLANDER 1000 MAX",
            },
            {
              id: "268",
              name: "OUTLANDER 1000 MAX XT",
            },
            {
              id: "269",
              name: "OUTLANDER 1000 X MR",
            },
            {
              id: "270",
              name: "OUTLANDER 1000 XT",
            },
            {
              id: "271",
              name: "OUTLANDER 1000 XT-P",
            },
            {
              id: "272",
              name: "OUTLANDER 500",
            },
            {
              id: "273",
              name: "OUTLANDER 500 MAX",
            },
            {
              id: "274",
              name: "OUTLANDER 500 XT",
            },
            {
              id: "275",
              name: "OUTLANDER 650 XT",
            },
            {
              id: "276",
              name: "OUTLANDER 800 R EFI X MR",
            },
            {
              id: "277",
              name: "OUTLANDER 800 XT",
            },
            {
              id: "278",
              name: "OUTLANDER 800R EFI XT-P",
            },
            {
              id: "279",
              name: "OUTLANDER 800R MAX XT",
            },
            {
              id: "280",
              name: "OUTLANDER 800RXT",
            },
            {
              id: "281",
              name: "OUTLANDER DPS 570",
            },
            {
              id: "282",
              name: "OUTLANDER L MAX DPS 45",
            },
            {
              id: "283",
              name: "OUTLANDER MAX 400",
            },
            {
              id: "284",
              name: "OUTLANDER MAX 500 EFI X",
            },
            {
              id: "285",
              name: "OUTLANDER MAX 650 XT P",
            },
            {
              id: "286",
              name: "OUTLANDER MAX 800R EFI",
            },
            {
              id: "287",
              name: "OUTLANDER MAX DPS 500",
            },
            {
              id: "288",
              name: "OUTLANDER MAX DPS 570",
            },
            {
              id: "289",
              name: "OUTLANDER MAX DPS 800R",
            },
            {
              id: "290",
              name: "OUTLANDER MAX LIMITED",
            },
            {
              id: "291",
              name: "OUTLANDER MAX LTD 1000",
            },
            {
              id: "292",
              name: "OUTLANDER MAX LTD 800",
            },
            {
              id: "293",
              name: "OUTLANDER MAX XT 1000R",
            },
            {
              id: "294",
              name: "OUTLANDER MAX XT 400",
            },
            {
              id: "295",
              name: "OUTLANDER MAX XT 400 H",
            },
            {
              id: "296",
              name: "OUTLANDER MAX XT 570",
            },
            {
              id: "297",
              name: "OUTLANDER MAX XT 650",
            },
            {
              id: "298",
              name: "OUTLANDER MAX XT 650 H",
            },
            {
              id: "299",
              name: "OUTLANDER MAX XT-P 100",
            },
            {
              id: "300",
              name: "OUTLANDER MAX XT-P 850",
            },
            {
              id: "301",
              name: "R SPYDER F3",
            },
            {
              id: "302",
              name: "RENEGADE 1000 X XC",
            },
            {
              id: "303",
              name: "RENEGADE 500",
            },
            {
              id: "304",
              name: "RENEGADE 500 EFI",
            },
            {
              id: "305",
              name: "RENEGADE 570",
            },
            {
              id: "306",
              name: "RENEGADE 800 H.O. EFI",
            },
            {
              id: "307",
              name: "RENEGADE 800 R",
            },
            {
              id: "308",
              name: "RENEGADE 800 R EFI XXC",
            },
            {
              id: "309",
              name: "RENEGADE 800 R XC",
            },
            {
              id: "310",
              name: "RENEGADE 800 X",
            },
            {
              id: "311",
              name: "SPYDER",
            },
            {
              id: "312",
              name: "SPYDER RS",
            },
            {
              id: "313",
              name: "SPYDER RSS",
            },
            {
              id: "314",
              name: "SPYDER RT",
            },
          ],
        },
        {
          name: "Cerro",
          models: [
            {
              id: "315",
              name: "BIX CE 110-21",
            },
            {
              id: "316",
              name: "BIX CE110-21",
            },
            {
              id: "317",
              name: "CE 100",
            },
            {
              id: "318",
              name: "CE 110",
            },
            {
              id: "319",
              name: "CE 150-13",
            },
            {
              id: "320",
              name: "CE125-12",
            },
            {
              id: "321",
              name: "CE150-13",
            },
            {
              id: "322",
              name: "CERRO COW CE70",
            },
            {
              id: "323",
              name: "CERRO DOT CE70-7",
            },
            {
              id: "324",
              name: "CHAMICAL CE 150",
            },
            {
              id: "325",
              name: "COLT CE 200",
            },
            {
              id: "326",
              name: "COW CE 70",
            },
            {
              id: "327",
              name: "DOT CE 70-7",
            },
            {
              id: "328",
              name: "FIRE 110R",
            },
            {
              id: "329",
              name: "FLY CE110",
            },
            {
              id: "330",
              name: "FORMER 250",
            },
            {
              id: "331",
              name: "LINK CE-110",
            },
            {
              id: "332",
              name: "LINKCE-110",
            },
            {
              id: "333",
              name: "MOV CE 125QT - 10",
            },
            {
              id: "334",
              name: "PRINCE CE-150-16",
            },
            {
              id: "335",
              name: "PRINCE CE-250-16",
            },
            {
              id: "336",
              name: "R9 CE125T - 8",
            },
            {
              id: "337",
              name: "ROUTER CE 250-16",
            },
            {
              id: "338",
              name: "SCRATCH 200 R",
            },
            {
              id: "339",
              name: "SPEED 200",
            },
            {
              id: "340",
              name: "SUNNY",
            },
            {
              id: "341",
              name: "XTREME 250",
            },
          ],
        },
        {
          name: "cfmoto",
          models: [
            {
              id: "342",
              name: "CF250-A",
            },
            {
              id: "343",
              name: "250NK",
            },
            {
              id: "344",
              name: "300CL-X",
            },
            {
              id: "345",
              name: "300NK",
            },
            {
              id: "346",
              name: "300SR",
            },
            {
              id: "347",
              name: "400NK",
            },
            {
              id: "348",
              name: "450SR",
            },
            {
              id: "349",
              name: "650GT",
            },
            {
              id: "350",
              name: "650MT",
            },
            {
              id: "351",
              name: "650NK",
            },
            {
              id: "352",
              name: "700CL-X",
            },
            {
              id: "353",
              name: "700CL-X ADV",
            },
            {
              id: "354",
              name: "700CL-X HERITAGE",
            },
            {
              id: "355",
              name: "700CL-X SPORT",
            },
            {
              id: "356",
              name: "700MT",
            },
            {
              id: "357",
              name: "800MT EXPLORE EDITION",
            },
            {
              id: "358",
              name: "800MT SPORT",
            },
            {
              id: "359",
              name: "800MT TOURING",
            },
            {
              id: "360",
              name: "800NK",
            },
            {
              id: "361",
              name: "ATV CFORCE 1000",
            },
            {
              id: "362",
              name: "ATV CFORCE 110",
            },
            {
              id: "363",
              name: "ATV CFORCE 400",
            },
            {
              id: "364",
              name: "ATV CFORCE 625",
            },
            {
              id: "365",
              name: "CF500",
            },
            {
              id: "366",
              name: "CF500-2",
            },
            {
              id: "367",
              name: "CF500-2A",
            },
            {
              id: "368",
              name: "CF500-5",
            },
            {
              id: "369",
              name: "CF500-5A",
            },
            {
              id: "370",
              name: "CF500-5B",
            },
            {
              id: "371",
              name: "CF500-5C",
            },
            {
              id: "372",
              name: "CF500-A",
            },
            {
              id: "373",
              name: "CF500AU 6L",
            },
            {
              id: "374",
              name: "CFORCE 1000",
            },
            {
              id: "375",
              name: "CFORCE 520",
            },
            {
              id: "376",
              name: "CFORCE 550",
            },
            {
              id: "377",
              name: "CFORCE 625",
            },
            {
              id: "378",
              name: "UFORCE 1000 XL",
            },
            {
              id: "379",
              name: "ZFORCE 1000 SPORT",
            },
            {
              id: "380",
              name: "ZFORCE 800 EX",
            },
            {
              id: "381",
              name: "ZFORCE 950 SPORT",
            },
          ],
        },
        {
          name: "Coradir",
          models: [
            {
              id: "382",
              name: "S2-100",
            },
            {
              id: "383",
              name: "S2-100AA",
            },
            {
              id: "384",
              name: "S5-100",
            },
            {
              id: "385",
              name: "S5-100 AA",
            },
            {
              id: "386",
              name: "S5-100P AA",
            },
            {
              id: "387",
              name: "S5-300",
            },
            {
              id: "388",
              name: "S5-300 AA",
            },
            {
              id: "389",
              name: "S5-300P AA",
            },
            {
              id: "390",
              name: "TITA ELECTRICA S2-100",
            },
            {
              id: "391",
              name: "TITA ELECTRICA S2-300",
            },
          ],
        },
        {
          name: "Corven",
          models: [
            {
              id: "392",
              name: "DX 70",
            },
            {
              id: "393",
              name: "ENERGY 110",
            },
            {
              id: "394",
              name: "ENERGY 110 BY CORVEN",
            },
            {
              id: "395",
              name: "ENERGY 110 TUNING",
            },
            {
              id: "396",
              name: "ENERGY 125",
            },
            {
              id: "397",
              name: "EXPERT 150",
            },
            {
              id: "398",
              name: "EXPERT 80",
            },
            {
              id: "399",
              name: "HUNTER 150",
            },
            {
              id: "400",
              name: "HUNTER 150 BY CORVEN",
            },
            {
              id: "401",
              name: "HUNTER 160",
            },
            {
              id: "402",
              name: "HUNTER 200",
            },
            {
              id: "403",
              name: "INDIANA 256 BY CORVEN",
            },
            {
              id: "404",
              name: "LX 250",
            },
            {
              id: "405",
              name: "MIRAGE 110",
            },
            {
              id: "406",
              name: "MIRAGE 110 BY CORVEN",
            },
            {
              id: "407",
              name: "TERRAIN 150",
            },
            {
              id: "408",
              name: "TERRAIN 250",
            },
            {
              id: "409",
              name: "TERRAIN 250S",
            },
            {
              id: "410",
              name: "TERRAIN 250X",
            },
            {
              id: "411",
              name: "TRIAX 150",
            },
            {
              id: "412",
              name: "TRIAX 200",
            },
            {
              id: "413",
              name: "TRIAX 200 MOTARD",
            },
            {
              id: "414",
              name: "TRIAX 250",
            },
            {
              id: "415",
              name: "TRIAX 250 ADVENTURE",
            },
            {
              id: "416",
              name: "TRIAX 250 TOURING",
            },
            {
              id: "417",
              name: "TXR 250 L",
            },
            {
              id: "418",
              name: "TXR 300 L",
            },
          ],
        },
        {
          name: "Dadalt",
          models: [
            {
              id: "419",
              name: "CICLOCARGA",
            },
            {
              id: "420",
              name: "CICLOCARGA DOBLE BANDE",
            },
            {
              id: "421",
              name: "DS 110",
            },
          ],
        },
        {
          name: "Daelim",
          models: [
            {
              id: "422",
              name: "BZ1",
            },
            {
              id: "423",
              name: "DAYSTAR",
            },
            {
              id: "424",
              name: "QL 125",
            },
            {
              id: "425",
              name: "SZ2",
            },
          ],
        },
        {
          name: "Dayama",
          models: [
            {
              id: "426",
              name: "DA-250ST 2",
            },
          ],
        },
        {
          name: "Ducati",
          models: [
            {
              id: "427",
              name: "1199 PANIGALE ABS",
            },
            {
              id: "428",
              name: "1299 PANIGALE",
            },
            {
              id: "429",
              name: "1299 PANIGALE S",
            },
            {
              id: "430",
              name: "748",
            },
            {
              id: "431",
              name: "748 S",
            },
            {
              id: "432",
              name: "748 SPS",
            },
            {
              id: "433",
              name: "748R",
            },
            {
              id: "434",
              name: "749",
            },
            {
              id: "435",
              name: "749 S",
            },
            {
              id: "436",
              name: "899 PANIGALE",
            },
            {
              id: "437",
              name: "959 PANIGALE",
            },
            {
              id: "438",
              name: "999 S",
            },
            {
              id: "439",
              name: "DIAVEL",
            },
            {
              id: "440",
              name: "DIAVEL CARBON",
            },
            {
              id: "441",
              name: "HYPERMOTARD",
            },
            {
              id: "442",
              name: "HYPERMOTARD 939",
            },
            {
              id: "443",
              name: "HYPERMOTARD 939 SP",
            },
            {
              id: "444",
              name: "HYPERMOTARD SP",
            },
            {
              id: "445",
              name: "M750",
            },
            {
              id: "446",
              name: "MONSTER 1200",
            },
            {
              id: "447",
              name: "MONSTER 1200 S",
            },
            {
              id: "448",
              name: "MONSTER 600",
            },
            {
              id: "449",
              name: "MONSTER 600 DARK",
            },
            {
              id: "450",
              name: "MONSTER 620",
            },
            {
              id: "451",
              name: "MONSTER 620 DARK",
            },
            {
              id: "452",
              name: "MONSTER 620 DARK I.E.",
            },
            {
              id: "453",
              name: "MONSTER 696",
            },
            {
              id: "454",
              name: "MONSTER 696 ABS",
            },
            {
              id: "455",
              name: "MONSTER 750",
            },
            {
              id: "456",
              name: "MONSTER 750 DARK",
            },
            {
              id: "457",
              name: "MONSTER 796",
            },
            {
              id: "458",
              name: "MONSTER 796 ABS",
            },
            {
              id: "459",
              name: "MONSTER 797",
            },
            {
              id: "460",
              name: "MONSTER 821",
            },
            {
              id: "461",
              name: "MONSTER 821 STEALTH",
            },
            {
              id: "462",
              name: "MONSTER 900",
            },
            {
              id: "463",
              name: "MONSTER 900 CROMO",
            },
            {
              id: "464",
              name: "MONSTER 900 DARK",
            },
            {
              id: "465",
              name: "MONSTER 900S",
            },
            {
              id: "466",
              name: "MONSTER 900S 4",
            },
            {
              id: "467",
              name: "MONSTER S2R 1000",
            },
            {
              id: "468",
              name: "MONSTER S4R",
            },
            {
              id: "469",
              name: "MONSTER S4R TESTASTRET",
            },
            {
              id: "470",
              name: "MONSTER S4RS TESTASTRE",
            },
            {
              id: "471",
              name: "MULTISTRADA",
            },
            {
              id: "472",
              name: "MULTISTRADA 1000 DS",
            },
            {
              id: "473",
              name: "MULTISTRADA 1000DS S",
            },
            {
              id: "474",
              name: "MULTISTRADA 1200",
            },
            {
              id: "475",
              name: "MULTISTRADA 1200 ENDUR",
            },
            {
              id: "476",
              name: "MULTISTRADA 1200 PIKES P",
            },
            {
              id: "477",
              name: "MULTISTRADA 1200 S",
            },
            {
              id: "478",
              name: "MULTISTRADA 1200 S TOUR",
            },
            {
              id: "479",
              name: "MULTISTRADA 1200 TOURI",
            },
            {
              id: "480",
              name: "MULTISTRADA 1260",
            },
            {
              id: "481",
              name: "MULTISTRADA 1260 ENDUR",
            },
            {
              id: "482",
              name: "MULTISTRADA 1260 PIKES P",
            },
            {
              id: "483",
              name: "MULTISTRADA 1260 S",
            },
            {
              id: "484",
              name: "MULTISTRADA 950",
            },
            {
              id: "485",
              name: "MULTISTRADA 950 S",
            },
            {
              id: "486",
              name: "MULTISTRADA V2",
            },
            {
              id: "487",
              name: "MULTISTRADA V2 S",
            },
            {
              id: "488",
              name: "MULTISTRADA V4",
            },
            {
              id: "489",
              name: "MULTISTRADA V4 S",
            },
            {
              id: "490",
              name: "MULTISTRADA V4 S RADAR",
            },
            {
              id: "491",
              name: "PANIGALE V4",
            },
            {
              id: "492",
              name: "PANIGALE V4S",
            },
            {
              id: "493",
              name: "PAUL SMART 1000",
            },
            {
              id: "494",
              name: "PAUL SMART 1000 LE",
            },
            {
              id: "495",
              name: "SCRAMBLER 1100",
            },
            {
              id: "496",
              name: "SCRAMBLER 1100 SPECIAL",
            },
            {
              id: "497",
              name: "SCRAMBLER 1100 SPORT",
            },
            {
              id: "498",
              name: "SCRAMBLER 400 SIXTY 2",
            },
            {
              id: "499",
              name: "SCRAMBLER 800",
            },
            {
              id: "500",
              name: "SCRAMBLER 800 CAFE RACE",
            },
            {
              id: "501",
              name: "SCRAMBLER 800 CLASSIC",
            },
            {
              id: "502",
              name: "SCRAMBLER 800 DESERT SL",
            },
            {
              id: "503",
              name: "SCRAMBLER 800 FLAT TRA",
            },
            {
              id: "504",
              name: "SCRAMBLER 800 FUL THRO",
            },
            {
              id: "505",
              name: "SCRAMBLER 800 FULL THRO",
            },
            {
              id: "506",
              name: "SCRAMBLER 800 ICON",
            },
            {
              id: "507",
              name: "SCRAMBLER 800 ICON DAR",
            },
            {
              id: "508",
              name: "SCRAMBLER 800 MACH 2.0",
            },
            {
              id: "509",
              name: "SCRAMBLER 800 URBAN EN",
            },
            {
              id: "510",
              name: "SCRAMBLER ICON",
            },
            {
              id: "511",
              name: "SCRAMBLER ICON 2G",
            },
            {
              id: "512",
              name: "SCRAMBLER ICON DARK",
            },
            {
              id: "513",
              name: "SPORT 1000",
            },
            {
              id: "514",
              name: "SPORT TOURING 2",
            },
            {
              id: "515",
              name: "SPORT TOURING 4",
            },
            {
              id: "516",
              name: "ST3",
            },
            {
              id: "517",
              name: "SUPER SPORT 750",
            },
            {
              id: "518",
              name: "SUPER SPORT 900",
            },
            {
              id: "519",
              name: "XDIAVEL",
            },
            {
              id: "520",
              name: "XDIAVEL S",
            },
          ],
        },
        {
          name: "Elite",
          models: [
            {
              id: "521",
              name: "Elite 125",
            },
          ],
        },
        {
          name: "Elpra Electric",
          models: [
            {
              id: "522",
              name: "CITY-M8-CITY CHOPER- CY",
            },
            {
              id: "523",
              name: "FOLK/ZMAJ05",
            },
            {
              id: "524",
              name: "INDIE",
            },
            {
              id: "525",
              name: "MASTER",
            },
            {
              id: "526",
              name: "TRES DUO",
            },
            {
              id: "527",
              name: "TWIST/LX05/TW",
            },
          ],
        },
        {
          name: "Euromot",
          models: [
            {
              id: "528",
              name: "GTX250B A",
            },
            {
              id: "529",
              name: "GTX250B B",
            },
            {
              id: "530",
              name: "HJ110-2",
            },
            {
              id: "531",
              name: "HJ125-7",
            },
            {
              id: "532",
              name: "HJ125T-11A",
            },
          ],
        },
        {
          name: "Feresa",
          models: [
            {
              id: "533",
              name: "TITA ELECTRICA S4-100",
            },
          ],
        },
        {
          name: "Gaf",
          models: [
            {
              id: "534",
              name: "GX 125",
            },
          ],
        },
        {
          name: "Gamma",
          models: [
            {
              id: "535",
              name: "CFORCE 450",
            },
            {
              id: "536",
              name: "CFORCE 550",
            },
            {
              id: "537",
              name: "EAGLE 500 EFI",
            },
            {
              id: "538",
              name: "MOUNTAINEER 450",
            },
            {
              id: "539",
              name: "MOUNTAINEER 800 LTD",
            },
            {
              id: "540",
              name: "VANGUARD 150",
            },
          ],
        },
        {
          name: "Garelli Sahel",
          models: [
            {
              id: "541",
              name: "Sahel 150",
            },
            {
              id: "542",
              name: "Sahel 200",
            },
          ],
        },
        {
          name: "GHIGGERI",
          models: [
            {
              id: "543",
              name: "Vita 110",
            },
            {
              id: "544",
              name: "Vita 110 sport tunning",
            },
          ],
        },
        {
          name: "Gilera",
          models: [
            {
              id: "545",
              name: "AC4",
            },
            {
              id: "546",
              name: "AG50",
            },
            {
              id: "547",
              name: "AX100",
            },
            {
              id: "548",
              name: "C100 ESTILO",
            },
            {
              id: "549",
              name: "C110",
            },
            {
              id: "550",
              name: "C110 ESTILO",
            },
            {
              id: "551",
              name: "C50",
            },
            {
              id: "552",
              name: "C70",
            },
            {
              id: "553",
              name: "CD 100-3B",
            },
            {
              id: "554",
              name: "EG2",
            },
            {
              id: "555",
              name: "FR 200 HOT BEAR",
            },
            {
              id: "556",
              name: "FR 250",
            },
            {
              id: "557",
              name: "FR-110 FREE RUNNER",
            },
            {
              id: "558",
              name: "FR-125 SII",
            },
            {
              id: "559",
              name: "FR-150 R",
            },
            {
              id: "560",
              name: "FR-200 R",
            },
            {
              id: "561",
              name: "FR-200R",
            },
            {
              id: "562",
              name: "FR-250",
            },
            {
              id: "563",
              name: "FR-X 300",
            },
            {
              id: "564",
              name: "FR-X250",
            },
            {
              id: "565",
              name: "FR110 FREE RUNNER",
            },
            {
              id: "566",
              name: "FR150 FREE RUNNER",
            },
            {
              id: "567",
              name: "FR200 FREE RUNNER",
            },
            {
              id: "568",
              name: "FR200 HOT BEAR",
            },
            {
              id: "569",
              name: "FR250 FREE RUNNER",
            },
            {
              id: "570",
              name: "FR250 HOT BEAR",
            },
            {
              id: "571",
              name: "FR250 WC FREE RUNNER",
            },
            {
              id: "572",
              name: "FREE RUNNER 4T 125 F/D",
            },
            {
              id: "573",
              name: "FRX300",
            },
            {
              id: "574",
              name: "FU",
            },
            {
              id: "575",
              name: "FUTURA",
            },
            {
              id: "576",
              name: "FUTURA 110",
            },
            {
              id: "577",
              name: "FX-125",
            },
            {
              id: "578",
              name: "G1",
            },
            {
              id: "579",
              name: "GA 50-4T",
            },
            {
              id: "580",
              name: "GA 50-4T PRONTO",
            },
            {
              id: "581",
              name: "GA 70-4T",
            },
            {
              id: "582",
              name: "GA 70-4T PRONTO",
            },
            {
              id: "583",
              name: "GA-125",
            },
            {
              id: "584",
              name: "GA-50",
            },
            {
              id: "585",
              name: "GA-50 PRONTO",
            },
            {
              id: "586",
              name: "GA125",
            },
            {
              id: "587",
              name: "GLA 110",
            },
            {
              id: "588",
              name: "GLA-110",
            },
            {
              id: "589",
              name: "GLA100",
            },
            {
              id: "590",
              name: "GX1",
            },
            {
              id: "591",
              name: "JL150",
            },
            {
              id: "592",
              name: "LC 150",
            },
            {
              id: "593",
              name: "LM-50",
            },
            {
              id: "594",
              name: "LX100-3A",
            },
            {
              id: "595",
              name: "LX100-3B",
            },
            {
              id: "596",
              name: "QAX100",
            },
            {
              id: "597",
              name: "QM 100",
            },
            {
              id: "598",
              name: "QM100-12",
            },
            {
              id: "599",
              name: "QM100-7B",
            },
            {
              id: "600",
              name: "QM100-9",
            },
            {
              id: "601",
              name: "QM110-7B",
            },
            {
              id: "602",
              name: "QM110-9",
            },
            {
              id: "603",
              name: "QM125-10",
            },
            {
              id: "604",
              name: "QM125-11A",
            },
            {
              id: "605",
              name: "QM125-7B",
            },
            {
              id: "606",
              name: "QM125T-10A",
            },
            {
              id: "607",
              name: "QM125T-10D",
            },
            {
              id: "608",
              name: "QS90-2",
            },
            {
              id: "609",
              name: "SAHEL 150",
            },
            {
              id: "610",
              name: "SG 150",
            },
            {
              id: "611",
              name: "SMASH",
            },
            {
              id: "612",
              name: "SMASH R",
            },
            {
              id: "613",
              name: "SMASH T",
            },
            {
              id: "614",
              name: "SMX 200",
            },
            {
              id: "615",
              name: "SMX 250",
            },
            {
              id: "616",
              name: "SMX 400",
            },
            {
              id: "617",
              name: "SMX400",
            },
            {
              id: "618",
              name: "SPEEDY",
            },
            {
              id: "619",
              name: "SUPER",
            },
            {
              id: "620",
              name: "VC 200 R",
            },
            {
              id: "621",
              name: "VC 200R",
            },
            {
              id: "622",
              name: "VC 70",
            },
            {
              id: "623",
              name: "VC-R 250",
            },
            {
              id: "624",
              name: "VC125",
            },
            {
              id: "625",
              name: "VC150",
            },
            {
              id: "626",
              name: "VC200",
            },
            {
              id: "627",
              name: "VC250",
            },
            {
              id: "628",
              name: "VC650",
            },
            {
              id: "629",
              name: "VOGE 300",
            },
            {
              id: "630",
              name: "VOGE 300 RALLY",
            },
            {
              id: "631",
              name: "VOGE 300AC",
            },
            {
              id: "632",
              name: "VOGE 300DS",
            },
            {
              id: "633",
              name: "VOGE 500AC",
            },
            {
              id: "634",
              name: "VOGE 500DS",
            },
            {
              id: "635",
              name: "VOGE 500R",
            },
            {
              id: "636",
              name: "VOGE 650DS",
            },
            {
              id: "637",
              name: "VOGE AC350",
            },
            {
              id: "638",
              name: "VOGE DS525X",
            },
            {
              id: "639",
              name: "VOGE SR4 MAX",
            },
            {
              id: "640",
              name: "XKODIAC 250",
            },
            {
              id: "641",
              name: "XKODIAC 250 MOTARD",
            },
            {
              id: "642",
              name: "YL 150",
            },
            {
              id: "643",
              name: "YL 200",
            },
            {
              id: "644",
              name: "YL 275",
            },
            {
              id: "645",
              name: "YL125T-3",
            },
            {
              id: "646",
              name: "YL200",
            },
          ],
        },
        {
          name: "Guerrero",
          models: [
            {
              id: "647",
              name: "ARGEN-CARGO",
            },
            {
              id: "648",
              name: "G 50",
            },
            {
              id: "649",
              name: "G100 DE LUXE",
            },
            {
              id: "650",
              name: "G100 TRIP",
            },
            {
              id: "651",
              name: "G110",
            },
            {
              id: "652",
              name: "G110 FLASH",
            },
            {
              id: "653",
              name: "G110 TRIP",
            },
            {
              id: "654",
              name: "G110 WAY",
            },
            {
              id: "655",
              name: "G110DB",
            },
            {
              id: "656",
              name: "G110DL",
            },
            {
              id: "657",
              name: "G125 TRIP",
            },
            {
              id: "658",
              name: "G3R200",
            },
            {
              id: "659",
              name: "G50 AE",
            },
            {
              id: "660",
              name: "G50AE ECONO",
            },
            {
              id: "661",
              name: "G90 ECONO",
            },
            {
              id: "662",
              name: "GC 125",
            },
            {
              id: "663",
              name: "GC 230 QUEEN",
            },
            {
              id: "664",
              name: "GC125 QUEEN",
            },
            {
              id: "665",
              name: "GC125QUEEN",
            },
            {
              id: "666",
              name: "GC150",
            },
            {
              id: "667",
              name: "GC150 QUEEN",
            },
            {
              id: "668",
              name: "GC150 URBAN",
            },
            {
              id: "669",
              name: "GC200",
            },
            {
              id: "670",
              name: "GC200 QUEEN",
            },
            {
              id: "671",
              name: "GE 110",
            },
            {
              id: "672",
              name: "GFT110 MAPUCHE",
            },
            {
              id: "673",
              name: "GFT150 MAPUCHE",
            },
            {
              id: "674",
              name: "GFT200 MAPUCHE",
            },
            {
              id: "675",
              name: "GFT250 MAPUCHE",
            },
            {
              id: "676",
              name: "GFT250 S MAPUCHE",
            },
            {
              id: "677",
              name: "GFT300 MAPUCHE",
            },
            {
              id: "678",
              name: "GFT350X",
            },
            {
              id: "679",
              name: "GK110",
            },
            {
              id: "680",
              name: "GMX 150",
            },
            {
              id: "681",
              name: "GMX250",
            },
            {
              id: "682",
              name: "GN110 KEOKEN",
            },
            {
              id: "683",
              name: "GPR 200",
            },
            {
              id: "684",
              name: "GPR 250",
            },
            {
              id: "685",
              name: "GPR250",
            },
            {
              id: "686",
              name: "GR1",
            },
            {
              id: "687",
              name: "GR1 200",
            },
            {
              id: "688",
              name: "GR5 200",
            },
            {
              id: "689",
              name: "GR6",
            },
            {
              id: "690",
              name: "GRF250",
            },
            {
              id: "691",
              name: "GRF250X",
            },
            {
              id: "692",
              name: "GRF70",
            },
            {
              id: "693",
              name: "GRF90",
            },
            {
              id: "694",
              name: "GRM 150",
            },
            {
              id: "695",
              name: "GSL 150",
            },
            {
              id: "696",
              name: "GT 70",
            },
            {
              id: "697",
              name: "GT110",
            },
            {
              id: "698",
              name: "GT70",
            },
            {
              id: "699",
              name: "GVL400",
            },
            {
              id: "700",
              name: "GXL 125",
            },
            {
              id: "701",
              name: "GXL 150",
            },
            {
              id: "702",
              name: "GXL150",
            },
            {
              id: "703",
              name: "GXL150 TUNDRA",
            },
            {
              id: "704",
              name: "GXM200",
            },
            {
              id: "705",
              name: "GXR 250",
            },
            {
              id: "706",
              name: "GXR200 TUNDRA",
            },
            {
              id: "707",
              name: "GXR250 TUNDRA",
            },
            {
              id: "708",
              name: "GXR300",
            },
            {
              id: "709",
              name: "WG 100",
            },
          ],
        },
        {
          name: "HAOJUE",
          models: [
            {
              id: "710",
              name: "NK 150",
            },
          ],
        },
        {
          name: "Harley Davidson",
          models: [
            {
              id: "711",
              name: "1200 CUSTOM XLC",
            },
            {
              id: "712",
              name: "1200 LOW XL",
            },
            {
              id: "713",
              name: "DYNA STREET BOB",
            },
            {
              id: "714",
              name: "DYNA SUPERGILDE",
            },
            {
              id: "715",
              name: "DYNA SUPERGLIDE",
            },
            {
              id: "716",
              name: "DYNA WIDE GLIDE",
            },
            {
              id: "717",
              name: "E.CLIDE",
            },
            {
              id: "718",
              name: "ELECTRA GLIDE",
            },
            {
              id: "719",
              name: "FAT BOY",
            },
            {
              id: "720",
              name: "FL SS SOFTAIL SLIM S",
            },
            {
              id: "721",
              name: "FLFB FAT BOY",
            },
            {
              id: "722",
              name: "FLFBS ANV FAT BOY 114 AN",
            },
            {
              id: "723",
              name: "FLFBS ANX FAT BOY 114 AN",
            },
            {
              id: "724",
              name: "FLH 1200",
            },
            {
              id: "725",
              name: "FLHP ROAD KING POLICE",
            },
            {
              id: "726",
              name: "FLHR ROAD KING",
            },
            {
              id: "727",
              name: "FLHR ROAD KING POLICE",
            },
            {
              id: "728",
              name: "FLHRC ROAD KING CLASSIC",
            },
            {
              id: "729",
              name: "FLHRCI ROAD KING CLASSIC",
            },
            {
              id: "730",
              name: "FLHRI ROAD KING EFI",
            },
            {
              id: "731",
              name: "FLHRS ROAD KING CUSTOM",
            },
            {
              id: "732",
              name: "FLHRSI ROAD KING CUSTOM",
            },
            {
              id: "733",
              name: "FLHRXS ROAD KING SPECIA",
            },
            {
              id: "734",
              name: "FLHT ELECTRA GLIDE",
            },
            {
              id: "735",
              name: "FLHT ELECTRA GLIDE STAND",
            },
            {
              id: "736",
              name: "FLHTC ELECTRA GLIDE CLAS",
            },
            {
              id: "737",
              name: "FLHTCI ELECTRA GLIDE CLAS",
            },
            {
              id: "738",
              name: "FLHTCU ULTRA CLASS.ELEC",
            },
            {
              id: "739",
              name: "FLHTCUI ELECTRA GLIDE UL",
            },
            {
              id: "740",
              name: "FLHTK ELECTRA GLIDE ULTR",
            },
            {
              id: "741",
              name: "FLHTK ULTRA LIMITED",
            },
            {
              id: "742",
              name: "FLHX STREET GLIDE",
            },
            {
              id: "743",
              name: "FLHXS STREET GLIDE SPECIA",
            },
            {
              id: "744",
              name: "FLHXSE CVO STREET GLIDE",
            },
            {
              id: "745",
              name: "FLS SOFTAIL SLIM",
            },
            {
              id: "746",
              name: "FLSL SLIM",
            },
            {
              id: "747",
              name: "FLSTC HERITAGE SOFTAIL C",
            },
            {
              id: "748",
              name: "FLSTF FAT BOY",
            },
            {
              id: "749",
              name: "FLSTF SOFTAIL FATBOY",
            },
            {
              id: "750",
              name: "FLSTFB FAT BOY SPECIAL",
            },
            {
              id: "751",
              name: "FLSTFBS FAT BOY S",
            },
            {
              id: "752",
              name: "FLSTFI FAT BOY ANNIV",
            },
            {
              id: "753",
              name: "FLSTFI FAT BOY EFI",
            },
            {
              id: "754",
              name: "FLSTFSE2",
            },
            {
              id: "755",
              name: "FLSTN HERITAGE SOFTAIL S",
            },
            {
              id: "756",
              name: "FLSTN SOFTAIL DELUXE",
            },
            {
              id: "757",
              name: "FLSTNI SOFTAIL DELUXE",
            },
            {
              id: "758",
              name: "FLSTS HERITAGE SPRINGER",
            },
            {
              id: "759",
              name: "FLSTSE CVO SOFTAIL CONV",
            },
            {
              id: "760",
              name: "FLTRU ROAD GLIDE ULTRA",
            },
            {
              id: "761",
              name: "FLTRXS ROAD GLIDE SPECIA",
            },
            {
              id: "762",
              name: "FXBB STREET BOB",
            },
            {
              id: "763",
              name: "FXBR BREAKOUT",
            },
            {
              id: "764",
              name: "FXBRS BREAKOUT 114",
            },
            {
              id: "765",
              name: "FXCWC ROCKER C",
            },
            {
              id: "766",
              name: "FXD DYNA SUPER GLIDE",
            },
            {
              id: "767",
              name: "FXDB DYNA STREET BOB",
            },
            {
              id: "768",
              name: "FXDBI DYNA STREET BOB",
            },
            {
              id: "769",
              name: "FXDC DYNA SUPER GLIDE C",
            },
            {
              id: "770",
              name: "FXDCI DYNA SUPER GLIDE C",
            },
            {
              id: "771",
              name: "FXDF DYNA FAT BOB",
            },
            {
              id: "772",
              name: "FXDL 103 LOW RIDER",
            },
            {
              id: "773",
              name: "FXDL DYNA LOW RIDER",
            },
            {
              id: "774",
              name: "FXDR 114",
            },
            {
              id: "775",
              name: "FXDSCN DYNA LOW RIDER C",
            },
            {
              id: "776",
              name: "FXDWG 103 WIDE GLIDE",
            },
            {
              id: "777",
              name: "FXDWG DYNA WIDE GLIDE",
            },
            {
              id: "778",
              name: "FXDX DYNA SUPER GLIDE S",
            },
            {
              id: "779",
              name: "FXDXI DYNA SUPER GLIDE S",
            },
            {
              id: "780",
              name: "FXSB BREAKOUT",
            },
            {
              id: "781",
              name: "FXST SOFTAIL STANDARD",
            },
            {
              id: "782",
              name: "FXSTB NIGHT TRAIN",
            },
            {
              id: "783",
              name: "FXSTB SOFTAIL NIGHT TRAI",
            },
            {
              id: "784",
              name: "FXSTBI NIGHT TRAIN (EFI)",
            },
            {
              id: "785",
              name: "FXSTC SOFTAIL CUSTOM",
            },
            {
              id: "786",
              name: "FXSTD SOFTAIL DEUCE",
            },
            {
              id: "787",
              name: "FXSTI SOFTAIL (EFI)",
            },
            {
              id: "788",
              name: "FXSTS SPRINGER SOFTAIL",
            },
            {
              id: "789",
              name: "NIGTH TRAIN",
            },
            {
              id: "790",
              name: "RH1250S SPORTSTER S",
            },
            {
              id: "791",
              name: "ROAD KING",
            },
            {
              id: "792",
              name: "ROAD KING POLICE",
            },
            {
              id: "793",
              name: "SOFTAIL",
            },
            {
              id: "794",
              name: "SOFTAIL DE LUXE",
            },
            {
              id: "795",
              name: "SOFTAIL DELUXE",
            },
            {
              id: "796",
              name: "SPORSTER 883 HD",
            },
            {
              id: "797",
              name: "SPORTER 1200 CUSTOM XL",
            },
            {
              id: "798",
              name: "SPORTER 1200 LOW XL",
            },
            {
              id: "799",
              name: "SPORTER XL1200C",
            },
            {
              id: "800",
              name: "SPORTSTER",
            },
            {
              id: "801",
              name: "SPORTSTER 1200 CUSTOM",
            },
            {
              id: "802",
              name: "SPORTSTER 1200 ROADSTE",
            },
            {
              id: "803",
              name: "SPORTSTER 1200 XLC CUST",
            },
            {
              id: "804",
              name: "SPORTSTER 883",
            },
            {
              id: "805",
              name: "SPORTSTER 883 CUSTOM",
            },
            {
              id: "806",
              name: "SPORTSTER 883 XL",
            },
            {
              id: "807",
              name: "SPORTSTER 883 XL CUSTOM",
            },
            {
              id: "808",
              name: "SPORTSTER 883 XLL",
            },
            {
              id: "809",
              name: "SPORTSTER 883R",
            },
            {
              id: "810",
              name: "SPORTSTER XL1200 CUSTO",
            },
            {
              id: "811",
              name: "SPORTSTER XL1200 LOW",
            },
            {
              id: "812",
              name: "V-ROD",
            },
            {
              id: "813",
              name: "VRSCA V-ROD",
            },
            {
              id: "814",
              name: "VRSCAW V-ROD",
            },
            {
              id: "815",
              name: "VRSCB V-ROD",
            },
            {
              id: "816",
              name: "VRSCDX",
            },
            {
              id: "817",
              name: "VRSCDX NIGHT ROD SPECIA",
            },
            {
              id: "818",
              name: "VRSCR STREET ROD",
            },
            {
              id: "819",
              name: "XG 750 STREET 750",
            },
            {
              id: "820",
              name: "XL 1200 C",
            },
            {
              id: "821",
              name: "XL 1200 CUSTOM",
            },
            {
              id: "822",
              name: "XL 1200 FORTY EIGHT",
            },
            {
              id: "823",
              name: "XL 1200C SPORTSTER CUST",
            },
            {
              id: "824",
              name: "XL 1200R SPORTSTER 1200",
            },
            {
              id: "825",
              name: "XL 1200S",
            },
            {
              id: "826",
              name: "XL 1200S SPORTSTER SPOR",
            },
            {
              id: "827",
              name: "XL 1200X XL FORTY EIGTH",
            },
            {
              id: "828",
              name: "XL 50 SPORTSTER 50 ANNIV",
            },
            {
              id: "829",
              name: "XL 883 N IRON",
            },
            {
              id: "830",
              name: "XL 883 SPORTSTER 883",
            },
            {
              id: "831",
              name: "XL 883 SPORTSTER STANDA",
            },
            {
              id: "832",
              name: "XL 883C CUSTOM",
            },
            {
              id: "833",
              name: "XL 883C SPORTSTER",
            },
            {
              id: "834",
              name: "XL SPORTSTER 1200",
            },
            {
              id: "835",
              name: "XL SPORTSTER 883",
            },
            {
              id: "836",
              name: "XL SPORTSTER 883L",
            },
            {
              id: "837",
              name: "XL SPORTSTER 883R",
            },
            {
              id: "838",
              name: "XL1200C 1200 CUSTOM",
            },
            {
              id: "839",
              name: "XL1200C SPORTSTER 1200 C",
            },
            {
              id: "840",
              name: "XL1200L SPORTSTER 1200 L",
            },
            {
              id: "841",
              name: "XL1200N NIGHTSTER",
            },
            {
              id: "842",
              name: "XL1200NS IRON 1200",
            },
            {
              id: "843",
              name: "XL1200R SPORTSTER",
            },
            {
              id: "844",
              name: "XL1200T SUPERLOW 1200T",
            },
            {
              id: "845",
              name: "XL1200V SPORTSTER",
            },
            {
              id: "846",
              name: "XL1200X FORTY-EIGHT",
            },
            {
              id: "847",
              name: "XL1200XS FORTY EIGHT SPE",
            },
            {
              id: "848",
              name: "XL883C SPORTSTER 883 CU",
            },
            {
              id: "849",
              name: "XL883L SPORTSTER 883",
            },
            {
              id: "850",
              name: "XL883L SUPERLOW",
            },
            {
              id: "851",
              name: "XL883N IRON 883",
            },
            {
              id: "852",
              name: "XL883N SPORTSTER",
            },
            {
              id: "853",
              name: "XL883R SPORTSTER R",
            },
            {
              id: "854",
              name: "XLH SPORTSTER 1200",
            },
            {
              id: "855",
              name: "XLH SPORTSTER 883",
            },
            {
              id: "856",
              name: "XLH SPORTSTER 883 HUGG",
            },
          ],
        },
        {
          name: "Hero",
          models: [
            { id: 857, name: "DASH" },
            { id: 858, name: "HERO 150" },
            { id: 859, name: "HUNK" },
            { id: 860, name: "HUNK 190R" },
            { id: 861, name: "HUNK 200" },
            { id: 862, name: "HUNK SPORTS" },
            { id: 863, name: "IGNITOR" },
            { id: 864, name: "IGNITOR 13S" },
            { id: 865, name: "XPULSE 200" },
            { id: 866, name: "XPULSE 200T" },
          ],
        },
        {
          name: "Honda",
          models: [
            {
              id: "867",
              name: "301CBR600F3",
            },
            {
              id: "868",
              name: "AFRICA TWIN",
            },
            {
              id: "869",
              name: "BIZ 125",
            },
            {
              id: "870",
              name: "BIZ 125 ES",
            },
            {
              id: "871",
              name: "BIZ 125 FI",
            },
            {
              id: "872",
              name: "BIZ 125 GP",
            },
            {
              id: "873",
              name: "BIZ 125 KS",
            },
            {
              id: "874",
              name: "BIZ 125 KSST",
            },
            {
              id: "875",
              name: "C100 BIZ",
            },
            {
              id: "876",
              name: "C100 BIZ ES",
            },
            {
              id: "877",
              name: "C100P",
            },
            {
              id: "878",
              name: "C105 BIZ",
            },
            {
              id: "879",
              name: "C105 BIZ ES",
            },
            {
              id: "880",
              name: "C105 BIZ KS",
            },
            {
              id: "881",
              name: "C70 POINT",
            },
            {
              id: "882",
              name: "CB 125",
            },
            {
              id: "883",
              name: "CB 125T",
            },
            {
              id: "884",
              name: "CB 190 R",
            },
            {
              id: "885",
              name: "CB 190 R REPSOL",
            },
            {
              id: "886",
              name: "CB 250 TWISTER",
            },
            {
              id: "887",
              name: "CB 300 R",
            },
            {
              id: "888",
              name: "CB TWISTER",
            },
            {
              id: "889",
              name: "CB1",
            },
            {
              id: "890",
              name: "CB1 TUF",
            },
            {
              id: "891",
              name: "CB1000 R",
            },
            {
              id: "892",
              name: "CB125F TWISTER",
            },
            {
              id: "893",
              name: "CB300F TWISTER",
            },
            {
              id: "894",
              name: "CB500F",
            },
            {
              id: "895",
              name: "CB500X",
            },
            {
              id: "896",
              name: "CB600F",
            },
            {
              id: "897",
              name: "CB750A",
            },
            {
              id: "898",
              name: "CB919",
            },
            {
              id: "899",
              name: "CBR 1000",
            },
            {
              id: "900",
              name: "CBR 1000 FM",
            },
            {
              id: "901",
              name: "CBR 1000F",
            },
            {
              id: "902",
              name: "CBR 1000RR",
            },
            {
              id: "903",
              name: "CBR 600",
            },
            {
              id: "904",
              name: "CBR 600 F",
            },
            {
              id: "905",
              name: "CBR 600 F2L",
            },
            {
              id: "906",
              name: "CBR 600 F3T",
            },
            {
              id: "907",
              name: "CBR 600 F4X",
            },
            {
              id: "908",
              name: "CBR 600 FN",
            },
            {
              id: "909",
              name: "CBR 600 FR",
            },
            {
              id: "910",
              name: "CBR 600 FS",
            },
            {
              id: "911",
              name: "CBR 600F HURRICANE",
            },
            {
              id: "912",
              name: "CBR 600F3L",
            },
            {
              id: "913",
              name: "CBR 900 R",
            },
            {
              id: "914",
              name: "CBR 900 RRS",
            },
            {
              id: "915",
              name: "CBR1100",
            },
            {
              id: "916",
              name: "CBR1100X",
            },
            {
              id: "917",
              name: "CBR1100XV",
            },
            {
              id: "918",
              name: "CBR1100XX",
            },
            {
              id: "919",
              name: "CBR300RA",
            },
            {
              id: "920",
              name: "CBR600 F3T",
            },
            {
              id: "921",
              name: "CBR600 FP",
            },
            {
              id: "922",
              name: "CBR600 RR",
            },
            {
              id: "923",
              name: "CBR600 SE",
            },
            {
              id: "924",
              name: "CBR600F2",
            },
            {
              id: "925",
              name: "CBR600F3",
            },
            {
              id: "926",
              name: "CBR600F4",
            },
            {
              id: "927",
              name: "CBR600FV",
            },
            {
              id: "928",
              name: "CBR600FV-ED",
            },
            {
              id: "929",
              name: "CBR600RR RACING",
            },
            {
              id: "930",
              name: "CBR600RR3",
            },
            {
              id: "931",
              name: "CBR900",
            },
            {
              id: "932",
              name: "CBR900 RRP",
            },
            {
              id: "933",
              name: "CBR900 RS",
            },
            {
              id: "934",
              name: "CBR900RE",
            },
            {
              id: "935",
              name: "CBR900RR",
            },
            {
              id: "936",
              name: "CBR900RRL",
            },
            {
              id: "937",
              name: "CBR900RRV",
            },
            {
              id: "938",
              name: "CBR900RRW-ED",
            },
            {
              id: "939",
              name: "CBR929RR",
            },
            {
              id: "940",
              name: "CBR954RR",
            },
            {
              id: "941",
              name: "CBX250",
            },
            {
              id: "942",
              name: "CG 125 CARGO",
            },
            {
              id: "943",
              name: "CG 150 ESD TITAN",
            },
            {
              id: "944",
              name: "CG 150 TITAN",
            },
            {
              id: "945",
              name: "CG-125 TODAY",
            },
            {
              id: "946",
              name: "CG125",
            },
            {
              id: "947",
              name: "CG125 ES",
            },
            {
              id: "948",
              name: "CG125 FAN",
            },
            {
              id: "949",
              name: "CG125 KS",
            },
            {
              id: "950",
              name: "CG125 TITAN",
            },
            {
              id: "951",
              name: "CG125 TITAN ES",
            },
            {
              id: "952",
              name: "CG125 TITAN KS",
            },
            {
              id: "953",
              name: "CG150 TITAN",
            },
            {
              id: "954",
              name: "CG150 TITAN ESD",
            },
            {
              id: "955",
              name: "CG150 TITAN KS",
            },
            {
              id: "956",
              name: "CG150ESD",
            },
            {
              id: "957",
              name: "CG150KS",
            },
            {
              id: "958",
              name: "CGL125",
            },
            {
              id: "959",
              name: "CH 125 ELITE",
            },
            {
              id: "960",
              name: "CR 125",
            },
            {
              id: "961",
              name: "CR 125 RS",
            },
            {
              id: "962",
              name: "CR 125 RT",
            },
            {
              id: "963",
              name: "CR 250",
            },
            {
              id: "964",
              name: "CR 250 R",
            },
            {
              id: "965",
              name: "CR 250 RR",
            },
            {
              id: "966",
              name: "CR 250 RS",
            },
            {
              id: "967",
              name: "CR 250 RT",
            },
            {
              id: "968",
              name: "CR-125 RS",
            },
            {
              id: "969",
              name: "CR-250 RS",
            },
            {
              id: "970",
              name: "CR125 RN",
            },
            {
              id: "971",
              name: "CR125 RP",
            },
            {
              id: "972",
              name: "CR125R",
            },
            {
              id: "973",
              name: "CR125RM",
            },
            {
              id: "974",
              name: "CR125RT",
            },
            {
              id: "975",
              name: "CR250R",
            },
            {
              id: "976",
              name: "CR250RP",
            },
            {
              id: "977",
              name: "CR250RT",
            },
            {
              id: "978",
              name: "CR250RV",
            },
            {
              id: "979",
              name: "CR500",
            },
            {
              id: "980",
              name: "CR500R",
            },
            {
              id: "981",
              name: "CR500RM",
            },
            {
              id: "982",
              name: "CR80R",
            },
            {
              id: "983",
              name: "CR80RB",
            },
            {
              id: "984",
              name: "CR80RP",
            },
            {
              id: "985",
              name: "CR80RR",
            },
            {
              id: "986",
              name: "CR80RS",
            },
            {
              id: "987",
              name: "CR80RT",
            },
            {
              id: "988",
              name: "CR80S",
            },
            {
              id: "989",
              name: "CR85R",
            },
            {
              id: "990",
              name: "CRF 1000 L",
            },
            {
              id: "991",
              name: "CRF 1100A2L AFRICA TWIN",
            },
            {
              id: "992",
              name: "CRF 1100AL AFRICA TWIN",
            },
            {
              id: "993",
              name: "CRF 1100D2L AFRICA TWIN",
            },
            {
              id: "994",
              name: "CRF 1100DL AFRICA TWIN",
            },
            {
              id: "995",
              name: "CRF 150F",
            },
            {
              id: "996",
              name: "CRF 230F",
            },
            {
              id: "997",
              name: "CRF 250R",
            },
            {
              id: "998",
              name: "CRF 250X",
            },
            {
              id: "999",
              name: "CRF 450R",
            },
            {
              id: "1000",
              name: "CRF1000L",
            },
            {
              id: "1001",
              name: "CRF1000L AFRICA TWIN",
            },
            {
              id: "1002",
              name: "CRF1000L MT",
            },
            {
              id: "1003",
              name: "CRF100F",
            },
            {
              id: "1004",
              name: "CRF150R",
            },
            {
              id: "1005",
              name: "CRF250L",
            },
            {
              id: "1006",
              name: "CRF450X",
            },
            {
              id: "1007",
              name: "CRF50F",
            },
            {
              id: "1008",
              name: "CRF50FE",
            },
            {
              id: "1009",
              name: "CRF50FG",
            },
            {
              id: "1010",
              name: "CRF70F",
            },
            {
              id: "1011",
              name: "CRF80F",
            },
            {
              id: "1012",
              name: "ELITE",
            },
            {
              id: "1013",
              name: "FALCON 400",
            },
            {
              id: "1014",
              name: "FOURTRAX 300 4X4",
            },
            {
              id: "1015",
              name: "FOURTRAX 400EX",
            },
            {
              id: "1016",
              name: "GLH 150",
            },
            {
              id: "1017",
              name: "HURRICANE CBR1000",
            },
            {
              id: "1018",
              name: "INVICTA",
            },
            {
              id: "1019",
              name: "LEAD",
            },
            {
              id: "1020",
              name: "LEAD 50",
            },
            {
              id: "1021",
              name: "LEAD 50R",
            },
            {
              id: "1022",
              name: "LEAD ER50",
            },
            {
              id: "1023",
              name: "NAVI",
            },
            {
              id: "1024",
              name: "NC700X",
            },
            {
              id: "1025",
              name: "NC750 XA",
            },
            {
              id: "1026",
              name: "NC750X",
            },
            {
              id: "1027",
              name: "NC750XA",
            },
            {
              id: "1028",
              name: "NC750XD",
            },
            {
              id: "1029",
              name: "NEW ELITE",
            },
            {
              id: "1030",
              name: "NF 100 WAVE",
            },
            {
              id: "1031",
              name: "NF100 WAVE",
            },
            {
              id: "1032",
              name: "NF100 WAVE CAST DRUM",
            },
            {
              id: "1033",
              name: "NF100 WAVE CD",
            },
            {
              id: "1034",
              name: "NF100 WAVE CDB",
            },
            {
              id: "1035",
              name: "NF100 WAVE SD",
            },
            {
              id: "1036",
              name: "NF100 WAVE SPOKE DRUM",
            },
            {
              id: "1037",
              name: "NT700VA",
            },
            {
              id: "1038",
              name: "NX4",
            },
            {
              id: "1039",
              name: "NX4 FALCON",
            },
            {
              id: "1040",
              name: "NX400",
            },
            {
              id: "1041",
              name: "NXR125",
            },
            {
              id: "1042",
              name: "PCX 150",
            },
            {
              id: "1043",
              name: "PCX 150 DLX",
            },
            {
              id: "1044",
              name: "PCX 160",
            },
            {
              id: "1045",
              name: "POP100",
            },
            {
              id: "1046",
              name: "RINCON 650 TRX650FA",
            },
            {
              id: "1047",
              name: "SDH 125 46 STORM",
            },
            {
              id: "1048",
              name: "SDH125 46 STORM CDB",
            },
            {
              id: "1049",
              name: "SDH125-46 STORM",
            },
            {
              id: "1050",
              name: "SDH125T 22",
            },
            {
              id: "1051",
              name: "SHADOW",
            },
            {
              id: "1052",
              name: "SHADOW 750",
            },
            {
              id: "1053",
              name: "SHADOW SPIRIT",
            },
            {
              id: "1054",
              name: "STORM",
            },
            {
              id: "1055",
              name: "TRANSA LP XL600VK",
            },
            {
              id: "1056",
              name: "TRANSALP",
            },
            {
              id: "1057",
              name: "TRANSALP 600V",
            },
            {
              id: "1058",
              name: "TRX 420 TM",
            },
            {
              id: "1059",
              name: "TRX 650 FGA",
            },
            {
              id: "1060",
              name: "TRX250-X",
            },
            {
              id: "1061",
              name: "TRX250D",
            },
            {
              id: "1062",
              name: "TRX250ES",
            },
            {
              id: "1063",
              name: "TRX250EX",
            },
            {
              id: "1064",
              name: "TRX250TE",
            },
            {
              id: "1065",
              name: "TRX250TM",
            },
            {
              id: "1066",
              name: "TRX350",
            },
            {
              id: "1067",
              name: "TRX350 FE",
            },
            {
              id: "1068",
              name: "TRX350 FM",
            },
            {
              id: "1069",
              name: "TRX350 TE",
            },
            {
              id: "1070",
              name: "TRX350 TM",
            },
            {
              id: "1071",
              name: "TRX350FE",
            },
            {
              id: "1072",
              name: "TRX350TE",
            },
            {
              id: "1073",
              name: "TRX350TM",
            },
            {
              id: "1074",
              name: "TRX400EX",
            },
            {
              id: "1075",
              name: "TRX400FGA",
            },
            {
              id: "1076",
              name: "TRX400X",
            },
            {
              id: "1077",
              name: "TRX420FA",
            },
            {
              id: "1078",
              name: "TRX420FA6",
            },
            {
              id: "1079",
              name: "TRX420FE",
            },
            {
              id: "1080",
              name: "TRX420FM",
            },
            {
              id: "1081",
              name: "TRX420FM1",
            },
            {
              id: "1082",
              name: "TRX420FPA",
            },
            {
              id: "1083",
              name: "TRX420FPE",
            },
            {
              id: "1084",
              name: "TRX420FPM",
            },
            {
              id: "1085",
              name: "TRX420PFA",
            },
            {
              id: "1086",
              name: "TRX420TE",
            },
            {
              id: "1087",
              name: "TRX420TE RANCHER",
            },
            {
              id: "1088",
              name: "TRX420TE7",
            },
            {
              id: "1089",
              name: "TRX420TM1",
            },
            {
              id: "1090",
              name: "TRX450",
            },
            {
              id: "1091",
              name: "TRX450ER",
            },
            {
              id: "1092",
              name: "TRX450FE",
            },
            {
              id: "1093",
              name: "TRX450FM",
            },
            {
              id: "1094",
              name: "TRX450R",
            },
            {
              id: "1095",
              name: "TRX500",
            },
            {
              id: "1096",
              name: "TRX500 FM",
            },
            {
              id: "1097",
              name: "TRX500FA",
            },
            {
              id: "1098",
              name: "TRX500FE",
            },
            {
              id: "1099",
              name: "TRX500FGA",
            },
            {
              id: "1100",
              name: "TRX500FPA",
            },
            {
              id: "1101",
              name: "TRX500FPE",
            },
            {
              id: "1102",
              name: "TRX500FPM",
            },
            {
              id: "1103",
              name: "TRX500FW",
            },
            {
              id: "1104",
              name: "TRX500TM6",
            },
            {
              id: "1105",
              name: "TRX520FM1",
            },
            {
              id: "1106",
              name: "TRX650FA",
            },
            {
              id: "1107",
              name: "TRX680FA",
            },
            {
              id: "1108",
              name: "TRX680FA RINCON",
            },
            {
              id: "1109",
              name: "TRX680FAC",
            },
            {
              id: "1110",
              name: "TRX680FG RINCON",
            },
            {
              id: "1111",
              name: "TRX680FGA",
            },
            {
              id: "1112",
              name: "V MEN SDH 125 42",
            },
            {
              id: "1113",
              name: "VARADERO",
            },
            {
              id: "1114",
              name: "VFR800X",
            },
            {
              id: "1115",
              name: "VLX STEED 400",
            },
            {
              id: "1116",
              name: "VT 750C",
            },
            {
              id: "1117",
              name: "VT1100 SHADOW SPIRIT",
            },
            {
              id: "1118",
              name: "VT1100C SHADOW SPIRIT",
            },
            {
              id: "1119",
              name: "VT750",
            },
            {
              id: "1120",
              name: "VT750 CA SHADOW",
            },
            {
              id: "1121",
              name: "VT750 SHADOW",
            },
            {
              id: "1122",
              name: "VT750 SHADOW SPIRIT",
            },
            {
              id: "1123",
              name: "VT750C2",
            },
            {
              id: "1124",
              name: "VT750C2W-ED",
            },
            {
              id: "1125",
              name: "VT750CD2",
            },
            {
              id: "1126",
              name: "VT750CDA SHADOW ACE",
            },
            {
              id: "1127",
              name: "VT750CDB SHADOW ACE",
            },
            {
              id: "1128",
              name: "VT750CDC SHADOW ACE",
            },
            {
              id: "1129",
              name: "VT750DC SHADOW SPIRIT",
            },
            {
              id: "1130",
              name: "VT750DCB SHADOW",
            },
            {
              id: "1131",
              name: "VTX1300",
            },
            {
              id: "1132",
              name: "WAVE",
            },
            {
              id: "1133",
              name: "WAVE 110",
            },
            {
              id: "1134",
              name: "WAVE 110 S",
            },
            {
              id: "1135",
              name: "WAVE 110 S CD",
            },
            {
              id: "1136",
              name: "WAVE 110S",
            },
            {
              id: "1137",
              name: "WAVE 110S CD",
            },
            {
              id: "1138",
              name: "XL1000V",
            },
            {
              id: "1139",
              name: "XL1000V VARADERO",
            },
            {
              id: "1140",
              name: "XL200",
            },
            {
              id: "1141",
              name: "XL200R",
            },
            {
              id: "1142",
              name: "XL650V",
            },
            {
              id: "1143",
              name: "XL650V TRANSALP",
            },
            {
              id: "1144",
              name: "XL700V",
            },
            {
              id: "1145",
              name: "XL700VA",
            },
            {
              id: "1146",
              name: "XLR 125",
            },
            {
              id: "1147",
              name: "XR 125L",
            },
            {
              id: "1148",
              name: "XR 150 L",
            },
            {
              id: "1149",
              name: "XR 190 L",
            },
            {
              id: "1150",
              name: "XR 190L",
            },
            {
              id: "1151",
              name: "XR 250",
            },
            {
              id: "1152",
              name: "XR 250 BAJA",
            },
            {
              id: "1153",
              name: "XR 250 LS",
            },
            {
              id: "1154",
              name: "XR 250 RL",
            },
            {
              id: "1155",
              name: "XR 250 RM",
            },
            {
              id: "1156",
              name: "XR 250 RS-DK",
            },
            {
              id: "1157",
              name: "XR 250 RT",
            },
            {
              id: "1158",
              name: "XR 250 RT-DK",
            },
            {
              id: "1159",
              name: "XR 250 TORNADO",
            },
            {
              id: "1160",
              name: "XR RALLY",
            },
            {
              id: "1161",
              name: "XR125L",
            },
            {
              id: "1162",
              name: "XR250",
            },
            {
              id: "1163",
              name: "XR250 LLP",
            },
            {
              id: "1164",
              name: "XR250 LN",
            },
            {
              id: "1165",
              name: "XR250 LP",
            },
            {
              id: "1166",
              name: "XR250 RN",
            },
            {
              id: "1167",
              name: "XR250 RP",
            },
            {
              id: "1168",
              name: "XR250 RR-DK",
            },
            {
              id: "1169",
              name: "XR250 RS",
            },
            {
              id: "1170",
              name: "XR250 TORNADO",
            },
            {
              id: "1171",
              name: "XR250L",
            },
            {
              id: "1172",
              name: "XR250LR",
            },
            {
              id: "1173",
              name: "XR250R",
            },
            {
              id: "1174",
              name: "XR250RR",
            },
            {
              id: "1175",
              name: "XR250RT",
            },
            {
              id: "1176",
              name: "XR250RV",
            },
            {
              id: "1177",
              name: "XR650L",
            },
            {
              id: "1178",
              name: "XRE 300 RALLY",
            },
            {
              id: "1179",
              name: "XRE300",
            },
            {
              id: "1180",
              name: "XRE300 RALLY",
            },
            {
              id: "1181",
              name: "XRV750",
            },
            {
              id: "1182",
              name: "XRV750 AFRICA TWIN",
            },
            {
              id: "1183",
              name: "XRV750V",
            },
            {
              id: "1184",
              name: "XRV750V-ED",
            },
          ],
        },
        {
          name: "HUSQVARNA",
          models: [
            { id: 1185, name: "701 ENDURO" },
            { id: 1186, name: "701 SUPERMOTO" },
            { id: 1187, name: "FC 350" },
            { id: 1188, name: "FC 450" },
            { id: 1189, name: "FC250" },
            { id: 1190, name: "FE 250" },
            { id: 1191, name: "FE 350" },
            { id: 1192, name: "FE 501" },
            { id: 1193, name: "FX 350" },
            { id: 1194, name: "NORDEN 901" },
            { id: 1195, name: "SVARTPILEN 200" },
            { id: 1196, name: "SVARTPILEN 401" },
            { id: 1197, name: "SVARTPILEN 701" },
            { id: 1198, name: "TC 125" },
            { id: 1199, name: "TC 85" },
            { id: 1200, name: "TE 150" },
            { id: 1201, name: "TE 150 I" },
            { id: 1202, name: "TE 250I" },
            { id: 1203, name: "TE 300" },
            { id: 1204, name: "TE 300I" },
            { id: 1205, name: "TE250" },
            { id: 1206, name: "TX 125" },
            { id: 1207, name: "TX 300" },
            { id: 1208, name: "TXC250R" },
            { id: 1209, name: "VITPILEN 401" },
            { id: 1210, name: "VITPILEN 701" },
            { id: 1211, name: "VITPLEN 701" },
          ],
        },
        {
          name: "IMSA",
          models: [
            { id: 1212, name: "EVO X" },
            { id: 1213, name: "IM 110 TRACK EVO" },
            { id: 1214, name: "IM 110T TRACK" },
            { id: 1215, name: "IM 125 ROAD X" },
            { id: 1216, name: "IM 125 ROADX" },
            { id: 1217, name: "IM 125 T" },
            { id: 1218, name: "IM 125R.4 ROAD" },
            { id: 1219, name: "IM 150 ROAD X" },
            { id: 1220, name: "IM110 E EVO" },
            { id: 1221, name: "IM110E" },
            { id: 1222, name: "IM110T TRACK" },
            { id: 1223, name: "IM125 R.4" },
            { id: 1224, name: "IM125R.4 ROAD" },
            { id: 1225, name: "IM125T" },
            { id: 1226, name: "IM125T TROPHY" },
            { id: 1227, name: "IM150 ROADX" },
            { id: 1228, name: "ROAD 100" },
          ],
        },
        {
          name: "INDIAN",
          models: [
            { id: 1229, name: "CHIEF DARK HORSE" },
            { id: 1230, name: "CHIEF VINTAGE" },
            { id: 1231, name: "ROADMASTER" },
            { id: 1232, name: "SCOUT" },
            { id: 1233, name: "SCOUT BOBBER" },
            { id: 1234, name: "SCOUT BOBBER SIXTY" },
            { id: 1235, name: "SCOUT BOBBER TWENTY" },
            { id: 1236, name: "SCOUT SIXTY" },
          ],
        },
        {
          name: "JAWA",
          models: [
            { id: 1237, name: "CZ 200" },
            { id: 1238, name: "DAYTONA 350" },
            { id: 1239, name: "DD 300 E" },
            { id: 1240, name: "JAWA 350" },
            { id: 1241, name: "RVM 600" },
            { id: 1242, name: "SPYDER 350" },
            { id: 1243, name: "SUPERNOVA 150" },
            { id: 1244, name: "TEKKEN" },
          ],
        },
        {
          name: "JIANSHE",
          models: [
            { id: 1245, name: "JS 125" },
            { id: 1246, name: "JS 125-3" },
            { id: 1247, name: "JS 125-6B" },
            { id: 1248, name: "JS 125-7F" },
            { id: 1249, name: "JS110-3" },
            { id: 1250, name: "JS110-3H" },
            { id: 1251, name: "JS110-C" },
            { id: 1252, name: "JS110ATV" },
            { id: 1253, name: "JS125" },
            { id: 1254, name: "JS125-3" },
            { id: 1255, name: "JS125-5B" },
            { id: 1256, name: "JS125-6B" },
            { id: 1257, name: "JS125-7" },
            { id: 1258, name: "JS125F" },
            { id: 1259, name: "JS150-3" },
            { id: 1260, name: "JS250ATV-3" },
            { id: 1261, name: "JS250ATV-5" },
            { id: 1262, name: "JS250ATV-F2" },
            { id: 1263, name: "JS400ATV" },
          ],
        },
        {
          name: "JINCHENG",
          models: [
            { id: 1264, name: "JC 110-19" },
            { id: 1265, name: "JC 125-17B" },
            { id: 1266, name: "JC110-9" },
            { id: 1267, name: "JC125-12" },
            { id: 1268, name: "JC125-17B" },
            { id: 1269, name: "JC250-6" },
          ],
        },
        {
          name: "JMSTAR",
          models: [
            { id: 1270, name: "ALPINA 110" },
            { id: 1271, name: "NEVADA 110" },
          ],
        },
        {
          name: "Kawasaki",
          models: [
            {
              id: "1272",
              name: "BAYOU 220",
            },
            {
              id: "1273",
              name: "BAYOU 250",
            },
            {
              id: "1274",
              name: "BRUTE FORCE 300",
            },
            {
              id: "1275",
              name: "BRUTE FORCE 650 4X4",
            },
            {
              id: "1276",
              name: "BRUTE FORCE 750 4X4 I EPS",
            },
            {
              id: "1277",
              name: "BRUTE FORCE 750 4X4I",
            },
            {
              id: "1278",
              name: "BRUTE FORCE VTWIN 650",
            },
            {
              id: "1279",
              name: "BRUTE FORCE VTWIN 750",
            },
            {
              id: "1280",
              name: "CONCOURS 14",
            },
            {
              id: "1281",
              name: "ELIMINATOR SPORT EDITION",
            },
            {
              id: "1282",
              name: "EN 500 A 7 I",
            },
            {
              id: "1283",
              name: "EN 500 A2",
            },
            {
              id: "1284",
              name: "EN 500 A4",
            },
            {
              id: "1285",
              name: "EN500",
            },
            {
              id: "1286",
              name: "EN500 A6",
            },
            {
              id: "1287",
              name: "EN500 VULCAN",
            },
            {
              id: "1288",
              name: "EN500-A5",
            },
            {
              id: "1289",
              name: "EN500-A6L",
            },
            {
              id: "1290",
              name: "EN500-BI",
            },
            {
              id: "1291",
              name: "EN500-C",
            },
            {
              id: "1292",
              name: "EN500-C1",
            },
            {
              id: "1293",
              name: "EN500-C2",
            },
            {
              id: "1294",
              name: "EN500A7",
            },
            {
              id: "1295",
              name: "EN500B2",
            },
            {
              id: "1296",
              name: "ER-6N",
            },
            {
              id: "1297",
              name: "EX 250 F",
            },
            {
              id: "1298",
              name: "EX 250-F3,L",
            },
            {
              id: "1299",
              name: "EX 250-H3",
            },
            {
              id: "1300",
              name: "EX250",
            },
            {
              id: "1301",
              name: "EX250 F4 NINJA R",
            },
            {
              id: "1302",
              name: "EX250 H",
            },
            {
              id: "1303",
              name: "EX250-F",
            },
            {
              id: "1304",
              name: "EX250-F10",
            },
            {
              id: "1305",
              name: "EX250-F12",
            },
            {
              id: "1306",
              name: "EX250-F6",
            },
            {
              id: "1307",
              name: "EX250-F8",
            },
            {
              id: "1308",
              name: "EX250-F8L",
            },
            {
              id: "1309",
              name: "EX250-F9L",
            },
            {
              id: "1310",
              name: "EX250-II3",
            },
            {
              id: "1311",
              name: "EX250F9",
            },
            {
              id: "1312",
              name: "KE100-B11",
            },
            {
              id: "1313",
              name: "KFX 400",
            },
            {
              id: "1314",
              name: "KFX450R",
            },
            {
              id: "1315",
              name: "KFX50",
            },
            {
              id: "1316",
              name: "KFX700",
            },
            {
              id: "1317",
              name: "KFX700 V FORCE",
            },
            {
              id: "1318",
              name: "KFX90",
            },
            {
              id: "1319",
              name: "KLE650 VERSYS",
            },
            {
              id: "1320",
              name: "KLF250A6F",
            },
            {
              id: "1321",
              name: "KLF250A8F",
            },
            {
              id: "1322",
              name: "KLF250A9F",
            },
            {
              id: "1323",
              name: "KLF250ABF",
            },
            {
              id: "1324",
              name: "KLR 650",
            },
            {
              id: "1325",
              name: "KLX 250 S",
            },
            {
              id: "1326",
              name: "KLX 300",
            },
            {
              id: "1327",
              name: "KLX 300R",
            },
            {
              id: "1328",
              name: "KLX110",
            },
            {
              id: "1329",
              name: "KLX250",
            },
            {
              id: "1330",
              name: "KLX250-D1",
            },
            {
              id: "1331",
              name: "KLX250-D4",
            },
            {
              id: "1332",
              name: "KLX250-E1",
            },
            {
              id: "1333",
              name: "KLX250SF",
            },
            {
              id: "1334",
              name: "KLX450A8F",
            },
            {
              id: "1335",
              name: "KLX450R",
            },
            {
              id: "1336",
              name: "KSF450B8F",
            },
            {
              id: "1337",
              name: "KSF450B9F",
            },
            {
              id: "1338",
              name: "KSF450BBF",
            },
            {
              id: "1339",
              name: "KSF50",
            },
            {
              id: "1340",
              name: "KSF50-A3",
            },
            {
              id: "1341",
              name: "KSF50BDF",
            },
            {
              id: "1342",
              name: "KVF400 4X4",
            },
            {
              id: "1343",
              name: "KVF400-A1",
            },
            {
              id: "1344",
              name: "KVF400-A2",
            },
            {
              id: "1345",
              name: "KVF400-B1",
            },
            {
              id: "1346",
              name: "KVF400-C",
            },
            {
              id: "1347",
              name: "KVF400-C1",
            },
            {
              id: "1348",
              name: "KVF400-C2",
            },
            {
              id: "1349",
              name: "KVF650",
            },
            {
              id: "1350",
              name: "KVF650DCS",
            },
            {
              id: "1351",
              name: "KVF650F9F",
            },
            {
              id: "1352",
              name: "KVF750",
            },
            {
              id: "1353",
              name: "KVF750D8F",
            },
            {
              id: "1354",
              name: "KVF750DAF",
            },
            {
              id: "1355",
              name: "KVF750DBF",
            },
            {
              id: "1356",
              name: "KVF750FBF",
            },
            {
              id: "1357",
              name: "KVF750GCS",
            },
            {
              id: "1358",
              name: "KVF750GSC",
            },
            {
              id: "1359",
              name: "KVF750HCF",
            },
            {
              id: "1360",
              name: "KVF750HCS",
            },
            {
              id: "1361",
              name: "KVF750JCF",
            },
            {
              id: "1362",
              name: "KVF750LCF",
            },
            {
              id: "1363",
              name: "KX 250",
            },
            {
              id: "1364",
              name: "KX250",
            },
            {
              id: "1365",
              name: "KX250 K2",
            },
            {
              id: "1366",
              name: "KX250-K1",
            },
            {
              id: "1367",
              name: "KX250-K3",
            },
            {
              id: "1368",
              name: "KX250-N2",
            },
            {
              id: "1369",
              name: "KX250F",
            },
            {
              id: "1370",
              name: "KX250L",
            },
            {
              id: "1371",
              name: "KX250W9F",
            },
            {
              id: "1372",
              name: "KX450F",
            },
            {
              id: "1373",
              name: "KX80-W",
            },
            {
              id: "1374",
              name: "KX85",
            },
            {
              id: "1375",
              name: "LF250A",
            },
            {
              id: "1376",
              name: "NINJA",
            },
            {
              id: "1377",
              name: "NINJA 1000",
            },
            {
              id: "1378",
              name: "NINJA 1000 ABS",
            },
            {
              id: "1379",
              name: "NINJA 1000 SX",
            },
            {
              id: "1380",
              name: "NINJA 250",
            },
            {
              id: "1381",
              name: "NINJA 400 ABS",
            },
            {
              id: "1382",
              name: "NINJA 600",
            },
            {
              id: "1383",
              name: "NINJA 650 ABS",
            },
            {
              id: "1384",
              name: "NINJA 650R",
            },
            {
              id: "1385",
              name: "NINJA EX 250 F4",
            },
            {
              id: "1386",
              name: "NINJA H2",
            },
            {
              id: "1387",
              name: "NINJA H2 SX SE",
            },
            {
              id: "1388",
              name: "NINJA ZX - 10R ABS",
            },
            {
              id: "1389",
              name: "NINJA ZX - 14R ABS",
            },
            {
              id: "1390",
              name: "NINJA ZX-10R",
            },
            {
              id: "1391",
              name: "NINJA ZX-12R",
            },
            {
              id: "1392",
              name: "NINJA ZX-14",
            },
            {
              id: "1393",
              name: "NINJA ZX-6R",
            },
            {
              id: "1394",
              name: "NINJA ZX6",
            },
            {
              id: "1395",
              name: "NINJA ZX600G",
            },
            {
              id: "1396",
              name: "NINJA ZX636",
            },
            {
              id: "1397",
              name: "NINJA ZX6R ABS",
            },
            {
              id: "1398",
              name: "PRAIRE 360 4X4",
            },
            {
              id: "1399",
              name: "PRAIRIE 360",
            },
            {
              id: "1400",
              name: "PRAIRIE 360 4X4",
            },
            {
              id: "1401",
              name: "VERSYS",
            },
            {
              id: "1402",
              name: "VERSYS 1000",
            },
            {
              id: "1403",
              name: "VERSYS 1000 ABS",
            },
            {
              id: "1404",
              name: "VERSYS 1000 SE",
            },
            {
              id: "1405",
              name: "VERSYS 650 ABS",
            },
            {
              id: "1406",
              name: "VERSYS X 300 ABS",
            },
            {
              id: "1407",
              name: "VERSYS-X 300 ABS",
            },
            {
              id: "1408",
              name: "VN 900 VULCAN",
            },
            {
              id: "1409",
              name: "VN2000",
            },
            {
              id: "1410",
              name: "VN2000-A",
            },
            {
              id: "1411",
              name: "VN900",
            },
            {
              id: "1412",
              name: "VULCAN 500",
            },
            {
              id: "1413",
              name: "VULCAN 900",
            },
            {
              id: "1414",
              name: "VULCAN 900 CUSTOM",
            },
            {
              id: "1415",
              name: "VULCAN S ABS",
            },
            {
              id: "1416",
              name: "Z 400 ABS",
            },
            {
              id: "1417",
              name: "Z 650 ABS",
            },
            {
              id: "1418",
              name: "Z 900 ABS",
            },
            {
              id: "1419",
              name: "Z 900RS ABS",
            },
            {
              id: "1420",
              name: "Z1000",
            },
            {
              id: "1421",
              name: "Z1000 ABS",
            },
            {
              id: "1422",
              name: "Z650 ABS",
            },
            {
              id: "1423",
              name: "Z800",
            },
            {
              id: "1424",
              name: "Z900 ABS",
            },
            {
              id: "1425",
              name: "Z900RS",
            },
            {
              id: "1426",
              name: "ZR 750-C3",
            },
            {
              id: "1427",
              name: "ZR1100 C2",
            },
            {
              id: "1428",
              name: "ZR750-C3",
            },
            {
              id: "1429",
              name: "ZX 1200A",
            },
            {
              id: "1430",
              name: "ZX 6",
            },
            {
              id: "1431",
              name: "ZX 600",
            },
            {
              id: "1432",
              name: "ZX 600 CZ L NINJA",
            },
            {
              id: "1433",
              name: "ZX 600 J",
            },
            {
              id: "1434",
              name: "ZX 600-C3",
            },
            {
              id: "1435",
              name: "ZX 600-C4",
            },
            {
              id: "1436",
              name: "ZX 600-D3 (ZZ-R600)",
            },
            {
              id: "1437",
              name: "ZX 600-D3L",
            },
            {
              id: "1438",
              name: "ZX-10R",
            },
            {
              id: "1439",
              name: "ZX-6R",
            },
            {
              id: "1440",
              name: "ZX10",
            },
            {
              id: "1441",
              name: "ZX1000",
            },
            {
              id: "1442",
              name: "ZX1000-C",
            },
            {
              id: "1443",
              name: "ZX1200-B",
            },
            {
              id: "1444",
              name: "ZX14",
            },
            {
              id: "1445",
              name: "ZX14 CONCOURS",
            },
            {
              id: "1446",
              name: "ZX6 NINJA",
            },
            {
              id: "1447",
              name: "ZX600 CH",
            },
            {
              id: "1448",
              name: "ZX600 DZ",
            },
            {
              id: "1449",
              name: "ZX600 E2",
            },
            {
              id: "1450",
              name: "ZX600-C5",
            },
            {
              id: "1451",
              name: "ZX600-D2",
            },
            {
              id: "1452",
              name: "ZX600-E3",
            },
            {
              id: "1453",
              name: "ZX600-E4",
            },
            {
              id: "1454",
              name: "ZX600-F",
            },
            {
              id: "1455",
              name: "ZX600-F1",
            },
            {
              id: "1456",
              name: "ZX600-F2",
            },
            {
              id: "1457",
              name: "ZX600-F3",
            },
            {
              id: "1458",
              name: "ZX600-F3L",
            },
            {
              id: "1459",
              name: "ZX600-G",
            },
            {
              id: "1460",
              name: "ZX600R",
            },
            {
              id: "1461",
              name: "ZX636-B",
            },
            {
              id: "1462",
              name: "ZX636C NINJA",
            },
          ],
        },
        {
          name: "KAYO",
          models: [{ id: 1463, name: "K6-R ENDURO" }],
        },
        {
          name: "KEEWAY",
          models: [
            { id: 1464, name: "KLIGHT 202" },
            { id: 1465, name: "RK" },
            { id: 1466, name: "TARGET" },
            { id: 1467, name: "TX 200" },
          ],
        },
        {
          name: "KELLER",
          models: [
            { id: 1468, name: "CONQUISTA 150" },
            { id: 1469, name: "JET MAX 250" },
            { id: 1470, name: "K65" },
            { id: 1471, name: "K65-MT" },
            { id: 1472, name: "K65-TR" },
            { id: 1473, name: "KN-150-13" },
            { id: 1474, name: "KN110-10" },
            { id: 1475, name: "KN110-7" },
            { id: 1476, name: "KN110-8" },
            { id: 1477, name: "KN110-9" },
            { id: 1478, name: "KN125" },
            { id: 1479, name: "KN125-11" },
            { id: 1480, name: "KN125-12" },
            { id: 1481, name: "KN150-13" },
            { id: 1482, name: "KN150-3" },
            { id: 1483, name: "KN150GY" },
            { id: 1484, name: "KN200GY" },
            { id: 1485, name: "KN200R" },
            { id: 1486, name: "KN250-3" },
            { id: 1487, name: "KN250GY" },
            { id: 1488, name: "KN260GY" },
            { id: 1489, name: "KR150S" },
            { id: 1490, name: "KR200GY" },
            { id: 1491, name: "KR200ST-6" },
            { id: 1492, name: "KR250-STIXE" },
            { id: 1493, name: "KR250ST-8" },
            { id: 1494, name: "KR260" },
            { id: 1495, name: "KR260 A" },
            { id: 1496, name: "KR260A" },
            { id: 1497, name: "KR260GY" },
            { id: 1498, name: "STRATUS 260" },
            { id: 1499, name: "XTREME 150" },
            { id: 1500, name: "YB 150 T-150" },
            { id: 1501, name: "YB 150 T-2" },
            { id: 1502, name: "YB150T" },
            { id: 1503, name: "YB150T EXOTIC" },
            { id: 1504, name: "YB150T-10" },
            { id: 1505, name: "YB150T-12 CHAMPIONS" },
            { id: 1506, name: "YB150T-2" },
            { id: 1507, name: "YB150T-5 EXOTIC" },
            { id: 1508, name: "YB150T-5 TROPICAL" },
            { id: 1509, name: "YB150T-7 MATRIX" },
            { id: 1510, name: "YBR260 STRATUS" },
          ],
        },
        {
          name: "KIDEN",
          models: [
            { id: 1511, name: "KD 150 Z" },
            { id: 1512, name: "KD 250 V" },
          ],
        },
        {
          name: "KIKAI",
          models: [
            { id: 1513, name: "DK 110 CC" },
            { id: 1514, name: "DK 110 CC CLASSIC" },
            { id: 1515, name: "DK 110 CS" },
            { id: 1516, name: "DK 150 AS" },
            { id: 1517, name: "DK125 ATVA" },
            { id: 1518, name: "DK150 AS" },
            { id: 1519, name: "DK250 AC" },
            { id: 1520, name: "DK250 ATV A" },
          ],
        },
        {
          name: "KONISA",
          models: [
            { id: 1521, name: "CL 110-5" },
            { id: 1522, name: "CL 110-7" },
            { id: 1523, name: "CL125-15" },
            { id: 1524, name: "CL125-15 SPORTSMAN" },
            { id: 1525, name: "KE125-26" },
            { id: 1526, name: "KE125-28H" },
            { id: 1527, name: "KE200" },
            { id: 1528, name: "KE250" },
            { id: 1529, name: "LF125-J" },
            { id: 1530, name: "LX" },
            { id: 1531, name: "LX 150" },
            { id: 1532, name: "LX110-3A" },
            { id: 1533, name: "LX150-6A" },
            { id: 1534, name: "QS110-5" },
            { id: 1535, name: "QS200-8" },
            { id: 1536, name: "YJ-110B" },
            { id: 1537, name: "YJ-150B" },
            { id: 1538, name: "YJ-250B" },
            { id: 1539, name: "YJ-250D" },
          ],
        },
        {
          name: "KTM",
          models: [
            { id: 1540, name: "1090 ADVENTURE" },
            { id: 1541, name: "1090 ADVENTURE R" },
            { id: 1542, name: "1190 ADVENTURE" },
            { id: 1543, name: "1190 ADVENTURE R" },
            { id: 1544, name: "125 EXC" },
            { id: 1545, name: "125SX" },
            { id: 1546, name: "1290 SUPER ADVENTURE" },
            { id: 1547, name: "1290 SUPER ADVENTURE R" },
            { id: 1548, name: "1290 SUPER ADVENTURE S" },
            { id: 1549, name: "1290 SUPERDUKE R" },
            { id: 1550, name: "150 SX" },
            { id: 1551, name: "200 DUKE" },
            { id: 1552, name: "200EXC" },
            { id: 1553, name: "250 EXC SIX DAYS" },
            { id: 1554, name: "250 EXC TPI" },
            { id: 1555, name: "250 EXC TPI SIX DAYS" },
            { id: 1556, name: "250 EXC-F SIX DAYS" },
            { id: 1557, name: "250 SX-F" },
            { id: 1558, name: "250 XC-F" },
            { id: 1559, name: "250EXC" },
            { id: 1560, name: "250EXC-F" },
            { id: 1561, name: "300 EXC" },
            { id: 1562, name: "300 EXC SIX DAYS" },
            { id: 1563, name: "300 EXC TPI" },
            { id: 1564, name: "300 EXC TPI SIX DAYS" },
            { id: 1565, name: "300 EXC-E" },
            { id: 1566, name: "300 XC-W SIX DAYS" },
            { id: 1567, name: "350 EXC-F" },
            { id: 1568, name: "350 EXC-F SIX DAYS" },
            { id: 1569, name: "350 SX-F" },
            { id: 1570, name: "350 XCF" },
            { id: 1571, name: "350 XCF-W SIX DAYS" },
            { id: 1572, name: "390 DUKE" },
            { id: 1573, name: "450 EXC" },
            { id: 1574, name: "450 EXC RACING" },
            { id: 1575, name: "450 EXC-F" },
            { id: 1576, name: "450 EXC-F SIX DAYS" },
            { id: 1577, name: "450 EXC-R" },
            { id: 1578, name: "450 SX-F" },
            { id: 1579, name: "450 XC-F" },
            { id: 1580, name: "450SXF" },
            { id: 1581, name: "50 SX PRO JUNIOR" },
            { id: 1582, name: "50 SX PRO SENIOR" },
            { id: 1583, name: "50 SX PRO SENIOR LC" },
            { id: 1584, name: "500 EXC" },
            { id: 1585, name: "500 EXC SIX DAYS" },
            { id: 1586, name: "50SX" },
            { id: 1587, name: "530 EXC-R" },
            { id: 1588, name: "65 SX" },
            { id: 1589, name: "690 DUKE" },
            { id: 1590, name: "690 ENDURO" },
            { id: 1591, name: "690 ENDURO R" },
            { id: 1592, name: "690 RALLY REPLICA" },
            { id: 1593, name: "690 SM" },
            { id: 1594, name: "690 SMC R" },
            { id: 1595, name: "790 ADVENTURE" },
            { id: 1596, name: "790 ADVENTURE R" },
            { id: 1597, name: "790 DUKE" },
            { id: 1598, name: "85 SX" },
            { id: 1599, name: "950 ADVENTURE" },
            { id: 1600, name: "990 ADVENTURE" },
            { id: 1601, name: "990 ADVENTURE R" },
            { id: 1602, name: "990 SM T" },
            { id: 1603, name: "990 SUPERDUKE" },
            { id: 1604, name: "ADVENTURE 390" },
            { id: 1605, name: "ADVENTURE 790" },
            { id: 1606, name: "ADVENTURE 790 R" },
            { id: 1607, name: "ADVENTURE 890 R" },
            { id: 1608, name: "DUKE 200" },
            { id: 1609, name: "DUKE 200 G2" },
            { id: 1610, name: "DUKE 390" },
            { id: 1611, name: "KTM 250 ADVENTURE" },
            { id: 1612, name: "KTM 250 DUKE" },
            { id: 1613, name: "KTM 250 EXC-F" },
            { id: 1614, name: "KTM 350 EXC-F" },
            { id: 1615, name: "MOTO KTM 250 EXC-F" },
            { id: 1616, name: "MOTO KTM 390 DUKE" },
            { id: 1617, name: "RC 200" },
            { id: 1618, name: "RC 390" },
            { id: 1619, name: "SX-F 350" },
          ],
        },
        {
          name: "KYMCO",
          models: [
            { id: 1620, name: "ACTIV 110" },
            { id: 1621, name: "ACTIV 125 SRX" },
            { id: 1622, name: "ACTIV 125SR" },
            { id: 1623, name: "AGILITY +300" },
            { id: 1624, name: "AGILITY 125" },
            { id: 1625, name: "AGILITY 200I" },
            { id: 1626, name: "AGILITY 50" },
            { id: 1627, name: "AGILITY CITY 200 I" },
            { id: 1628, name: "AGILITY RS 125 NAKED" },
            { id: 1629, name: "AK 550I" },
            { id: 1630, name: "AXR110" },
            { id: 1631, name: "BET & WIN 250" },
            { id: 1632, name: "DINK 150" },
            { id: 1633, name: "DJ 50" },
            { id: 1634, name: "DJ50 REFINED" },
            { id: 1635, name: "DOWNTOWN 300 I" },
            { id: 1636, name: "DOWNTOWN 300I" },
            { id: 1637, name: "DOWNTOWN 350I ABS" },
            { id: 1638, name: "DT X350" },
            { id: 1639, name: "GRAND DINK 150" },
            { id: 1640, name: "GRAND DINK 250" },
            { id: 1641, name: "GRAND KING 125" },
            { id: 1642, name: "HEROISM 125" },
            { id: 1643, name: "HIPSTER 125" },
            { id: 1644, name: "KB 100" },
            { id: 1645, name: "LIKE 125" },
            { id: 1646, name: "LIKE 150I" },
            { id: 1647, name: "LIKE 200 I" },
            { id: 1648, name: "LIKE 200I" },
            { id: 1649, name: "MICARE 125" },
            { id: 1650, name: "MXER 150" },
            { id: 1651, name: "MXER 250 R" },
            { id: 1652, name: "MXER 50" },
            { id: 1653, name: "MXER 50R" },
            { id: 1654, name: "MXER 90R" },
            { id: 1655, name: "MXU 150" },
            { id: 1656, name: "MXU 250" },
            { id: 1657, name: "MXU 300" },
            { id: 1658, name: "MXU 500" },
            { id: 1659, name: "MXU375" },
            { id: 1660, name: "PEOPLE 150" },
            { id: 1661, name: "PEOPLE 200S" },
            { id: 1662, name: "PEOPLE 250" },
            { id: 1663, name: "PEOPLE 50" },
            { id: 1664, name: "PEOPLE GT 300 I" },
            { id: 1665, name: "PEOPLE S 150I" },
            { id: 1666, name: "PLEASURE" },
            { id: 1667, name: "PLEASURE 125" },
            { id: 1668, name: "PULSAR 125" },
            { id: 1669, name: "PULSAR 125 LUXE" },
            { id: 1670, name: "PULSAR UP 125" },
            { id: 1671, name: "QUANNON" },
            { id: 1672, name: "SPIKE 125" },
            { id: 1673, name: "SPIKE 125R" },
            { id: 1674, name: "STRYKER 125" },
            { id: 1675, name: "STRYKER 150" },
            { id: 1676, name: "SUPER 9" },
            { id: 1677, name: "SUPER9 50" },
            { id: 1678, name: "SUPER9 AIR" },
            { id: 1679, name: "TOP BOY 100" },
            { id: 1680, name: "VENOX 250" },
            { id: 1681, name: "VISA R 110" },
            { id: 1682, name: "X-TOWN 250I" },
            { id: 1683, name: "XCITING 500" },
            { id: 1684, name: "XCITING 500 RI" },
            { id: 1685, name: "XCITING S 400I" },
            { id: 1686, name: "XJR" },
            { id: 1687, name: "YUP 50" },
            { id: 1688, name: "ZING 150" },
            { id: 1689, name: "ZX50" },
          ],
        },
        {
          name: "LEGNANO",
          models: [
            { id: 1690, name: "CAPRI" },
            { id: 1691, name: "IMOLA" },
            { id: 1692, name: "MILANO" },
            { id: 1693, name: "MILANO SPRINT" },
            { id: 1694, name: "MODENA" },
            { id: 1695, name: "MONZA" },
            { id: 1696, name: "VERONA" },
            { id: 1697, name: "YG110-2" },
          ],
        },
        {
          name: "LIFAN",
          models: [
            { id: 1698, name: "KP200M" },
            { id: 1699, name: "KP200T" },
            { id: 1700, name: "KP350" },
            { id: 1701, name: "KPV150" },
            { id: 1702, name: "LF125" },
            { id: 1703, name: "LF150" },
            { id: 1704, name: "LF150T" },
            { id: 1705, name: "V16" },
            { id: 1706, name: "XP200" },
          ],
        },
        {
          name: "MAVERICK",
          models: [
            { id: 1707, name: "BIG FORCE 250" },
            { id: 1708, name: "BLACK STAR" },
            { id: 1709, name: "CROSS" },
            { id: 1710, name: "FOX" },
            { id: 1711, name: "GO" },
            { id: 1712, name: "HALLEY" },
            { id: 1713, name: "MA 110-2" },
            { id: 1714, name: "MA110-3" },
            { id: 1715, name: "MA110-A" },
            { id: 1716, name: "MA125-12" },
            { id: 1717, name: "MA125-2" },
            { id: 1718, name: "MA125-5" },
            { id: 1719, name: "MA125-7" },
            { id: 1720, name: "MA125-7A" },
            { id: 1721, name: "MA125-GY" },
            { id: 1722, name: "MA125-T6" },
            { id: 1723, name: "MA150-12" },
            { id: 1724, name: "MA150-13" },
            { id: 1725, name: "MA200-13" },
            { id: 1726, name: "MA200-GY" },
            { id: 1727, name: "MA250" },
            { id: 1728, name: "MA70" },
            { id: 1729, name: "MA70-D" },
            { id: 1730, name: "MOTOR ADVENTURE 250" },
            { id: 1731, name: "MOTOR BIG FORCE 250" },
            { id: 1732, name: "MOTOR BLACK STAR" },
            { id: 1733, name: "MOTOR CITY 125" },
            { id: 1734, name: "MOTOR CROSS" },
            { id: 1735, name: "MOTOR CROSS 125" },
            { id: 1736, name: "MOTOR DUAL" },
            { id: 1737, name: "MOTOR DUAL 150" },
            { id: 1738, name: "MOTOR F1 125" },
            { id: 1739, name: "MOTOR FOX" },
            { id: 1740, name: "MOTOR GO 70" },
            { id: 1741, name: "MOTOR HALLEY" },
            { id: 1742, name: "MOTOR MAXIM 250" },
            { id: 1743, name: "MOTOR NEXUS 150" },
            { id: 1744, name: "MOTOR PANTHER 250" },
            { id: 1745, name: "MOTOR SCAPE 200" },
            { id: 1746, name: "MOTOR SPORT 110" },
            { id: 1747, name: "MOTOR STREET" },
            { id: 1748, name: "MOTOR SUPRA X" },
            { id: 1749, name: "MOTOR SUPRA X 125" },
            { id: 1750, name: "MOTOR TOP" },
            { id: 1751, name: "MOTOR WIND 100" },
            { id: 1752, name: "MOTOR XRT" },
            { id: 1753, name: "OMEGA" },
            { id: 1754, name: "PANTER" },
            { id: 1755, name: "SCAPE 200" },
            { id: 1756, name: "SPORT 110" },
            { id: 1757, name: "STREET" },
            { id: 1758, name: "TOP" },
            { id: 1759, name: "TRY" },
            { id: 1760, name: "XRT" },
          ],
        },
        {
          name: "MONDIAL",
          models: [
            { id: 1761, name: "BD 90" },
            { id: 1762, name: "CARGO" },
            { id: 1763, name: "CARGO C 2." },
            { id: 1764, name: "CARGO VR" },
            { id: 1765, name: "CD200Y" },
            { id: 1766, name: "DAX 70" },
            { id: 1767, name: "DAX 90" },
            { id: 1768, name: "DAX70" },
            { id: 1769, name: "EX150K" },
            { id: 1770, name: "FD110L" },
            { id: 1771, name: "FD110S" },
            { id: 1772, name: "FD125" },
            { id: 1773, name: "FD150" },
            { id: 1774, name: "FD150L" },
            { id: 1775, name: "FD150LN" },
            { id: 1776, name: "FD150Q" },
            { id: 1777, name: "FD150S" },
            { id: 1778, name: "FD150SV" },
            { id: 1779, name: "FD150Y" },
            { id: 1780, name: "FD200" },
            { id: 1781, name: "FD200-RS" },
            { id: 1782, name: "FD200S" },
            { id: 1783, name: "FD200ST" },
            { id: 1784, name: "FD250" },
            { id: 1785, name: "FD250H" },
            { id: 1786, name: "FD250Q" },
            { id: 1787, name: "FD250R" },
            { id: 1788, name: "FD250S" },
            { id: 1789, name: "FD250ST" },
            { id: 1790, name: "FD250X" },
            { id: 1791, name: "FD250Y" },
            { id: 1792, name: "FD250YR" },
            { id: 1793, name: "FD300LN" },
            { id: 1794, name: "FD300S" },
            { id: 1795, name: "FD50" },
            { id: 1796, name: "FD50A" },
            { id: 1797, name: "FD50S" },
            { id: 1798, name: "FREE" },
            { id: 1799, name: "FREE CARGO" },
            { id: 1800, name: "HD 125 A" },
            { id: 1801, name: "HD 125 L" },
            { id: 1802, name: "HD 150" },
            { id: 1803, name: "HD 150 L" },
            { id: 1804, name: "HD 250" },
            { id: 1805, name: "HD125" },
            { id: 1806, name: "HD125L" },
            { id: 1807, name: "HD150L" },
            { id: 1808, name: "HD250A" },
            { id: 1809, name: "HD250W" },
            { id: 1810, name: "HD254A" },
            { id: 1811, name: "KX 50" },
            { id: 1812, name: "KX50" },
            { id: 1813, name: "LD 110 H" },
            { id: 1814, name: "LD 110 H1" },
            { id: 1815, name: "LD 110 MAX" },
            { id: 1816, name: "LD 110 MAX-AD" },
            { id: 1817, name: "LD 110 MAX-RT" },
            { id: 1818, name: "LD 110 S" },
            { id: 1819, name: "LD 110 Y" },
            { id: 1820, name: "LD 110 Y T" },
            { id: 1821, name: "LD 110-AD" },
            { id: 1822, name: "LD 110-RT" },
            { id: 1823, name: "LD 110S-AD" },
            { id: 1824, name: "LD 110S-AT" },
            { id: 1825, name: "LD 110S-RT" },
            { id: 1826, name: "LD 125 L" },
            { id: 1827, name: "LD PISTA S" },
            { id: 1828, name: "LD110" },
            { id: 1829, name: "LD110 A 3V" },
            { id: 1830, name: "LD110H" },
            { id: 1831, name: "LD110K" },
            { id: 1832, name: "LD110L" },
            { id: 1833, name: "LD110Q" },
            { id: 1834, name: "LD110S" },
            { id: 1835, name: "LD110Y" },
            { id: 1836, name: "LD110YT" },
            { id: 1837, name: "LD125L MAX R" },
            { id: 1838, name: "MD 125" },
            { id: 1839, name: "MD 150" },
            { id: 1840, name: "MD 150 ALLEGRO" },
            { id: 1841, name: "MD125K" },
            { id: 1842, name: "MD125K1" },
            { id: 1843, name: "MD150" },
            { id: 1844, name: "MD150N" },
            { id: 1845, name: "MONKEY" },
            { id: 1846, name: "MS 50" },
            { id: 1847, name: "MS50D" },
            { id: 1848, name: "MS50E" },
            { id: 1849, name: "QJ100E" },
            { id: 1850, name: "QJ110E" },
            { id: 1851, name: "RD 125 L" },
            { id: 1852, name: "RD 150" },
            { id: 1853, name: "RD 150 CLASSIC" },
            { id: 1854, name: "RD 150 H" },
            { id: 1855, name: "RD 150 L" },
            { id: 1856, name: "RD 150-AD" },
            { id: 1857, name: "RD 150-RT" },
            { id: 1858, name: "RD 150N-AD" },
            { id: 1859, name: "RD 150N-RT" },
            { id: 1860, name: "RD125" },
            { id: 1861, name: "RD125K" },
            { id: 1862, name: "RD150K" },
            { id: 1863, name: "RD150L" },
            { id: 1864, name: "RD200K" },
            { id: 1865, name: "RD250" },
            { id: 1866, name: "RD250R" },
            { id: 1867, name: "RD250S" },
            { id: 1868, name: "RV 125" },
            { id: 1869, name: "SCARABEO" },
            { id: 1870, name: "SILVER FOX 100" },
            { id: 1871, name: "TB100" },
            { id: 1872, name: "TB125" },
            { id: 1873, name: "TD 150" },
            { id: 1874, name: "TD 150 L" },
            { id: 1875, name: "TD 200 P" },
            { id: 1876, name: "TD 250" },
            { id: 1877, name: "TD150L" },
            { id: 1878, name: "TD200K" },
            { id: 1879, name: "TD200K-2" },
            { id: 1880, name: "VD250P" },
            { id: 1881, name: "W150" },
            { id: 1882, name: "W250 SPORT" },
          ],
        },
        {
          name: "MOTO GUZZI",
          models: [
            { id: 1883, name: "V7 II STORNELLO" },
            { id: 1884, name: "V7 III ANNIVERSARIO" },
            { id: 1885, name: "V7 III RACER" },
            { id: 1886, name: "V7 III SPECIAL" },
            { id: 1887, name: "V7 III STONE" },
            { id: 1888, name: "V85 TT" },
            { id: 1889, name: "V9 BOBBER" },
            { id: 1890, name: "V9 ROAMER" },
          ],
        },
        {
          name: "MOTO MORINI",
          models: [
            { id: 1891, name: "X-CAPE" },
            { id: 1892, name: "X-CAPE 650" },
          ],
        },
        {
          name: "Motomel",
          models: [
            {
              id: "1893",
              name: "B110",
            },
            {
              id: "1894",
              name: "B110 TUNNING",
            },
            {
              id: "1895",
              name: "B125",
            },
            {
              id: "1896",
              name: "C 125",
            },
            {
              id: "1897",
              name: "C100 DLX",
            },
            {
              id: "1898",
              name: "C100 SE",
            },
            {
              id: "1899",
              name: "C110",
            },
            {
              id: "1900",
              name: "C110 DLX",
            },
            {
              id: "1901",
              name: "C110 SE",
            },
            {
              id: "1902",
              name: "C150",
            },
            {
              id: "1903",
              name: "C150 SII",
            },
            {
              id: "1904",
              name: "C250",
            },
            {
              id: "1905",
              name: "CA 110",
            },
            {
              id: "1906",
              name: "CA100 DB",
            },
            {
              id: "1907",
              name: "CA100DB",
            },
            {
              id: "1908",
              name: "CA110",
            },
            {
              id: "1909",
              name: "CD 125",
            },
            {
              id: "1910",
              name: "CD100",
            },
            {
              id: "1911",
              name: "CD125",
            },
            {
              id: "1912",
              name: "CG 125",
            },
            {
              id: "1913",
              name: "CG 150",
            },
            {
              id: "1914",
              name: "CITY CARGO 110",
            },
            {
              id: "1915",
              name: "CUSTOM",
            },
            {
              id: "1916",
              name: "CUSTOM 100",
            },
            {
              id: "1917",
              name: "CUSTOM 150",
            },
            {
              id: "1918",
              name: "CUSTOM 200",
            },
            {
              id: "1919",
              name: "CX 150",
            },
            {
              id: "1920",
              name: "CX150",
            },
            {
              id: "1921",
              name: "CX250",
            },
            {
              id: "1922",
              name: "DK 200",
            },
            {
              id: "1923",
              name: "DK200",
            },
            {
              id: "1924",
              name: "DREAM",
            },
            {
              id: "1925",
              name: "E110",
            },
            {
              id: "1926",
              name: "ECO",
            },
            {
              id: "1927",
              name: "ECO AUTOMATIC",
            },
            {
              id: "1928",
              name: "FORZA",
            },
            {
              id: "1929",
              name: "FORZA SE",
            },
            {
              id: "1930",
              name: "FORZA SE                                     ",
            },
            {
              id: "1931",
              name: "GO 125 VINTAGE                      ",
            },
            {
              id: "1932",
              name: "GORILLA                                       ",
            },
            {
              id: "1933",
              name: "GORILLA 110                              ",
            },
            {
              id: "1934",
              name: "GT                                                  ",
            },
            {
              id: "1935",
              name: "GV650                                          ",
            },
            {
              id: "1936",
              name: "HYOSUNG                                   ",
            },
            {
              id: "1937",
              name: "KRAKEN 50                                  ",
            },
            {
              id: "1938",
              name: "KRAKEN 90                                  ",
            },
            {
              id: "1939",
              name: "LYNX 110                                     ",
            },
            {
              id: "1940",
              name: "M 70                                             ",
            },
            {
              id: "1941",
              name: "M70 AUTO                                  ",
            },
            {
              id: "1942",
              name: "MEDAL                                         ",
            },
            {
              id: "1943",
              name: "MEGELLI250                               ",
            },
            {
              id: "1944",
              name: "MOTARD                                     ",
            },
            {
              id: "1945",
              name: "MOTARD 200                             ",
            },
            {
              id: "1946",
              name: "MX110                                          ",
            },
            {
              id: "1947",
              name: "MX250                                          ",
            },
            {
              id: "1948",
              name: "PITBULL                                        ",
            },
            {
              id: "1949",
              name: "PITBULL 200                               ",
            },
            {
              id: "1950",
              name: "PX110                                           ",
            },
            {
              id: "1951",
              name: "QS250                                           ",
            },
            {
              id: "1952",
              name: "QUEST                                          ",
            },
            {
              id: "1953",
              name: "S 250                                             ",
            },
            {
              id: "1954",
              name: "S110                                              ",
            },
            {
              id: "1955",
              name: "S2                                                   ",
            },
            {
              id: "1956",
              name: "S250                                              ",
            },
            {
              id: "1957",
              name: "S3                                                   ",
            },
            {
              id: "1958",
              name: "S70                                                ",
            },
            {
              id: "1959",
              name: "SIRIUS 150                                  ",
            },
            {
              id: "1960",
              name: "SIRIUS 190                                  ",
            },
            {
              id: "1961",
              name: "SIRIUS 250                                  ",
            },
            {
              id: "1962",
              name: "SIRIUS200                                    ",
            },
            {
              id: "1963",
              name: "SKUA 125 X-TREME                  ",
            },
            {
              id: "1964",
              name: "SKUA 200                                    ",
            },
            {
              id: "1965",
              name: "SKUA 200 V6                              ",
            },
            {
              id: "1966",
              name: "SKUA ADVENTURE                   ",
            },
            {
              id: "1967",
              name: "SKUA200                                      ",
            },
            {
              id: "1968",
              name: "SKUA250                                      ",
            },
            {
              id: "1969",
              name: "SL 125                                           ",
            },
            {
              id: "1970",
              name: "SL125                                            ",
            },
            {
              id: "1971",
              name: "SQ 50                                            ",
            },
            {
              id: "1972",
              name: "SQ50                                             ",
            },
            {
              id: "1973",
              name: "SR 150                                          ",
            },
            {
              id: "1974",
              name: "SR 200                                          ",
            },
            {
              id: "1975",
              name: "SR200                                           ",
            },
            {
              id: "1976",
              name: "STRATO                                        ",
            },
            {
              id: "1977",
              name: "STRATO ALPINO                         ",
            },
            {
              id: "1978",
              name: "STRATO E                                     ",
            },
            {
              id: "1979",
              name: "STRATO EURO 150                    ",
            },
            {
              id: "1980",
              name: "STRATO FUN 80                         ",
            },
            {
              id: "1981",
              name: "SUNTRIKE                                    ",
            },
            {
              id: "1982",
              name: "T150                                              ",
            },
            {
              id: "1983",
              name: "T200                                              ",
            },
            {
              id: "1984",
              name: "TRACKER                                      ",
            },
            {
              id: "1985",
              name: "TRUCKER                                     ",
            },
            {
              id: "1986",
              name: "VICTORY 150                              ",
            },
            {
              id: "1987",
              name: "VOLKANO 250                            ",
            },
            {
              id: "1988",
              name: "VX150                                           ",
            },
            {
              id: "1989",
              name: "X3M                                              ",
            },
            {
              id: "1990",
              name: "XMM",
            },
          ],
        },
        {
          name: "MV AGUSTA",
          models: [
            { id: 1991, name: "BRUTALE 1090" },
            { id: 1992, name: "BRUTALE 675" },
            { id: 1993, name: "BRUTALE 800" },
            { id: 1994, name: "BRUTALE 800 DRAGSTER" },
            { id: 1995, name: "BRUTALE 800 DRAGSTER RC" },
            { id: 1996, name: "BRUTALE 800 RR" },
            { id: 1997, name: "BRUTALE RR" },
            { id: 1998, name: "F3 675" },
            { id: 1999, name: "F3 800" },
            { id: 2000, name: "F3 800 RC" },
            { id: 2001, name: "F3 800 RR" },
            { id: 2002, name: "F4 1000 S/1+1" },
            { id: 2003, name: "F4 RR" },
            { id: 2004, name: "RIVALE 800" },
            { id: 2005, name: "STRADALE 800" },
            { id: 2006, name: "TURISMO VELOCE" },
            { id: 2007, name: "TURISMO VELOCE 800" },
            { id: 2008, name: "TURISMO VELOCE 800 ROSS" },
            { id: 2009, name: "TURISMO VELOCE LUSSO" },
          ],
        },
        {
          name: "NORTON",
          models: [{ id: 2010, name: "COMMANDO 961" }],
        },
        {
          name: "Nuuv",
          models: [
            { id: 2011, name: "M+ SPORT" },
            { id: 2012, name: "N SPORT" },
            { id: 2013, name: "NGT" },
            { id: 2014, name: "U PRO" },
          ],
        },
        {
          name: "OKINOI",
          models: [
            { id: 2015, name: "150 R" },
            { id: 2016, name: "250 R" },
            { id: 2017, name: "DROP 125" },
            { id: 2018, name: "NAKED 150" },
            { id: 2019, name: "OKIMOTARD 250" },
            { id: 2020, name: "OKINOI 110" },
            { id: 2021, name: "OKN 250" },
            { id: 2022, name: "OKN 300" },
            { id: 2023, name: "OKN DROP 125" },
            { id: 2024, name: "R 150 N" },
            { id: 2025, name: "R 250 N" },
            { id: 2026, name: "ROMA 125" },
            { id: 2027, name: "ROMA ELECTRICA" },
            { id: 2028, name: "ST 150 N" },
            { id: 2029, name: "STREET 150" },
            { id: 2030, name: "SUPERMOTARD" },
            { id: 2031, name: "TUNING 125" },
          ],
        },
        {
          name: "OLMO",
          models: [
            { id: 2032, name: "FLASH 110 S" },
            { id: 2033, name: "XT 150" },
          ],
        },
        {
          name: "PANTHER",
          models: [
            { id: 2034, name: "110F" },
            { id: 2035, name: "110R" },
            { id: 2036, name: "70F" },
            { id: 2037, name: "90F" },
            { id: 2038, name: "WR110" },
            { id: 2039, name: "WR125" },
            { id: 2040, name: "WR150" },
            { id: 2041, name: "WR150T" },
            { id: 2042, name: "WR200" },
            { id: 2043, name: "WR250" },
          ],
        },
        {
          name: "PANTHER QUADS",
          models: [
            { id: 2044, name: "110 R" },
            { id: 2045, name: "150 R" },
            { id: 2046, name: "200R" },
            { id: 2047, name: "70 F" },
            { id: 2048, name: "90 F" },
            { id: 2049, name: "ATV WR110" },
            { id: 2050, name: "ATV WR125" },
            { id: 2051, name: "WR 150" },
            { id: 2052, name: "WR 200" },
            { id: 2053, name: "WR 250" },
          ],
        },
        {
          name: "PIAGGIO",
          models: [
            { id: 2054, name: "M52" },
            { id: 2055, name: "M68" },
            { id: 2056, name: "MP3 500 LT BUSINESS" },
            { id: 2057, name: "MP3 LT 500IE BUSINESS" },
            { id: 2058, name: "MP3 YOURBAN LT 300 IE" },
            { id: 2059, name: "MP3 YOURBAN LT 300 IE SP" },
            { id: 2060, name: "VESPA 150 PRIMAVERA" },
            { id: 2061, name: "VESPA 150 PRIMAVERA 70" },
            { id: 2062, name: "VESPA 150 SPRINT" },
            { id: 2063, name: "VESPA GTS 300" },
            { id: 2064, name: "VESPA GTS 300 IE" },
            { id: 2065, name: "VESPA GTS SUPER 300" },
            { id: 2066, name: "VESPA SXL 150" },
            { id: 2067, name: "VESPA VXL 150" },
          ],
        },
        {
          name: "POLARIS",
          models: [
            { id: 2068, name: "SCRAMBLER XP 1000" },
            { id: 2069, name: "SPORTSMAN 450 H.O." },
            { id: 2070, name: "SPORTSMAN 570 EFI" },
            { id: 2071, name: "SPORTSMAN XP 1000" },
          ],
        },
        {
          name: "QINGQI",
          models: [{ id: 2072, name: "QS90-2" }],
        },
        {
          name: "ROYAL ENFIELD",
          models: [
            { id: 2073, name: "BULLET 500" },
            { id: 2074, name: "BULLET CLASSIC EFI" },
            { id: 2075, name: "BULLET ELECTRA CLASSIC E" },
            { id: 2076, name: "BULLET ELECTRA EFI" },
            { id: 2077, name: "BULLET TRIALS 500" },
            { id: 2078, name: "CLASSIC 350" },
            { id: 2079, name: "CLASSIC 500" },
            { id: 2080, name: "CONTINENTAL 650" },
            { id: 2081, name: "CONTINENTAL GT" },
            { id: 2082, name: "CONTINENTAL GT 650" },
            { id: 2083, name: "CONTINENTAL GT INTERCEP" },
            { id: 2084, name: "HIMALAYAN" },
            { id: 2085, name: "HUNTER 350" },
            { id: 2086, name: "INTERCEPTOR 650" },
            { id: 2087, name: "METEOR 350" },
            { id: 2088, name: "SCRAM" },
            { id: 2089, name: "SUPER METEOR 650" },
          ],
        },
        {
          name: "RVM",
          models: [
            { id: 2090, name: "250-9" },
            { id: 2091, name: "400 TWINS" },
            { id: 2092, name: "CF650" },
            { id: 2093, name: "CF650TR" },
            { id: 2094, name: "CZ 200-2" },
            { id: 2095, name: "JAWA250" },
            { id: 2096, name: "RM600" },
            { id: 2097, name: "RVM 500" },
            { id: 2098, name: "RVM 500-2" },
            { id: 2099, name: "RVM CZ 250" },
            { id: 2100, name: "TEKKEN 250" },
            { id: 2101, name: "TEKKEN 250-2" },
            { id: 2102, name: "TEKKEN 300" },
            { id: 2103, name: "TEKKEN-250" },
            { id: 2104, name: "V 800" },
          ],
        },
        {
          name: "SERO",
          models: [
            { id: 2105, name: "ELECTRIC CARGO ALTO L6" },
            { id: 2106, name: "ELECTRIC CARGO BAJO FUR L" },
            { id: 2107, name: "ELECTRIC CARGO BAJO L" },
          ],
        },
        {
          name: "SHERCO",
          models: [
            { id: 2108, name: "250 SEF-R" },
            { id: 2109, name: "300 SE-R" },
            { id: 2110, name: "300 SEF-R" },
          ],
        },
        {
          name: "SIAM",
          models: [
            { id: 2111, name: "N4" },
            { id: 2112, name: "QU 110" },
            { id: 2113, name: "QU 110 BASE" },
            { id: 2114, name: "QUIRION 150" },
            { id: 2115, name: "TRENDER 150" },
          ],
        },
        {
          name: "SUMO",
          models: [
            { id: 2116, name: "CG125" },
            { id: 2117, name: "KCS2002F" },
            { id: 2118, name: "KCS2002G" },
            { id: 2119, name: "SB110" },
            { id: 2120, name: "SG125 SUPER" },
            { id: 2121, name: "SL200" },
          ],
        },
        {
          name: "Sunra",
          models: [
            {
              id: "2122",
              name: "ANGER",
            },
            {
              id: "2123",
              name: "ANGER-S",
            },
            {
              id: "2124",
              name: "GRACE",
            },
            {
              id: "2125",
              name: "HAWK",
            },
            {
              id: "2126",
              name: "KING KONG",
            },
            {
              id: "2127",
              name: "LEO",
            },
            {
              id: "2128",
              name: "LMJR",
            },
            {
              id: "2129",
              name: "MIKU MAX",
            },
            {
              id: "2130",
              name: "MIKU SUPER",
            },
          ],
        },
        {
          name: "Suzuki",
          models: [
            {
              id: "2131",
              name: "AN 125",
            },
            {
              id: "2132",
              name: "AX 100",
            },
            {
              id: "2133",
              name: "AX 100 MARSHAL",
            },
            {
              id: "2134",
              name: "AX 100 R",
            },
            {
              id: "2135",
              name: "AX 100D",
            },
            {
              id: "2136",
              name: "AX-100",
            },
            {
              id: "2137",
              name: "AX100A",
            },
            {
              id: "2138",
              name: "AX100V",
            },
            {
              id: "2139",
              name: "BURGMAN 200",
            },
            {
              id: "2140",
              name: "DL 650",
            },
            {
              id: "2141",
              name: "DL1000 V-STROM",
            },
            {
              id: "2142",
              name: "DL1000A",
            },
            {
              id: "2143",
              name: "DL1000XA",
            },
            {
              id: "2144",
              name: "DL1050RC",
            },
            {
              id: "2145",
              name: "DL650",
            },
            {
              id: "2146",
              name: "DL650 V-STROM",
            },
            {
              id: "2147",
              name: "DL650A",
            },
            {
              id: "2148",
              name: "DL650XA",
            },
            {
              id: "2149",
              name: "DR-Z400S DUAL SPORT",
            },
            {
              id: "2150",
              name: "DR650SE",
            },
            {
              id: "2151",
              name: "EN125 HU",
            },
            {
              id: "2152",
              name: "EN125-2A",
            },
            {
              id: "2153",
              name: "EN125-HU",
            },
            {
              id: "2154",
              name: "GIXXER",
            },
            {
              id: "2155",
              name: "GN 125",
            },
            {
              id: "2156",
              name: "GN 125 H",
            },
            {
              id: "2157",
              name: "GN125-F",
            },
            {
              id: "2158",
              name: "GN125E",
            },
            {
              id: "2159",
              name: "GN125EN",
            },
            {
              id: "2160",
              name: "GN125ER",
            },
            {
              id: "2161",
              name: "GN125ES",
            },
            {
              id: "2162",
              name: "GN125ET",
            },
            {
              id: "2163",
              name: "GN125H",
            },
            {
              id: "2164",
              name: "GS 125",
            },
            {
              id: "2165",
              name: "GSF650 BANDIT",
            },
            {
              id: "2166",
              name: "GSF650SA",
            },
            {
              id: "2167",
              name: "GSR 750",
            },
            {
              id: "2168",
              name: "GSR600",
            },
            {
              id: "2169",
              name: "GSX 125 R",
            },
            {
              id: "2170",
              name: "GSX 1300 RK5",
            },
            {
              id: "2171",
              name: "GSX 1300R HAYABUSA",
            },
            {
              id: "2172",
              name: "GSX 1300RA",
            },
            {
              id: "2173",
              name: "GSX 600 FL",
            },
            {
              id: "2174",
              name: "GSX 600 FM",
            },
            {
              id: "2175",
              name: "GSX 600 FR",
            },
            {
              id: "2176",
              name: "GSX 750",
            },
            {
              id: "2177",
              name: "GSX R1000RA",
            },
            {
              id: "2178",
              name: "GSX-R 1100",
            },
            {
              id: "2179",
              name: "GSX-R1000",
            },
            {
              id: "2180",
              name: "GSX-R1000 RA",
            },
            {
              id: "2181",
              name: "GSX-R1100 W",
            },
            {
              id: "2182",
              name: "GSX-R1100N",
            },
            {
              id: "2183",
              name: "GSX-R1100WS",
            },
            {
              id: "2184",
              name: "GSX-R600",
            },
            {
              id: "2185",
              name: "GSX-R600V",
            },
            {
              id: "2186",
              name: "GSX-S750",
            },
            {
              id: "2187",
              name: "GSX-S750A",
            },
            {
              id: "2188",
              name: "GSX1100F",
            },
            {
              id: "2189",
              name: "GSX1300BK B-KING",
            },
            {
              id: "2190",
              name: "GSX1300R",
            },
            {
              id: "2191",
              name: "GSX150",
            },
            {
              id: "2192",
              name: "GSX600FS",
            },
            {
              id: "2193",
              name: "GSXR 750",
            },
            {
              id: "2194",
              name: "GSXR 750 M",
            },
            {
              id: "2195",
              name: "GSXR600",
            },
            {
              id: "2196",
              name: "GW250 INAZUMA",
            },
            {
              id: "2197",
              name: "KINGQUAD 400 4X4 ASI",
            },
            {
              id: "2198",
              name: "KINGQUAD 400 FS 4X4",
            },
            {
              id: "2199",
              name: "KINGQUAD 750 AXI 4X4",
            },
            {
              id: "2200",
              name: "LT Z400Z",
            },
            {
              id: "2201",
              name: "LT-A400FK7",
            },
            {
              id: "2202",
              name: "LT-A400K7",
            },
            {
              id: "2203",
              name: "LT-A750XZK8",
            },
            {
              id: "2204",
              name: "LT-F 250 R",
            },
            {
              id: "2205",
              name: "LT-F250",
            },
            {
              id: "2206",
              name: "LT-F250R",
            },
            {
              id: "2207",
              name: "LT-F400FK8",
            },
            {
              id: "2208",
              name: "LT-R450",
            },
            {
              id: "2209",
              name: "LT-Z400",
            },
            {
              id: "2210",
              name: "LT-Z400L2",
            },
            {
              id: "2211",
              name: "QUADSPORT Z400",
            },
            {
              id: "2212",
              name: "RM Z 250",
            },
            {
              id: "2213",
              name: "RM Z450L1",
            },
            {
              id: "2214",
              name: "RM-Z250",
            },
            {
              id: "2215",
              name: "RM-Z450",
            },
            {
              id: "2216",
              name: "RMZ250",
            },
            {
              id: "2217",
              name: "RMZ450",
            },
            {
              id: "2218",
              name: "SJ110",
            },
            {
              id: "2219",
              name: "SJ110D",
            },
            {
              id: "2220",
              name: "SV650A",
            },
            {
              id: "2221",
              name: "SV650XA",
            },
            {
              id: "2222",
              name: "V-STROM 1000 XT ABS",
            },
            {
              id: "2223",
              name: "V-STROM 250 ABS",
            },
            {
              id: "2224",
              name: "V-STROM 650 XT ABS",
            },
            {
              id: "2225",
              name: "VZ800",
            },
            {
              id: "2226",
              name: "VZ800 MARAUDER",
            },
            {
              id: "2227",
              name: "VZ800W",
            },
            {
              id: "2228",
              name: "VZ800Y MARAUDER",
            },
          ],
        },
        {
          name: "SYM",
          models: [
            { id: 2229, name: "CITYCOM" },
            { id: 2230, name: "CROX 125" },
            { id: 2231, name: "FIDDLE II 150 S" },
            { id: 2232, name: "JET 14" },
            { id: 2233, name: "JOYRIDE" },
            { id: 2234, name: "MAX 600" },
            { id: 2235, name: "MAX 600I" },
            { id: 2236, name: "MAX TL" },
            { id: 2237, name: "ORBIT II 125" },
            { id: 2238, name: "PHONY" },
            { id: 2239, name: "T1 180" },
            { id: 2240, name: "TL508" },
          ],
        },
        {
          name: "TIBO",
          models: [
            { id: 2241, name: "AERO 150" },
            { id: 2242, name: "CAT 150" },
            { id: 2243, name: "CHARGER 200" },
            { id: 2244, name: "CHARGER 250" },
            { id: 2245, name: "COASTER 250" },
            { id: 2246, name: "HUNTER 250" },
            { id: 2247, name: "JET 110" },
            { id: 2248, name: "NITRO 200" },
            { id: 2249, name: "RAIDER 250" },
            { id: 2250, name: "RALLY 70" },
            { id: 2251, name: "RALLY 90" },
            { id: 2252, name: "RIDER 250" },
            { id: 2253, name: "RS 150" },
            { id: 2254, name: "SAMURAI 250" },
            { id: 2255, name: "SHARK 200" },
            { id: 2256, name: "SHARK 250" },
            { id: 2257, name: "SHARK 350" },
            { id: 2258, name: "STORM 200" },
            { id: 2259, name: "TAZZ 110" },
            { id: 2260, name: "ZONDA 200" },
          ],
        },
        {
          name: "TRIUMPH",
          models: [
            { id: 2261, name: "BONNEVILLE BOBBER" },
            { id: 2262, name: "BONNEVILLE BOBBER BLAC" },
            { id: 2263, name: "BONNEVILLE BOBBER TFC" },
            { id: 2264, name: "BONNEVILLE SE" },
            { id: 2265, name: "BONNEVILLE SPEEDMASTER" },
            { id: 2266, name: "BONNEVILLE T 100" },
            { id: 2267, name: "BONNEVILLE T 100 BLACK" },
            { id: 2268, name: "BONNEVILLE T100" },
            { id: 2269, name: "BONNEVILLE T120" },
            { id: 2270, name: "BONNEVILLE T120 BLACK" },
            { id: 2271, name: "EXPLORER XCA" },
            { id: 2272, name: "EXPLORER XCX" },
            { id: 2273, name: "ROCKET 3 R" },
            { id: 2274, name: "ROCKET III TOURING" },
            { id: 2275, name: "SCRAMBLER" },
            { id: 2276, name: "SCRAMBLER 1200 XC" },
            { id: 2277, name: "SCRAMBLER 1200 XE" },
            { id: 2278, name: "SPEED TWIN" },
            { id: 2279, name: "STREET CUP" },
            { id: 2280, name: "STREET SCRAMBLER" },
            { id: 2281, name: "STREET TWIN" },
            { id: 2282, name: "THRUXTON" },
            { id: 2283, name: "THRUXTON 900" },
            { id: 2284, name: "THRUXTON R" },
            { id: 2285, name: "TIGER 1050" },
            { id: 2286, name: "TIGER 1200 XCX" },
            { id: 2287, name: "TIGER 800" },
            { id: 2288, name: "TIGER 800 XC" },
            { id: 2289, name: "TIGER 800 XCA" },
            { id: 2290, name: "TIGER 800 XCX" },
            { id: 2291, name: "TIGER 800 XRX" },
            { id: 2292, name: "TIGER 900 GT" },
            { id: 2293, name: "TIGER 900 GT ARAGON EDI" },
            { id: 2294, name: "TIGER 900 GT PRO" },
            { id: 2295, name: "TIGER 900 RALLY" },
            { id: 2296, name: "TIGER 900 RALLY PRO" },
            { id: 2297, name: "TIGER EXPLORER" },
            { id: 2298, name: "TIGER EXPLORER XC" },
          ],
        },
        {
          name: "TVS",
          models: [
            { id: 2299, name: "NTORQ 125" },
            { id: 2300, name: "RTR 160" },
            { id: 2301, name: "RTR 200" },
          ],
        },
        {
          name: "VOGE",
          models: [
            { id: 2302, name: "300" },
            { id: 2303, name: "300 AC" },
            { id: 2304, name: "300 DS" },
            { id: 2305, name: "500DS" },
            { id: 2306, name: "500R" },
            { id: 2307, name: "650DS" },
          ],
        },
        {
          name: "Yamaha",
          models: [
            {
              id: "2308",
              name: "900 ST",
            },
            {
              id: "2309",
              name: "BLASTER - YFS200",
            },
            {
              id: "2310",
              name: "BLASTER YFS2006",
            },
            {
              id: "2311",
              name: "CRYPTON",
            },
            {
              id: "2312",
              name: "CYGNUS RAY ZR",
            },
            {
              id: "2313",
              name: "FASCINO 125 FI",
            },
            {
              id: "2314",
              name: "FAZER 600 FZ6",
            },
            {
              id: "2315",
              name: "FAZER 600 FZ6T",
            },
            {
              id: "2316",
              name: "FAZER FI",
            },
            {
              id: "2317",
              name: "FAZER FZ8 SA",
            },
            {
              id: "2318",
              name: "FJR 1300",
            },
            {
              id: "2319",
              name: "FJR1300A",
            },
            {
              id: "2320",
              name: "FJR1300AS",
            },
            {
              id: "2321",
              name: "FZ 16",
            },
            {
              id: "2322",
              name: "FZ FI",
            },
            {
              id: "2323",
              name: "FZ-S FI",
            },
            {
              id: "2324",
              name: "FZ-S FI D",
            },
            {
              id: "2325",
              name: "FZ-S FI V3.0",
            },
            {
              id: "2326",
              name: "FZ-X",
            },
            {
              id: "2327",
              name: "FZ1",
            },
            {
              id: "2328",
              name: "FZ1 N",
            },
            {
              id: "2329",
              name: "FZ1 SA",
            },
            {
              id: "2330",
              name: "FZ16 ST",
            },
            {
              id: "2331",
              name: "FZ1N FAZER",
            },
            {
              id: "2332",
              name: "FZ1S",
            },
            {
              id: "2333",
              name: "FZ25",
            },
            {
              id: "2334",
              name: "FZ25 ABS",
            },
            {
              id: "2335",
              name: "FZ6",
            },
            {
              id: "2336",
              name: "FZ6 NAHG",
            },
            {
              id: "2337",
              name: "FZ6-N",
            },
            {
              id: "2338",
              name: "FZ6-S",
            },
            {
              id: "2339",
              name: "FZ6NHG",
            },
            {
              id: "2340",
              name: "FZ6SAHG",
            },
            {
              id: "2341",
              name: "FZ6SHG",
            },
            {
              id: "2342",
              name: "FZ8 NA",
            },
            {
              id: "2343",
              name: "FZ8-N",
            },
            {
              id: "2344",
              name: "FZ8-S",
            },
            {
              id: "2345",
              name: "GRIZZLY 350",
            },
            {
              id: "2346",
              name: "GRIZZLY 350 4X4",
            },
            {
              id: "2347",
              name: "GRIZZLY 700 FI AUTO 4X4",
            },
            {
              id: "2348",
              name: "MT 03A",
            },
            {
              id: "2349",
              name: "MT 07",
            },
            {
              id: "2350",
              name: "MT 07 A",
            },
            {
              id: "2351",
              name: "MT 09",
            },
            {
              id: "2352",
              name: "MT 09 ABS",
            },
            {
              id: "2353",
              name: "MT 09 TRACER",
            },
            {
              id: "2354",
              name: "MT 10",
            },
            {
              id: "2355",
              name: "MT-07 TRACER",
            },
            {
              id: "2356",
              name: "MT-07ST",
            },
            {
              id: "2357",
              name: "MT-09ST",
            },
            {
              id: "2358",
              name: "MT01",
            },
            {
              id: "2359",
              name: "MT03",
            },
            {
              id: "2360",
              name: "MT03 ABS",
            },
            {
              id: "2361",
              name: "NM-X",
            },
            {
              id: "2362",
              name: "NMAX CONNECTED",
            },
            {
              id: "2363",
              name: "PW50",
            },
            {
              id: "2364",
              name: "R15",
            },
            {
              id: "2365",
              name: "R6",
            },
            {
              id: "2366",
              name: "RAPTOR 250",
            },
            {
              id: "2367",
              name: "RAPTOR 250R",
            },
            {
              id: "2368",
              name: "RAPTOR 700",
            },
            {
              id: "2369",
              name: "RAPTOR 700R",
            },
            {
              id: "2370",
              name: "RAY ZR 125 FI",
            },
            {
              id: "2371",
              name: "ROAD STAR 1700",
            },
            {
              id: "2372",
              name: "ROYAL STAR 1300",
            },
            {
              id: "2373",
              name: "ROYAL STAR 1300 MIDNIGH",
            },
            {
              id: "2374",
              name: "ROYAL STAR 1300 VENTURE",
            },
            {
              id: "2375",
              name: "ROYAL STAR 1300A",
            },
            {
              id: "2376",
              name: "SUPER TENERE",
            },
            {
              id: "2377",
              name: "SZ15RR",
            },
            {
              id: "2378",
              name: "T105 CRYPTON",
            },
            {
              id: "2379",
              name: "T105E CRYPTON",
            },
            {
              id: "2380",
              name: "T110",
            },
            {
              id: "2381",
              name: "T110 CRYPTON",
            },
            {
              id: "2382",
              name: "T110C",
            },
            {
              id: "2383",
              name: "TDM900",
            },
            {
              id: "2384",
              name: "TDM900A",
            },
            {
              id: "2385",
              name: "TENERE ADVENTURE",
            },
            {
              id: "2386",
              name: "TTR 125EV",
            },
            {
              id: "2387",
              name: "TTR 125V",
            },
            {
              id: "2388",
              name: "TTR125",
            },
            {
              id: "2389",
              name: "TTR125E",
            },
            {
              id: "2390",
              name: "TTR125LW",
            },
            {
              id: "2391",
              name: "TTR125LWE",
            },
            {
              id: "2392",
              name: "TTR230",
            },
            {
              id: "2393",
              name: "TTR230T",
            },
            {
              id: "2394",
              name: "TTR230W",
            },
            {
              id: "2395",
              name: "TZ125",
            },
            {
              id: "2396",
              name: "TZR 125",
            },
            {
              id: "2397",
              name: "TZR 125 R",
            },
            {
              id: "2398",
              name: "TZR 125 SP",
            },
            {
              id: "2399",
              name: "V STAR",
            },
            {
              id: "2400",
              name: "V STAR 1300",
            },
            {
              id: "2401",
              name: "V STAR 950",
            },
            {
              id: "2402",
              name: "V STAR CLASSIC",
            },
            {
              id: "2403",
              name: "V-MAX",
            },
            {
              id: "2404",
              name: "V-MAX 1200",
            },
            {
              id: "2405",
              name: "WARRIOR ELECTRIC 350",
            },
            {
              id: "2406",
              name: "WR250F",
            },
            {
              id: "2407",
              name: "WR250R",
            },
            {
              id: "2408",
              name: "WR250X",
            },
            {
              id: "2409",
              name: "WR450F",
            },
            {
              id: "2410",
              name: "XJ6-F DIVERSION",
            },
            {
              id: "2411",
              name: "XJ6-N",
            },
            {
              id: "2412",
              name: "XJ6-S DIVERSION",
            },
            {
              id: "2413",
              name: "XJR 1300",
            },
            {
              id: "2414",
              name: "XP 500",
            },
            {
              id: "2415",
              name: "XSR900",
            },
            {
              id: "2416",
              name: "XT 225",
            },
            {
              id: "2417",
              name: "XT225 4-STROKE",
            },
            {
              id: "2418",
              name: "XT225 G",
            },
            {
              id: "2419",
              name: "XT225D",
            },
            {
              id: "2420",
              name: "XT600E",
            },
            {
              id: "2421",
              name: "XT600ED",
            },
            {
              id: "2422",
              name: "XT660R",
            },
            {
              id: "2423",
              name: "XT660X",
            },
            {
              id: "2424",
              name: "XT660Z",
            },
            {
              id: "2425",
              name: "XTZ 125",
            },
            {
              id: "2426",
              name: "XTZ 125 E",
            },
            {
              id: "2427",
              name: "XTZ 125E",
            },
            {
              id: "2428",
              name: "XTZ 250",
            },
            {
              id: "2429",
              name: "XTZ125E",
            },
            {
              id: "2430",
              name: "XTZ125K",
            },
            {
              id: "2431",
              name: "XTZ150",
            },
            {
              id: "2432",
              name: "XTZ250",
            },
            {
              id: "2433",
              name: "XTZ250 LANDER",
            },
            {
              id: "2434",
              name: "XTZ250ABS",
            },
            {
              id: "2435",
              name: "XV1900A MIDNIGTH STAR",
            },
            {
              id: "2436",
              name: "XV950 BOLT",
            },
            {
              id: "2437",
              name: "XV950R",
            },
            {
              id: "2438",
              name: "XVA1100 V-STAR CUSTOM",
            },
            {
              id: "2439",
              name: "XVS 65 V-STAR CLASSIC",
            },
            {
              id: "2440",
              name: "XVS11 V-STAR",
            },
            {
              id: "2441",
              name: "XVS11 V-STAR CLASSIC",
            },
            {
              id: "2442",
              name: "XVS1100",
            },
            {
              id: "2443",
              name: "XVS1100 V-STAR CLASSIC",
            },
            {
              id: "2444",
              name: "XVS1100A",
            },
            {
              id: "2445",
              name: "XVS1300A MIDNIGHT STAR",
            },
            {
              id: "2446",
              name: "XVS65 V-STAR",
            },
            {
              id: "2447",
              name: "XVS650",
            },
            {
              id: "2448",
              name: "XVS650 V-STAR CUSTOM",
            },
            {
              id: "2449",
              name: "XVS650A",
            },
            {
              id: "2450",
              name: "XVS950A",
            },
            {
              id: "2451",
              name: "XVS950CUD A",
            },
            {
              id: "2452",
              name: "XVZ1300AT",
            },
            {
              id: "2453",
              name: "YBR 125",
            },
            {
              id: "2454",
              name: "YBR 125 ED",
            },
            {
              id: "2455",
              name: "YBR 125 R",
            },
            {
              id: "2456",
              name: "YBR 125ED",
            },
            {
              id: "2457",
              name: "YBR 250",
            },
            {
              id: "2458",
              name: "YBR Z",
            },
            {
              id: "2459",
              name: "YBR125",
            },
            {
              id: "2460",
              name: "YBR125 4-STROKE",
            },
            {
              id: "2461",
              name: "YBR125E",
            },
            {
              id: "2462",
              name: "YBR125ED",
            },
            {
              id: "2463",
              name: "YBR125K",
            },
            {
              id: "2464",
              name: "YBR250",
            },
            {
              id: "2465",
              name: "YBRZ",
            },
            {
              id: "2466",
              name: "YF 200 BLASTER",
            },
            {
              id: "2467",
              name: "YFM-80",
            },
            {
              id: "2468",
              name: "YFM125A",
            },
            {
              id: "2469",
              name: "YFM125GBL",
            },
            {
              id: "2470",
              name: "YFM125RAW",
            },
            {
              id: "2471",
              name: "YFM250",
            },
            {
              id: "2472",
              name: "YFM250R",
            },
            {
              id: "2473",
              name: "YFM25BYB",
            },
            {
              id: "2474",
              name: "YFM25BYGR",
            },
            {
              id: "2475",
              name: "YFM25RAL",
            },
            {
              id: "2476",
              name: "YFM25RAW",
            },
            {
              id: "2477",
              name: "YFM25RSP2X",
            },
            {
              id: "2478",
              name: "YFM25RSPA",
            },
            {
              id: "2479",
              name: "YFM25RXGY",
            },
            {
              id: "2480",
              name: "YFM25RXL",
            },
            {
              id: "2481",
              name: "YFM25RZW",
            },
            {
              id: "2482",
              name: "YFM25XLE",
            },
            {
              id: "2483",
              name: "YFM25XLGR",
            },
            {
              id: "2484",
              name: "YFM25XNE",
            },
            {
              id: "2485",
              name: "YFM300",
            },
            {
              id: "2486",
              name: "YFM350 WARRIOR",
            },
            {
              id: "2487",
              name: "YFM350 XF",
            },
            {
              id: "2488",
              name: "YFM350A",
            },
            {
              id: "2489",
              name: "YFM350AS",
            },
            {
              id: "2490",
              name: "YFM350ER",
            },
            {
              id: "2491",
              name: "YFM350FW",
            },
            {
              id: "2492",
              name: "YFM350FWA",
            },
            {
              id: "2493",
              name: "YFM350FWB",
            },
            {
              id: "2494",
              name: "YFM350FWHC",
            },
            {
              id: "2495",
              name: "YFM350FWX",
            },
            {
              id: "2496",
              name: "YFM350FXK",
            },
            {
              id: "2497",
              name: "YFM350GW",
            },
            {
              id: "2498",
              name: "YFM350R",
            },
            {
              id: "2499",
              name: "YFM350U",
            },
            {
              id: "2500",
              name: "YFM350X",
            },
            {
              id: "2501",
              name: "YFM350XE",
            },
            {
              id: "2502",
              name: "YFM350XG",
            },
            {
              id: "2503",
              name: "YFM350XH",
            },
            {
              id: "2504",
              name: "YFM350XJL",
            },
            {
              id: "2505",
              name: "YFM350XJY",
            },
            {
              id: "2506",
              name: "YFM350XKGY",
            },
            {
              id: "2507",
              name: "YFM350XKR",
            },
            {
              id: "2508",
              name: "YFM35FGAGR",
            },
            {
              id: "2509",
              name: "YFM35FGAL",
            },
            {
              id: "2510",
              name: "YFM35FGBGR",
            },
            {
              id: "2511",
              name: "YFM35FGBL",
            },
            {
              id: "2512",
              name: "YFM35FGDGR",
            },
            {
              id: "2513",
              name: "YFM35FGHB",
            },
            {
              id: "2514",
              name: "YFM35FGHX",
            },
            {
              id: "2515",
              name: "YFM35FGIAG",
            },
            {
              id: "2516",
              name: "YFM35FGIAL",
            },
            {
              id: "2517",
              name: "YFM35FGIHY",
            },
            {
              id: "2518",
              name: "YFM35FGIWR",
            },
            {
              id: "2519",
              name: "YFM35FGIYB",
            },
            {
              id: "2520",
              name: "YFM35FGXL",
            },
            {
              id: "2521",
              name: "YFM35FGYL",
            },
            {
              id: "2522",
              name: "YFM35GAL",
            },
            {
              id: "2523",
              name: "YFM35GXGR",
            },
            {
              id: "2524",
              name: "YFM35GYGR",
            },
            {
              id: "2525",
              name: "YFM35RAL",
            },
            {
              id: "2526",
              name: "YFM35RDW",
            },
            {
              id: "2527",
              name: "YFM35RLX",
            },
            {
              id: "2528",
              name: "YFM35RSE2W",
            },
            {
              id: "2529",
              name: "YFM35RWL",
            },
            {
              id: "2530",
              name: "YFM35RXGY",
            },
            {
              id: "2531",
              name: "YFM35RXL",
            },
            {
              id: "2532",
              name: "YFM35RYW",
            },
            {
              id: "2533",
              name: "YFM35RZW",
            },
            {
              id: "2534",
              name: "YFM35XHGR",
            },
            {
              id: "2535",
              name: "YFM35XVL",
            },
            {
              id: "2536",
              name: "YFM35XXGY",
            },
            {
              id: "2537",
              name: "YFM35XYL",
            },
            {
              id: "2538",
              name: "YFM400FWAN",
            },
            {
              id: "2539",
              name: "YFM450FWA",
            },
            {
              id: "2540",
              name: "YFM450FWAN GRIZZLY",
            },
            {
              id: "2541",
              name: "YFM450FWAN VERSION GR",
            },
            {
              id: "2542",
              name: "YFM45FGAL",
            },
            {
              id: "2543",
              name: "YFM45FGHB",
            },
            {
              id: "2544",
              name: "YFM550F",
            },
            {
              id: "2545",
              name: "YFM550FWA GRIZZLY",
            },
            {
              id: "2546",
              name: "YFM5FGHA",
            },
            {
              id: "2547",
              name: "YFM5FGYL",
            },
            {
              id: "2548",
              name: "YFM660",
            },
            {
              id: "2549",
              name: "YFM660 GRIZZLY",
            },
            {
              id: "2550",
              name: "YFM660FP",
            },
            {
              id: "2551",
              name: "YFM660FWA",
            },
            {
              id: "2552",
              name: "YFM660R",
            },
            {
              id: "2553",
              name: "YFM660RN",
            },
            {
              id: "2554",
              name: "YFM700",
            },
            {
              id: "2555",
              name: "YFM700 R",
            },
            {
              id: "2556",
              name: "YFM700FWAD",
            },
            {
              id: "2557",
              name: "YFM700R",
            },
            {
              id: "2558",
              name: "YFM700R SE",
            },
            {
              id: "2559",
              name: "YFM700RSEL",
            },
            {
              id: "2560",
              name: "YFM700RSES",
            },
            {
              id: "2561",
              name: "YFM70RSEY",
            },
            {
              id: "2562",
              name: "YFM70RSPX RAPTOR",
            },
            {
              id: "2563",
              name: "YFM70RXGY",
            },
            {
              id: "2564",
              name: "YFM70RXL",
            },
            {
              id: "2565",
              name: "YFM7FGBL",
            },
            {
              id: "2566",
              name: "YFM7FGHA",
            },
            {
              id: "2567",
              name: "YFM7FGHY",
            },
            {
              id: "2568",
              name: "YFM7FGHZ",
            },
            {
              id: "2569",
              name: "YFM7FGPAGR",
            },
            {
              id: "2570",
              name: "YFM7FGPAL",
            },
            {
              id: "2571",
              name: "YFM7FGPBGR",
            },
            {
              id: "2572",
              name: "YFM7FGPHA",
            },
            {
              id: "2573",
              name: "YFM7FGPHB",
            },
            {
              id: "2574",
              name: "YFM7FGPHY",
            },
            {
              id: "2575",
              name: "YFM7FGPSED",
            },
            {
              id: "2576",
              name: "YFM7FGPSEY",
            },
            {
              id: "2577",
              name: "YFM7FGPSEZ",
            },
            {
              id: "2578",
              name: "YFM7FGPSPA",
            },
            {
              id: "2579",
              name: "YFM7FGPSPX",
            },
            {
              id: "2580",
              name: "YFM7FGPYB",
            },
            {
              id: "2581",
              name: "YFM7FGXL",
            },
            {
              id: "2582",
              name: "YFM7FGYB",
            },
            {
              id: "2583",
              name: "YFM7FGYL",
            },
            {
              id: "2584",
              name: "YFM7FGZL",
            },
            {
              id: "2585",
              name: "YFM7RAL",
            },
            {
              id: "2586",
              name: "YFM7RAW",
            },
            {
              id: "2587",
              name: "YFM7RDW",
            },
            {
              id: "2588",
              name: "YFM7RSE",
            },
            {
              id: "2589",
              name: "YFM7RSEA",
            },
            {
              id: "2590",
              name: "YFM7RSEB",
            },
            {
              id: "2591",
              name: "YFM7RSED",
            },
            {
              id: "2592",
              name: "YFM7RSEDB",
            },
            {
              id: "2593",
              name: "YFM7RSEZ",
            },
            {
              id: "2594",
              name: "YFM80",
            },
            {
              id: "2595",
              name: "YFM80-J",
            },
            {
              id: "2596",
              name: "YFM80F",
            },
            {
              id: "2597",
              name: "YFM80G",
            },
            {
              id: "2598",
              name: "YFM80GHL",
            },
            {
              id: "2599",
              name: "YFM80GHX",
            },
            {
              id: "2600",
              name: "YFM80GWL",
            },
            {
              id: "2601",
              name: "YFM80GXGR",
            },
            {
              id: "2602",
              name: "YFM80H",
            },
            {
              id: "2603",
              name: "YFM80R",
            },
            {
              id: "2604",
              name: "YFM80RVL",
            },
            {
              id: "2605",
              name: "YFM80RVW",
            },
            {
              id: "2606",
              name: "YFM80RXL",
            },
            {
              id: "2607",
              name: "YFM90R",
            },
            {
              id: "2608",
              name: "YFS 200 F",
            },
            {
              id: "2609",
              name: "YFS 200 G",
            },
            {
              id: "2610",
              name: "YFS-200 G",
            },
            {
              id: "2611",
              name: "YFS200",
            },
            {
              id: "2612",
              name: "YFS200 F-PP",
            },
            {
              id: "2613",
              name: "YFS200 G-PP",
            },
            {
              id: "2614",
              name: "YFS200-GR",
            },
            {
              id: "2615",
              name: "YFS200F-GR",
            },
            {
              id: "2616",
              name: "YFS200G-L",
            },
            {
              id: "2617",
              name: "YFS200GN",
            },
            {
              id: "2618",
              name: "YFS200H",
            },
            {
              id: "2619",
              name: "YFS200H-B",
            },
            {
              id: "2620",
              name: "YFS200H-L",
            },
            {
              id: "2621",
              name: "YFS200J-R",
            },
            {
              id: "2622",
              name: "YFS200J-Y",
            },
            {
              id: "2623",
              name: "YFS200K",
            },
            {
              id: "2624",
              name: "YFS200K-L",
            },
            {
              id: "2625",
              name: "YFS200K-R",
            },
            {
              id: "2626",
              name: "YFZ 350 F",
            },
            {
              id: "2627",
              name: "YFZ 450",
            },
            {
              id: "2628",
              name: "YFZ350",
            },
            {
              id: "2629",
              name: "YFZ350G",
            },
            {
              id: "2630",
              name: "YFZ350H",
            },
            {
              id: "2631",
              name: "YFZ350H-R",
            },
            {
              id: "2632",
              name: "YFZ350H-W",
            },
            {
              id: "2633",
              name: "YFZ350J-B",
            },
            {
              id: "2634",
              name: "YFZ350J-R",
            },
            {
              id: "2635",
              name: "YFZ450",
            },
            {
              id: "2636",
              name: "YFZ450R",
            },
            {
              id: "2637",
              name: "YFZ450R SPECIAL EDITION",
            },
            {
              id: "2638",
              name: "YFZ450RAL",
            },
            {
              id: "2639",
              name: "YFZ450RSEY",
            },
            {
              id: "2640",
              name: "YFZ450RSEZ",
            },
            {
              id: "2641",
              name: "YFZ450RYL",
            },
            {
              id: "2642",
              name: "YFZ450RYW",
            },
            {
              id: "2643",
              name: "YFZ450RZL",
            },
            {
              id: "2644",
              name: "YFZ450SL",
            },
            {
              id: "2645",
              name: "YFZ450SP2X",
            },
            {
              id: "2646",
              name: "YFZ450SPV",
            },
            {
              id: "2647",
              name: "YFZ450SPX",
            },
            {
              id: "2648",
              name: "YFZ450SPX RAPTOR",
            },
            {
              id: "2649",
              name: "YFZ450VL",
            },
            {
              id: "2650",
              name: "YFZ450WGY",
            },
            {
              id: "2651",
              name: "YFZ450WL",
            },
            {
              id: "2652",
              name: "YFZ450X",
            },
            {
              id: "2653",
              name: "YFZ450XAL",
            },
            {
              id: "2654",
              name: "YFZ450XBBZ",
            },
            {
              id: "2655",
              name: "YFZ450XGY",
            },
            {
              id: "2656",
              name: "YFZ450XL",
            },
            {
              id: "2657",
              name: "YFZ450XZL",
            },
            {
              id: "2658",
              name: "YFZ450XZW",
            },
            {
              id: "2659",
              name: "YFZ450YL",
            },
            {
              id: "2660",
              name: "YFZ450YW",
            },
            {
              id: "2661",
              name: "YFZ45BB",
            },
            {
              id: "2662",
              name: "YFZ45BW",
            },
            {
              id: "2663",
              name: "YFZ45BWE",
            },
            {
              id: "2664",
              name: "YFZ45FGYB",
            },
            {
              id: "2665",
              name: "YFZ45RBL",
            },
            {
              id: "2666",
              name: "YFZ45RBW",
            },
            {
              id: "2667",
              name: "YFZ45RDL",
            },
            {
              id: "2668",
              name: "YFZ45RDW",
            },
            {
              id: "2669",
              name: "YFZ45RSEB",
            },
            {
              id: "2670",
              name: "YFZ45RSED",
            },
            {
              id: "2671",
              name: "YP400 MAJESTY",
            },
            {
              id: "2672",
              name: "YS250 FAZER",
            },
            {
              id: "2673",
              name: "YZ 125",
            },
            {
              id: "2674",
              name: "YZ 125 G1",
            },
            {
              id: "2675",
              name: "YZ 125G",
            },
            {
              id: "2676",
              name: "YZ 250 G1",
            },
            {
              id: "2677",
              name: "YZ125F1",
            },
            {
              id: "2678",
              name: "YZ250",
            },
            {
              id: "2679",
              name: "YZ250F",
            },
            {
              id: "2680",
              name: "YZ250FX",
            },
            {
              id: "2681",
              name: "YZ250X",
            },
            {
              id: "2682",
              name: "YZ426F",
            },
            {
              id: "2683",
              name: "YZ450F",
            },
            {
              id: "2684",
              name: "YZ450FX",
            },
            {
              id: "2685",
              name: "YZ85",
            },
            {
              id: "2686",
              name: "YZ85LW",
            },
            {
              id: "2687",
              name: "YZF R",
            },
            {
              id: "2688",
              name: "YZF R1M",
            },
            {
              id: "2689",
              name: "YZF R3 GP",
            },
            {
              id: "2690",
              name: "YZF R3A",
            },
            {
              id: "2691",
              name: "YZF-R1",
            },
            {
              id: "2692",
              name: "YZF-R6",
            },
            {
              id: "2693",
              name: "YZF250R",
            },
          ],
        },
        {
          name: "Zanella",
          models: [
            {
              id: "2694",
              name: "CECCATO R 150",
            },
            {
              id: "2695",
              name: "CECCATO V 250 I",
            },
            {
              id: "2696",
              name: "CECCATO X",
            },
            {
              id: "2697",
              name: "CECCATO X 250",
            },
            {
              id: "2698",
              name: "CECCATO X 700",
            },
            {
              id: "2699",
              name: "CICL. N-FIRE 50 PLUS",
            },
            {
              id: "2700",
              name: "CICL. SOL LA PLUS",
            },
            {
              id: "2701",
              name: "CICL. SOL TOP",
            },
            {
              id: "2702",
              name: "CICL.SOL LA PLUS",
            },
            {
              id: "2703",
              name: "CRUISER X",
            },
            {
              id: "2704",
              name: "CRUISER X1",
            },
            {
              id: "2705",
              name: "CUSTOM 125",
            },
            {
              id: "2706",
              name: "CUSTOM 150",
            },
            {
              id: "2707",
              name: "DELIBERY",
            },
            {
              id: "2708",
              name: "DELIVERY 100",
            },
            {
              id: "2709",
              name: "DIRTBIKE",
            },
            {
              id: "2710",
              name: "DUE",
            },
            {
              id: "2711",
              name: "DUE 110 LUXURY",
            },
            {
              id: "2712",
              name: "DUE 110 SPORT",
            },
            {
              id: "2713",
              name: "DUE 125 SPORT",
            },
            {
              id: "2714",
              name: "DUE 3V",
            },
            {
              id: "2715",
              name: "DUE CLASSIC 110",
            },
            {
              id: "2716",
              name: "DUE CLASSIC AUTOMATICA",
            },
            {
              id: "2717",
              name: "DUE GL",
            },
            {
              id: "2718",
              name: "DUE GL C/ALEACION",
            },
            {
              id: "2719",
              name: "E STYLER",
            },
            {
              id: "2720",
              name: "EXPLORER 200 C.C.",
            },
            {
              id: "2721",
              name: "EXPLORER 250",
            },
            {
              id: "2722",
              name: "EXPLORER ZCT 110",
            },
            {
              id: "2723",
              name: "FIRE",
            },
            {
              id: "2724",
              name: "FIRE VR",
            },
            {
              id: "2725",
              name: "FX 110",
            },
            {
              id: "2726",
              name: "FX 110 SERIES",
            },
            {
              id: "2727",
              name: "FX 125",
            },
            {
              id: "2728",
              name: "FX 125 MAD MAX",
            },
            {
              id: "2729",
              name: "FX 150",
            },
            {
              id: "2730",
              name: "FX 150 AUT.",
            },
            {
              id: "2731",
              name: "FX 150 AUTOMATIC",
            },
            {
              id: "2732",
              name: "FX 150 CARGO",
            },
            {
              id: "2733",
              name: "FX 150 MAD MAX",
            },
            {
              id: "2734",
              name: "FX 200",
            },
            {
              id: "2735",
              name: "FX 200 MAD MAX",
            },
            {
              id: "2736",
              name: "FX 200 SERIES",
            },
            {
              id: "2737",
              name: "FX 250",
            },
            {
              id: "2738",
              name: "FX 250 KING MAD MAX",
            },
            {
              id: "2739",
              name: "FX 250 MAD MAX",
            },
            {
              id: "2740",
              name: "FX 300 MAD MAX",
            },
            {
              id: "2741",
              name: "FX 50",
            },
            {
              id: "2742",
              name: "FX 50 SERIES",
            },
            {
              id: "2743",
              name: "FX 70",
            },
            {
              id: "2744",
              name: "FX 70 SERIES",
            },
            {
              id: "2745",
              name: "FX 90",
            },
            {
              id: "2746",
              name: "FX 90 SERIES",
            },
            {
              id: "2747",
              name: "FX110 CARGO",
            },
            {
              id: "2748",
              name: "FX125 SERIES",
            },
            {
              id: "2749",
              name: "FX150 CARGO",
            },
            {
              id: "2750",
              name: "FX150 SERIES",
            },
            {
              id: "2751",
              name: "FX200 SPORT SERIES",
            },
            {
              id: "2752",
              name: "FX250",
            },
            {
              id: "2753",
              name: "FX250 KING",
            },
            {
              id: "2754",
              name: "FX250 MAD MAX",
            },
            {
              id: "2755",
              name: "FX250 SPORT SERIES",
            },
            {
              id: "2756",
              name: "FX300",
            },
            {
              id: "2757",
              name: "FX400 SPORT SERIES",
            },
            {
              id: "2758",
              name: "GFORCE 200",
            },
            {
              id: "2759",
              name: "GFORCE 250",
            },
            {
              id: "2760",
              name: "GFORCE 300",
            },
            {
              id: "2761",
              name: "GFORCE 700",
            },
            {
              id: "2762",
              name: "GFORCE250",
            },
            {
              id: "2763",
              name: "GFORCE500 4WD",
            },
            {
              id: "2764",
              name: "GT2I",
            },
            {
              id: "2765",
              name: "HJ 110",
            },
            {
              id: "2766",
              name: "HJ110",
            },
            {
              id: "2767",
              name: "HJ125-7",
            },
            {
              id: "2768",
              name: "HOT",
            },
            {
              id: "2769",
              name: "HOT 90 G2",
            },
            {
              id: "2770",
              name: "HOT 90 SWEET G2",
            },
            {
              id: "2771",
              name: "HOT 90 SWEET SERIES",
            },
            {
              id: "2772",
              name: "MADASS",
            },
            {
              id: "2773",
              name: "MOD",
            },
            {
              id: "2774",
              name: "MOTO NEW FIRE 70 FULL",
            },
            {
              id: "2775",
              name: "MOTO NEW FIRE 70 VAV",
            },
            {
              id: "2776",
              name: "MOTO SOL TOP 70",
            },
            {
              id: "2777",
              name: "MOTO SOL TOP 70 VAV",
            },
            {
              id: "2778",
              name: "MOTONETA",
            },
            {
              id: "2779",
              name: "NEW FIRE",
            },
            {
              id: "2780",
              name: "NEW FIRE 100",
            },
            {
              id: "2781",
              name: "NEW FIRE 50 ECONO",
            },
            {
              id: "2782",
              name: "NEW FIRE 50 PLUS",
            },
            {
              id: "2783",
              name: "NEW FIRE 50 SPORT",
            },
            {
              id: "2784",
              name: "NEW FIRE 50CC",
            },
            {
              id: "2785",
              name: "NEW FIRE 50CC 4T",
            },
            {
              id: "2786",
              name: "NEW FIRE 70 CC 4T",
            },
            {
              id: "2787",
              name: "NEW FIRE 70 ECONO",
            },
            {
              id: "2788",
              name: "NEW FIRE 70 FULL",
            },
            {
              id: "2789",
              name: "NEW FIRE 70 PLUS",
            },
            {
              id: "2790",
              name: "NEW FIRE 90",
            },
            {
              id: "2791",
              name: "NEW FIRE 90 4V",
            },
            {
              id: "2792",
              name: "NEW FIRE POWER 70",
            },
            {
              id: "2793",
              name: "PATAGONIA EAGLE 250 II",
            },
            {
              id: "2794",
              name: "PATAGONIAN EAGLE 125",
            },
            {
              id: "2795",
              name: "PATAGONIAN EAGLE 150",
            },
            {
              id: "2796",
              name: "PATAGONIAN EAGLE 250",
            },
            {
              id: "2797",
              name: "PATAGONIAN EAGLE 250 II",
            },
            {
              id: "2798",
              name: "PATAGONIAN EAGLE 350",
            },
            {
              id: "2799",
              name: "PATAGONIAN EAGLE 350\nCHOPPER",
            },
            {
              id: "2800",
              name: "POCKET",
            },
            {
              id: "2801",
              name: "POCKET AUTOMIX",
            },
            {
              id: "2802",
              name: "POCKET EK",
            },
            {
              id: "2803",
              name: "POCKET GL",
            },
            {
              id: "2804",
              name: "POCKET PLUS",
            },
            {
              id: "2805",
              name: "RALLY 50CC",
            },
            {
              id: "2806",
              name: "RAPTOR",
            },
            {
              id: "2807",
              name: "RAPTOR 4 TIEMPOS",
            },
            {
              id: "2808",
              name: "RK6",
            },
            {
              id: "2809",
              name: "RKS",
            },
            {
              id: "2810",
              name: "RKV",
            },
            {
              id: "2811",
              name: "RX 125",
            },
            {
              id: "2812",
              name: "RX 125 SPORT",
            },
            {
              id: "2813",
              name: "RX 150",
            },
            {
              id: "2814",
              name: "RX 150 G3",
            },
            {
              id: "2815",
              name: "RX 150 GLADIATOR",
            },
            {
              id: "2816",
              name: "RX 150 NEXT",
            },
            {
              id: "2817",
              name: "RX 150 R",
            },
            {
              id: "2818",
              name: "RX 150 Z7",
            },
            {
              id: "2819",
              name: "RX 200",
            },
            {
              id: "2820",
              name: "RX 200 G2",
            },
            {
              id: "2821",
              name: "RX 200 MONACO",
            },
            {
              id: "2822",
              name: "RX 200 NAKED",
            },
            {
              id: "2823",
              name: "RX 200 NEXT",
            },
            {
              id: "2824",
              name: "RX 250",
            },
            {
              id: "2825",
              name: "RX 350 NAKED",
            },
            {
              id: "2826",
              name: "RX150",
            },
            {
              id: "2827",
              name: "RX200",
            },
            {
              id: "2828",
              name: "RX250",
            },
            {
              id: "2829",
              name: "RZ 25",
            },
            {
              id: "2830",
              name: "RZ 300",
            },
            {
              id: "2831",
              name: "RZ 35 R",
            },
            {
              id: "2832",
              name: "RZ 400",
            },
            {
              id: "2833",
              name: "RZ 650",
            },
            {
              id: "2834",
              name: "RZ 650 MT",
            },
            {
              id: "2835",
              name: "RZ3",
            },
            {
              id: "2836",
              name: "RZ7",
            },
            {
              id: "2837",
              name: "SAPUCAI 125",
            },
            {
              id: "2838",
              name: "SAPUCAI 150",
            },
            {
              id: "2839",
              name: "SAPUCAI 150 F",
            },
            {
              id: "2840",
              name: "SEXY 110",
            },
            {
              id: "2841",
              name: "SEXY 125",
            },
            {
              id: "2842",
              name: "SOL",
            },
            {
              id: "2843",
              name: "SOL 100",
            },
            {
              id: "2844",
              name: "SOL 100 AUTOMATICA",
            },
            {
              id: "2845",
              name: "SOL 50 ECONO",
            },
            {
              id: "2846",
              name: "SOL 50 MAX",
            },
            {
              id: "2847",
              name: "SOL 70",
            },
            {
              id: "2848",
              name: "SOL 70 4 TIEMPOS",
            },
            {
              id: "2849",
              name: "SOL 70 4 TIEMPOS\nAUTOMATICA",
            },
            {
              id: "2850",
              name: "SOL 90",
            },
            {
              id: "2851",
              name: "SOL 90 4V",
            },
            {
              id: "2852",
              name: "SOL 90 AUTOMATIC",
            },
            {
              id: "2853",
              name: "SOL BUSINESS",
            },
            {
              id: "2854",
              name: "SOL LA",
            },
            {
              id: "2855",
              name: "SOL MAX",
            },
            {
              id: "2856",
              name: "SOL MAX 47",
            },
            {
              id: "2857",
              name: "SOL SPEED",
            },
            {
              id: "2858",
              name: "SPEEDCRUISER",
            },
            {
              id: "2859",
              name: "SPEEDLIGHT 200",
            },
            {
              id: "2860",
              name: "STYLER",
            },
            {
              id: "2861",
              name: "STYLER 125 CRUISER",
            },
            {
              id: "2862",
              name: "STYLER 125 EXCLUSIVE",
            },
            {
              id: "2863",
              name: "STYLER 150 CRUISER",
            },
            {
              id: "2864",
              name: "STYLER 150 EXCLUSIVE",
            },
            {
              id: "2865",
              name: "STYLER 150 RS",
            },
            {
              id: "2866",
              name: "STYLER 150 RT",
            },
            {
              id: "2867",
              name: "STYLER 50",
            },
            {
              id: "2868",
              name: "STYLER 50 CLASSIC",
            },
            {
              id: "2869",
              name: "STYLER RS 150",
            },
            {
              id: "2870",
              name: "SWING",
            },
            {
              id: "2871",
              name: "TRAKTOR",
            },
            {
              id: "2872",
              name: "TRAKTOR 250CC",
            },
            {
              id: "2873",
              name: "TRICARGO",
            },
            {
              id: "2874",
              name: "TRICARGO 4 TIEMPOS",
            },
            {
              id: "2875",
              name: "TRICARGO 90 AUTOMATICO",
            },
            {
              id: "2876",
              name: "TRICARGO MAX 110",
            },
            {
              id: "2877",
              name: "TRICARGO MAX 125",
            },
            {
              id: "2878",
              name: "TX",
            },
            {
              id: "2879",
              name: "VENTO",
            },
            {
              id: "2880",
              name: "VENTO 3V",
            },
            {
              id: "2881",
              name: "VENTO CLASSIC",
            },
            {
              id: "2882",
              name: "Z MAX 200",
            },
            {
              id: "2883",
              name: "Z-CAP",
            },
            {
              id: "2884",
              name: "Z-CAP 50",
            },
            {
              id: "2885",
              name: "Z-CARGA 4 TIEMPOS",
            },
            {
              id: "2886",
              name: "ZANELLA KIDS",
            },
            {
              id: "2887",
              name: "ZANELLA SOL 70 ECONO",
            },
            {
              id: "2888",
              name: "ZB 110",
            },
            {
              id: "2889",
              name: "ZB 110 R",
            },
            {
              id: "2890",
              name: "ZB 110 WHITE SHARK",
            },
            {
              id: "2891",
              name: "ZB 110D",
            },
            {
              id: "2892",
              name: "ZB 125 SHARK",
            },
            {
              id: "2893",
              name: "ZB 125R",
            },
            {
              id: "2894",
              name: "ZB 125R XENON",
            },
            {
              id: "2895",
              name: "ZB110",
            },
            {
              id: "2896",
              name: "ZB110 RT",
            },
            {
              id: "2897",
              name: "ZB110 SHARK",
            },
            {
              id: "2898",
              name: "ZB110D",
            },
            {
              id: "2899",
              name: "ZB125",
            },
            {
              id: "2900",
              name: "ZCARGA CRAZY 70CC 2T",
            },
            {
              id: "2901",
              name: "ZCT 150",
            },
            {
              id: "2902",
              name: "ZCT110L",
            },
            {
              id: "2903",
              name: "ZCT125",
            },
            {
              id: "2904",
              name: "ZCT150",
            },
            {
              id: "2905",
              name: "ZR 125",
            },
            {
              id: "2906",
              name: "ZR 125 MOTARD",
            },
            {
              id: "2907",
              name: "ZR 150",
            },
            {
              id: "2908",
              name: "ZR 150 ZT",
            },
            {
              id: "2909",
              name: "ZR 200",
            },
            {
              id: "2910",
              name: "ZR 200 ENDURO",
            },
            {
              id: "2911",
              name: "ZR 250",
            },
            {
              id: "2912",
              name: "ZSC125",
            },
            {
              id: "2913",
              name: "ZTT 200 ENDURO",
            },
            {
              id: "2914",
              name: "ZTT 200 MOTARD",
            },
            {
              id: "2915",
              name: "ZTT 250 ENDURO",
            },
            {
              id: "2916",
              name: "ZTT 250 MOTARD",
            },
            {
              id: "2917",
              name: "ZTT 250 SUPERMOTARD",
            },
            {
              id: "2918",
              name: "ZTT200",
            },
            {
              id: "2919",
              name: "ZTT200 ENDURO",
            },
            {
              id: "2920",
              name: "ZTT200 MOTARD",
            },
            {
              id: "2921",
              name: "ZTT250 SUPERMOTARD",
            },
          ],
        },
      ],
    },
  ];

  const carColors = [
    "blanco",
    "negro",
    "rojo",
    "azul",
    "verde",
    "amarillo",
    "naranja",
    "marrón",
    "gris",
    "plateado",
    "dorado",
    "beige",
    "turquesa",
    "burdeos",
    "violeta",
    "fucsia",
    "celeste",
    "champán",
    "ocre",
    "granate",
    "perla",
    "arena",
    "verde oliva",
    "gris grafito",
  ];

  return {
    defaultData,
    transports,
    carColors,
  };
};

export default useStaticData;
