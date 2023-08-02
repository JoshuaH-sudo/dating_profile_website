import { Box, styled, useTheme } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Survey_complete from "~/components/Survey_complete";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Compatibility_page() {
  const score = useLoaderData();
  const theme = useTheme();

  return (
    <Box
      style={{
        height: "100%",
        backgroundColor: theme.palette.accent.main,
      }}
    >
      <Offset />
      <Box
        style={{
          width: "90vw",
          height: "90%",
          margin: "auto",
          overflowY: "auto",
          overflowX: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <Survey_complete compatibility={score ?? 0} />
      </Box>
    </Box>
  );
}

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const score = url.searchParams.get("score");

  return score;
};
