import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <div style={{width: '100%', background: '#141d26', height: '100px' }}>&nbsp;</div>
      {/*<section>*/}
        {/*<FormattedMessage*/}
          {/*{...messages.authorMessage}*/}
          {/*values={{*/}
            {/*author: <A href="http://andyfrith.com">Andy Frith</A>,*/}
          {/*}}*/}
        {/*/>*/}
      {/*</section>*/}
    </Wrapper>
  );
}

export default Footer;
