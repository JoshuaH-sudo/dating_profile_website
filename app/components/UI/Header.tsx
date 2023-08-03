import { AppBar, Chip, Toolbar } from "@mui/material";
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
          boxShadow: "revert"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Link to="/home">
            <Chip label="Home" variant="filled" clickable={true} />
          </Link>
          <Link to="/home/gallery">
            <Chip label="Gallery" variant="filled" clickable={true} />
          </Link>
          <Link to="/home/survey">
            <Chip label="Survey" variant="filled" clickable={true} />
          </Link>
          <Link to="/home/meetup">
            <Chip label="Meetup" variant="filled" clickable={true} />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
