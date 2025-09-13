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
import ProfilePanel from "@/components/molecules/ProfilePanel/ProfilePanel";

export const Profile = ({profile,info} ) => {
  const { classes } = useStyles();
  const { header } = info;
  // console.log('la info',info)

  return (
    <Box className={classes.root}>
      <HeaderSection
        title={`${header.title} ${profile?.current.firstName}`}
        content={header.content}
      />
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Grid justify="space-between" gutter={24}>
            <Grid.Col md={8} orderMd={1} order={2}>
              <ProfilePanel profile={profile}/>
            </Grid.Col>
            <Grid.Col md={4} orderMd={2} order={1}>
              <CardProfile profile={profile.current} info={info.user} />
            </Grid.Col>
          </Grid>
        </Container>
      </PaddingBox>
    </Box>
  );
};
