/**
 *
 * Brands
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
import Loader from 'components/Loader';
import {
  makeSelectBrandsData,
  makeSelectBrandsLoading,
  makeSelectBrandsError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchBrandsInitAction } from './actions';
export function Brands({ brands, fetchBrandsData, loading, error }) {
  useInjectReducer({ key: 'brands', reducer });
  useInjectSaga({ key: 'brands', saga });
  useEffect(() => {
    fetchBrandsData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Brands</title>
        <meta name="description" content="List of brands" />
      </Helmet>
      <Typography variant="h4">
        <FormattedMessage {...messages.header} />
      </Typography>
      <br />
      {error ? <Typography>No data available</Typography> : ''}
      {loading ? <Loader /> : brands}
    </div>
  );
}

Brands.propTypes = {
  brands: PropTypes.string.isRequired,
  fetchBrandsData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrandsData(),
  loading: makeSelectBrandsLoading(),
  error: makeSelectBrandsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchBrandsData: () => dispatch(fetchBrandsInitAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Brands);
