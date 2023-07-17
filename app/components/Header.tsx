import { Chip, Grid } from "@mui/material";
import { Link } from "@remix-run/react";

const Header = () => {

  return (
    <>
    <div id="header_nav" style={{ padding: "1.5em", position: "fixed", width: "100%", zIndex: 10000 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Link to="/">
            <Chip label="Home" variant="outlined" clickable={true} />
          </Link>
        </Grid>
        <Grid xs={9} />
      </Grid>
    </div>

    <div style={{ height: "3.5em" }}/>
    </>
  );
};

export default Header;
