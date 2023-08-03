import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        style={{
          left: 0,
          width: "100vw",
          boxShadow: "revert",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Link to="/home">
            <Button variant="contained" size="large" style={{ width: "20vw" }}>
              Home
            </Button>
          </Link>
          <Link to="/home/gallery">
            <Button variant="contained" size="large" style={{ width: "20vw" }}>
              Gallery
            </Button>
          </Link>
          <Link to="/home/survey">
            <Button variant="contained" size="large" style={{ width: "20vw" }}>
              Survey
            </Button>
          </Link>
          <Link to="/home/meetup">
            <Button variant="contained" size="large" style={{ width: "20vw" }}>
              Meetup
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
