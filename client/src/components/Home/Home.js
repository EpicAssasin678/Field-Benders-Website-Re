import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';



const Home = () => {
    const classes = useStyles();
 
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    const history = useHistory();
  

  
    return (
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Button>Home</Button>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>

            </Grid>
          </Grid>
        </Container>
      </Grow>
    );
  };
  
  export default Home;
  