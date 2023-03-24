import React from 'react'; 
import { Grow, Typography } from '@material-ui/core';


const InProgress = () => {

    return (
        <Grow in>
            <Typography variant='h4' className={`font-consolas typewriter-effect`} align='center'>work in progress.</Typography>
            <Typography variant='body' className={`font-consolas blink-effect`} align='center'>come back when it's finished!</Typography>
        </Grow>
    )
    
}


export default InProgress;