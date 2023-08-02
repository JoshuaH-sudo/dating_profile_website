import { Box } from "@mui/material";
import About from "~/components/sections/About";
import Divider from "~/components/Divider";
import Intro from "~/components/sections/Intro";
import home_page_image from "~/images/layouts/home-background-image.png";
import { useRef } from "react";

export default function Index_route() {
  const scroll_element_ref = useRef<Element>(null);

  const execute_scroll = () => scroll_element_ref?.current?.scrollIntoView({ behavior: "smooth"});

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
          }}
        >
          <Intro execute_scroll={execute_scroll}/>
        </Box>
        <Divider />
      </Box>
      <About scroll_element_ref={scroll_element_ref} />
    </>
  );
}
