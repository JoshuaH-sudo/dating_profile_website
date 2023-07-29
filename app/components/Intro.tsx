import { Box, Typography, useTheme } from "@mui/material";
import head_shot from "~/images/me/headshot.jpg";

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
        <Box
          sx={{
            display: "flex",
            width: "333px",
            height: "181px",
            padding: "0px 76px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={head_shot}
            style={{
              width: "181px",
              height: "181px",
              flexShrink: 0,
              borderRadius: "6.678px",
              border: "2.003px solid #000",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
