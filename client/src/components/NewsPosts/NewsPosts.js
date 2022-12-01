import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { ReactReduxContext, useSelector } from 'react-redux';

import NewsPost from './NewsPost/NewsPost';
import useStyles from './styles.js';

const NewsPosts = ({ setCurrentId }) => {
    
    const { newsPosts, isLoading } = useSelector((state) => state.newsPosts);
    const classes = useStyles();

    newsPosts.map((newsPost) => {
        console.log(newsPost);
    })
    
    console.log(new Date().toISOString());
    console.log(`newsPosts array: ${typeof newsPosts} ${newsPosts}`)
    if (!newsPosts.length && !isLoading) return 'No news posts.';
 

    return (
        isLoading ? <LinearProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                {newsPosts?.map((newsPost) => (
                    
                    <Grid key={newsPost._id} item xs={12} sm={12} md={12} lg={12}>
                        <NewsPost newsPost={newsPost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default NewsPosts;