import React from 'react'; 
import { Grid, Grow, Typography } from '@material-ui/core';


const InProgress = () => {

    return (
        <Grow in>
            <Grid container direction='row' align='center' justifyContent='center'> 
                <Grid item className={`typewriter-container`}>
                    <Typography variant='h4' className={`font-consolas typewriter-effect`} align='center'>work in progress.</Typography>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <Typography variant='body' className={`font-consolas blink-effect`} align='center'>come back when it's finished!</Typography>

                </Grid>
            </Grid>
        </Grow>
    )
    
}


export default InProgress;