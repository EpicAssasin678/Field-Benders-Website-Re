import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List, Link, Card} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';

import Chapter1 from '../../../assets/chapters/Chapter1';

//TODO create all chapters dynamically with this component, use lady loading to properly load correct component
const Chapter = ({chapterName}) => {

    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    
    

    return (
        <Grow in>
            <Container className={classes.Container}>
                <Grid container className={classes.gridContainer} >
                    <Paper elevation={3}>
                        <chapterName className={classes.Container}/>
                    </Paper>
                </Grid>
            </Container>
        </Grow>
    )

}

export default Chapter;