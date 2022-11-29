import React, {useState} from 'react';

import { Typography, Grid, Container} from '@material-ui/core';

import ListItemIcon from '@material-ui/icons/ListOutlined';
import ListIcon from '@material-ui/icons/List';
import PlayArrow from'@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import useStyles from './styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

//TODO implement map -> (name, path, alt) => cards

const MediaInspector = (media) => {

}

export default MediaInspector;