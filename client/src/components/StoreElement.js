import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Paper, ListItemSecondaryAction, IconButton, Button, Grid } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

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
  const disabled = bonus.active ? false : true;
  return (
    <>
      <ListItem
        alignItems="center"
        className={classes.root}
        component={Paper}
        disabled={disabled}
      >
        <ListItemAvatar>
          <Avatar alt={bonus.name} src={bonus.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={bonus.name + " (speed x" + bonus.extra + ")"}
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
                {bonus.description}
              </Typography>
            </>
          }
        />
        <Grid item>
          <Button edge="end" aria-label="buy" disabled={disabled}>
            BUY
          </Button>
        </Grid>
      </ListItem>
    </>
  );
}
