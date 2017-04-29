import React, { PropTypes } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import Img from './Img';
import Wrapper from './Wrapper';
import { getDayOfWeek, getTime, convertTemp } from '../../utils/DateUtils';

function CurrentWeather({ loading, error, currentWeather }) {

  if (loading) {
    return <Wrapper><LoadingIndicator /></Wrapper>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <Wrapper>
        Something went wrong, please try again!
      </Wrapper>
    );
    return <div><ErrorComponent /></div>;
  }

  if (currentWeather !== false) {

    const city = currentWeather.name;
    const country = currentWeather.sys.country;
    const date = getDayOfWeek(currentWeather.dt) + ' ' + getTime(currentWeather.dt);
    const weather = currentWeather.weather[0].main;
    const humidity = currentWeather.main.humidity;
    const temp = convertTemp(currentWeather.main.temp);
    const img = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;


    const content = (
      <Wrapper>
        <div style={{ fontSize: '24px', color: '#878787' }}> { city }, { country }</div>
        <div style={{ fontSize: '16px', color: '#878787' }}> { date }</div>
        <div style={{ fontSize: '16px', color: '#878787' }}> { weather }</div>
        <div style={{ fontSize: '64px', color: '#212121' }}>
          <Img src={img} alt="weather icon" />
          { temp } °
        </div>
      </Wrapper>
    );
    return content;
  }

  // humidity
  //   :
  //   90
  // pressure
  //   :
  //   1023
  // temp
  //   :
  //   272.56
  // temp_max
  //   :
  //   274.15
  // temp_min
  //   :
  //   271.15

  return null;
}

CurrentWeather.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  currentWeather: PropTypes.any,
};

export default CurrentWeather;

