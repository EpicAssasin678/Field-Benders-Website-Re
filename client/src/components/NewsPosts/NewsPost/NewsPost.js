import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const NewsPost = ({ newsPost, setCurrentId }) => {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const openNewsPost =(e) => {
        history.push(`/news/${newsPost._id}`);
    }
    console.log(`~DEV/post found: ${newsPost}` )

    return (
        <Card raised elevation={6}>
            <ButtonBase 
                componenet="span"
                name="test"
                onClick={openNewsPost}
            >
                <CardContent>
                    <div>
                        <Typography color={'black'} variant='h1' className={[`newsPost-title`]}>{newsPost.title}</Typography>
                        <Typography variant='h3' color ={'black'} className={['newsPost-date']}>{newsPost.date}</Typography>
                    </div>
                </CardContent>
                <CardContent>
                    <Typography paragraph variant='body1' className={['newsPost-body']}>{newsPost.information}</Typography>
                </CardContent>

            </ButtonBase>
        </Card>
    );
};

export default NewsPost;