import { Box, Link, List, ListItem, styled, useTheme } from "@mui/material";
import { Description_list } from "../UI/Description_list";
import black_white_me from "~/images/me/image_3.jpg";
import circle_me from "~/images/me/image_8.jpg";
import cool_me from "~/images/me/image_11.jpg";

import type { FC, RefObject } from "react";
import { Link as Remix_link } from "@remix-run/react";

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
          image_src={black_white_me}
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
          image_src={circle_me}
        >
          <List>
            <ListItem>
              <Description_list.Text_display>
                💻 Programming
              </Description_list.Text_display>
            </ListItem>

            <ListItem>
              <Description_list.Text_display>
                🎮 Games
              </Description_list.Text_display>
            </ListItem>

            <ListItem>
              <Description_list.Text_display>
                🛫 Travel
              </Description_list.Text_display>
            </ListItem>

            <ListItem>
              <Description_list.Text_display>
                🌏 Languages
              </Description_list.Text_display>
            </ListItem>

            <ListItem>
              <Description_list.Text_display>
                🖌 Painting
              </Description_list.Text_display>
            </ListItem>

            <ListItem>
              <Description_list.Text_display>
                🥋 Martial Arts
              </Description_list.Text_display>
            </ListItem>
          </List>
        </Description_list.Item>

        <Description_list.Item
          title="Where Next?"
          image_side="left"
          image_src={cool_me}
        >
          <Description_list.Text_display>
            You can see more of my photos in the{" "}
            <Remix_link to="gallery">gallery</Remix_link>
          </Description_list.Text_display>

          <Description_list.Text_display>
            Take a <Remix_link to="survey">survey</Remix_link> to see how
            compatible we are.
          </Description_list.Text_display>

          <Description_list.Text_display>
            You can book a time to <Remix_link to="meetup">meetup</Remix_link>.
          </Description_list.Text_display>

          <Description_list.Text_display>
            You can also message me through my{" "}
            <Link
              href="https://www.instagram.com/yeet_110100100/"
              target="_blank"
            >
              Instagram.
            </Link>
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
