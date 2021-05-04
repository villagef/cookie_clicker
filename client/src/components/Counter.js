import { useEffect, useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useInterval } from "react-use-timeout";

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
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);
  const speedArr = sessionStorage.getItem("speed");

  const handleDelay = () => {
    let init = 1000;
    if (speedArr) {
      const value = speedArr.split(",").reduce((a, b) => +a + +b, 0);
      init = Math.max(init / value, 1);
      return init;
    }
  };

  const interval = useInterval((e) => {
    dispatch({ type: "INCREMENTCOOKIES" });
    dispatch({ type: "INCREMENTTOTAL" });
  }, handleDelay());

  useEffect(() => {
    if (speedArr) {
      interval.start();
    } else {
      interval.stop();
    }
  }, [cookies]);

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
