import logo from "../logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "50%",
    marginTop: "100px",
    cursor: "pointer",
  },
});

export default function CookieBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);
  const total = useSelector((state) => state.total);

  const handleClick = () => {
    dispatch({
      type: "INCREMENTCOOKIES",
    });
    dispatch({
      type: "INCREMENTTOTAL",
    });
  };
  sessionStorage.setItem("cookies", cookies);
  sessionStorage.setItem("total", total);

  return (
    <>
      <div className={classes.button} onClick={handleClick}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}
