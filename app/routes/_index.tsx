import { Button, Grid } from "@mui/material";
import { Link } from "@remix-run/react";

export default function Splash_page() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Link to="home">
          <Button variant="contained" fullWidth>Enter</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
