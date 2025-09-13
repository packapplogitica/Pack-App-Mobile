import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
import { emotionCache } from "@/libs/emotion-cache";

import { ServerStyleSheet } from "styled-components";

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <ServerStyles html={initialProps.html} server={stylesServer} />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="PackApp Web, Envíos eficientes y sin estrés."
          />
          <meta
            name="keywords"
            content="envíos, logística, transporte de paquetes, entrega de paquetes, envíos seguros, ofertas de envío, servicios de mensajería, transporte en Argentina, envío de paquetes en Argentina, seguro de envíos, transporte eficiente, entrega rápida, PackApp, envío de documentos, paquetes personalizados, envío seguro, logística en Argentina"
          />
          <link rel="icon" href="/logo/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inder&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inder&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <style>
            {`.ribbon {
              width: 150px;
              height: 150px;
              overflow: hidden;
              position: absolute;
              top: 0;
              left: 0;
            }`}

            {`.ribbon span {
              position: absolute;
              display: block;
              width: 200px;
              padding: 10px 0;
              background-color: red;
              color: white;
              text-align: center;
              font-weight: bold;
              transform: rotate(-45deg);
              transform-origin: 0 0;
              top: 97px;
              left: -45px;
          }`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <ServerStyles server={stylesServer} />
        </body>
      </Html>
    );
  }
}
