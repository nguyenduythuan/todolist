import { createMuiTheme } from '@material-ui/core/styles';

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
    dark: {
      main: '#000000',
      contrastText: '#fff',

      //   background-color: #121212;
      // color: #fff;

      //   max-width: 100%;
      // margin-bottom: 20px;
      // background-color: #282828;
      // color: white !important;max-width: 100%;
      // margin-bottom: 20px;
      // background-color: #282828;
      // color: white !important;
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
