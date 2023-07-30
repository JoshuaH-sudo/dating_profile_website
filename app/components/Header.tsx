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
          <Link to="/gallery">
            <Chip label="Gallery" variant="filled" clickable={true} />
          </Link>
          <Link to="/survey">
            <Chip label="Survey" variant="filled" clickable={true} />
          </Link>
          <Link to="/date">
            <Chip label="Date" variant="filled" clickable={true} />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
