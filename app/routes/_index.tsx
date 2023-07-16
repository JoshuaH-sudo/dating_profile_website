import { Box } from "@mui/material";
import { useNavigate } from "@remix-run/react";

export default function IndexRoute() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"about skills"
    "gallery contact"`,
      }}
    >
      <Box sx={{ gridArea: "about", bgcolor: "primary.main" }}>
        <img
          alt="about page link"
          onClick={() => navigate("/about")}
          style={{ width: "100%", height: "100%" }}
          src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
        />
      </Box>
      <Box sx={{ gridArea: "skills", bgcolor: "primary.main" }}>
        <img
          alt="skills page link"
          onClick={() => navigate("/skills")}
          style={{ width: "100%", height: "100%" }}
          src="https://www.mypokecard.com/my/galery/1MaKOYuM6vwp.jpg"
        />
      </Box>
      <Box sx={{ gridArea: "gallery", bgcolor: "primary.main" }}>
        <img
          alt="gallery page link"
          onClick={() => navigate("/gallery")}
          style={{ width: "100%", height: "100%" }}
          src="https://www.mypokecard.com/my/galery/1MaKOYuM6vwp.jpg"
        />
      </Box>
      <Box sx={{ gridArea: "contact", bgcolor: "primary.main" }}>
        <img
          alt="contact page link"
          onClick={() => navigate("/contact")}
          style={{ width: "100%", height: "100%" }}
          src="https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
        />
      </Box>
    </Box>
  );
}
