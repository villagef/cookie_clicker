import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
    maxWidth: "500px",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "2rem",
    padding: "10px",
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
    },
  },
  label: {
    width: "100%",
  },
}));

export default function Counter() {
  const classes = useStyles();
  const cookies = useSelector((state) => state.cookies);

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
        <Grid className={classes.label} item>
          Score
        </Grid>
        <Grid className={classes.label} item>
          {cookies}
        </Grid>
      </Grid>
    </>
  );
}
