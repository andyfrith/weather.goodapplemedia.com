import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.1em 1em;
  margin: 0.5em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  // border: 1px solid white;
  color: white;
  
  &:active {
    text-decoration: underline;
    color: #FFF;
  }
  
  
`;
