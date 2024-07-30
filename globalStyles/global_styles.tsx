"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 20px;
    margin: 0;
    padding: 0;
    font-family: 'sans', Times, serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
    overflow-anchor: none;
  }

  button {
    color: black
  }
`;
