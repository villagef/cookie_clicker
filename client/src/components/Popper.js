import { useState, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  typography: {
    padding: theme.spacing(2),
    backgroundColor: "#dbbe11",
    color: "white",
    textAlign: "center",
  },
}));

export default function AchievementPopper() {
  const classes = useStyles();
  const cookies = useSelector(state => state.cookies);
  const [open, setOpen] = useState(false);


  return (
    <Popper className={classes.root} open={open} placement="top" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Typography className={classes.typography}>
            You have new achievement !
          </Typography>
        </Fade>
      )}
    </Popper>
  );
}
