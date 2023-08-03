import { Box, styled, useTheme } from "@mui/material";
import { Description_list } from "../UI/Description_list";
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
          title="Who Am I"
          image_side="left"
          image_src={me_image_src}
        >
          <Description_list.Text_display>
            I am an aussie 🇦🇺 living in Berlin 🇩🇪.
          </Description_list.Text_display>

          <Description_list.Text_display>
            I am a software developer that came to Europe looking for adventure
            and to change my environment and experience mew things.
          </Description_list.Text_display>
        </Description_list.Item>

        <Description_list.Item
          title="Hobbies"
          image_side="right"
          image_src={me_image_src}
        >
          <Description_list.Text_display>
            - Programming
            - Games
            - Painting
            - Languages
            - Travel
          </Description_list.Text_display>
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
