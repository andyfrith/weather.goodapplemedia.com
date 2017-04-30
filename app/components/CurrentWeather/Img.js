import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  float: left;
  margin-right: 0 10px 0 0;
  
  display: block;
  width: 60px;
  
  @media (min-width: 450px) {
    width: 100px;
  }
`;

export default Img;
