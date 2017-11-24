/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectName = () => createSelector(
  selectHome,
  (homeState) => homeState.name
);

export {
  selectHome,
  makeSelectName,
};
