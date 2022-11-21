import { makeStyles, createTheme } from '@material-ui/core/styles';
import HackedKerx from './assets/fonts/hacked-kerx-webfont/hacked-kerx-webfont.woff2';

//TODO find a way to import and override the font styles according to classname rather than the global styles
//https://surajsharma.net/blog/react-material-ui-custom-font for inspiration

const hackedKerx = {
  fontFamily : 'HackedKerx',
  fontStyle : 'normal',
  fontWeight : '400',
  src: ` 
  local('HackedKerx),
  url(${HackedKerx}) format('woff2')
  `
}


export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  typography: {
    fontFamily: 'HackedKerx, Arial',
    
  },
  components : {
    MuiCssBaseline: {
      styleOverrides: 
      '@font-face { font-family: \'Hacked\' font-style: normal; font-display: swap; font-weight: 400; src: local(\'Hacked\'), local(Hacked-Regular), url(${HackedKerx}) format:(\'woff2\');',
    }
  },
}));
