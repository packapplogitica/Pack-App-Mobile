import { Title } from "@mantine/core";

export const TitlePage = ({ title }) => {
  return (
    <Title order={1} size="h1" weight="bold">
      {title}
    </Title>
  );
};
