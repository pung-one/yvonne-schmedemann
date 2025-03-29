"use client";

import { Project } from "@/lib/types";
import styled from "styled-components";

export function Description({ project }: { project: Project }) {
  const { Beschreibung, involved } = project;

  return (
    <Container>
      <Text>{Beschreibung}</Text>

      <Credits>
        {involved.map((inv) => (
          <Partner key={inv.id}>
            {inv.Rolle}
            <br />
            {inv.Name}
          </Partner>
        ))}
      </Credits>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 30px 0;
  max-width: 1200px;
  padding: 0 50px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Text = styled.p`
  letter-spacing: 0.6pt;
`;

const Credits = styled.div`
  display: flex;
  margin: 30px 0;
  gap: 70px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Partner = styled.p``;
