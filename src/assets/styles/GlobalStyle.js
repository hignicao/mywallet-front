import { createGlobalStyle } from "styled-components";
import { accentColor, baseColor, textColor } from "../../constants/colors";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'Raleway', sans-serif;
    line-height: 1;
    background-color: ${baseColor};
;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    font-family: 'Raleway', sans-serif;
    padding: 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    ::placeholder {
      color: ${textColor};
    }
  }
  button {
    padding: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    background: ${accentColor};
    border-radius: 5px;
    border: none;
    color: #ffffff;
  }
`;

export default GlobalStyle;
