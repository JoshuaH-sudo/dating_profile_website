import { Box, useTheme } from "@mui/material";
import Intro from "~/components/Intro";
import Background_image from "~/components/UI/Background_image";
import home_page_image from "~/images/layouts/home-background-image.png";

export default function Index_route() {
  const theme = useTheme();

  return (
    <>
      <Background_image
        image_src={home_page_image}
        style_props={{
          backgroundColor: "#FE6BBF",
          filter: "blur(5px)",
        }}
      />
      <Box
        style={{
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box
          data-cy="intro-information-wrapper"
        >
        <Intro />
        </Box>
        <Box
          data-cy="section-divider"
          sx={{
            position: "relative",
            zIndex: 1000,
            width: "100vw",
            height: "100%",
            flexGrow: 1,
            backgroundColor: theme.palette.primary.light,
          }}
        />
      </Box>
    </>
  );
}
