import styled from 'styled-components';
import { media } from 'utils/StyleUtils';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  padding: 0 1em;
  
  ${ media.tablet`
    display: flex;
  `}
  
`;

export default Ul;
