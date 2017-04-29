/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading, makeSelectError, makeSelectCurrentWeather, makeSelectForecasts } from 'containers/App/selectors';
import ForecastsList from 'components/ForecastsList';
import CurrentWeather from 'components/CurrentWeather';
import { FormattedMessage } from 'react-intl';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadCurrentWeather, loadForecasts } from '../App/actions';
import { changeCity } from './actions';
import { makeSelectCity } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.city && this.props.city.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, currentWeather, forecasts } = this.props;
    const forecastsListProps = {
      loading,
      error,
      forecasts,
    };

    const currentWeatherProps = {
      loading,
      error,
      currentWeather,
    };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A weather forecast demo application using React.js Boilerplate application' },
          ]}
        />
        <div>
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              <label style={{ fontStyle: 'italic' }} htmlFor="city">
                <FormattedMessage {...messages.searchPrompt} />
                <Input
                  id="city"
                  type="text"
                  placeholder="Denver"
                  value={this.props.city}
                  onChange={this.props.onChangeCity}
                  style={{ marginLeft: '10px' }}
                />
              </label>
            </Form>
            <CurrentWeather {...currentWeatherProps} />
            <ForecastsList {...forecastsListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  currentWeather: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  forecasts: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  city: React.PropTypes.string,
  onChangeCity: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: (evt) => dispatch(changeCity(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
        dispatch(loadCurrentWeather());
        dispatch(loadForecasts());
      }
    },
  };
}

const mapStateToProps = createStructuredSelector({
  forecasts: makeSelectForecasts(),
  currentWeather: makeSelectCurrentWeather(),
  city: makeSelectCity(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
