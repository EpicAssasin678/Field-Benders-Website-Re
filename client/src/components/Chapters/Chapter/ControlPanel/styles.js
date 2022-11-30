
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center'
  },
  playControls: {
    width: 'inherit',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  volumeComponent: {
    width: 'inherit',
    alignContent: 'center',
    flexDirection: 'row'
  }
  
  

}));

