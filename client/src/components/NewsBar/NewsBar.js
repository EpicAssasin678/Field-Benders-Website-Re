//Have drawer that resizes and disappears for smaller devices
import React, { useRef, useState } from 'react';
import { Container, Grow, Grid, Paper, SwipeableDrawer, Button, List, Box, Icon, Typography, Fade} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles';

import MusicPanel from './MusicPanel/MusicPanel';
import MediaInspector from './MediaInspector/MediaInspector';
import ReaderControls from './ReaderControls/ReaderControls';

const NewsBar = () => {

    return (
        <>
        </>
    )
    
}

export default NewsBar;
