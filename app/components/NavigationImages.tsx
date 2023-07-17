import { Box, Chip, Paper } from "@mui/material";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import type { FC } from "react";
import { capitalize } from "~/utils/tools";

const NavigationImages = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        maxWidth: "100%",
        maxHeight: "100%",
        gap: 2,
        gridTemplateAreas: `"about skills"
    "gallery contact"`,
        minWidth: 0,
        minHeight: 0,
      }}
    >
      <NavigationTitle
        name="about"
        image_src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
      />

      <NavigationTitle
        name="skills"
        image_src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
      />

      <NavigationTitle
        name="gallery"
        image_src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
      />

      <NavigationTitle
        name="contact"
        image_src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
      />
    </Box>
  );
};

interface NavigationTitleProps {
  name: string;
  image_src: string;
}
const NavigationTitle: FC<NavigationTitleProps> = ({ name, image_src }) => (
  <Box sx={{ gridArea: name }}>
    <Link to={name}>
      <motion.div
        style={{
          position: "relative",
        }}
        whileHover={{ scale: 1.2, zIndex: 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Paper elevation={3}>
          <img
            alt={`${name} page link`}
            style={{ width: "100%", height: "100%", position: "relative" }}
            src={image_src}
          />
          <Chip
            sx={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }}
            label={capitalize(name)}
            clickable={true}
            color="info"
          />
        </Paper>
      </motion.div>
    </Link>
  </Box>
);

export default NavigationImages;
