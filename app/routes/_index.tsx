import { Button, Grid } from "@mui/material";
import { Link } from "@remix-run/react";
import background_image from "~/../public/images/decorations/giga-chad-video-placeholder.png";

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
