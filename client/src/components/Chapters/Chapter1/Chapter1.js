import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List, Link} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';

import Chapter from '../../../assets/chapters/Chapter1';

const Chapter1 = () => {

    const classes = useStyles();
    
    const [currentId, setCurrentId] = useState(0);

    
    return (
        <Grow in>
            <Container className={classes.Container}>
                <Grid>
                    <Chapter />
                </Grid>
            </Container>
        </Grow>
    )

}

export default Chapter;