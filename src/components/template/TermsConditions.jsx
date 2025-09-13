import { Container, Text, Title } from "@mantine/core";
import Head from "next/head";
import data from "@/data/termsAndConditions.json";

export const TermsConditions = () => {
  const terms = data.data;

  return (
    <>
      <Head>
        <title>Términos y Condiciones | PackApp</title>
      </Head>
      <Container>
        <h1>TÉRMINOS Y CONDICIONES</h1>
        {terms.map((item) => {
          return (
            <>
              <h2 order={2} key={item.id}>
                {item.title}
              </h2>
              {item.content.map((cont) => {
                switch (cont.type) {
                  // Subtitulos
                  case "st":
                    return <h3>{cont.text}</h3>;
                  case "sst":
                    return <h4>{cont.text}</h4>;
                  case "ssst":
                    return <h5>{cont.text}</h5>;
                  // Listas
                  case "ol":
                    return cont.text.map((elem, i) => {
                      if (typeof elem === "string") return <p>{elem}</p>;
                      if (elem.type === "ol") {
                        return (
                          <ol
                            style={{
                              listStyle: "none",
                            }}
                            key={i}
                          >
                            {elem.content.map((li, i) => (
                              <li key={i}>{li}</li>
                            ))}
                          </ol>
                        );
                      }
                      if (elem.type === "item") {
                        return (
                          <ol key={i}>
                            {elem.content.map((li, i) => {
                              switch (li.type) {
                                case "bold":
                                  return <b>{li.content}</b>;
                                case "link":
                                  return <a href={li.href}>{li.content}</a>;
                                default:
                                  return li;
                              }
                            })}
                          </ol>
                        );
                      }
                    });
                  case "ul":
                    return cont.text.map((elem, i) => {
                      if (typeof elem === "string") return <p>{elem}</p>;
                      if (elem.type === "ul") {
                        return (
                          <ul key={i}>
                            {elem.content.map((li, i) => (
                              <li key={i}>{li}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (elem.type === "item") {
                        return (
                          <ul key={i}>
                            {elem.content.map((li, i) => {
                              switch (li.type) {
                                case "bold":
                                  return <b>{li.content}</b>;
                                case "link":
                                  return <a href={li.href}>{li.content}</a>;
                                default:
                                  return li;
                              }
                            })}
                          </ul>
                        );
                      }
                    });
                  case "table":
                    return (
                      <table style={{
                        margin: "auto"
                      }}>
                        <thead>
                          <tr style={{
                            textAlign: "center"
                          }}>
                            {cont.text[0].headers.map((header, index) => (
                              <th key={index}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {cont.text[0].data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td style={{paddingInline: 40}} key={cellIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );
                  default:
                    return (
                      <p key={cont.id}>
                        {cont.text.map((t) => {
                          switch (t.type) {
                            case "bold":
                              return <b>{t.content}</b>;
                            case "link":
                              return <a href={t.href}>{t.content}</a>;
                            case "ui":
                              return (
                                <i>
                                  <ins>{t.content}</ins>
                                </i>
                              );
                            case "ins":
                              return <ins>{t.content}</ins>;
                            case "bins":
                              return (
                                <b>
                                  <ins>{t.content}</ins>
                                </b>
                              );
                            default:
                              return t;
                          }
                        })}
                      </p>
                    );
                }
              })}
              <hr />
            </>
          );
        })}
      </Container>
    </>
  );
};
