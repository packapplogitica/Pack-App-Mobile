// ProductSearch.js
import React, { useState, cloneElement } from "react";
import { Box, Container, Grid, Text, TextInput } from "@mantine/core";
import useStyles from "./search.style";
import { PaddingBox } from "../PaddingBox";
import { IconSearch } from "@tabler/icons-react";

const Search = ({ children, renderHeader, renderFooter }) => {
  const { classes, theme } = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterChildren = React.Children.toArray(children).filter((child) => {
    if (!child.props.name) {
      return true;
    }

    return child.props.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Box className={classes.root}>
        <PaddingBox>
          <Container size="xxl" p={0}>
            <TextInput
              classNames={{
                label: classes.label,
              }}
              size="lg"
              radius={36}
              icon={<IconSearch />}
              label="¿Cómo podemos ayudarte? "
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Container>
        </PaddingBox>
      </Box>
      <Box
        sx={{
          background: theme.fn.rgba(theme.colors.grey[6], 0.13),
          height: filterChildren?.length === 0 ? 250 : "100%",
        }}
      >
        <PaddingBox>
          <Container size="xxl" p={0}>
            {renderHeader && renderHeader()}
            {filterChildren?.length === 0 ? (
              <Text size={25} weight={400} my="md">
                El artículo{" "}
                <Text
                  span
                  weight={700}
                  color={theme.colors.orangeSecondary[6]}
                >{`"${searchTerm}"`}</Text>{" "}
                no existe o no está disponible
                <Text span ml={5} role="img" aria-label="Sad face">
                  😞
                </Text>
              </Text>
            ) : (
              <Grid gutter={25} my="md">
                {filterChildren.map((child, index) =>
                  cloneElement(child, { key: index })
                )}
              </Grid>
            )}
            {renderFooter && renderFooter()}
          </Container>
        </PaddingBox>
      </Box>
    </>
  );
};

export default Search;
