import { Instagram } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import type { FC } from "react";
import CountUp from "react-countup";
interface Survey_complete {
  compatibility: number;
}
const Survey_complete: FC<Survey_complete> = ({ compatibility }) => {
  const theme = useTheme();
  const score_display = (
    <Box>
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
        Send a message on Instagram or lets meetup 😉
      </Typography>
    </Box>
  );

  const action_buttons = (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Instagram
        style={{
          height: "5rem",
          width: "5rem",
        }}
      />
      <Button
        style={{
          width: "15rem",
          height: "5rem",
          backgroundColor: theme.palette.secondary.light,
        }}
        variant="contained"
      >
        <Typography variant="h4" textAlign="center">
          Meetup 📆
        </Typography>
      </Button>
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
    </Box>
  );
};

export default Survey_complete;
