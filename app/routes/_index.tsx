import { Button, Grid, Typography } from "@mui/material";
import { Link } from "@remix-run/react";
import background_image from "~/images/decorations/giga-chad-video-placeholder.png";

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
            <Button
              style={{
                borderRadius: "0.625rem",
                background:
                  "linear-gradient(180deg, #FF0059 0%, rgba(178, 6, 66, 0.00) 100%)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                width: "20rem",
                height: "6rem",
              }}
              variant="contained"
              fullWidth
            >
              <Typography variant="h2">Enter</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
