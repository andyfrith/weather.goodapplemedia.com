import React, { PropTypes } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { FormattedMessage } from 'react-intl';
import H3 from 'components/H3';
import Img from './Img';
import Wrapper from './Wrapper';
import { getDayOfWeek, getTime, convertTemp } from 'utils/DateUtils';
import messages from './messages';

function CurrentWeather({ loading, error, currentWeather }) {

  if (loading) {
    return <Wrapper><LoadingIndicator /></Wrapper>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <Wrapper>
        Something went wrong, please try again! Enter a city in the search box above.
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
    const wind = Math.round(currentWeather.wind.speed);
    const temp = Math.round(currentWeather.main.temp);
    const img = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

    const content = (
      <Wrapper>
        <H3>Current Weather</H3>
        <div className="table">
          <div className="tbody">
            <div className="tr">
              <div className="td">
                <div className="city"> { city }, { country }</div>
                <div> { date }</div>
                <div className="weather"> { weather }</div>
              </div>
            </div>
            <div className="tr">
              <div className="td">
                <div className="temp">
                  <Img src={img} alt="weather icon" />
                  { temp } °
                </div>
              </div>
              <div className="td wind">
                <div>Humidity: { humidity }%</div>
                <div>Wind: { wind } mph</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
    return content;
  }
  return (
    <div>
      <p>
        <FormattedMessage {...messages.about } />
      </p>
      <p>
        <FormattedMessage {...messages.architecture } />
      </p>
      <p>
        <FormattedMessage {...messages.start } />
      </p>
    </div>);
}

CurrentWeather.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  currentWeather: PropTypes.any,
};

export default CurrentWeather;

