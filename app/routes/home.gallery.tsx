import { Box, ImageList, ImageListItem, styled, useTheme } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readdir } from "fs/promises";

interface Image_tile {
  file_name: string;
}

export const loader: LoaderFunction = async () => {
  const file_name_list = await readdir("./app/images/me");

  const image_map: Image_tile[] = file_name_list
    .map((file_name) => {
      return {
        file_name,
      };
    })
    // Add some randomness to the images
    .sort(() => 0.5 - Math.random());

  return image_map;
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
export default function IndexRoute() {
  const image_list = useLoaderData<Image_tile[]>();
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.palette.accent.main,
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <Offset
        style={{
          backgroundColor: theme.palette.primary.light,
        }}
      />
      <Box
        data-cy="image-masonry"
        style={{
          width: "90vw",
          height: "100%",
          margin: "auto",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={4}>
          {image_list.map(({ file_name }) => (
            <ImageListItem key={file_name}>
              <img
                src={`/images/${file_name}?w=248&fit=crop&auto=format`}
                srcSet={`/images/${file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={file_name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
