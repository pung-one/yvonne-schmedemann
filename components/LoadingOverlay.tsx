"use client";

import styled from "styled-components";

export function LoadingOverlay() {
  return <Overlay>{/* <Spinner /> */}</Overlay>;
}

const Overlay = styled.div`
  z-index: 9999;
  backdrop-filter: blur(5px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100vh;
  width: 100vw;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  border-bottom: 1px solid transparent;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1.5s linear infinite;
`;
