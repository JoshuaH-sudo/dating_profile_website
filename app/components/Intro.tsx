import { Box, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
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
        <Typography variant="h3" color="#FFC700">
          Joshua Hoban
        </Typography>
        <Typography variant="caption" color="#FFF">"Yeet, Yoat, Yeetus"</Typography>
      </Box>
    </Box>
  );
};

export default Intro;
