import styled from 'styled-components';
import { media } from 'utils/StyleUtils';
import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  margin: -10px 0 0 0;
  
  display: block;
  
  ${ media.tablet`
    margin: 0 auto;
  `}
`;

export default Img;
