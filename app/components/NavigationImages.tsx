import { Box, Paper } from "@mui/material";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

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
      <Box sx={{ gridArea: "about" }}>
        <NavigationTitle link="about">
          <img
            alt="about page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </NavigationTitle>
      </Box>

      <Box sx={{ gridArea: "skills" }}>
        <NavigationTitle link="skills">
          <img
            alt="skills page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </NavigationTitle>
      </Box>

      <Box sx={{ gridArea: "gallery" }}>
        <NavigationTitle link="gallery">
          <img
            alt="gallery page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </NavigationTitle>
      </Box>

      <Box sx={{ gridArea: "contact" }}>
        <NavigationTitle link="contact">
          <img
            alt="contact page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </NavigationTitle>
      </Box>
    </Box>
  );
};

interface NavigationTitleProps extends PropsWithChildren {
  link: string;
}
const NavigationTitle: FC<NavigationTitleProps> = ({ children, link }) => (
  <Link to={link}>
    <motion.div
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Paper elevation={3}>{children}</Paper>
    </motion.div>
  </Link>
);

export default NavigationImages;
