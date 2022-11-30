import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import NewsPost from './NewsPost/NewsPost';
import useStyles from './styles.js';

const NewsPosts = ({ setCurrentId }) => {
    const { newsPosts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(`newsPosts array: ${newsPosts}`)
    if (!newsPosts.length && !isLoading) return 'No news posts.';

    return (
        isLoading ? <LinearProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                {newsPosts?.map((newsPost) => (
                    <Grid key={newsPost._id} item xs={12} sm={12} md={12} lg={12}>
                        <NewsPost post={newsPost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default NewsPosts;