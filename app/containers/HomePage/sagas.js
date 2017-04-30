/**
 * Gets the forecasts for the city from OpenWeatherMap
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CURRENT_WEATHER, LOAD_FORECASTS } from 'containers/App/constants';
import { currentWeatherLoaded, currentWeatherLoadingError, forecastsLoaded, forecastLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectCity } from 'containers/HomePage/selectors';

/**
 * OpenWeatherMap forecasts request/response handler
 */
export function* getForecasts() {
  // Select city from store
  const city = yield select(makeSelectCity());
  const APPID = '90145ec8eddec68ad6757d751338bac4';
  const requestURL = `http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&q=${city}&cnt=5&APPID=${APPID}`;
  try {
    // Call our request helper (see 'utils/request')
    const forecasts = yield call(request, requestURL);
    yield put(forecastsLoaded(forecasts, city));
  } catch (err) {
    yield put(forecastLoadingError(err));
  }
}

/**
 * OpenWeatherMap forecasts request/response handler
 */
export function* getCurrentWeather() {
  // Select city from store
  const city = yield select(makeSelectCity());
  const APPID = '90145ec8eddec68ad6757d751338bac4';
  const requestURL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&APPID=${APPID}`;
  // units=metric
  try {
    // Call our request helper (see 'utils/request')
    const currentWeather = yield call(request, requestURL);
    yield put(currentWeatherLoaded(currentWeather, city));
  } catch (err) {
    yield put(currentWeatherLoadingError(err));
  }
}

// http://api.openweathermap.org/data/2.5/weather?q={city name}

/**
 * Root saga manages watcher lifecycle
 */
export function* forecastsData() {
  // Watches for LOAD_FORECASTS actions and calls getForecasts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_FORECASTS, getForecasts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* currentWeatherData() {
  // Watches for LOAD_CURRENT_WEATHER actions and calls getCurrentWeather when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_CURRENT_WEATHER, getCurrentWeather);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  forecastsData,
  currentWeatherData,
];
