import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

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

  const image_display = (
    <Box>
      <img
        src={image_src}
        alt="description_image"
        style={{
          height: "40vw",
          width: "40vw",
          fill: "#ACACAC",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          borderRadius: "10px",
        }}
      />
    </Box>
  );

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      {image_side === "left" && image_display}

      <Box
        style={{
          width: "100%",
        }}
      >
        <Typography variant="h4" color={theme.palette.accent.light}>
          {title}
        </Typography>
        <Typography variant="body1" color="white">
          {children}
        </Typography>
      </Box>

      {image_side === "right" && image_display}
    </Box>
  );
};

export const Description_list = Object.assign(List, {
  Item,
});
