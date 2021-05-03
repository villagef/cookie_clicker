import bonuses from "../constants/store.json";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import StoreElement from "../components/StoreElement";
import { Paper, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "100px 0 30px 0",
    padding: "5px",
    overflowY: "scroll",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

export default function StoreTable() {
  const classes = useStyles();

  return (
    <List className={classes.root} component={Paper}>
      {bonuses.length !== 0 ? (
        bonuses.map((bonus) => <StoreElement key={bonus.id} bonus={bonus} />)
      ) : (
        <ListItem alignItems="center">
          <ListItemText primary="No data" />
        </ListItem>
      )}
    </List>
  );
}
