//Have drawer that resizes and disappears for smaller devices
import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, Paper, Typography, Fade} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles';


import NewsPosts from '../NewsPosts/NewsPosts';
import NewsPost from '../NewsPosts/NewsPost/NewsPost';

function useQuery() {
    
    return new URLSearchParams(useLocation().search);
}

const NewsBar = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    const [currentId, setCurrentId] = useState(0);

    console.log(`NewsBar: ${useLocation().search} |  query=>${query}`);
    console.log(`searchquery: ${searchQuery}`);
    
    return (
        <>
        <Grow in>
            <Grid container direction={'row'}  className={classes.newsBar} justifyContent='center'>
                <Typography variant='h3'>News Bar</Typography>
                <Grid item>
                    <NewsPosts setCurrentId={setCurrentId} />
                    
                </Grid>
            </Grid>
        </Grow>
        </>
    )
    
}

export default NewsBar;
/**
 * console.log(`BACKEND>controllers/getNewsPosts: ${newsPosts} \nPAGE: ${page} `);
 * console.log(`BACKEND>controllers/getNewsPost: ${newsPost} `);
 */