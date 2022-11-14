import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';

import './chapters.css';
import '../../assets/fonts/stylesheet.css';




const Chapters = () => {
    const classes = useStyles();
 
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    //const history = useHistory();
  
    const introduction_start = useRef(null);
    
    //generate chapter titles from database
    function generate(element) {
      return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }
    

    
    return (
      <Grow in>
        <Container className={classes.Container}>

          <Grid container justify="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Typography variant='h3' xs={12}>CHAPTERS</Typography>
            <Grid item xs={12} sm={6} md={9} lg={12}>

            </Grid>
            <Grid item xs={12} sm={6} md={9}>

            <List dense={true}>
              {generate(
                <ListItem>
                  <FolderIcon />
                  <ListItemText 
                    classes={'chapter-item'}
                    className={classes.chapterListItem}
                    primary="Single-line item"
                    secondary={'${generate}' ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>

            </Grid>
      
          <Grid item xs={12} sm={6} md={9}>
              <Typography variant='p'></Typography>
          </Grid>

          </Grid>
            <div ref={introduction_start}>

            </div>
        </Container>
      </Grow>
    );
  };
  
  export default Chapters;
  