/**
 *
 * Partners
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Typography } from '@material-ui/core';
import { makeSelectPartnersData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchPartnersInitAction } from './actions';

export function Partners({ partners, fetchPartnersData }) {
  useInjectReducer({ key: 'partners', reducer });
  useInjectSaga({ key: 'partners', saga });
  useEffect(() => {
    fetchPartnersData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Partners</title>
        <meta name="description" content="List of partners" />
      </Helmet>
      <Typography variant="h4">
        <FormattedMessage {...messages.header} />
      </Typography>
      <br />
      {partners}
    </div>
  );
}

Partners.propTypes = {
  partners: PropTypes.string.isRequired,
  fetchPartnersData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  partners: makeSelectPartnersData(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPartnersData: () => dispatch(fetchPartnersInitAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Partners);
