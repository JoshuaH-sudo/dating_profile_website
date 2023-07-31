import { Button, Grid } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import background_image from "~/images/decorations/giga-chad-video-placeholder.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Splash_page() {
  return (
    <>
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
        src={background_image}
        alt="giga-chad-video"
      />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Link to="home">
            <Button variant="contained" fullWidth>
              Enter
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
