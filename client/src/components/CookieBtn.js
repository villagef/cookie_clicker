import React from "react";
import logo from "../logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "50%",
    marginTop: '100px'
  },
});

export default function CookieBtn() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type: "INCREMENTCOOKIES"
    })
  }
  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        <img src={logo} className="App-logo" alt="logo" />
      </button>
    </>
  );
}
