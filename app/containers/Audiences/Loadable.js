/**
 *
 * Asynchronously loads the component for Audiences
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
