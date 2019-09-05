const useStyle = theme => ({
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 10px',
    color: 'white',
    backgroundColor: '#090988',
  },
});

export default useStyle;
