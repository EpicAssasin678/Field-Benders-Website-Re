import React, {Suspense, useState} from 'react';

import { Typography, Fade, CardActionArea, CardMedia, Card, CardContent, CircularProgress} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import useStyles from '../styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { $CombinedState } from 'redux';
import { getPostsBySearch } from '../../../../../actions/posts';
import posts from '../../../../../reducers/posts';

//import illustration from '../../../../../assets/img/illustrations/0005.png';
//TODO implement map -> (name, path, alt) => cards
//TODO eventually implement mapping option for media to be selected from the db and load alt and title from there

/**
 * @param {*} media map filtered of form => [name, mediaSS, path, alt, type, description]
 * @notes Could eventually support more than just image media
 */

const MediaInspector = ({media, tabAnchor}) => {
    //cards with images and subtext over them, on hover tehy read alt text, on click they expand into the center
    //media (name, path, alt) => props. name
    const mediaStringPart = '';
    const dispatch = useDispatch();
    
    //let anchor = tabAnchor;
    const loadImages = (map) => {
        console.log(map)
        
        let mediaArea = (
            <>
            </>
        )
        map.map(media => {
            if (!media.serverSide) {
                console.log(mediaArea)
                switch (media.type) {
                    case 'image':
                        const CardImage = React.lazy(() => import(media.path).then(console.log("Lazy loading of card image sucess.")).catch(console.log("Lazy loading failed.")));
                        mediaArea = [(
                        <Card sx={{ maxWidth: 345 }} key={media.name}>
                            <CardActionArea >
                                {
                                /*<Suspense fallback={<CircularProgress></CircularProgress>}>
                                    <CardImage/>
                                </Suspense> */
                                }
                                <CardMedia
                                component="img"
                                height="140"
                                src={media.path}
                                alt={media.alt}
                                />
                            </CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {media.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {media.description}
                            </Typography>
                            </CardContent>
                        </Card> 
                        ), mediaArea]
                        break;
                    case 'audio':
                        break;
                    default:
                        break;
                }
                    //let cardImage =( <image href={media.path}></image> )
            } else {
                console.log(mediaArea);
                
                mediaArea = [(
                    <Card sx={{ maxWidth: 345 }} key={media.name}>
                        <CardActionArea >
                            {/*<Suspense fallback={<CircularProgress></CircularProgress>}>
                                <CardImage/>
                            </Suspense> */}
                            <CardMedia
                            component="img"
                            height="140"
                            src={media.path}
                            alt={media.alt}
                            />
                        </CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {media.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {media.description}
                        </Typography>
                        </CardContent>
                    </Card> 
                    ), mediaArea]
            }
        });  
        
        return mediaArea;   
    }

    return (
        <>

            {loadImages(media)}

        </>
    )
}

export default MediaInspector;

/**
 * 
 * 
 *     const loadImages = (map) => {
        console.log(map)
        //if !SSR
        map.map(media => {
            if (!media.serverSide) {
               <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={media.path}
                        alt="{media.alt}"
                        />
                    </CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {media.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {media.description}
                    </Typography>
                    </CardContent>
                </Card>
            }
        });        
    }
 */