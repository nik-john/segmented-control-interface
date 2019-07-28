/**
 *
 * TabPanel
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { root } = useStyles();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3} className={root}>
        {children}
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default memo(TabPanel);
