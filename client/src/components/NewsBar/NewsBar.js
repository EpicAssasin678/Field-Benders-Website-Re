//Have drawer that resizes and disappears for smaller devices
import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, Paper, Typography, Fade} from '@material-ui/core';
import { useDispatch, useStore } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles';


import NewsPosts from '../NewsPosts/NewsPosts';
import NewsPost from '../NewsPosts/NewsPost/NewsPost';
import { getNewsPosts } from '../../actions/newsPosts';

import './newsbar.css';

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

    //!let's try and make a solution for our bug of not loading newsPost data
    const dispatch = useDispatch();
    //!bug is caused by Redux not calling a get request when acessing state store, have to trigger generation manually
    dispatch(getNewsPosts(page));

    //console.log(useStore().getState())
    
    return (
        <>
        <Grow in>
            <Grid container direction={'row'}  className={classes.newsBar} justifyContent='center'>
                <Paper elevation={4} className={[classes.newsBarBackDrop, 'newsbar']} md={4} lg={4}>
                    <Grid item>
                        <Typography variant='h3' className={`font-hacked ${classes.newsBarTitle} white`}>news_from_the_front</Typography>
                        <NewsPosts 
                            setCurrentId={setCurrentId} 
                            class='posts' 
                            postStyleOptions={{
                                body: 'newsbar-post-body font-consolas',
                                subtitle: 'newsbar-post-subtitle font-consolas',
                                title: 'newsbar-post-title swiss'
                            }}
                        />
                    </Grid>
                </Paper>
            </Grid>
        </Grow>
        </>
    )
    
}

export default NewsBar;
/**
 * console.log(`BACKEND>controllers/getNewsPosts: ${newsPosts} \nPAGE: ${page} `);
 * console.log(`BACKEND>controllers/getNewsPost: ${newsPost} `);`${classes.newsBar} newsbar`
 */