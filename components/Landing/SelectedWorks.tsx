"use client";

import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { RequestContext } from "../RequestWrapper";

const baseUrl = process.env.CMS_BASE_URL;

export function SelectedWorks() {
  const projects = useContext(RequestContext);

  console.log;

  console.log(projects);
  return (
    <Container>
      <Headline>
        <div />
        <h2>Selected Works</h2>
        <div />
      </Headline>

      <ImageSection>
        {projects?.data.map((project) => {
          const imageData = project.attributes.Bilder.data[0].attributes;

          return (
            <StyledImage
              key={project.id}
              src={"http://localhost:1337" + imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt=""
            />
          );
        })}
      </ImageSection>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const Headline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  div {
    top: 50%;
    flex: 1;
    height: 1px;
    background-color: black;
    margin: 0 5vw;
  }
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
`;
