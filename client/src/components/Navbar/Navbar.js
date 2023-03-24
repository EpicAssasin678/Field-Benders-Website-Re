import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Icon, IconButton } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import jfacLogo from '../../assets/img/logo/JFAC-logo.png';
import fieldBendersLogo from '../../assets/img/logo/field_benders_logo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import './appbar.css';

/**
 * Navagition bar for the website 
 * @param {*} props 
 * @returns 
 */
const Navbar = (props) => {
  console.log(`Navbar mounted`);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const patreonLink = 'https://patreon.com/fieldbenders?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link';
  
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={`${classes.appBar} appbar`} position="static" color="inherit">
      <Link to="/">
        <img className = {classes.image} component={Link} to="/home" src={fieldBendersLogo} alt="icon" height="40px" />
      </Link>

      
      <Button className={classes.brandContainer} component={Link} to="/chapters">chapters</Button>
      <Button className={classes.brandContainer} component={Link} to="/archive">archive</Button>
      <Button className={classes.brandContainer} component={Link} to="/about">about</Button>
      <Button className={classes.brandContainer} component={Link} to="/gallery">Gallery</Button>
      <Button className={classes.brandContainer} component={Link} to="/archive/articles">Articles</Button>
      <Button className={classes.brandContainer} component={Link} to="/archive/terminal">Terminal</Button>
      <Button className={classes.brandContainer} href={patreonLink}>Patreon</Button>
      
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/**
 *    
 *    <Link to="/" className={classes.image}>
        <img component={Link} to="/" src={fieldBendersLogo} alt="icon" height="100px" />
      </Link>
      <Link to="/chapters" className={classes.brandContainer}>
        <Button component={Link} to="/chapters">chapters</Button>
      </Link>
      <Link to="/archive" className={classes.brandContainer}>
        <Button component={Link} to="/archive">the_archive</Button>
      </Link>
      <Link to="/about" className={classes.brandContainer}>
        <Button component={Link} to="/about">about</Button>
      </Link>
      <Link to="/gallery" className={classes.brandContainer}>
        <Button component={Link} to="/gallery">about</Button>
      </Link>
 */