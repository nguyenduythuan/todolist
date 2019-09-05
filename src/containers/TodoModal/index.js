import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core';
import PropsTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Clear';
import styles from './styles';
import * as modalAction from '../../actions/modal';

function ModalForm(props) {
  const { open, classes, component, modalActions, title } = props;
  const { hideModal } = modalActions;

  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.themeForm}>
        <div className={classes.header}>
          <Typography variant="h6">{title}</Typography>
          <CloseIcon onClick={hideModal} />
        </div>
        {component}
      </div>
    </Modal>
  );
}

ModalForm.propTypes = {
  open: PropsTypes.bool,
  classes: PropsTypes.object,
  component: PropsTypes.object,
  title: PropsTypes.string,
  modalActions: PropsTypes.shape({
    hideModal: PropsTypes.func,
  }),
};

const mapStateToProps = state => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(ModalForm);
