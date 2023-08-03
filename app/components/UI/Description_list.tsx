import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { CSSProperties, FC, PropsWithChildren } from "react";

const List: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 2, md: 4 }}
      divider={<Divider orientation="horizontal" flexItem />}
      direction={"column"}
      padding="1rem"
    >
      {children}
    </Stack>
  );
};

interface Item_props extends PropsWithChildren {
  image_side: "left" | "right";
  image_src: string;
  title: string;
}

const Item: FC<Item_props> = ({ image_side, image_src, title, children }) => {
  const theme = useTheme();
  const is_above_sm_breakpoint = useMediaQuery(theme.breakpoints.up("sm"));

  // Have the photo display behind the text when the screen size is small
  const image_small_style: CSSProperties | undefined = !is_above_sm_breakpoint
    ? {
        position: "absolute",
        filter:
          "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) brightness(40%) blur(1px)",
        borderRadius: "10px",
        objectFit: "cover",
      }
    : {};

  const image_display = (
    <img
      src={image_src}
      alt="description_image"
      style={{
        height: "100%",
        width: "100%",
        fill: "#ACACAC",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderRadius: "10px",
        ...image_small_style,
      }}
    />
  );

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        position: "relative",
      }}
    >
      {image_side === "left" && image_display}

      <Box
        style={{
          width: "100%",
          padding: "10px",
          zIndex: 2,
        }}
      >
        <Typography
          variant={is_above_sm_breakpoint ? "h1" : "h2"}
          color={theme.palette.accent.light}
        >
          {title}
        </Typography>
        <Typography
          variant={is_above_sm_breakpoint ? "h2" : "h3"}
          color="white"
          fontStyle="Lexend Deca"
        >
          {children}
        </Typography>
      </Box>

      {image_side === "right" && image_display}
    </Box>
  );
};

interface Text_props extends PropsWithChildren {
  style?: CSSProperties | undefined
}

export const Text_display: FC<Text_props> = ({ style, children }) => {
  const theme = useTheme();
  const is_above_sm_breakpoint = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Typography
      variant={is_above_sm_breakpoint ? "h2" : "h3"}
      color="white"
      fontStyle="Lexend Deca"
      style={style}
    >
      {children}
    </Typography>
  );
};

export const Description_list = Object.assign(List, {
  Item,
  Text_display
});
