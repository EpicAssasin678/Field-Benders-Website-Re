
import React, {useState, useRef} from 'react';

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
    const [song, changeTrack] = useState('none');
    const [songStatus, changeSongStatus] = useState('play');
    
    //load in the beggining track for the player 
    console.log(trackMap);

    const playButtonRef = useRef();
    //const [playing, toggle] = useAudio(track);

    const handleChange = (event, state) => {
        
    }

    //const [playing, toggle] = useAudio(track);
    //const [audio] = useState(new Audio(track).play());
    
    const handlePlayClick = (event) => {
        let playButtonState = playButtonRef.current.value;
        console.log(`${song} set to ${playButtonState}`);
        if (playButtonState == 'play') {
            changeSongStatus('pause');
            //console.log(playing);
        }
        else {
            changeSongStatus('play')
            //toggle();
        };
        //handle further logic like track skipping
        
        /**
         playButtonState = playButtonState == 'play' ? (
             playButtonState == 'pause';
             console.log('Play button state was changed to pause.');
         ) : ();
         * 
         */
    }
    
    return (
        <div>

            <Grid container direction={{xs: 'column', md: 'row', lg: 'row'}} spacing={2} justifyContent={'center'}>

                <Grid item>
                    <Typography variant='body1' align='center'>Music Status: {songStatus}</Typography>
                    <Typography variant='body1' align= 'center'>Track Title: {song}</Typography>
                </Grid>

                <Grid item>
                    <Player url={trackMap[0].path} wrappedPlayer={    
                        <ToggleButtonGroup
                        orientation='horizontal'
                        value='default'
                        exclusive
                        onChange={handleChange}
                        className={classes.playControls}>
                            <ToggleButton  value={songStatus} onClick={handlePlayClick} ref={playButtonRef}>
                                {songStatus == 'play' ? (
                                    <PlayArrow sx={{width:'inherit', color:'black'}} fontSize='small' htmlColor='blue'/>
                                ):(<Pause fontSize='small' htmlColor='blue'/ >
                                )}
                            </ToggleButton>
                        </ToggleButtonGroup> 
                        }/>
                        </Grid>
                        
                <Grid container>

                    <Slider
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
 * 
 * 
         <Grid container direction={{xs:'column', md:'row'}} spacing={2}>
            <Typography variant='body1' align='center'>Music Status: {songStatus}</Typography>
            <Typography variant='body1' align= 'center'>Track Title: {song}</Typography>
            <ToggleButtonGroup
            orientation='horizontal'
            value='default'
            exclusive
            onChange={handleChange}
            className={classes.playControls}>
                <ToggleButton value="play" >
                    <PlayArrow sx={{width:'inherit', color:'black'}} fontSize='small' htmlColor='blue'/>
                </ToggleButton>
                <ToggleButton value="pause" >
                    <Pause fontSize='small' htmlColor='blue'/>
                </ToggleButton>
            </ToggleButtonGroup>

        </Grid>

 */