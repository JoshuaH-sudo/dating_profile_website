import { Instagram } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "@remix-run/react";
import type { FC } from "react";
import CountUp from "react-countup";

import pepe_love_src from "~/images/decorations/pepe-love.png";
import jake_src from "~/images/decorations/jake.png";
import harold_src from "~/images/decorations/harold.png";

interface Survey_complete {
  compatibility: number;
}
const Survey_complete: FC<Survey_complete> = ({ compatibility }) => {
  const theme = useTheme();

  const score_display = (
    <Box
      style={{
        zIndex: 1,
      }}
    >
      <Typography variant="h4" textAlign="left">
        Score
      </Typography>
      <Box
        style={{
          display: "inline-flex",
          padding: "2rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.hard_accent.light,
          border: "5px solid #000",
          borderRadius: "0.625rem",
          background: "linear-gradient(180deg, #FF002E 24.79%, #891461 96.15%)",
          height: "8rem",
          width: "8rem",
        }}
      >
        <Typography variant="h2" color="white" textAlign="center">
          <CountUp end={compatibility} duration={2} />%
        </Typography>
      </Box>
    </Box>
  );

  const action_message = (
    <Box>
      <Typography variant="h4" color="white" textAlign="center">
        Wow we're match!!!🎉
      </Typography>
      <Typography variant="h5" color="white" textAlign="center">
        Send a message on Instagram 😉
      </Typography>
    </Box>
  );

  const action_buttons = (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <IconButton
        style={{ padding: 0 }}
        onClick={() => window.open("https://www.instagram.com/yeet_110100100/")}
      >
        <Instagram
          style={{
            height: "5rem",
            width: "5rem",
          }}
        />
      </IconButton>
    </Box>
  );

  const image_backgrounds = (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        filter: "blur(2px)",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        alt="pepe-love"
        src={pepe_love_src}
        style={{
          position: "absolute",
          width: "12.875rem",
          height: "12.875rem",
          top: "2rem",
          left: "-5.7rem",
          minWidth: "30vw",
          minHeight: "30vw",
        }}
      />

      <img
        alt="jake"
        src={jake_src}
        style={{
          position: "absolute",
          width: "12.875rem",
          height: "12.875rem",
          top: "6rem",
          right: "-6rem",
          minWidth: "30vw",
          minHeight: "30vw",
        }}
      />

      <img
        alt="harold"
        src={harold_src}
        style={{
          position: "absolute",
          width: "20rem",
          height: "20rem",
          bottom: "-8rem",
          right: 0,
          minWidth: "30vw",
          minHeight: "30vw",
        }}
      />
    </Box>
  );

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}
    >
      {score_display}
      {action_message}
      {action_buttons}
      {image_backgrounds}
    </Box>
  );
};

export default Survey_complete;
