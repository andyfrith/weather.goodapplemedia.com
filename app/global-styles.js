import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: #d6d3d2;
    font-family: 'Roboto', sans-serif;
    // padding: 20px;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    // background-image: linear-gradient(skyblue,#ededed);
    // padding: 20px 16px 24px 16px;
    // border: 1px solid grey;
    
    // background-color: white;
    min-height: 100%;
    min-width: 100%;
  }
  
  h3 {
    color: #f05514;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
  
  article {
    background: white;
    border: 1px solid #bdbab9;
    margin: 0;
  }
  
  form {
    float: right;
  }
  
  @media (min-width: 450px) {
    article {
      margin: 0 20px 0 20px;
    }
   }
`;
