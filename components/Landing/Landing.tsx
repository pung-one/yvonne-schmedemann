"use client";

import styled from "styled-components";
import { Hero } from "./Hero";
import { SelectedWorks } from "./SelectedWorks";
import { LandingInfo, Projects } from "@/lib/types";

type Props = {
  projects: Projects;
  landingInfo: LandingInfo;
};

export function Landing({ projects, landingInfo }: Props) {
  return (
    <Container>
      <Hero landingInfo={landingInfo} />

      <SelectedWorks projects={projects} />
    </Container>
  );
}

const Container = styled.article`
  max-width: 1200px;
  margin: 170px auto;
`;
