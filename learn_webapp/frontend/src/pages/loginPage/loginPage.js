import React from 'react'
import { Card, Typography, TextField, Button, Link, Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LoginBg from '../../asserts/images/login-background.jpg';
import { login, getUsers } from '../../api';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: theme.spacing(15)
    },
    loginform: {
        textAlign: "center",
        margin: "auto",
        height: 300,
        width: 300,
        backgroundColor: "#fff",
        padding: theme.spacing(5)
    },
    button: {
        margin: theme.spacing(4, 0)
    }
}));

function LoginPage() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        loginFail: {
            open: false,
            info: ''
        }
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleLogin = () => {
        login(values.username, values.password)
            .then(res => {
                if (res.data) {
                    const { token } = res.data;
                    console.log("receive token:", token);
                    localStorage.setItem("jwtToken", token);
                    localStorage.setItem("isLogin", true);
                    window.location.href = "/home"
                }
                else {
                    console.log(res);
                    values.loginFail.open = true;
                    values.loginFail.info = JSON.stringify(res);
                    setValues({...values});
                }
            })
            .catch (err => {
                console.log(err);
                values.loginFail.open = true;
                values.loginFail.info = "net::ERR_CONNECTION_REFUSED";
                setValues({...values});
            });
    }

const handleClose = (event, reason) => {
    console.log(reason)
    if (reason === 'clickaway' || reason === 'timeout') {
        values.loginFail.open = false
        setValues({...values})
        return;
    }
}

return (
    <div className={classes.root}>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={values.loginFail.open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <SnackbarContent
                message={
                    <span id="client-snackbar" className={classes.message}>
                        {values.loginFail.info}
                    </span>
                }
            />
        </Snackbar>
        <Card className={classes.loginform}>
            <Typography variant="h5">
                Login
                </Typography>
            <TextField
                required
                fullWidth
                id="username"
                label="Username"
                value={values.username}
                margin="normal"
                onChange={handleChange("username")}
            />
            <TextField
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                value={values.password}
                onChange={handleChange("password")}
            />
            <Button
                className={classes.button}
                variant="outlined"
                fullWidth
                color="inherit"
                onClick={handleLogin}
            >
                Go
                </Button>
            <Link href="/login" color="inherit">Forget your password?</Link>
            <Button onClick={getUsers}>getUsers</Button>
        </Card>
    </div>
);
}

export default LoginPage;