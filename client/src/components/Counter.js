import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60vw",
    maxWidth: "500px",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "2rem",
    padding: "10px",
    marginTop: '10px',
    [theme.breakpoints.up("sm")]: {
        marginTop: '50px',
    }
  },
  label: {
    width: '100%',
  }
}));

export default function Counter({ counter, level }) {
  const classes = useStyles();

  return (
    <>
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      component={Paper}
      alignItems="center"
    >
      <Grid className={classes.label} item>Score</Grid>
      <Grid className={classes.label} item>
        {counter}
      </Grid>
    </Grid>
    </>
  );
}
