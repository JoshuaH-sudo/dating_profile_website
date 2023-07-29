import { Box, Typography, useTheme } from "@mui/material";

const Intro = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "347px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color={theme.palette.accent.main}>
          Joshua Hoban
        </Typography>
        <Typography variant="subtitle1" color="#FFF">
          "Yeet, Yoat, Yeetus"
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
