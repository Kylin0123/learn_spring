import React from 'react';
import { Container, Typography, Grid, Link, List, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#f5f5f5"
    },
    container: {
        padding: theme.spacing(7,0),
    }
}))

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="md">
                <Typography variant="h6">Quick Links</Typography>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <List>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Github
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Twitter
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Examples
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Currently v4.3.1. Released under the MIT License.
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <List>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Icons
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Color
                                </Link>
                            </ListItem>
                            <ListItem disableGutters>
                                <Link
                                    href="/"
                                    target="_blank"
                                    color="inherit"
                                >
                                    Team
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Footer;