import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styles from './styles';
import Img from '../../acsets/images/load.gif';

function Loading(props) {
  const { classes, showLoading } = props;
  return showLoading ? (
    <div className={classes.globalLoad}>
      <img className={classes.image} alt="loading" src={Img} />
    </div>
  ) : null;
}

Loading.propTypes = {
  classes: PropsTypes.object,
  showLoading: PropsTypes.bool,
};

const mapStateToProps = state => ({
  showLoading: state.loading.showLoading,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withStyles(styles),
  withConnect,
)(Loading);
