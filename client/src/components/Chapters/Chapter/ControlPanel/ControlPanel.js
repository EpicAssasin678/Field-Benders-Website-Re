//Have drawer that resizes and disappears for smaller devices
import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, Paper, SwipeableDrawer, Button, List, Box, Icon, Typography} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';

import MusicPanel from './MusicPanel';
import MediaInspector from './MediaInspector';
import ReaderControls from './ReaderControls';

//change to modular statement
import MediaMap from '../../../../assets/json/maps/chapter1.json';

/**
 * 
 * @returns Control panel consisting of a volume control, media panel, and a reader control .
 * @props mediaMap = the json corresponding to the chapter's media
 */


const ControlPanel = ({mediaMap}) => {

    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const [anchor, setAnchor] = useState('right');

    const nmediaMap = MediaMap.media;

    //TODO make state management for playing music 
    
    //TODO make this configureable
    const anchorSetting = 'right';
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') ) {
            console.log('Event happened' + event.type);
          return;
        }
        console.log('Event happened' + event.type);
        setState({ ...state, [anchor]: open });
    };
    
    const handleChange = (event, state) => {

    }
    
    return (
        <Paper className={classes.paper} >

            <MusicPanel  track={MediaMap.media[0].name} trackMap={MediaMap.media}/>

            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
            <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'inherit' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            ></Box>

            

            <React.Fragment key={anchor}>
                
                <Button onClick={toggleDrawer(anchor, true)} sx={{justifyContent:'center', textAlign:'center'}}>
                    <ListIcon sx={{paddingRight : "10px"}} /> Media
                </Button>
                
                <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                >
                    
                    <Button>Test</Button>
                </SwipeableDrawer>
            </React.Fragment>
            </form>
            
        </Paper>

    )

}

export default ControlPanel;

/**
 *         <Paper className={classes.paper} >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
            <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'inherit' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            ></Box>

            <Typography variant='body1' align='center'>Music Status: {songStatus}</Typography>
            <Typography variant='body1' align= 'center'>Track Title: </Typography>
            <ToggleButtonGroup
            orientation='horizontal'
            value='default'
            exclusive
            onChange={handleChange}
            className={classes.playControls}>
                <ToggleButton value="play" className={classes.formButton}>
                    <PlayArrow sx={{width:'inherit', color:'black'}} fontSize='small' htmlColor='blue'/>
                </ToggleButton>
                <ToggleButton value="pause" className={classes.formButton} >
                    <Pause fontSize='small' htmlColor='blue'/>
                </ToggleButton>
            </ToggleButtonGroup>
            
            <React.Fragment key={anchor}>
                
                <Button onClick={toggleDrawer(anchor, true)} sx={{justifyContent:'center', textAlign:'center'}}>
                    <ListIcon sx={{paddingRight : "10px"}} /> Media
                </Button>
                
                <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                >
                    <Button>Test</Button>
                </SwipeableDrawer>
            </React.Fragment>
            </form>
            
        </Paper>
 */