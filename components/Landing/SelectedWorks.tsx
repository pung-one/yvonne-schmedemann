"use client";

import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { RequestContext } from "../RequestWrapper";

const baseUrl = process.env.CMS_BASE_URL;

export function SelectedWorks() {
  const { projects, cmsBaseUrl } = useContext(RequestContext);

  return (
    <Container>
      <Headline>
        <div />
        <h2>Selected Works</h2>
        <div />
      </Headline>

      <ImageSection>
        {cmsBaseUrl &&
          projects?.data.map((project, index) => {
            const imageData = project.attributes.Titelbild.data.attributes;

            return (
              <ImageWrapper
                key={project.id}
                className={`item${index + 1}`}
                $title={project.attributes.Titel}
              >
                <StyledImage
                  src={cmsBaseUrl + imageData.url}
                  width={imageData.width}
                  height={imageData.height}
                  alt=""
                />
              </ImageWrapper>
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
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  .item1 {
    grid-row: 1 / span 3;
    grid-column: 1 / span 2;

    height: 40vh;
  }
  .item2 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 2;
    height: 50vh;
  }
  .item3 {
    grid-row: 1 / span 3;
    grid-column: 5 / span 2;
  }
  .item4 {
    grid-row: 4 / span 1;
    grid-column: 1 / span 1;
    * {
      object-fit: cover;
    }
  }
  .item5 {
    grid-row: 4 / span 1;
    grid-column: 2 / span 1;
    * {
      object-fit: cover;
    }
  }
  .item6 {
    grid-row: 4 / span 1;
    grid-column: 3 / span 1;
    * {
      object-fit: cover;
    }
  }
  .item7 {
    grid-row: 4 / span 3;
    grid-column: 4 / span 3;
  }
  .item8 {
    grid-row: 5 / span 1;
    grid-column: 1 / span 3;
  }
  .item9 {
    grid-row: 6 / span 2;
    grid-column: 1 / span 1;
  }
  .item10 {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
  }
  .item11 {
    grid-row: 7 / span 2;
    grid-column: 4 / span 3;
  }
  .item12 {
    grid-row: 8 / span 3;
    grid-column: 1 / span 2;
  }
  .item13 {
    grid-row: 9 / span 3;
    grid-column: 3 / span 4;
  }
`;

const ImageWrapper = styled.div<{ $title: string }>`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  &:after {
    position: absolute;
    content: "${({ $title }) => `${$title}`}";
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: yellow;
    transform: translateY(-50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    &:after {
      transform: translateY(-50%) scale(1);
    }
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
