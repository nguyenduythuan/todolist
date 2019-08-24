import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    parimary: '#D32F2f',
    secondary: '#00BCD4',
    error: '#E64A19',
    backgroundColor: '#fafafa',
    bgHeader: '#2c2c2c',
    backgroundBody: '#121212',
    backgroundColorDark: '#282828',
    textColorDark: 'white !important',
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
