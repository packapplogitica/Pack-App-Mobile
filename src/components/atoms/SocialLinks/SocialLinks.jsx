import { Box, Container } from "@mantine/core";
import PropTypes from 'prop-types';
import useStyles from "./socialLinks.style";
import Icons from "@/icons";
import Link from "next/link";

export const SocialLinks = ({ socialLinks }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      {socialLinks?.length && (
        <Container className={classes.linkContainer}>
          {socialLinks?.map((item, index) => (
            <Link
              className={classes.link}
              key={index}
              href={item.link}
              target="_blank"
            >
            {Icons[`${item.label}`]}
            </Link>
          ))}
        </Container>
      )}
    </Box>
  );
};

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};