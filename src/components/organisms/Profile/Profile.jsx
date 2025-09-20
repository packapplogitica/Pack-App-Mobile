import {
  Box,
  Container,
  Grid,
} from "@mantine/core";
import useStyles from "./profile.style";
import { PaddingBox } from "@/components/atoms";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import {
  CardProfile,
} from "@/components/molecules";
import ProfilePanel from "../../molecules/ProfilePanel/ProfilePanel";

export const Profile = ({user,info} ) => {
  const { classes } = useStyles();
  const { header } = info;
  console.log('la info',user)

  return (
    <Box className={classes.root}>
      <HeaderSection
        title={`${header.title} ${user?.profile?.firstName}`}
        content={header.content}
      />
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Grid justify="space-between" gutter={24}>
            <Grid.Col md={8} orderMd={1} order={2}>
              <ProfilePanel user={user}/>
            </Grid.Col>
            <Grid.Col md={4} orderMd={2} order={1}>
              <CardProfile user={user} info={info.user} />
            </Grid.Col>
          </Grid>
        </Container>
      </PaddingBox>
    </Box>
  );
};
