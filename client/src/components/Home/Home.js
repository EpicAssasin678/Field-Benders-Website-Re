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

import picture1 from '../../assets/img/illustrations/002.png';
import picture2 from '../../assets/img/illustrations/far_off_01.png';
import tokyoUpscale from '../../assets/img/illustrations/tokyo_upscale.jpg';
import liveWallpaper from '../../assets/vid/live_wallpaper.mp4';

import trainImage from '../../assets/img/illustrations/000043.1.png';

import NewsBar from '../NewsBar/NewsBar';



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
        
        <Grid container className={`${classes.gridContainer} `}  direction={'row'} >

          <Grid item lg={8} className={`${classes.mainContentItem}`}>
            <div className={`glitch-container typewriter-container`}>
              <Typography className={`font-hacked ${classes.testClass}`} variant='h1' xs={12}>It's 2044.</Typography>
              <Typography className={`font-hacked black`} variant='h4' >And Japan has been reduced to Hokkaido</Typography>         
            </div>

              <Grid container justify="flex-start"  spacing={3} className={`${classes.gridContainer}`} >
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant='body1' className={classes.textJustify}>In 2003, the Fukushima Daiichi Power Plant recieved a critical blow from a tidal
                  tsunami created by a large earthquake. Shortly after, the facility went supercritical, forcing the Japanese Government to 
                  shut down the area and evacuate en mass. Only a year after the explosion, those who tried to evacuate the estimated 
                  "Fallout Area" were afflicted with a horrifying new disease known only as The Sickness. This area became abruptly unradioactive,
                  and highly unstable with physics defying monstrosities appearing irregularly. 41 years later, technology has skyrocketed,
                  global markets are in failure, and this area has expanded 365 miles in radius. Worst of all, those born in this area have 
                  devoloped strange abilities and have been dubbed 'Field Benders' under a fledgeling government formed from the ruins of Honshu
                  called JFAC. With a new force based within the heart of the area threatening to send nuclear warheads overseas, what can 
                  operatives do in an attempt to stop them?</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} >
                      <img src={picture1} className={`${classes.image} ${classes.flexCenter}`} ></img>
                  </Grid>
                  <Grid item md={6} xs={12}>
                      <img src={picture2} className={`${classes.image} ${classes.imageForDesktopOnly}`}></img>

                  </Grid>
              </Grid>

            <Typography variant='h3' className='font-hacked black'>A WORLD OF CHARACTERS</Typography>
            <Typography variant='body1' className='black'>Delve deep into a lore rich world, explore it's many articles, pictures, and locations.
              With over 250+ custom made pieces of content and more to come, the world of FIELD Benders is lake you can look at in one view, but swim in for 
              days. Explore the various folk legends of 2044 Honshu, look at the destruction caused under the Anomaly, read the demonstrations of technology,
              and do more in FIELD Benders Web! While the stable version of the reader is in open alpha, all chapters provided are readable at your leisure.
              This site is intended truly for desktop users, and reccomended for a fullscreen browse especially, but if you are using a mobile device don't 
              sweat! This site hase you covered, most content is not only compatible with mobile—but is modified for a custom experience. Never worry about 
              how you'll read again. 
            </Typography>

            <Typography variant='h3' className='font-hacked black'>FREE TO READ</Typography>
            <Typography variant='body1' className='black'>Because of my personal beliefs when it comes to art, I would like to say that FIELD Benders and it's 
              primary bulk of content will always remain free to read on this website. E-book will be an option soon in installments, when such event arises, 
              please check back in for our Amazon book listing!
            </Typography>
            <Typography className='font-hacked black' variant='h3'>How to read this work.</Typography>
            <Typography className='font-consolasregular' variant='body1'>
              To begin reading this online light novel, navigate to <Link to={'/chapters'}>chapters</Link> and start in a preferred mode. 
              For help on how to use the player or what settings to use, click on the help pop-up once within the menu.
            </Typography>

          </Grid>
          <Grid item>

          </Grid>
          <Grid item className={`newsbar-container ${classes.newsBarContainer}`} lg={4}>
            <NewsBar class={`${classes.newsBar}`}/>
          </Grid>
        </Grid>
        
    </Grow>
        
          
    );
  };
  
  export default Home;
  
  /**
      <Grow in>
        <Grid container>
          <Grid item>
            <Container className={classes.Container} >
                <div className={`glitch-container typewriter-container`}>
                  <Typography className={`font-hacked ${classes.testClass}`} variant='h1' xs={12}>It's 2044.</Typography>
                  <Typography className={`font-hacked black`} variant='h4' >And Japan has been reduced to Hokkaido</Typography>         
                </div>

                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={`${classes.gridContainer}`} >
                    <Grid item xs={12} sm={6} md={9} lg={12}>
                    <Typography variant='body1' className={classes.textJustify}>In 2003, the Fukushima Daiichi Power Plant recieved a critical blow from a tidal
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
                        <img src={picture1} className={`${classes.image} ${classes.flexCenter}`} ></img>
                    </Grid>
                </Grid>

              <Typography className='font-hacked' variant='h3'>How to read this work.</Typography>
              <Typography className='font-consolasregular' variant='body1'>
                To begin reading this online light novel, navigate to <Link to={'/chapters'}>chapters</Link> and start in a preferred mode. 
                For help on how to use the player or what settings to use, click on the help pop-up once within the menu.
              </Typography>
            </Container>

          </Grid>
          <Grid item justifyContent='flex-end'>
            <NewsBar />
          </Grid>
        </Grid>
      </Grow>






<Grow in>
        
          <Grid container className={`${classes.gridContainer} `}  direction={'column'} >

            <Grid item>
              <div className={`glitch-container typewriter-container`}>
                <Typography className={`font-hacked ${classes.testClass}`} variant='h1' xs={12}>It's 2044.</Typography>
                <Typography className={`font-hacked black`} variant='h4' >And Japan has been reduced to Hokkaido</Typography>         
              </div>

                <Grid container justify="flex-start"  spacing={3} className={`${classes.gridContainer}`} >
                    <Grid item xs={12} sm={6} md={9} lg={12}>
                    <Typography variant='body1' className={classes.textJustify}>In 2003, the Fukushima Daiichi Power Plant recieved a critical blow from a tidal
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
                        <img src={picture1} className={`${classes.image} ${classes.flexCenter}`} ></img>
                    </Grid>
                </Grid>
            
            </Grid>
            <Grid item>
              <Typography className='font-hacked' variant='h3'>How to read this work.</Typography>
              <Typography className='font-consolasregular' variant='body1'>
                To begin reading this online light novel, navigate to <Link to={'/chapters'}>chapters</Link> and start in a preferred mode. 
                For help on how to use the player or what settings to use, click on the help pop-up once within the menu.
              </Typography>

            </Grid>
            <Grid item className={`newsbar-container ${classes.newsBarContainer}`}>
              <NewsBar />
            </Grid>
          </Grid>
          
      </Grow>
          



   */