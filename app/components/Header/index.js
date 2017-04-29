import React from 'react';
import { FormattedMessage } from 'react-intl';
import Img from './Img';
import Logo from './logo.png';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ minWidth: '400px'}}>
        <NavBar>
          <Img src={Logo} alt="Logo" />
          <HeaderLink to="/">
            <FormattedMessage {...messages.today} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.hourly} />
          </HeaderLink>
          <HeaderLink to="/" style={{ textDecoration: 'underline'}}>
            <FormattedMessage {...messages.fiveDay} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.tenDay} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.weekend} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.monthly} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
