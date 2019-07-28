/**
 *
 * FlashMessage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  withStyles,
  Snackbar,
  IconButton,
  Grid,
  SnackbarContent,
  Slide,
} from '@material-ui/core';
import { compose } from 'redux';
import Close from '@material-ui/icons/Close';

import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectMessages } from './selectors';
import { addMessageAction, removeMessageAction } from './actions';
import reducer from './reducer';
import styles from './styles';

// TODO: Add tests
export function FlashMessage({ flashMessages, classes, handleClose }) {
  useInjectReducer({ key: 'flashMessage', reducer });

  const typeSelector = type => {
    switch (type) {
      case 'error':
        return classes.errorType;
      case 'success':
        return classes.successType;
      default:
        return classes.defaultType;
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={flashMessages.length > 0}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      TransitionComponent={Slide}
      className={classes.snackBarContainer}
    >
      <Grid container justify="center">
        {flashMessages.map(n => (
          <Grid item xs={10} className={classes.snackBar} key={n.id}>
            <SnackbarContent
              className={`${classes.snackBarContent} ${typeSelector(n.type)}`}
              message={n.text}
              classes={{ message: classes.message, action: classes.action }}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={() => handleClose(n.id)}
                >
                  <Close />
                </IconButton>,
              ]}
            />
          </Grid>
        ))}
      </Grid>
    </Snackbar>
  );
}

FlashMessage.propTypes = {
  flashMessages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flashMessages: makeSelectMessages(),
});

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (type, text) => dispatch(addMessageAction(type, text)),
    handleClose: id => dispatch(removeMessageAction(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withStyles(styles),
)(FlashMessage);
