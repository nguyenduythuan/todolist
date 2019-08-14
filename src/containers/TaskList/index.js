import React from 'react';

import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropsTypes from 'prop-types';

import styles from './styles';
import TaskItem from '../TaskItem';

function TaskList(props) {
  const { taskFilter, item } = props;
  return (
    <Grid item md={4} xs={12}>
      <Box mt={2} mb={2}>
        <div>
          <h3>{item.lable}</h3>
        </div>
      </Box>
      <div>
        {taskFilter.map(task => (
          <TaskItem key={task.id} task={task} lable={item.lable} />
        ))}
      </div>
    </Grid>
  );
}

TaskList.propTypes = {
  taskFilter: PropsTypes.array,
  item: PropsTypes.object,
};

export default withStyles(styles)(TaskList);
