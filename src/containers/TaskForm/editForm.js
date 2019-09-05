import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/styles';
import PropsTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';

import styles from './styles';
import { hideModal } from '../../actions/modal';
import { editTask } from '../../actions/task';
import renderTextField from '../../components/FormHelper/TextFiled';
import validate from './validate';

function EditForm(props) {
  const {
    classes,
    onHideModal,
    handleSubmit,
    invalid,
    submitting,
    onEditTask,
    initialValues,
  } = props;

  function handleSubmitForm(data) {
    const task = {
      ...data,
      status: Number(data.status),
      id: initialValues.id,
    };
    onEditTask(task);
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
        <Grid item md={12}>
          <Field
            select
            name="status"
            className={classes.textField}
            SelectProps={{
              native: true,
            }}
            helperText="Tiến độ công việc"
            margin="normal"
            component={renderTextField}
          >
            <option value={0}>Ready</option>
            <option value={1}>In profress</option>
            <option value={2}>Completed</option>
          </Field>
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

EditForm.propTypes = {
  classes: PropsTypes.object,
  onHideModal: PropsTypes.func,
  handleSubmit: PropsTypes.func,
  invalid: PropsTypes.bool,
  submitting: PropsTypes.bool,
  onEditTask: PropsTypes.func,
  initialValues: PropsTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onHideModal: bindActionCreators(hideModal, dispatch),
  onEditTask: task => dispatch(editTask(task)),
});

const mapStateToProps = state => ({
  initialValues: {
    title: state.task.taskEdit.title,
    status: state.task.taskEdit.status,
    description: state.task.taskEdit.description,
    id: state.task.taskEdit.id,
  },
});

const FORM_NAME = 'TASK_EDIT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(EditForm);
