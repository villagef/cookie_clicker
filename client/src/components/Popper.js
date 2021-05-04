import achievements from "../constants/achievements.json";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total);
  const boolean = useSelector((state) => state.boolean);
  const targets = achievements.map((d) => d.target);

  const handleBoolean = () => {
    dispatch({
      type: "SETTRUE",
    });
    setTimeout(() => {
      dispatch({
        type: "SETFALSE",
      });
    }, 3000);
  };

  useEffect(() => {
    targets.forEach((target) => {
      if (target === total) {
        handleBoolean();
      }
    });
  }, [total]);

  return (
    <Popper className={classes.root} open={boolean} placement="top" transition>
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
