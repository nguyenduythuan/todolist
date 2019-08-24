import React from 'react';

import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import PropsTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Clear';

import { Grid, Button } from '@material-ui/core';

import styles from './styles';
// className={classes.themDark}

function TaskItem(props) {
  const { open, classes, onClose } = props;
  const [state, setState] = React.useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  console.log(state);

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.themeForm}>
        <div className={classes.header}>
          <Typography variant="h6">Thêm mới công việc</Typography>
          <CloseIcon onClick={onClose} />
        </div>
        <form className={classes.form}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <TextField
                id="standard-name"
                label="Tiêu đề"
                name="title"
                className={classes.textField}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="standard-multiline-flexible"
                label="Mô tả"
                name="note"
                multiline
                rowsMax="4"
                onChange={handleChange}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} className={classes.gridBt}>
              <Button
                className={classes.btLeft}
                variant="outlined"
                color="primary"
                type="submit"
              >
                Lưu lại
              </Button>
              <Button
                className={classes.btRight}
                variant="outlined"
                onClick={onClose}
                color="secondary"
              >
                Hủy bỏ
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
}

TaskItem.propTypes = {
  classes: PropsTypes.object,
  open: PropsTypes.bool,
  onClose: PropsTypes.func,
};

export default withStyles(styles)(TaskItem);
