import {
  HeaderLayout,
  Box,
  Layout,
  ContentLayout,
  Typography,
  Stack,
} from "@strapi/design-system";

const HomePage = () => {
  return (
    <div>
      <Box background="neutral100">
        <Layout>
          <Box background="neutral100">
            <HeaderLayout
              title={"Título"}
              subtitle={"Sub-título"}
              as="h2"
              sticky={false}
            />
          </Box>
        </Layout>
      </Box>
      <ContentLayout>
        <Stack background="neutral100" spacing={4}>
          <Typography variant="alpha">Custom Home</Typography>
          <Typography variant="sigma" padding={[11, 6, 1]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            inventore?
          </Typography>
        </Stack>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
