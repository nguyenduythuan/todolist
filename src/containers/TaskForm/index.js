import React from 'react';

import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropsTypes from 'prop-types';

import styles from './styles';

function TaskItem(props) {
  const { open, classes, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Dialog Content
        </DialogContentText>
        <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        // onChange={handleChange('name')}
        margin="normal"
      />
        <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        // onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
      </Button>
        <Button onClick={onClose} color="primary">
          Ok
      </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskItem.propTypes = {
  classes: PropsTypes.object,
  open: PropsTypes.bool,
  onClose: PropsTypes.func,
};

export default withStyles(styles)(TaskItem);
