import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 0',
        justifyContent: 'center'
    },
  button: {
      color: '#dbbe11',
      borderColor: '#dbbe11'
  },
}));

export default function NewGameBtn() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Button variant="outlined" className={classes.button}>
        New Game
      </Button>
    </Grid>
  );
}
