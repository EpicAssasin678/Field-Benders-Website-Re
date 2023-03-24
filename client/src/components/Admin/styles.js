import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  Container: {
    
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
     
  },
  dashBoardElementItem : {
    padding: theme.spacing(2), 
    marginLeft: '2.5%',
  },
  newsPostPaper: {
    padding: '5px',
  },
  typography: {
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
    appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  submit : {
    margin: theme.spacing(3, 0, 2),

  },
  gridContainer: {  
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      
    },
  },
}));