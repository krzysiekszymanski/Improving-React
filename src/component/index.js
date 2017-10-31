import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
export default () => injectGlobal`

 
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
      color: #444444;
      font-size: 62.5%;
  }
    ${styledNormalize}
`;