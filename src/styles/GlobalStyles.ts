import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
       --vh: 100%;
   }
  *{
    box-sizing:border-box;
  
  }
  html,body{

    font-family: 'Lobster', cursive;
    font-family: 'Noto Sans KR', sans-serif;

   }
   div{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    word-wrap: break-word;
    word-break: keep-all;
    line-height: 1.8;
   }
`;

export default GlobalStyles;
