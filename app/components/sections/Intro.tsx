import { Box, Typography, useTheme } from "@mui/material";
import head_shot from "~/images/me/headshot.jpg";
import soyface_overlay_src from "~/images/decorations/soyface-wojak.png";
import will_smith_presents_src from "~/images/decorations/will-smith-presents.png";

const Intro = () => {
  const theme = useTheme();
  return (
    <Box
      data-cy="intro-box"
      style={{
        margin: "auto",
        display: "flex",
        height: "100%",
        width: "347px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        data-cy="title"
        variant="h3"
        color={theme.palette.accent.light}
      >
        Joshua Hoban
      </Typography>
      <Typography data-cy="subtitle" variant="subtitle1" color="#FFF">
        "Yeet, Yoat, Yeetus"
      </Typography>
      <Box
        data-cy="main-image-box"
        style={{
          paddingTop: "2rem",
          position: "relative",
        }}
      >
        <img
          src={head_shot}
          alt="main_image"
          style={{
            width: "181px",
            height: "181px",
            flexShrink: 0,
            borderRadius: "6.678px",
            border: "2.003px solid #000",
          }}
        />
        {soyface_overlay_image}
        {will_smith_presents_image}
      </Box>
    </Box>
  );
};

const will_smith_presents_image = (
  <Box
    data-cy="will-smith-box"
    sx={{
      position: "absolute",
      transform: "rotate(30deg)",
      boxSizing: "border-box",
      zIndex: "1000",
      top: 0,
      left: "-12rem",
    }}
  >
    <img
      data-cy="will-smith-image"
      style={{
        width: "18.17575rem",
        height: "15.64363rem",
        flexShrink: 0,
      }}
      src={will_smith_presents_src}
      alt="will-smith-presents"
    />
  </Box>
);

const soyface_overlay_image = (
  <img
    data-cy="soyface-overlay"
    style={{
      width: "378px",
      height: "299px",
      position: "absolute",
      top: "2em",
      left: "-53%",
      flexShrink: 0,
    }}
    src={soyface_overlay_src}
    alt="soyface overlay"
  />
);

export default Intro;
