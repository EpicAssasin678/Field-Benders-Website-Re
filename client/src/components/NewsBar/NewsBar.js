//Have drawer that resizes and disappears for smaller devices
import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, Paper, SwipeableDrawer, Button, List, Box, Icon, Typography, Fade} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles';


import NewsPosts from '../NewsPosts/NewsPosts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const NewsBar = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    const [currentId, setCurrentId] = useState(0);

    console.log(`NewsBar: query=>${query}`);
    
    return (
        <>
        <Grow in>
            <Grid container direction={'row'} spacing={2} className={classes.newsBar}>
                <Grid item>
                    <NewsPosts setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Grow>
        </>
    )
    
}

export default NewsBar;
