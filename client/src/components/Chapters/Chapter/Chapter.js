import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List, Link, Card} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import ControlPanel from './ControlPanel/ControlPanel';
import useStyles from './styles';
import MediaMap from '../../../assets/json/maps/chapter1.json';
import Chapter1 from '../../../assets/chapters/Chapter1';

//TODO create all chapters dynamically with this component, use lady loading to properly load correct component
const Chapter = () => {

    const location = useLocation();
    console.log(location);
    
    
    const classes = useStyles();
    const chapterNumber = location.pathname.toString().at(-1);
    //const Chapter = React.lazy( () => import(`../../../assets/chapters/Chapter${chapterNumber}`));
    //const Chapter = require(`../../../assets/chapters/Chapter${chapterNumber}`);
    //const MediaMap = React.lazy(() => import(`../../../assets/json/maps/chapter${chapterNumber}`));
    //const MediaMap = require(`../../../assets/json/maps/chapter${chapterNumber}`);
    //const GeneratedChapter = React.lazy(() => import(`../../../assets/chapters/${chapterName}`))
    console.log(MediaMap);
    return (
        <Grow in>
            <Container >
                <Paper>
                    <Typography variant='body1' align='center' className={classes.betaDisclaimer}>BETA EXPERIENCE </Typography>

                </Paper>
                <Grid container className={classes.gridContainer} justify='space-between' alignItems='stretch' spacing={3}>

                    <Grid item xs={12} s={10} md={10} lg={10}>

                        <Paper elevation={3} className={classes.chapterPaper} >
                            <Chapter />
                        </Paper>

                    </Grid>
                    <Grid item xs={0} s={2} md={2} lg={2}>

                         <ControlPanel mediaMap={MediaMap}/>   

                    </Grid>    
                </Grid>
            </Container>
        </Grow>
    )

}

export default Chapter;