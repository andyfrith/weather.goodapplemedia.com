import React from 'react';
import { FormattedMessage } from 'react-intl';
import { getNow } from 'utils/DateUtils';
import Img from './Img';
import Logo from './logo.png';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div style={{ height: '50px', background: 'white', paddingLeft: '25px' }}>
          <Img src={Logo} alt="Logo" />
          <div style={{ paddingTop: '12px', fontSize: '20px', color: '#999' }}>GoodAppleWeather</div>
        </div>
        <div style={{ minWidth: '400px'}}>
          <NavBar>
            {/*<HeaderLink className="current" to="/">*/}
              {/*<FormattedMessage {...messages.now} />*/}
              {/*&nbsp;{ getNow() }*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.weekend} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.extended} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.month} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.today} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.hourly} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.fiveDay} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.tenDay} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.weekend} />*/}
            {/*</HeaderLink>*/}
            {/*<HeaderLink to="/">*/}
              {/*<FormattedMessage {...messages.monthly} />*/}
            {/*</HeaderLink>*/}
          </NavBar>
        </div>
      </div>
    );
  }
}

export default Header;
