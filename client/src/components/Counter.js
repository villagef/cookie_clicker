import {Paper, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60vw',
        maxWidth: '500px',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '2rem',
        padding: '10px',
        marginTop: '50px'
    }
}))

export default function Counter({counter}) {
    const classes = useStyles();

    return (
        <Grid className={classes.root} component={Paper}>
            {counter}
        </Grid>
    )
}
