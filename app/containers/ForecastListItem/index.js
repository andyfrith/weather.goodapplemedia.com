/**
 * ForecastListItem
 *
 * Lists the info of a forecast
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Img from './Img';
import Wrapper from './Wrapper';
import { getDayOfWeekAbbr, convertTemp } from '../../utils/DateUtils';

export class ForecastListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const img = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    const date = getDayOfWeekAbbr(item.dt);
    const tempMin = convertTemp(item.temp.min);
    const tempMax = convertTemp(item.temp.max);
    const content = (
      <Wrapper>
        <span style={{ color: '#bababa' }}>{ date }</span>
        <Img src={img} alt="icon" />
        { tempMin }°
        <span style={{ paddingLeft: '5px', color: '#bababa' }}>{ tempMax }°</span>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`forecast-list-item-${item.weather.city}`} item={content} />
    );
  }
}

ForecastListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.string,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(ForecastListItem);
