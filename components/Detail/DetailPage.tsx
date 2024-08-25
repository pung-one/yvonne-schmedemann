"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";

export function DetailPage({ project }: { project: Project }) {
  return (
    <Container $fullscreen={project.attributes.fullscreen}>
      {project && (
        <>
          <ImageGallery
            imageData={project.attributes.Bilder.data}
            category={project.attributes.category}
            fullscreen={project.attributes.fullscreen}
          />

          <Description project={project} />
        </>
      )}
    </Container>
  );
}

const Container = styled.article<{ $fullscreen: boolean }>`
  position: relative;
  padding-top: ${({ $fullscreen }) => ($fullscreen ? "0" : "71px")};
`;
