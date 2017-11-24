/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;

const selectRoute = (state) => state.route;

const makeSelectUserData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectUserData,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
};
