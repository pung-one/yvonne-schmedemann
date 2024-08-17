"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";

export function DetailPage({ project }: { project: Project }) {
  return (
    <Container>
      {project && (
        <>
          <ImageGallery
            imageData={project?.attributes.Bilder.data}
            category={project?.attributes.category}
          />

          <Description project={project} />
        </>
      )}
    </Container>
  );
}

const Container = styled.article`
  position: relative;
`;
