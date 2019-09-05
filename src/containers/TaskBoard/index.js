import React, { useEffect } from 'react';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { STATUSES } from '../../constants';
import styles from './styles';
import Section from '../../components/Section';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import * as taskAction from '../../actions/task';
import * as modalAction from '../../actions/modal';
import ShowLoading from '../../components/globallLoading';
import { darkTheme } from '../../actions/darkTheme';

function App(props) {
  const {
    classes,
    taskActions,
    dark,
    themeActions,
    show,
    modalActions,
  } = props;
  const { fecthListTask } = taskActions;
  const { showModal, getModalTitle, getModalContent } = modalActions;

  useEffect(() => {
    fecthListTask();
  }, [fecthListTask]);

  function handleClickOpen() {
    showModal();
    getModalTitle('Thêm mới công việc');
    getModalContent(<TaskForm />);
  }

  function checkTheme() {
    return themeActions();
  }

  const renderBoard = () => {
    const { listTask } = props;
    const xhtml = (
      <Grid container spacing={4}>
        {STATUSES.map(item => {
          const taskFilter = listTask.filter(task => task.status === item.id);
          return <TaskList key={item.id} taskFilter={taskFilter} item={item} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: show,
      })}
    >
      <div className={dark ? classes.rootDark : classes.root}>
        <Section>
          <Box mt={2} mb={2} className={classes.boxSwith}>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonAdd}
                onClick={handleClickOpen}
              >
                <AddIcon /> Thêm mới công việc
              </Button>
            </div>
            <FormControlLabel
              label="CHỦ ĐỀ MÀU TỐI"
              className={classes.swith}
              control={
                <Switch checked={dark} color="primary" onChange={checkTheme} />
              }
              labelPlacement="start"
            />
          </Box>
        </Section>
        <Section>{renderBoard()}</Section>
        <Section>
          <ShowLoading />
        </Section>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropsTypes.object,
  taskActions: PropsTypes.shape({
    fecthListTask: PropsTypes.func,
  }),
  listTask: PropsTypes.array,
  themeActions: PropsTypes.func,
  dark: PropsTypes.bool,
  show: PropsTypes.bool,
  modalActions: PropsTypes.shape({
    showModal: PropsTypes.func,
    hideModal: PropsTypes.func,
    getModalTitle: PropsTypes.func,
    getModalContent: PropsTypes.func,
  }),
};

const mapStateToPros = state => ({
  listTask: state.task.listTask,
  dark: state.dark.darkTheme,
  show: state.dark.showDrawer,
  shModel: state.modal.showModal,
});
const mapDispatchToRops = dispatch => ({
  taskActions: bindActionCreators(taskAction, dispatch),
  themeActions: bindActionCreators(darkTheme, dispatch),
  modalActions: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(
  mapStateToPros,
  mapDispatchToRops,
);

export default compose(
  withStyles(styles),
  withConnect,
)(App);
