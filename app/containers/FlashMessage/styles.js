const styles = theme => ({
  snackBarContainer: {
    top: 25,
  },
  snackBar: {
    marginBottom: theme.spacing(1),
  },
  snackBarContent: {
    display: 'flex',
    position: 'relative',
    minWidth: 300,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    flex: 5,
  },
  action: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  successType: {
    background: theme.palette.primary.main,
  },
  errorType: {
    background: theme.palette.error.main,
  },
  defaultType: {
    background: theme.palette.common.grey600,
  },
});

export default styles;
