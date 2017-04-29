import styled from 'styled-components';
import { media } from 'utils/StyleUtils';

const Wrapper = styled.li`
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  position: relative;
  text-align: center;

  &:first-child {
    border-top: none;
  }
  
  ${ media.tablet`
    width: 7em;
    margin-bottom: 0;
  `}
`;

export default Wrapper;
