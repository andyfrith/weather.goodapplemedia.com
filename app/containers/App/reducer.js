/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_CURRENT_WEATHER_SUCCESS,
  LOAD_CURRENT_WEATHER,
  LOAD_CURRENT_WEATHER_ERROR,
  LOAD_FORECASTS_SUCCESS,
  LOAD_FORECASTS,
  LOAD_FORECASTS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    currentWeather: false,
    forecasts: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_WEATHER:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'currentWeather'], false);
    case LOAD_CURRENT_WEATHER_SUCCESS:
      return state
        .setIn(['userData', 'currentWeather'], action.currentWeather)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_CURRENT_WEATHER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_FORECASTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'forecasts'], false);
    case LOAD_FORECASTS_SUCCESS:
      return state
        .setIn(['userData', 'forecasts'], action.forecasts)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_FORECASTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
