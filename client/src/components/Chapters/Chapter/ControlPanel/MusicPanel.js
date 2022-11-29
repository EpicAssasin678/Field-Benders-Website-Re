
import React, {useState, useRef} from 'react';

import { Typography, Grid, Container} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import Player, {useAudio} from '../../../Player/Player';


const MusicPanel = ({track='none', musicPlayer, trackMap}) => {
    console.log(track);
    console.log(trackMap);
    
    const classes = useStyles();
    const playButtonRef = useRef();

    //use a json file which maps the locations of mp3's to a name
    const [song, changeTrack] = useState(track);
    const [songStatus, changeSongStatus] = useState('play');


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

        <Container >
            <Grid container direction={{xs: 'column', md: 'row', lg: 'row'}} >

                <Typography variant='body1' align='center'>Music Status: {songStatus}</Typography>
                <Typography variant='body1' align= 'center'>Track Title: {song}</Typography>
                
                <Player url={track} wrappedPlayer={
                    
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

        </Container>

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