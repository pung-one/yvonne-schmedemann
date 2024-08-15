"use client";

import styled from "styled-components";
import { Hero } from "./Hero";
import { SelectedWorks } from "./SelectedWorks";

export function Landing() {
  return (
    <Container>
      <Hero />

      <SelectedWorks />
    </Container>
  );
}

const Container = styled.article`
  max-width: 1200px;
  margin: 170px auto;
`;
