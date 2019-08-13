import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { STATUSES } from '../../constants';
import styles from './styles';
import Section from '../../components/Section';
import { Box } from '@material-ui/core';

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
  const { classes } = props;
  const renderBoard = () => {
    const xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map(item => {
            const taskFilter = lisTask.filter(task => task.status === item.id);
            return <Grid key={item.id} item md={4} xs={12}>
              <Box mt={2} mb={2} >
                <div>{item.lable}</div>
              </Box>
              <div>
                {taskFilter.map(task => {
                  return (
                    <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justyfi="space-between">
                          <Grid item md={8}>
                            <Typography gutterBottom variant="h5" >
                              {task.title}
                            </Typography>
                          </Grid>
                          <Grid item md={4} className={classes.gridRight}>
                            <Typography gutterBottom className={classes.styleP} >
                              {item.lable}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {task.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Fab size="small" color="primary" aria-label="edit" className={classes.fab}>
                          <Icon>edit_icon</Icon>
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="delete" className={classes.fab}>
                          <DeleteIcon />
                        </Fab>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          })
        }
      </Grid>
    );
    return xhtml;
  };
  return (
    <Section>
      <div>
        <Box mt={2} mb={2} className={classes.boxSwith}>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            <AddIcon /> Thêm mới công việc
          </Button>
          <Switch value="checkedC" inputProps={{ 'aria-label': 'primary checkbox' }} />
        </Box>
        {renderBoard()}
      </div>
    </Section>
  );
}

export default withStyles(styles)(App);