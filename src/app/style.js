import { injectGlobal } from 'styled-components'

// Note: Fonts here's loading abs path from public

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.11px;
    line-height: 21px;
    background-color: #fff;
    margin: 40px;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul, li, ol {
    list-style: none;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #4a4a4a;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #4a4a4a;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #4a4a4a;
  }
`
