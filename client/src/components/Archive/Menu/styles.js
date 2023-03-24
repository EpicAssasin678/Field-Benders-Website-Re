import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
    Container: {
      justifyContent: 'center',
    },
    image: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
       
    },
    typography: {

      margin: '10px'
    },
    card: {
      margin: '2.5%',
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
    hoverable: {
      '&:hover': {
        backgroundColor: '#rgba(237, 239, 242, 0.9)', // Change this to the desired hover color
        cursor: 'pointer', // Change this to the desired cursor type
      },
    },
  }));