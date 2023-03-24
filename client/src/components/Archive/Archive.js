import { Button, Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';
import {TerminalRunner} from './Terminal/TerminalRunner.tsx';
import {useHistory} from 'react-router-dom';

const Archive = () => { 

    const classes = useStyles();
    const history = useHistory();

    return (
        <>
           <TerminalRunner className='crt-filter'/>
        </>
    );
}

export default Archive;

/**
 *                 <Grid item>
                    <Typography variant='h1' className={`font-hacked black`}>Archive</Typography>
                    
                </Grid>
 */