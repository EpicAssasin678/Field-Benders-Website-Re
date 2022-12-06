import { makeStyles } from "@material-ui/core";

//constant values
const backDropPadding = '2%';

export default makeStyles ((theme) => ({
    newsBarTitle: {
        
    },
    newsBar : {
        justifyContent: 'flex-end',
        
    },
    newsBarBackDrop: {
        paddingLeft: backDropPadding,
        paddingRight: backDropPadding,
        paddingBottom: backDropPadding,
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    }

}));