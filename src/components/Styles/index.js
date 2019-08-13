import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f50b5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#fff',
    },
    dark: '#212121',
    err: red,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;