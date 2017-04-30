import React, { PropTypes } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import H3 from 'components/H3';
import ForecastListItem from 'containers/ForecastListItem';

function ForecastsList({ loading, error, forecasts }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (forecasts !== false) {

    const content = (
      <div>
        <H3>5 Day Forecast</H3>
        <List items={forecasts.list} component={ForecastListItem} />
      </div>
    );

    return content;
    // <List items={forecasts.list} component={ForecastListItem} />;
  }

  return null;
}

ForecastsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  forecasts: PropTypes.any,
};

export default ForecastsList;
