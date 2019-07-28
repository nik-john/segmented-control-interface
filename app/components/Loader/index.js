/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
import { Grid } from '@material-ui/core';

function Loader() {
  return (
    <Grid container justify="center">
      <svg
        className="lds-balls"
        width="50px"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ background: 'none' }}
      >
        <circle cx="57.5021" cy="72.4979" r="5" fill="#c5523f">
          <animate
            attributeName="cx"
            values="80;50"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="50;80"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#c5523f;#f2b736"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="27.5021" cy="57.5021" r="5" fill="#f2b736">
          <animate
            attributeName="cx"
            values="50;20"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="80;50.00000000000001"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#f2b736;#499255"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="42.4979" cy="27.5021" r="5" fill="#499255">
          <animate
            attributeName="cx"
            values="20;49.99999999999999"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="50.00000000000001;20"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#499255;#1875e5"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="72.4979" cy="42.4979" r="5" fill="#1875e5">
          <animate
            attributeName="cx"
            values="49.99999999999999;80"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="20;49.99999999999999"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#1875e5;#c5523f"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Grid>
  );
}

Loader.propTypes = {};

export default memo(Loader);
