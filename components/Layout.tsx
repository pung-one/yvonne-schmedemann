"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
  position: relative;
`;
