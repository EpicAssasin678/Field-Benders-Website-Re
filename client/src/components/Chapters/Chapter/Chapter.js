import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List, Link, Card} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';

import Chapter from '../../../assets/chapters/Chapter1';


const Chapter = () => {

    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    
    
    return (
        <Grow in>
            <Container className={classes.Container}>
                <Grid className={classes.gridContainer}>

                    <Paper elevation={3}>
                        <Chapter className={classes.Container}/>
                    </Paper>
                        
                </Grid>
            </Container>
        </Grow>
    )

}

export default Chapter;