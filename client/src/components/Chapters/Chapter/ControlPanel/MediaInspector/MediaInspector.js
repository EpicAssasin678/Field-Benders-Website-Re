import React, {useState} from 'react';

import { Typography, Fade, CardActionArea, CardMedia, Card, CardContent} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from '../styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


//TODO implement map -> (name, path, alt) => cards

//TODO eventually implement mapping option for media to be selected from the db and load alt and title from there

/**
 * 
 * @param {*} media map filtered of form => [name, mediaSS, path, alt, type, description]
 * 
 * @returns 
 * @notes Could eventually support more than just image media
 */

const MediaInspector = ({media, tabAnchor}) => {
    //cards with images and subtext over them, on hover tehy read alt text, on click they expand into the center
    //media (name, path, alt) => props. name
    const mediaStringPart = ''


    //let anchor = tabAnchor;
    const loadImages = (map) => {
        console.log(map)
        //if !SSR

        let mediaArea = (
            <>
            </>
        )
        map.map(media => {
            if (!media.serverSide) {
                console.log(mediaArea)
                
                    mediaArea = [(
                    <Card sx={{ maxWidth: 345 }} key={media.name}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={media.path}
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

            {media.forEach((item) => (
                
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={item.path}
                        alt={item.alt}
                        />
                    </CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {item.description}
                    </Typography>
                    </CardContent>
                    </Card>

                
                
            ))}
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