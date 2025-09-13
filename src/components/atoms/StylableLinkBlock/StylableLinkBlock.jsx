import { Box, Button, Flex, Grid, Group, Stack, Text } from "@mantine/core";
import useStyles from "./stylableLinkBlock.style";
import { ButtonPackApp } from "../ButtonPackApp/ButtonPackApp";

export const StylableLinkBlock = ({ data }) => {
  const { classes, cx } = useStyles();

  const { header, cat } = data;
  const { title, content } = header;

  return (
    <Box className={classes.root}>
      <Grid justify="space-between" align="center" gutter={25}>
        <Grid.Col md={8}>
          <Stack spacing={24}>
            <Text className={classes.text}>{title}</Text>
            <Text className={classes.text}>{content}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col md={4}>
          <Flex className={classes.button}>
            <ButtonPackApp
              variant="default"
              size="xl"
              href={cat.link}
              defaultRadius
            >
              {cat.label}
            </ButtonPackApp>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
