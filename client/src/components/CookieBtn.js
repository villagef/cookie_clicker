import React from 'react';
import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: "50%"
    },
  });

export default function CookieBtn() {
    const classes = useStyles();
    const handleClick = () => {
        console.log('click');
        
    }
    return (
        <>
        <button className={classes.button} onClick={handleClick} >
            <img src={logo} className="App-logo" alt="logo" />
        </button>
        </>
    )
}
