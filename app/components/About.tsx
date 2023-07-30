import { Box, styled, useTheme } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const About = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        height: "100vh",
      }}
    >
      <Offset style={{ backgroundColor: theme.palette.primary.light }} />
    </Box>
  );
};

export default About;
