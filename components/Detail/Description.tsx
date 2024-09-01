import { Project } from "@/lib/types";
import styled from "styled-components";

export function Description({ project }: { project: Project }) {
  const { Beschreibung, involved } = project.attributes;

  return (
    <Container>
      <Text>{Beschreibung}</Text>

      <Credits>
        {involved.map((inv) => (
          <Partner>
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
  margin: 50px auto;
  max-width: 1350px;
  margin: 0 auto;
  @media only screen and (max-width: 1350px) {
    padding: 0 20px;
  }
`;

const Text = styled.p`
  max-width: 80%;
`;

const Credits = styled.div`
  display: flex;
  margin: 50px 0 30px;
  gap: 70px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Partner = styled.p``;
