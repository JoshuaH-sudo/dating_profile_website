import { Box } from "@mui/material";
import About from "~/components/sections/About";
import Divider from "~/components/Divider";
import Intro from "~/components/sections/Intro";
import home_page_image from "~/images/layouts/home-background-image.png";
import { useEffect } from "react";

export default function Index_route() {
  // Add a scroll event listener to handle the parallax effect
  const handleParallaxScroll = () => {
    const parallaxImage = document.querySelector("#intro-image");
    if (parallaxImage) {
      const scrolled = window.scrollY;
      parallaxImage.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleParallaxScroll);
    return () => {
      window.removeEventListener("scroll", handleParallaxScroll);
    };
  }, []);

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
            filter: "blur(5px)"
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
          <Intro />
        </Box>
        <Divider />
      </Box>
      <About />
    </>
  );
}
