import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List, Link} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';

import './ChapterReader.css';

const ChapterReader = (props) => {
    
    return (
        <Grow in>
            <Container className={['container', classes.Container]}>
                <Grid container justify='center' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                            

                </Grid>


                <Pagination count={10} showFirstButton showLastButton />
            </Container>
        </Grow>
    )
}

export default ChapterReader;