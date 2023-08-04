import { Button, Fade, Grid, Typography } from "@mui/material";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import gigachad_video from "~/assets/videos/GIGACHAD.mp4";

export default function Splash_page() {
  const [show_button, set_show_button] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      set_show_button(true);
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const on_screen_click = () => {
    const video_element = document.querySelector("video");
    if (video_element) {
      video_element.play();
      video_element.muted = false;
      video_element.volume = 0.2;
    }
  };
  return (
    <>
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        disablePictureInPicture
        autoPlay={true}
        muted={true}
        loop
        id="gigachad-video"
      >
        <source src={gigachad_video} type="video/mp4" />
      </video>
      <Grid
        onClick={on_screen_click}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        sx={{ minHeight: "100vh" }}
      >
        <Fade in={!show_button} timeout={{ enter: 3000, exit: 250 }}>
          <Typography variant="h2" color="white" textAlign="center">
            Are.
          </Typography>
        </Fade>
        <Fade in={!show_button} timeout={{ enter: 5500, exit: 250 }}>
          <Typography variant="h2" color="white" textAlign="center">
            You.
          </Typography>
        </Fade>
        <Fade in={!show_button} timeout={{ enter: 7500, exit: 250 }}>
          <Typography variant="h2" color="white" textAlign="center">
            Ready?
          </Typography>
        </Fade>
        <Grid item xs={3}>
          <Fade in={show_button} timeout={250}>
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
          </Fade>

          <Fade in={!show_button} timeout={3000}>
            <Typography variant="h4" color="white" textAlign="center">
              Click screen to turn sound on! 🔊
            </Typography>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
}
