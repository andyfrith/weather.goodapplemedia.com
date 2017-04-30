import styled from 'styled-components';

const Wrapper = styled.div`
  
  .header {
    background: black;
    height: 60px;
    padding: 20px 0 10px 5px;
    color: white
  }
  
  .now {
    display: none;
  }
  
  @media (min-width: 600px) {
    .now {
      display: inline;
    } 
  }
  
  @media (max-width: 500px) {
    form {
      span {
        display: none;
      }
      float: left;
    }
  }
  
  @media (min-width: 450px) {
    .header {
      marginBottom: 20px;
    }
  }

  Button {
    display: none;
  }
  
  @media (min-width: 350px) {
    .header {
      padding: 20px 10px 10px 20px;
    }
    
    form {
      button {
        display: inline;  
      }
    }
  }
`;

export default Wrapper;
