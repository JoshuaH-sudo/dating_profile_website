import { Chip, Grid } from "@mui/material";
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <div style={{ padding: "1.5em" }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Link to="/">
            <Chip label="Home" variant="outlined" clickable={true} />
          </Link>
        </Grid>
        <Grid xs={9} />
      </Grid>
    </div>
  );
};

export default Header;
