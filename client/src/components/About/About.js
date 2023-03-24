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
            <Typography className='font-hacked black' variant='h4' xs={12} align="left">Typography</Typography>
            <Typography className='typography-explanation-section font-consolas' align='left' variant='body' xs={12}>The following below shows the typography and the fonts used within the site,
            most are creative comomons.
            </Typography>

            <Grid container justify="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            
            <Grid item justifyContent='center' >
              <Button className={'font-hacked'} onClick={() => changeCurrentFont('font-hacked')} ><p class="font-hacked button-text">This is HACKED</p></Button>
              <Button className={'font-krishna'} onClick={() => changeCurrentFont('font-krishna')}><p class="font-krishna button-text">This is krishna</p></Button>
              <Button className={'font-swiss'} onClick={() => changeCurrentFont('font-swiss')}><p class="font-swiss button-text">This is swiss721</p></Button>
              <Button  className={['font-consolas', 'large']} onClick={() => changeCurrentFont('font-consolas')}><p class="font-consolas button-text">This is consolas</p></Button>
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
          <Typography className='font-hacked black' variant='h3'>Technology Used</Typography>

          <Typography className='font-consolasregular' variant='body1'>
            This site is powered by React! Additionally, the site is using the MERN stack model and is implementing 
            the redux pattern. This also uses some thunks along with mongoDB! 
          </Typography>

          <Typography className='font-hacked black' variant='h3'>Free Policy</Typography>
          <Typography className='font-consolasregular' variant='body1'>
            Due to the fact that at the moment, I have zero monetary gain from this site, donations and support is appreciated. Time, server uptime, domain registration,
            and comission work as well as publishing cost are all out-of-pocket expenses that I have to pay for and  therefore money is tight. I'd love to improve the 
            quality of this site and implement new and interesting features, but without the money and resources to justify it, I really can't. 
          </Typography>
          <Typography className='font-hacked black' variant='h5'>How to Support the Project</Typography>
          <Typography className='font-consolasregular' variant='body1'>
            To support the project
            on a monthly basis which is the preferred method of support, you can check the patreon link <a href='https://patreon.com/fieldbenders?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link'>here</a> or at 
            the navbar/footer and subscribe. To make a single, one-time donation, use the you 
            can send money to my PayPal request link <a href='https://www.paypal.me/zacheryuporsky'>here</a> or anytime on the footer under the paypal link. 
          </Typography>
          
        </Container>
      </Grow>
    );
  };
  
  export default About;
  