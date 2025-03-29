"use client";

import Link from "next/link";
import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <p>
        copyright @ 2025 all rights reserved{" "}
        <Link href={"/terms-conditions"}>Datenschutz</Link>
        <Link href={"/impressum"}>Imprint</Link>
      </p>
    </Container>
  );
}

const Container = styled.footer`
  z-index: 4;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-right: 30px;
  border-top: 1px solid black;
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
    padding-right: 20px;
    a {
      margin-left: 20px;
    }
  }
`;
