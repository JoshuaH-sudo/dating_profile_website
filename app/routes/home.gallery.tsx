import { ImageList, ImageListItem } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readdir } from "fs/promises";

interface Image_tile {
  file_name: string;
}

export const loader: LoaderFunction = async () => {
  const image_path_list = await readdir("./app/images/me");

  return image_path_list.map((file_name) => {
    return {
      file_name,
    };
  });
};

export default function IndexRoute() {
  const image_list = useLoaderData<Image_tile[]>() ?? [];

  return (
    <div>
      <ImageList variant="masonry" cols={3} gap={8}>
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
    </div>
  );
}
