import achievements from "../constants/achievements.json";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import AchievementElement from "../components/AchievementElement";
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

export default function AchievementsTable() {
  const classes = useStyles();

  return (
    <List className={classes.root} component={Paper}>
      {achievements.length !== 0 ? (
        achievements.map((achievement) => (
          <AchievementElement key={achievement.id} achievement={achievement} />
        ))
      ) : (
        <ListItem alignItems="center">
          <ListItemText primary="No data" />
        </ListItem>
      )}
    </List>
  );
}
