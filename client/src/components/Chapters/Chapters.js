import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, TextField, Button, Paper, Typography, ListItem, IconButton, Avatar, ListItemText, List} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListItemIcon from '@material-ui/icons/ListOutlined';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';

import Player from '../Player/Player';
import Pagination from '../Pagination';
import useStyles from './styles';

import './chapters.css';
import '../../assets/fonts/stylesheet.css';

import chapterData from './ChapterData.json';

//TODO make chapters meta stored in DB and create list that way

const Chapters = () => {
    const classes = useStyles();
 
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    //const history = useHistory();
  
    const introduction_start = useRef(null);
    
    //generate chapter titles from database
    const chapters = chapterData.Chapters;
    
    return (
      <Grow in>
        <Container className={classes.Container}>
          <Typography className={'font-hacked'} align = 'center' variant='h3' xs={12}>CHAPTERS</Typography>
          <Grid container justifyContent="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item lg={true} md={12} sm={12} xs={12}>

            </Grid>
            <Grid item xs={12} sm={6} md={9}>


              <List dense={true}>
                {chapters.map((value) => (
                  <ListItem key={value}>
                    
                    <Button id={`button${chapters.indexOf(value)+1}`} component={Link} to={`/chapter${chapters.indexOf(value)+1}`}>
                      <FolderIcon className='chapterlist-icon'/>
                    </Button>
                  
                    <ListItemText
                    className={classes.chapterListItem}
                    primary={`Chapter ${chapters.indexOf(value)+1}`}
                    secondary= {value}
                    />
                  </ListItem>
                  
                ))}
 
              </List>
            </Grid>
      
          <Grid item xs={12} sm={6} md={9}>
              <Typography variant='body1'></Typography>
          </Grid>

          </Grid>

        </Container>
      </Grow>
    );
  };
  
  export default Chapters;
  