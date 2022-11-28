import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HackedKerx from '../../assets/fonts/hacked-kerx-webfont/hacked-kerx-webfont.woff2';

export default makeStyles((theme) => ({
  
  Container: {
    
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
     
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
}));