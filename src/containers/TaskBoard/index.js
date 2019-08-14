import React, { useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { STATUSES } from '../../constants';
import styles from './styles';
import Section from '../../components/Section';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import * as taskAction from '../../actions/task';

const lisTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read caiLoz book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play girl',
    description: 'With girl',
    status: 1,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'PUBG mobile',
    status: 2,
  },
];

function App(props) {
  const { classes, taskActions } = props;
  const { fecthListTaskRequest } = taskActions;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fecthListTaskRequest();
  }, [fecthListTaskRequest]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const renderBoard = () => {
    const xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(item => {
          const taskFilter = lisTask.filter(task => task.status === item.id);
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
    <Section>
      <div>
        <Box mt={2} mb={2} className={classes.boxSwith}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonAdd}
            onClick={handleClickOpen}
          >
            <AddIcon /> Thêm mới công việc
          </Button>
          <Switch
            value="checkedC"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Box>
        {renderBoard()}
        {renderForm()}
      </div>
    </Section>
  );
}

App.propTypes = {
  classes: PropsTypes.object,
  taskActions: PropsTypes.shape({
    fecthListTaskRequest: PropsTypes.func,
  }),
};

const mapStateToPros = null;
const mapDispatchToRops = dispatch => ({
  taskActions: bindActionCreators(taskAction, dispatch),
});

export default withStyles(styles)(
  connect(
    mapStateToPros,
    mapDispatchToRops,
  )(App),
);
