const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 0,
    width: 300,
  },
  themeForm: {
    width: 400,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    backgroundColor: theme.color.backgroundColor,
    color: theme.color.textColor,
  },
  gridBt: {
    textAlign: 'center',
  },
  btRight: {
    marginLeft: 5,
  },
  btLeft: {
    marginRight: 5,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 10px',
    color: 'white',
    backgroundColor: '#090988',
  },
  form: {
    padding: '20px 30px',
  },
});

export default styles;
