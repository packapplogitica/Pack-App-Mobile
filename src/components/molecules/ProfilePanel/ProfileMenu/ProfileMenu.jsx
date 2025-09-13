import { Box, Grid, Tabs, Text, Progress } from "@mantine/core";

export const ProfileMenu = ({ menuData, step }) => {

  return (
    <Box>
      {menuData?.length && (
        <>
          <Tabs color="orange" defaultValue="Mis datos">
            <Tabs.List>
              {menuData.map((item) => {
                return (
                  <Tabs.Tab value={item.title} key={item.value}>
                    {item.title}
                  </Tabs.Tab>
                );
              })}
            </Tabs.List>
            {menuData.map((item) => {
              <Tabs.Panel value={item.title}>{item.title}</Tabs.Panel>;
            })}
          </Tabs>
          <Grid>
            {menuData?.map((item) => {
              return (
                <Grid.Col key={item.value} xs={3}>
                  <Text
                  // onClick={() => setStep(item.value)}
                  // sx={{
                  //   cursor: "pointer",
                  // }}
                  >
                    {item.title}
                  </Text>
                </Grid.Col>
              );
            })}
            {/* <Grid.Col mt={10}>
              <Progress
                value={
                  (step === 1 && 25) ||
                  (step === 2 && 50) ||
                  (step === 3 && 75) ||
                  (step === 4 && 100)
                }
                color={"#000"}
                size={5}
                radius={8}
              />
            </Grid.Col> */}
          </Grid>
        </>
      )}
    </Box>
  );
};
