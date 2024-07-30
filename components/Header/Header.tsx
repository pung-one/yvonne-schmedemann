"use client";

import styled from "styled-components";
import { NavDesktop } from "./NavDesktop";
import { ContactSection } from "./ContactSection";

export function Header() {
  return (
    <HeaderContainer>
      <ContactSection />

      <NavDesktop />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid black;
`;
