/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCity = () => createSelector(
  selectHome,
  (homeState) => homeState.get('city')
);

export {
  selectHome,
  makeSelectCity,
};
