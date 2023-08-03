import {
  Box,
  Link,
  List,
  ListItem,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
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
            I am an aussie 🇦🇺 software developer living in Berlin 🇩🇪.
          </Description_list.Text_display>

          <Description_list.Text_display>
            Came to Europe looking for adventure and to change my environment
            and experience mew things.
          </Description_list.Text_display>

          <Description_list.Text_display>
            I made this silly website for fun and to spice up the tinder bio. 😋
          </Description_list.Text_display>
        </Description_list.Item>

        <Description_list.Item
          title="Hobbies and Interests"
          image_side="right"
          image_src={me_image_src}
        >
          <List>
            <ListItem>
              <Typography variant="h2" color="white">
                💻 Programming
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="h2" color="white">
                🎮 Games
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="h2" color="white">
                🛫 Travel
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="h2" color="white">
                🌏 Languages
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="h2" color="white">
                🖌 Painting
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="h2" color="white">
                🥋 Martial Arts
              </Typography>
            </ListItem>
          </List>
        </Description_list.Item>

        <Description_list.Item
          title="Where Next?"
          image_side="left"
          image_src={me_image_src}
        >
          <Description_list.Text_display>
            By selecting from the header buttons, You can see more of my photos
            in the "gallery", take a "survey" to see how compatible we are and
            then you can book a time to "meetup".
          </Description_list.Text_display>

          <Description_list.Text_display>
            You can also message me through my <Link href="#https://www.instagram.com/yeet_110100100/">Instagram.</Link>
          </Description_list.Text_display>

          <Description_list.Text_display>
            I look forward to getting to know you.
          </Description_list.Text_display>
        </Description_list.Item>
      </Description_list>
    </Box>
  );
};

export default About;
