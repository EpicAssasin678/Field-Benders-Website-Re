import React, {useState} from 'react';

import { Typography, Grid, Container, Switch} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const ReaderControls = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container alignContent='center' direction='column' justifyContent='center'>
                <Grid item alignContent='center' className={classes.switchText}>
                    <Typography variant='body1' >Beta Reader</Typography>

                </Grid>
                <Grid item className={classes.toggleSwitch}>

                <Switch color={'black'}  />
                </Grid>

                <Grid item alignContent='center' className={classes.switchText}>
                    <Typography variant='body1' >Normal Reader</Typography>

                </Grid>
                <Grid item className={classes.toggleSwitch}>

                <Switch  defaultChecked />
                </Grid>

            </Grid>
                
        


        </>
    )

}

export default ReaderControls;
