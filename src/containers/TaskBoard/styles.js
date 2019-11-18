const drawerWidth = 240;
const styles = theme => ({
  root: {
    padding: 40,
  },
  rootDark: {
    padding: 40,
    backgroundColor: theme.color.backgroundBody,
    color: theme.color.textColorDark,
    height: '100vh',
  },
  buttonAdd: {
    marginRight: 20,
  },
  boxSwith: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  swith: {
    color: '#757575',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

export default styles;
