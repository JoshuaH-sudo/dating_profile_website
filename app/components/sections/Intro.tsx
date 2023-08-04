import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { FC } from "react";
import head_shot from "~/images/decorations/headshot.jpg";
import soyface_overlay_src from "~/images/decorations/soyface-wojak.png";
import will_smith_presents_src from "~/images/decorations/will-smith-presents.png";

interface Intro_props {
  execute_scroll: () => void;
}
const Intro: FC<Intro_props> = ({ execute_scroll }) => {
  const theme = useTheme();
  const is_above_sm_breakpoint = useMediaQuery(theme.breakpoints.up("sm"));

  const about_button = (
    <Box
      style={{
        paddingTop: "5rem",
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.primary.light,
        }}
        onClick={execute_scroll}
      >
        <Typography variant="h3">Learn More</Typography>
      </Button>
    </Box>
  );

const soyface_overlay_image = (
  <img
    data-cy="soyface-overlay"
    style={{
      height: "50vw",
      width: "100vw",
      position: "absolute",
      minHeight: "20rem",
      minWidth: "30rem",
      flexShrink: 0,
      bottom: is_above_sm_breakpoint ? undefined : "6rem"
    }}
    src={soyface_overlay_src}
    alt="soyface overlay"
  />
);
  return (
    <Box
      data-cy="intro-box"
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        data-cy="title"
        sx={{ typography: is_above_sm_breakpoint ? "h1" : "h3"}}
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
            width: "15rem",
            height: "15rem",
            minWidth: "20vw",
            minHeight: "20vw",
            flexShrink: 0,
            borderRadius: "2rem",
            filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px)"
          }}
        />
        {will_smith_presents_image}
      </Box>
      {soyface_overlay_image}
      {about_button}
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

export default Intro;
