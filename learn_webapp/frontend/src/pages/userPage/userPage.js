import React, { useState, useEffect } from 'react';
import UserCard from './userCard';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getUser } from '../../api';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 200
    },
    card: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        marginLeft: "auto",
        marginRight: "auto"
    }
}))

const UserPage = (props) => {
    const classes = useStyles();
    const [complete, setComplete] = useState(false);
    const [id, setId] = useState(0);
    useEffect(() => {
        const uid = props.match.params.id;
        getUser(uid).then(res => {
            console.log(res);
            if (res.data) {
                setId(res.data.id);
                setComplete(true);
            }
        })
    }, []);
    return (
        <div className={classes.root}>
            <Container maxWidth="md" >
                {
                    complete ?
                        <UserCard className={classes.card} />
                        :
                        <p>Waiting for completation...</p>
                }
            </Container>
        </div>
    )
}

export default UserPage;