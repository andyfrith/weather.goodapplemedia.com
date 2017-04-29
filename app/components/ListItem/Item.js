import styled from 'styled-components';
import { media } from 'utils/StyleUtils';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  text-align: left;
  
  ${ media.tablet`
    text-align: center;
  `}
`;

export default Item;
