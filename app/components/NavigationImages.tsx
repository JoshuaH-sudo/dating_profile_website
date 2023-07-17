import { Box, Paper } from "@mui/material";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

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
        <Link to="about">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Paper elevation={3}>
              <img
                alt="about page link"
                style={{ width: "100%", height: "100%" }}
                src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
              />
            </Paper>
          </motion.div>
        </Link>
      </Box>
      <Box sx={{ gridArea: "skills" }}>
        <Link to="skills">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Paper elevation={3}>
              <img
                alt="skills page link"
                style={{ width: "100%", height: "100%" }}
                src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
              />
            </Paper>
          </motion.div>
        </Link>
      </Box>
      <Box sx={{ gridArea: "gallery" }}>
        <Link to="gallery">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Paper elevation={3}>
              <img
                alt="gallery page link"
                style={{ width: "100%", height: "100%" }}
                src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
              />
            </Paper>
          </motion.div>
        </Link>
      </Box>
      <Box sx={{ gridArea: "contact" }}>
        <Link to="contact">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Paper elevation={3}>
              <img
                alt="contact page link"
                style={{ width: "100%", height: "100%" }}
                src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
              />
            </Paper>
          </motion.div>
        </Link>
      </Box>
    </Box>
  );
};

export default NavigationImages;
