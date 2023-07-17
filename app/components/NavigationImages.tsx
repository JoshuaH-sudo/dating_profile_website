import { Box } from "@mui/material";
import { Link } from "@remix-run/react";

const NavigationImages = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        maxWidth: "100%",
        maxHeight: "100%",
        gridTemplateAreas: `"about skills"
    "gallery contact"`,
        minWidth: 0,
        minHeight: 0,
      }}
    >
      <Box sx={{ gridArea: "about", bgcolor: "primary.main" }}>
        <Link to="about">
          <img
            alt="about page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </Link>
      </Box>
      <Box sx={{ gridArea: "skills", bgcolor: "primary.main" }}>
        <Link to="skills">
          <img
            alt="skills page link"
            style={{ width: "100%", height: "100%" }}
            src="https://www.mypokecard.com/my/galery/1MaKOYuM6vwp.jpg"
          />
        </Link>
      </Box>
      <Box sx={{ gridArea: "gallery", bgcolor: "primary.main" }}>
        <Link to="gallery">
          <img
            alt="gallery page link"
            style={{ width: "100%", height: "100%" }}
            src="https://www.mypokecard.com/my/galery/1MaKOYuM6vwp.jpg"
          />
        </Link>
      </Box>
      <Box sx={{ gridArea: "contact", bgcolor: "primary.main" }}>
        <Link to="contact">
          <img
            alt="contact page link"
            style={{ width: "100%", height: "100%" }}
            src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default NavigationImages;
