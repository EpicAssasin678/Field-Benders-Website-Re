import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';

import './home.css';
import '../../assets/fonts/stylesheet.css';

import background_music from '../../assets/audio/mias3.mp3';
import picture1 from '../../assets/img/illustrations/002.png';
import tokyoUpscale from '../../assets/img/illustrations/tokyo_upscale.jpg';

const Home = () => {
    const classes = useStyles();
 
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
  
    const introduction_start = useRef(null);
    
    //play audio upon entering
    //const [audio] = useState(new Audio(background_music).play());
    //const audio = new Audio(background_music).play();
    
    
    return (
      <Grow in>
        <Container className={classes.Container} >
            <Typography className='font-hacked' variant='h1' xs={12}>It's 2044.</Typography>
            <Typography className={['font-hacked', 'black']} variant='h4' >And Japan has been reduced to Hokkaido.</Typography>         
            
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9} lg={12}>
                <Typography variant='body1'>In 2003, the Fukushima Daiichi Power Plant recieved a critical blow from a tidal
                tsunami created by a large earthquake. Shortly after, the facility went supercritical, forcing the Japanese Government to 
                shut down the area and evacuate en mass. Only a year after the explosion, those who tried to evacuate the estimated 
                "Fallout Area" were afflicted with a horrifying new disease known only as The Sickness. This area became abruptly unradioactive,
                and highly unstable with physics defying monstrosities appearing irregularly. 41 years later, technology has skyrocketed,
                global markets are in failure, and this area has expanded 365 miles in radius. Worst of all, those born in this area have 
                devoloped strange abilities and have been dubbed 'Field Benders' under a fledgeling government formed from the ruins of Honshu
                called JFAC. With a new force based within the heart of the area threatening to send nuclear warheads overseas, what can 
                operatives do in an attempt to stop them?</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={9} >
                    <img src={picture1} className={classes.image} ></img>
                </Grid>
        
            <Grid item xs={12} sm={12} md={12}>

            </Grid>
            
          </Grid>
          <Typography className='font-hacked' variant='h3'>How to read this work.</Typography>
          <Typography className='font-consolasregular' variant='body1'>
            To begin reading this online light novel, navigate to <Link to={'/chapters'}>chapters</Link> and start in a preferred mode. 
            For help on how to use the player or what settings to use, click on the help pop-up once within the menu.
          </Typography>
        </Container>
      </Grow>
          
    );
  };
  
  export default Home;
  