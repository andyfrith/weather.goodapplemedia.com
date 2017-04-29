import React, { PropTypes } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
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
    return <List items={forecasts.list} component={ForecastListItem} />;
  }

  return null;
}

ForecastsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  forecasts: PropTypes.any,
};

export default ForecastsList;
