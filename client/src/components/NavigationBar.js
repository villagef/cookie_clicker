import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import HomeIcon from "@material-ui/icons/Home";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "80px",
    backgroundColor: '#ec7676'
  },
  link: {
    color: '#fdfdfd'
  }
});

function NavigationBar() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        className={classes.link}
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
      className={classes.link}
        to="/achievements"
        component={Link}
        label="Achievments"
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction
      className={classes.link}
        to="/store"
        component={Link}
        label="Store"
        icon={<LocalGroceryStoreIcon />}
      />
    </BottomNavigation>
  );
}

export default withRouter(NavigationBar);
