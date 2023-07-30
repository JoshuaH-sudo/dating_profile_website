import { Box, styled, useTheme } from "@mui/material";
import { Description_list } from "../Description_list";

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
      <Description_list>
        <Description_list.Item />
        <Description_list.Item />
        <Description_list.Item />
      </Description_list>
    </Box>
  );
};

export default About;
