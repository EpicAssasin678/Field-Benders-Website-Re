import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HackedKerx from '../../assets/fonts/hacked-kerx-webfont/hacked-kerx-webfont.woff2';
import {palette} from '../../styles';

export default makeStyles((theme) => ({
  ':root ': {

  },
  Container: {
    //backgroundColor: 'yellow'
  },
  mainContentItem: {
    [theme.breakpoints.down('lg')] : {
      paddingRight: '2%',
    },
    [theme.breakpoints.down('sm')] : {
      paddingRight: '1%',
    }
  },
  testClass: {
    //color: palette.primaryRed,
  },
  newsBar: {
    display: 'block',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')] : {
      display: 'none',
      justifyContent: 'center',
      marginLeft: '0',
      marginTop: '2%'
    }
  },
  newsBarContainer: {
    /**
     * 
     minWidth: '50%',
     minHeight: '50%',
     display: 'flex',
     flexDirection: 'flex-end'
     */
    flexDirection: 'flex-end',
    objectFit: 'contain',
    display: 'flex'
  },
  //change the breakpoints if main div changed to center aligned item
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    marginBottom: '5px',
    
    [theme.breakpoints.down('xs')]: {
      minWidth: '50%',
      minHeight: "100%"
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '50%',
      minHeight: "100%"
    }
  },
  imageForDesktopOnly: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
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