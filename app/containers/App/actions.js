/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CURRENT_WEATHER,
  LOAD_CURRENT_WEATHER_SUCCESS,
  LOAD_CURRENT_WEATHER_ERROR,
  LOAD_FORECASTS,
  LOAD_FORECASTS_SUCCESS,
  LOAD_FORECASTS_ERROR,
} from './constants';

/**
 * Load the current weather, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CURRENT_WEATHER
 */
export function loadCurrentWeather() {
  return {
    type: LOAD_CURRENT_WEATHER,
  };
}

/**
 * Dispatched when the current weather is loaded by the request saga
 *
 * @param  {array} currentWeather The current weather data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_CURRENT_WEATHER_SUCCESS passing the repos
 */
export function currentWeatherLoaded(currentWeather, username) {
  return {
    type: LOAD_CURRENT_WEATHER_SUCCESS,
    currentWeather,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CURRENT_WEATHER_ERROR passing the error
 */
export function currentWeatherLoadingError(error) {
  return {
    type: LOAD_CURRENT_WEATHER_ERROR,
    error,
  };
}


/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadForecasts() {
  return {
    type: LOAD_FORECASTS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function forecastsLoaded(forecasts, username) {
  return {
    type: LOAD_FORECASTS_SUCCESS,
    forecasts,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function forecastLoadingError(error) {
  return {
    type: LOAD_FORECASTS_ERROR,
    error,
  };
}
