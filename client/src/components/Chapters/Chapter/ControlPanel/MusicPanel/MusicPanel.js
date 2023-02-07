
import React, {useState, useRef, useEffect} from 'react';

import { Typography, Grid, Slider} from '@material-ui/core';

import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import VolumeDownRounded from '@material-ui/icons/VolumeDownRounded';
import VolumeUpRounded  from '@material-ui/icons/VolumeUpRounded';
import { useTheme } from '@material-ui/styles';

import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from '../styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import Player, {useAudio} from '../../../../Player/Player';

//TODO change way of passing mapping data
//TODO change wrapped player into own component, more compatability

const MusicPanel = ({musicPlayer, trackMap}) => {
    //console.log(track);
    const theme = useTheme(); 
    const lightIconColor = 'blue';
    
    const classes = useStyles();
    //use a json file which maps the locations of mp3's to a name
    const songs = trackMap.map((media) => {
        if (media.type == 'audio') {
            return media;
        } return null;
    })
    console.log(songs);
    
    //for volume slider
    
    const [song, changeTrack] = useState(songs[0].name);
    const [songStatus, changeSongStatus] = useState('play');
    const [volume, changeVolume] = useState(50);

    const playing = false;
    //load in the beggining track for the player 
    console.log(trackMap);

    const playButtonRef = useRef();

    
    const handlePlayClick = (event) => {
        let playButtonState = playButtonRef.current.value;
        if (playButtonState === 'play') {
            changeSongStatus('pause');
        }
        else {
            changeSongStatus('play')
            //toggle();
        };
        console.log(`${song} set to ${playButtonState}`);
    }

    return (
        <div>
            <Grid container direction={{xs: 'column', md: 'row', lg: 'row'}} spacing={2} justifyContent={'center'}>

                <Grid item>
                    <Typography variant='body1' align='center'> Music Status: {songStatus}</Typography>
                    <Typography variant='body1' align= 'center'>Track Title: {song}</Typography>
                </Grid>
                <Player 
                    url={songs[0].path}
                    songStatus = {songStatus}
                    songVolume = {volume}
                    wrappedPlayer={(
                        <ToggleButtonGroup
                        orientation='horizontal'
                        value='default'
                        exclusive
                        className={classes.playControls}>
                            <ToggleButton  value={songStatus} onClick={handlePlayClick} ref={playButtonRef}>
                                {songStatus === 'play' ? (
                                    <PlayArrow sx={{width:'inherit', color:'black'}} fontSize='small' htmlColor='blue'/>
                                ):(<Pause fontSize='small' htmlColor='blue'/ >
                                )}
                            </ToggleButton>
                        </ToggleButtonGroup> 
                    )}                
                />
                </Grid>
                <Grid item>  
                        
                <Grid container>

                    <Slider
                        value={volume}
                        onChange={(_, value) => changeVolume(value)}
                        valueLabelDisplay = "auto"
                        className={classes.volumeComponent}
                        aria-label="Volume"
                        defaultValue={30}
                        sx={{
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            width: 24,
                            height: 24,
                            backgroundColor: '#fff',
                            '&:before': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                            },
                        },
                        }}
                    />    
                </Grid>
                        
            </Grid>
        </div>
    )
}

export default MusicPanel;

/**


 */