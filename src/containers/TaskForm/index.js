import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/styles';
import PropsTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';

import styles from './styles';
import { hideModal } from '../../actions/modal';
import { addTask } from '../../actions/task';
import renderTextField from '../../components/FormHelper/TextFiled';
import validate from './validate';

function TaskForm(props) {
  const {
    classes,
    onHideModal,
    handleSubmit,
    invalid,
    submitting,
    taskAction,
  } = props;

  function handleSubmitForm(data) {
    const { title, description } = data;
    taskAction(title, description);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Field
            name="title"
            label="Tiêu đề"
            className={classes.textField}
            margin="normal"
            component={renderTextField}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            label="Mô tả"
            name="description"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            component={renderTextField}
          />
        </Grid>
        <Grid item md={12} className={classes.gridBt}>
          <Button
            className={classes.btLeft}
            variant="outlined"
            color="primary"
            type="submit"
            disabled={invalid || submitting}
          >
            Lưu lại
          </Button>
          <Button
            className={classes.btRight}
            variant="outlined"
            onClick={onHideModal}
            color="secondary"
          >
            Hủy bỏ
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

TaskForm.propTypes = {
  classes: PropsTypes.object,
  onHideModal: PropsTypes.func,
  handleSubmit: PropsTypes.func,
  invalid: PropsTypes.bool,
  submitting: PropsTypes.bool,
  taskAction: PropsTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onHideModal: bindActionCreators(hideModal, dispatch),
  taskAction: bindActionCreators(addTask, dispatch),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
