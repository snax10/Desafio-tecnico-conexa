import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Nunito', sans-serif;
    --font-secondary: 'Montserrat', sans-serif;

    --salmon-light: #FFA490;
    --white: #FFFFFF;
    --offwhite: #FFFFFB;
    --gray: #DAD2D0;
    --gray-medium: #999392;
    --gray-dark: #575453;
    --blue: #2E50D4;
    --blue-medium: #2540AA;
    --blue-dark: #1C307F;
  }

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

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

    body {
      font-family: var(--font-primary);
      -webkit-font-smoothing: antialiased;
    }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    background-color: var(--offwhite);
    border-radius: 0.25rem;
    padding: 3rem;
  }

  .react-modal-close {
    position: absolute;
    background-color: transparent;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
