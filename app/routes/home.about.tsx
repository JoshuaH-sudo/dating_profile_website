import { Box } from "@mui/material";
import { FC } from "react";

export default function AboutPage() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        maxWidth: "100%",
        maxHeight: "100%",
        gap: 2,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"whoami"
        "job"
        "likes"
        "final_word"`,
        minWidth: 0,
        minHeight: 0,
      }}
    >
      <TextArea gridArea="whoami" />
      <TextArea gridArea="job" />
      <TextArea gridArea="likes" />
      <TextArea gridArea="final_world" />
    </Box>
  );
}

interface TextAreaProps {
  gridArea: string;
}
const TextArea: FC<TextAreaProps> = ({ gridArea }) => (
  <Box
    sx={{
      gridArea: gridArea,
      outline: "solid",
    }}
  ></Box>
);
