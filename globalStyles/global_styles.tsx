"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IvarDisplay';
    src: url('/fonts/IvarDisplay-Regular.woff') format('woff'),
        url('/fonts/IvarDisplay-Regular.woff2') format('woff2');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'IvarDisplay';
    src: url('/fonts/IvarDisplay-Italic.woff') format('woff'),
        url('/fonts/IvarDisplay-Italic.woff2') format('woff2');
    font-display: swap;
    font-style: italic;
  }

  @font-face {
    font-family: 'IvarDisplay';
    src: url('/fonts/IvarDisplay-Medium.woff') format('woff'),
        url('/fonts/IvarDisplay-Medium.woff2') format('woff2');
    font-display: swap;
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'LogoFont';
    src: url('/fonts/logoFont.woff') format('woff'),
        url('/fonts/logoFont.woff2') format('woff2');
    font-display: swap;
    font-style: bold;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 18px;
    margin: 0;
    padding: 0;
    font-family: 'IvarDisplay', 'sans', Times, serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
    overflow-anchor: none;
  }
  
  a {
    cursor: inherit;
  }

  button {
    color: black
  }
`;
