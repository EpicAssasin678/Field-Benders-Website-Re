
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  toggleSwitch : {
    display: 'flex',
    justifyContent: 'center'
  },
  switchText : {
    display: 'flex',
    justifyContent: 'center'
  },
  
  

}));