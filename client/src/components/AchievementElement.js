import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem,
} from "@material-ui/core";

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
  const total = useSelector((state) => state.total);

  const handleDisabled = () => {
    if (total >= achievement.target) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        className={classes.root}
        component={Paper}
        disabled={handleDisabled()}
      >
        <ListItemAvatar>
          <Avatar alt={achievement.name} src={achievement.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={achievement.name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondaty"
              >
                ({achievement.target} cookies)
              </Typography>
            </>
          }
        />
      </ListItem>
    </>
  );
}
