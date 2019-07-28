/**
 *
 * Audiences
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Loader from 'components/Loader';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Typography } from '@material-ui/core';
import {
  makeSelectAudienceData,
  makeSelectAudiencesLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchAudienceInitAction } from './actions';

export function Audiences({ audiences, fetchAudienceData, loading }) {
  useInjectReducer({ key: 'audiences', reducer });
  useInjectSaga({ key: 'audiences', saga });
  useEffect(() => {
    fetchAudienceData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Audiences</title>
        <meta name="description" content="List of audiences" />
      </Helmet>
      <Typography variant="h4">
        <FormattedMessage {...messages.header} />
      </Typography>
      <br />
      {loading ? <Loader /> : audiences}
    </div>
  );
}

Audiences.propTypes = {
  audiences: PropTypes.string.isRequired,
  fetchAudienceData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  audiences: makeSelectAudienceData(),
  loading: makeSelectAudiencesLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAudienceData: () => dispatch(fetchAudienceInitAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Audiences);
