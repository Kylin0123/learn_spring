import React from 'react';
import { GridList, GridListTile, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


import UserCard from './userCard';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(8, 0)
    }
}))



const AllUserPage = () => {
    const classes = useStyles();
    const nums = Array.from(Array(7).keys());
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <GridList cols={4} cellHeight="auto">
                    {nums.map(n => {
                        return (
                            <GridListTile key={n}>
                                <UserCard />
                            </GridListTile>
                        );
                    })}
                </GridList>
            </Container>
        </div>
    )
};

export default AllUserPage;