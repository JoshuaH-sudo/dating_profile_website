import { AppBar, Chip, Toolbar, styled } from "@mui/material";
import { Link } from "@remix-run/react";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          width: "100%",
        }}
      >
        <Toolbar>
          <Link to="/home">
            <Chip label="Home" variant="filled" clickable={true} />
          </Link>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
