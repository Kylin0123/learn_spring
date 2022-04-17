import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        position: 'absolute',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200
            }
        }
    }
}))

function Header(props) {
    const classes = useStyles();
    const isLogin = localStorage.getItem("isLogin") === "false" ? false : true;
    const handleClick = () => {
        if (!isLogin) {
            window.location.href = "/login"
        }
        else {
            localStorage.setItem("isLogin", false);
            localStorage.setItem("jwtToken", "");
            window.location.reload();
        }
    };
    return (
        <div>
            <AppBar position='static' className={props.className}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={() => {window.location.href = "/home"}}>
                        <HomeIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={{
                            input: classes.inputInput
                        }}>
                        </InputBase>
                    </div>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Button color="inherit" onClick={handleClick}>
                        { isLogin ? "LOGIN OUT" : "LOGIN IN" }
                    </Button>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => {window.location.href = "/user/all"}}>
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;