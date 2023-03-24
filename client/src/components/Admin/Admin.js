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
import NewsPosts from '../NewsPosts/NewsPosts';

import '../../assets/fonts/stylesheet.css';
import Input from '../Auth/Input';
import { signAdminIn } from '../../actions/auth';
import { getNewsPosts } from '../../actions/newsPosts';


const Admin = () => {


  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [admin, toggleAdmin] = useState(false);
  const [currentId, setCurrentId] = useState(0);


  const user = JSON?.parse(localStorage.getItem("profile"));
  let adminUser = JSON?.parse(localStorage.getItem('adminProfile'));
  

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const introduction_start = useRef(null);
  
  //play audio upon entering
  //const [audio] = useState(new Audio(background_music).play());

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signAdminIn(form, history));
    console.log(JSON?.parse(localStorage.getItem('adminProfile')));
    if (JSON?.parse(localStorage.getItem('adminProfile'))) {
      toggleAdmin(true);
    }
  }

  const handleAdminLogout = () => {
    
  }

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  
  dispatch(getNewsPosts(1));
  if (admin) {
    
    
    return (
      <Grow in>
      <Container className={classes.Container}>
          <Grid container direction={'row'} spacing={2}>
            <Grid item lg={12}>
              <NewsForm/>
            </Grid>
            <Grid item lg={12}>
              <Paper className={classes.newsPostPaper}>
                <Typography variant='h4'>Manage gallery posts. </Typography>
              </Paper>
            </Grid>
            <Grid item lg={12}>
              <Paper className={classes.newsPostPaper}>
                <Typography variant='h4'>Manage users. </Typography>
              </Paper>
            </Grid>
          </Grid>
      </Container>
    </Grow>
    )

  } else {

    return (
      <Container component={'main'} maxWidth={'xs'}>
        <Paper className={classes.paper} elevation={6}>
          <Typography component={'h1'} variant='h5'>Sign In to Admin Dashboard</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>

              <Input name="username" label="username" handleChange={handleChange} type="username"/>
              <Input name="email" label="email" handleChange={handleChange} type="email"/>
              <Input name="password" label="password" handleChange={handleChange} type="passowrd"/>
              
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign In
              </Button>
            
            </Grid>

          </form>
        </Paper>
      </Container>
    );
  };
}
  
  export default Admin;
  