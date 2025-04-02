"use client";

import Link from "next/link";
import styled from "styled-components";
import { ContactSection } from "../Header/ContactSection";

export function Footer() {
  return (
    <Container>
      <ContactSection />

      <LegalSection>
        <p>
          copyright @ 2025 all rights reserved{" "}
          <Link href={"/terms-conditions"}>Datenschutz</Link>
          <Link href={"/impressum"}>Imprint</Link>
        </p>
      </LegalSection>
    </Container>
  );
}

const Container = styled.footer`
  z-index: 4;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-right: 30px;
  border-top: 1px solid black;
  @media only screen and (max-width: 768px) {
    padding-right: 20px;
    justify-content: flex-end;
  }
`;

const LegalSection = styled.div`
  * {
    font-size: 14px;
    text-decoration: none;
  }
  a {
    color: black;
    margin-left: 30px;
    &:hover {
      color: #9966ff;
    }
  }
  @media only screen and (max-width: 768px) {
    a {
      margin-left: 20px;
    }
  }
`;
