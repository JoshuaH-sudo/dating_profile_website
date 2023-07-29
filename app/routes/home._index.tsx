import { Box } from "@mui/material";
import Intro from "~/components/Intro";
import Background_image from "~/components/UI/Background_image";
import home_page_image from "~/images/layouts/home-background-image.png";

export default function IndexRoute() {
  return (
    <>
      <Background_image image_src={home_page_image} style_props={{ backgroundColor: "#FE6BBF", left: "-15px"}}/>
      <Box>
        <Intro />
      </Box>
    </>
  );
}
