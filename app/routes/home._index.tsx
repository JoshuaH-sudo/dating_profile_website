import { Box } from "@mui/material";
import About from "~/components/sections/About";
import Divider from "~/components/Divider";
import Intro from "~/components/sections/Intro";
import Background_image from "~/components/UI/Background_image";
import home_page_image from "~/images/layouts/home-background-image.png";

export default function Index_route() {
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
          alignItems: "center",
        }}
      >
        <Box
          data-cy="intro-information-wrapper"
          style={{
            flexGrow: "1",
            height: "100%",
          }}
        >
          <Intro />
        </Box>
        <Divider />
      </Box>

      <About />
    </>
  );
}
