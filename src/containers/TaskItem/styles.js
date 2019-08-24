const styles = theme => ({
  card: {
    maxWidth: '100%',
    marginBottom: 20,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  cardDark: {
    maxWidth: '100%',
    marginBottom: 20,
    color: theme.color.textColorDark,
    backgroundColor: theme.color.backgroundColorDark,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  fab: {
    margin: theme.spacing(1),
  },
  styleP: {
    fontSize: '0.75rem',
  },
  gridRight: {
    textAlign: 'right',
  },
  cardTitle: {
    flexGrow: 1,
  },
});

export default styles;
