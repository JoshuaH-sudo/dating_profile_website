import { Grid } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import me_image_src from "~/images/me/headshot.jpg";

const List: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={3}
      style={{
        height: "100%"
      }}
    >
      {children}
    </Grid>
  );
};

const Item: FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={6}>
        <img
          src={me_image_src}
          alt="description_image"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
      </Grid>

      <Grid xs={6}>
        <img
          src={me_image_src}
          alt="description_image"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export const Description_list = Object.assign(List, {
  Item,
});
