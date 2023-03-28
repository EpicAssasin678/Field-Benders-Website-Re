import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { ReactReduxContext, useDispatch, useSelector, useStore } from 'react-redux';

import NewsPost from './NewsPost/NewsPost';
import useStyles from './styles.js';
import { getNewsPosts } from '../../actions/newsPosts';

/**
 * 
 * @param {postStyleOptions} add fragment of classnames intended to affect the inner of each post  
 * @returns 
 */
const NewsPosts = ({ setCurrentId, postStyleOptions={body: '', title: '', subtitle: ''}}) => {
    
    const { newsPosts, isLoading } = useSelector((state) => state.newsPosts);
    
    const dispatch = useDispatch();
    const classes = useStyles();

    if (newsPosts) newsPosts.map((newsPost) => {
        console.log(newsPost);
    })
    
    console.log(useStore().getState());
    console.log(new Date().toISOString());
    //console.log(isLoading);
    //if (!isLoading) console.log(`newsPosts array: ${newsPosts.toString()}`)
    //if (!newsPosts.length && !isLoading) return 'No news posts.';
    //console.log(isLoading);
    //console.log(isLoading);
    
    return (
        isLoading ? <LinearProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                {newsPosts?.map((newsPost) => (
                    
                    <Grid key={newsPost._id} item xs={12} sm={12} md={12} lg={12}>
                        <NewsPost 
                        newsPost={newsPost} 
                        setCurrentId={setCurrentId}
                        styleOptions={postStyleOptions}
                        />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default NewsPosts;