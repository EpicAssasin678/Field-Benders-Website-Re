import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';
import NewsForm from './NewsForm/NewsForm';


import '../../assets/fonts/stylesheet.css';


const Admin = () => {
    const classes = useStyles();
 
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
  
    const introduction_start = useRef(null);
    
    //play audio upon entering
    //const [audio] = useState(new Audio(background_music).play());
    

    
    return (
      <Grow in>
        <Container className={classes.Container}>
            <Grid container direction={'row'}>
              <Grid item>
                <Typography variant='h1'> Create a news post. </Typography>
                <NewsForm />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='h1'>Manage gallery posts. </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h1'>Manage users. </Typography>
            </Grid>
        </Container>
      </Grow>
    );
  };
  
  export default Admin;
  