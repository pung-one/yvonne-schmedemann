"use client";

import styled from "styled-components";
import TermsAndConditionsGerman from "./TermsAndConditionsGerman";

export function TermsAndConditionsPage() {
  return (
    <Container>
      <TermsAndConditionsGerman />
    </Container>
  );
}

const Container = styled.article`
  line-height: 25px;
  padding: 150px 20px;
  @media only screen and (max-width: 768px) {
    padding: 70px 20px;
  }
`;
