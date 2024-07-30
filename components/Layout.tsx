"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;
