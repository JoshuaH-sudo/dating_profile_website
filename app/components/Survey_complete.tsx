import { Box, Typography, useTheme } from "@mui/material";
import type { FC } from "react";

interface Survey_complete {
  compatibility: number;
}
const Survey_complete: FC<Survey_complete> = ({ compatibility }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        style={{
          backgroundColor: theme.palette.hard_accent.light,
          borderRadius: "10px",
          border: "3px solid #000",
        }}
      >
        <Typography variant="h3" color="white">
          {compatibility}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Survey_complete;
