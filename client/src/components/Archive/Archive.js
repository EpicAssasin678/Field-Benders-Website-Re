import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';
import {TerminalRunner} from './Terminal/TerminalRunner.tsx';

const Archive = () => { 

    const classes = useStyles();

    return (
        <>
            
            <Grid container className={[classes.gridContainer]} xs={12} justifyContent={'center'}>
                <Grid item>
                    <Typography variant='h1' className={`font-hacked black`}>Archive</Typography>
                    
                </Grid>
            </Grid>
                    <TerminalRunner />
                
        </>
    );
}

export default Archive;
