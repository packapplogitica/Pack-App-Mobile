import { Container } from "@mantine/core";
import data from "@/data/termsAndConditionsForTransportation.json";

export const TermsConditionsForTransportation = () => {
  const { title, content } = data.data;
  return (
    <Container>
  <h1>{title}</h1>
  {content.map((cont) => {
    return (
      <div key={cont.id}>
        <h2>{cont.title}</h2>
        {cont.text.map((txt, index) => {
          return (
            <>
              {txt.hasOwnProperty("subTitle") && <h3>{txt.subTitle}</h3>}
              {txt.type === "p" &&
                txt.content.map((cont, idx) => {
                  if (typeof cont === "string") return <p key={idx}>{cont}</p>;
                  if (cont.type === "ol") {
                    return (
                      <ol key={idx}>
                        {cont.items.map((i, idx2) => (
                          <li key={idx2}>{i}</li>
                        ))}
                      </ol>
                    );
                  }
                  return null;
                })}
              {txt.type === "ol" && (
                <ol>
                  {txt.content.map((cont, idx) => {
                    return <li key={idx}>{cont}</li>;
                  })}
                </ol>
              )}
            </>
          );
        })}
      </div>
    );
  })}
</Container>
  );
};
