import { Button, Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';
import {TerminalRunner} from './Terminal/TerminalRunner.tsx';
import {useHistory} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const Menu = () => { 

    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Grid container direction={'row'}>
                <Grid item lg={6}>
                    <Grid item className='archive-screen-paper'>

                        <Card className={[classes.card, classes.hoverable]}>
                            <CardActionArea>

                                <Typography variant={'h3'} className={['font-hacked archive-content-paper', classes.typography]}>Articles</Typography>
                                <Typography variant='body' className={['font-consolas ', classes.typography]}>
                                    Explore the vast database of articles within the JFAC archives.
                                </Typography>

                            </CardActionArea>
                        </Card>

                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <Grid item className='archive-screen-paper'>
                    <Card className={[classes.card, classes.hoverable]}>
                        <CardActionArea>
        
                            <Typography variant='h3' className={['font-hacked archive-content-paper', classes.typography]}>Terminal</Typography>
                            <Typography variant='body' className={['font-consolas ', classes.typography]}>
                                Log into a local syslin JFAC computer terminal within the Bastion Semper 
                                headquarters.
                            </Typography>
                            
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Grid>
             
        </>
    );
}

export default Menu;