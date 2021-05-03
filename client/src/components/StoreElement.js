import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Grid, Typography, Avatar, ListItemAvatar, ListItemText, ListItem } from "@material-ui/core";

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

export default function BonusElement({ bonus }) {
  const classes = useStyles();
  const cookies = useSelector((state) => state.cookies);

  const handleDisabled = () => {
    if(cookies >= bonus.price) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <ListItem
        alignItems="center"
        className={classes.root}
        component={Paper}
        disabled={handleDisabled()}
      >
        <ListItemAvatar>
          <Avatar alt={bonus.name} src={bonus.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={bonus.name}
          secondary={
            <>
              <Typography
                color="textPrimary"
              >
                Price: {bonus.price} cookies
              </Typography>
              <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textSecondary"
              >
                (Speed x {bonus.speed})
              </Typography>
            </>
          }
        />
        <Grid item>
          <Button edge="end" aria-label="buy" disabled={handleDisabled()}>
            BUY
          </Button>
        </Grid>
      </ListItem>
    </>
  );
}
