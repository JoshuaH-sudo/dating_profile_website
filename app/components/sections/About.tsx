import { Box, styled, useTheme } from "@mui/material";
import { Description_list } from "../Description_list";
import me_image_src from "~/images/decorations/headshot.jpg";
import type { FC, RefObject } from "react";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

interface About_props {
  scroll_element_ref: RefObject<Element>;
}

const About: FC<About_props> = ({ scroll_element_ref }) => {
  const theme = useTheme();

  return (
    <Box
      id="about-section"
      ref={scroll_element_ref}
      style={{
        backgroundColor: theme.palette.secondary.main,
        minHeight: "100%",
      }}
    >
      <Offset style={{ backgroundColor: theme.palette.primary.main }} />
      <Description_list>
        <Description_list.Item
          title="Heading 1"
          image_side="left"
          image_src={me_image_src}
        >
          abcdefg
        </Description_list.Item>
        <Description_list.Item
          title="Heading 2"
          image_side="right"
          image_src={me_image_src}
        >
          abcdefg
        </Description_list.Item>
        <Description_list.Item
          title="Heading 3"
          image_side="left"
          image_src={me_image_src}
        >
          abcdefg
        </Description_list.Item>
      </Description_list>
    </Box>
  );
};

export default About;
