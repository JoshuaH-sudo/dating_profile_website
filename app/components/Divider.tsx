import { Instagram } from "@mui/icons-material";
import { Grid, Typography, IconButton, Box, useTheme } from "@mui/material";

const Divider = () => {
  const theme = useTheme();

  return (
    <Box
      data-cy="section-divider"
      sx={{
        position: "relative",
        zIndex: 1000,
        width: "100vw",
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="15px"
      >
        <Grid item xs={11}>
          <Typography variant="h4" color="white">
            {"Send memes here ->"}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            style={{ padding: 0 }}
            onClick={() =>
              window.open("https://www.instagram.com/yeet_110100100/")
            }
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Divider;
