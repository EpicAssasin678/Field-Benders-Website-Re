import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HackedKerx from '../../assets/fonts/hacked-kerx-webfont/hacked-kerx-webfont.woff2';

export default makeStyles((theme) => ({
  ':root ': {
    
  },
  Container: {
    //backgroundColor: 'yellow'
  },
  //change the breakpoints if main div changed to center aligned item
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    
    [theme.breakpoints.down('xs')]: {
      minWidth: '50%',
      minHeight: "100%"
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '50%',
      minHeight: "100%"
    }
  },
  flexCenter: {
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center',
      
    },
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
    },
  },
  typography: {
    
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
  gridContainer: {  
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      
    },
  },
  textJustify : {
    textAlign: "justify",
  },
}));