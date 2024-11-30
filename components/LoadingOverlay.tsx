"use client";

import styled from "styled-components";

export function LoadingOverlay() {
  return <Overlay />;
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
