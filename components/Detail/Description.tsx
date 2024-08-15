import styled from "styled-components";
import { Project } from "../RequestWrapper";

export function Description({ project }: { project: Project }) {
  const { Beschreibung, Kunde, HairMakeUp, Assistent } = project.attributes;

  return (
    <Container>
      <Text>{Beschreibung}</Text>

      <Credits>
        <Partner>
          Kunde:
          <br />
          {Kunde}
        </Partner>

        <Partner>
          Hair & Make-Up:
          <br />
          {HairMakeUp}
        </Partner>

        <Partner>
          Assistent:
          <br />
          {Assistent}
        </Partner>
      </Credits>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 10px;
  border-bottom: 1px solid black;
`;

const Text = styled.p`
  max-width: 80%;
`;

const Credits = styled.div`
  display: flex;
  margin: 50px 0 30px;
  gap: 50px;
`;

const Partner = styled.p``;
