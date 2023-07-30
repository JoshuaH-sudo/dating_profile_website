import { AppBar, Chip, Toolbar, styled } from "@mui/material";
import { Link } from "@remix-run/react";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          left: 0,
          width: "100vw",
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
      <Offset />
    </>
  );
};

export default Header;
