import React, { useEffect, useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';

import './about.css';
import '../../assets/fonts/stylesheet.css';

import picture1 from '../../assets/img/illustrations/002.png';

const About = () => {
    const classes = useStyles();
    const [currentFont, changeCurrentFont] = useState('Heebo');
    const dispatch = useDispatch();
    const history = useHistory();

    const introduction_start = useRef(null);


    //play audio upon entering
    //const [audio] = useState(new Audio(background_music).play());
    
    const handleFontButtonClick = (event) => {
        
        
    }

    useEffect( ()=> {
      
    }, [currentFont])
    
    //TODO implement buttons
    return (
      <Grow in>
        <Container className={classes.Container}>
            
            <Typography className='font-hacked' variant='h1' xs={12} align="left">About the Site</Typography>
            <Typography className='font-consolas' variant='body1' >This site was created out of a personal passion and desire to feature my installments of a novel into a format
            that is more distributeable, and immersive. A traditional ebook doesn't hold the same gravity as an interactive web novel does, therefore I'm preferential to visual aid and 
            auditory aid. I know that a normal ebook would allow you to read the same content, but out of sympathy for those of you with visualization issues like me, I wanted this world
            to still come across to you as vividly as it did in my dreams. Because I have spent so much time into this project in the last three months, I would like to document my stylistic 
            choices, as well as give credit for the tools I'm using.</Typography>         
            <Typography className='font-hacked' variant='h4' xs={12} align="left">Typography</Typography>
            
            <Grid container justify="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            
            <Grid item justifyContent='center' >
              <Button className={'font-hacked'} onClick={handleFontButtonClick('hacked')}><p class="font-hacked button-text">This is HACKED</p></Button>
              <Button className={'font-krishna'} onClick={handleFontButtonClick('krishna')}><p class="font-krishna button-text">This is krishna</p></Button>
              <Button className={'font-swiss'} onClick={handleFontButtonClick('swiss')}><p class="font-swiss button-text">This is swiss721</p></Button>
              <Button  className={['font-consolas', 'large']} onClick={handleFontButtonClick('consolas')}><p class="font-consolas button-text">This is consolas</p></Button>
            </Grid>
            <Grid item>

            </Grid>
            <Grid item>
            </Grid>
            <Grid item >
            </Grid>

            <Grid item xs={12} sm={6} md={12} lg={12}>
              <Typography variant='h1' className={`${currentFont}`}>This is heading 1.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <Typography variant='h2' className={`${currentFont}`}>This is heading 2.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <Typography variant='h3' className={`${currentFont}`}>This is heading 3.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <Typography variant='h4' className={`${currentFont}`}>This is heading 4.</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='body1' className={`${currentFont}`}>This is body.</Typography>

            </Grid>
            
            <Grid item xs={12} sm={12} md={12}>

            </Grid>
            
          </Grid>
          <Typography className='font-hacked' variant='h3'>Technology Used</Typography>
          <Typography className='font-consolasregular' variant='body1'>

          </Typography>
          
        </Container>
      </Grow>
    );
  };
  
  export default About;
  