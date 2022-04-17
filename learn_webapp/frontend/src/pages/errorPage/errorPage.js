import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 400,
        paddingTop: theme.spacing(10),
        justifyContent: "center"
    },
    button: {
        marginTop: theme.spacing(5)
    }
}))

const ErrorPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h2" color="primary">OOps...</Typography>
                <Typography variant="h3" color="primary">Error 404: Page not found.</Typography>
                <Button className={classes.button} variant="outlined" color="primary" href="/home">Back to Home</Button>
            </Container>
        </div>
    )
}

export default ErrorPage;