import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  clearCookies,
  clearTotal,
  clearLevel,
  clearBreakpoint,
} from "../actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 0",
    justifyContent: "center",
  },
  button: {
    color: "#dbbe11",
    borderColor: "#dbbe11",
  },
}));

export default function NewGameBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCookies());
    dispatch(clearTotal());
    dispatch(clearLevel());
    dispatch(clearBreakpoint());
  };

  return (
    <Grid container className={classes.root} alignItems="center">
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleClick}
      >
        New Game
      </Button>
    </Grid>
  );
}
