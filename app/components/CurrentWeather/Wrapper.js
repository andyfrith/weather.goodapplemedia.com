import styled from 'styled-components';
import { media } from '../../utils/StyleUtils';

const Wrapper = styled.div`
  margin-bottom: 30px;
  
  .table {
    display: table;
  }
  
  .thead {
    display: table-header-group;
  }
  
  .tbody {
    display: table-row-group;
  }
  
  .tr {
    display: table-row;
  }
  
  .td, .th {
    display: table-cell;
    vertical-align: top;
    color: #878787;
    font-size: 16px;
  }
  
  .city {
    font-size: 24px;
  }
  
  .weather {
    font-size: 25px;
  }
  
  .temp {
    font-size: 64px;
    color: #212121;
  }
  
  .wind {
    paddingLeft: 30px;
    paddingTop: 18px;
  }
    
  ${ media.phone`
    
  `}
`;

export default Wrapper;
