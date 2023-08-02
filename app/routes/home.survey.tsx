import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import survey_styles from "survey-core/defaultV2.min.css";
import type { LinksFunction } from "@remix-run/node";
import { Box, styled, useTheme } from "@mui/material";
import { useState } from "react";
import Survey_complete from "~/components/Survey_complete";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: survey_styles,
  },
];

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const MAX_SCORE = 20;

export default function Home_page() {
  const [compatibility, set_compatibility] = useState<number | undefined>(
    undefined
  );

  const survey = new Model(modal_data);
  survey.onComplete.add((sender) => {
    const score = calculate_score(sender.data.results);

    set_compatibility(score);
  });

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
        {compatibility === undefined && <Survey model={survey} />}
        {compatibility !== undefined && (
          <Survey_complete compatibility={compatibility} />
        )}
      </Box>
    </Box>
  );
}

type Tally = {
  [item: string]: number;
};
const calculate_score = (results: Tally) => {
  const total = Object.values(results).reduce(
    (previous, current) => previous + current,
    0
  );

  //https://stackoverflow.com/questions/23759782/javascript-percentage-difference-between-two-values
  const difference =
    100 * Math.abs((MAX_SCORE - total) / ((MAX_SCORE + total) / 2));

  const score = 100 - Math.round(difference);

  return score;
};

const modal_data = {
  elements: [
    {
      type: "matrix",
      name: "results",
      title: "Take this survey to see how compatible we are.",
      columns: [
        {
          value: 5,
          text: "Strongly agree",
        },
        {
          value: 4,
          text: "Agree",
        },
        {
          value: 3,
          text: "Neutral",
        },
        {
          value: 2,
          text: "Disagree",
        },
        {
          value: 1,
          text: "Strongly disagree",
        },
      ],
      rows: [
        {
          value: "memes",
          text: "Memes are a superior form of art and reflect a lot about a person?",
        },
        {
          value: "passion",
          text: "You have things your passionate about?",
        },
        {
          value: "travel",
          text: "You love to travel?",
        },
        {
          value: "games",
          text: "Like to play video or board games?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
  ],
  showQuestionNumbers: "off",
  showCompletedPage: false,
  // showNavigationButtons: false,
  modal: "responsive",
};
