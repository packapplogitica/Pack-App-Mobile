import { Grid } from "@mantine/core";
import Search from "../atoms/Search/Search";
import { FAQCard } from "../molecules";
import Head from "next/head";

export const FAQPage = ({ data }) => {
  const { articles } = data;

  return (
    <>
      <Head>
        <title>Ayuda | PackApp Web</title>
      </Head>
      <Search>
        {articles?.map((item, index) => {
          return (
            <Grid.Col key={index} name={item.name}>
              <FAQCard item={item} />
            </Grid.Col>
          );
        })}
      </Search>
    </>
  );
};
