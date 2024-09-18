"use client";

import { useState } from "react";
import styled from "styled-components";
import TermsAndConditionsGerman from "./TermsAndConditionsGerman";
import TermsAndConditionsEnglish from "./TermsAndConditionsEnglish";

export function TermsAndConditionsPage() {
  const [language, setLanguage] = useState<"german" | "english">("german");
  return (
    <Container>
      {language === "german" ? (
        <>
          <StyledButton onClick={() => setLanguage("english")}>
            English Version
          </StyledButton>
          <TermsAndConditionsGerman />
        </>
      ) : (
        <>
          <StyledButton onClick={() => setLanguage("german")}>
            Deutsche Version
          </StyledButton>
          <TermsAndConditionsEnglish />
        </>
      )}
    </Container>
  );
}

const Container = styled.article`
  margin: 170px 0px;
  line-height: 25px;
  @media only screen and (max-width: 1350px) {
    margin: 170px 20px;
  }
  @media only screen and (max-width: 768px) {
    margin: 70px 20px;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  margin-bottom: 50px;
  cursor: inherit;
  &:hover {
    color: #9966ff;
  }
`;
