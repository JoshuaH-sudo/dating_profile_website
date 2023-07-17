import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

export default function AboutPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <TextArea name="whoami" side="left" />
      <TextArea name="job" side="right" />
      <TextArea name="likes" side="left" />
      <TextArea name="final_world" side="right" />
    </Box>
  );
}

interface TextAreaProps extends PropsWithChildren {
  name: string;
  side: "left" | "right";
}
const TextArea: FC<TextAreaProps> = ({ name, side, children }) => (
  <Box
    id={name}
    sx={{
      outline: "solid",
      height: "25%",
      display: "flex",
      justifyContent: side,
    }}
  >
    <Box sx={{ backgroundColor: "blue", width: "33.33%" }}>
      {children}
    </Box>
  </Box>
);
