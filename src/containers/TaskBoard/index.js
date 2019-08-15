import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { STATUSES } from '../../constants';
import styles from './styles';
import Section from '../../components/Section';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import * as taskAction from '../../actions/task';
import ShowLoading from '../../components/globallLoading';

function App(props) {
  const [check, setCheck] = React.useState(false);
  const { classes, taskActions } = props;
  const { fecthListTask } = taskActions;
  const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   fecthListTask();
  // }, [fecthListTask]);

  function loadData() {
    return fecthListTask();
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
  const renderForm = () => {
    const xhtml = <TaskForm open={open} onClose={handleClose} />;
    return xhtml;
  };
  return (
    <div className={check ? classes.rootDark : classes.root}>
      <Section>
        <Box mt={2} mb={2} className={classes.boxSwith}>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonAdd}
              onClick={loadData}
            >
              Load data
            </Button>
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
            control={
              <Switch
                value={false}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={setCheck(true)}
              />
            }
            label={!check ? 'Màu sáng' : 'Màu tối'}
          />
        </Box>
      </Section>
      <Section>{renderBoard()}</Section>
      <Section>{renderForm()}</Section>
      <Section>
        <ShowLoading />
      </Section>
    </div>
  );
}

App.propTypes = {
  classes: PropsTypes.object,
  taskActions: PropsTypes.shape({
    fecthListTask: PropsTypes.func,
  }),
  listTask: PropsTypes.array,
};

const mapStateToPros = state => ({
  listTask: state.task.listTask,
});
const mapDispatchToRops = dispatch => ({
  taskActions: bindActionCreators(taskAction, dispatch),
});

export default withStyles(styles)(
  connect(
    mapStateToPros,
    mapDispatchToRops,
  )(App),
);
