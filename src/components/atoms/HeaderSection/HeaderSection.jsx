import { Container, Divider, Flex, Text, Title } from "@mantine/core";
import { PaddingBox } from "../PaddingBox";
import { theme } from "@/libs/theme";
import styles from './headerSection.module.css';

export const HeaderSection = ({ divider = false, title, content }) => {
  return (
    <PaddingBox>
      <Container size="xxl" p={0}>
        <Flex direction="column">
          {title && (
            <Title
              order={2}
              className={styles.headerTitle}
            >
              {title}
            </Title>
          )}

          {divider && <Divider my="md" w="100%" color={theme.colors.grey[6]} />}

          {content && (
            <Text size={24} weight={400} mt="xs" c={theme.colors.grey[6]}>
              {content}
            </Text>
          )}
        </Flex>
      </Container>
    </PaddingBox>
  );
};
