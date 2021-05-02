import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px 0px",
    width: "100%",
    backgroundColor: "#1c9b64",
  },
  inline: {
    display: "inline",
  },
}));

export default function AchievementElement({ achievement }) {
  const classes = useStyles();
  const disabled = achievement.active ? false : true;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        className={classes.root}
        component={Paper}
        disabled={disabled}
      >
        <ListItemAvatar>
          <Avatar alt={achievement.name} src={achievement.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={achievement.name + " (speed x" + achievement.extra + ")"}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondaty"
              >
                {achievement.description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
}
