import React from 'react';

import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropsTypes from 'prop-types';

import styles from './styles';

function TaskItem(props) {
  const { classes, task, lable } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justyfi="space-between">
          <Grid item md={8}>
            <Typography gutterBottom variant="h5">
              {task.title}
            </Typography>
          </Grid>
          <Grid item md={4} className={classes.gridRight}>
            <Typography gutterBottom className={classes.styleP}>
              {lable}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.fab}
        >
          <Icon>edit_icon</Icon>
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="delete"
          className={classes.fab}
        >
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

TaskItem.propTypes = {
  classes: PropsTypes.object,
  task: PropsTypes.object,
  lable: PropsTypes.object,
};

export default withStyles(styles)(TaskItem);
