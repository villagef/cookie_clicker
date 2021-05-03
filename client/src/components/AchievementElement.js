import {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Avatar, ListItemAvatar, ListItemText, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px 0px",
    width: "100%",
    backgroundColor: "#0b937d",
  },
  inline: {
    display: "inline",
  },
}));

export default function AchievementElement({ achievement }) {
  const classes = useStyles();
  const cookies = useSelector(state => state.cookies);
  const disabled = achievement.active ? false : true;
  console.log(cookies);
  console.log(achievement.target);
  

  if(cookies == achievement.target) {
    console.log('nagroda');
    
  }

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
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondaty"
              >
                {achievement.description}
              </Typography>
            </>
          }
        />
      </ListItem>
    </>
  );
}
