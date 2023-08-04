import { Box } from "@mui/material";
import About from "~/components/sections/About";
import Divider from "~/components/UI/Divider";
import Intro from "~/components/sections/Intro";
import home_page_image from "~/images/layouts/home-background-image.png";
import { useRef } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fart_noise from "~/assets/audio/quick-reverb-fart.mp3";

export const loader: LoaderFunction = ({ request }) => {
  const referer = request.headers.get("referer");
  if (!referer) return false;

  const base_url = new URL(request.url).origin + "/";
  return base_url === referer;
};

export default function Index_route() {
  const scroll_element_ref = useRef<Element>(null);
  const from_home_page = useLoaderData() as Boolean;

  const execute_scroll = () =>
    scroll_element_ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {from_home_page && (
        <audio
          style={{ position: "fixed", height: 0, visibility: "hidden" }}
          controls
          autoPlay
        >
          <source src={fart_noise} type="audio/mp3" />
        </audio>
      )}
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
          <Intro execute_scroll={execute_scroll} />
        </Box>
        <Divider />
      </Box>
      <About scroll_element_ref={scroll_element_ref} />
    </>
  );
}
