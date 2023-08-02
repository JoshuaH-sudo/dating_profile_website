import { Box, ImageList, ImageListItem, styled, useTheme } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { image_list } from "~/utils/images.server";

export const loader: LoaderFunction = async () => {
  const random_image_list = image_list.sort(() => 0.5 - Math.random());

  return random_image_list;
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
export default function IndexRoute() {
  const image_list = useLoaderData<string[]>();
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
          {image_list.map((file_path) => (
            <ImageListItem key={file_path}>
              <img
                src={`${file_path}?w=248&fit=crop&auto=format`}
                srcSet={`${file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={file_path}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
