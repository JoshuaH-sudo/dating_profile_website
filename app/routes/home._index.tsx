import { Box } from "@mui/material";
import About from "~/components/sections/About";
import Divider from "~/components/Divider";
import Intro from "~/components/sections/Intro";
import home_page_image from "~/images/layouts/home-background-image.png";

export default function Index_route() {
  return (
    <>
      <Box
        style={{
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          id="into-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url('${home_page_image}')`,
            filter: "blur(5px)",
          }}
        />
        <Box
          data-cy="intro-information-wrapper"
          style={{
            flexGrow: "1",
            position: "relative",
            height: "100%",
            backgroundColor: "#fe70c0",
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
