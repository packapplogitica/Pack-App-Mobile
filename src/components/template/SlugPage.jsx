import {
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Search from "../atoms/Search/Search";
import { SlugCard } from "../molecules";
import { PackAppBreadcrumbs, PaddingBox } from "../atoms";
import { ButtonPackApp } from "../atoms/ButtonPackApp/ButtonPackApp";
import Icons from "@/icons";
import Link from "next/link";
import { theme } from "@/libs/theme";

export const SlugPage = ({ data }) => {
  const SlugHeader = () => {
    return (
      <Stack spacing="xs" my="xs">
        <PackAppBreadcrumbs>
          <div>Todas las colecciones </div>
          <div>{data?.name}</div>
        </PackAppBreadcrumbs>

        <Title order={1} size={16} weight={700}>
          {data?.name}
        </Title>
        <Text weight={400}>{data?.description}</Text>

        <Text weight={400}>{`${data?.subarticles.length} articulos`}</Text>
      </Stack>
    );
  };
  return (
    <>
      <Search
        renderHeader={() => <SlugHeader />}
        renderFooter={() => (
          <Link
            href="/faq"
            style={{
              textDecoration: "none",
              color: theme.colors.orangePrimary[6],
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {Icons.arrowL} Ver otros artículos{" "}
          </Link>
        )}
      >
        {data?.subarticles?.map((item, index) => {
          return (
            <Grid.Col key={index} name={item.name}>
              <SlugCard item={item} />
            </Grid.Col>
          );
        })}
      </Search>
    </>
  );
};
