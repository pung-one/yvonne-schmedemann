"use client";

import { useContext } from "react";
import { RequestContext } from "../RequestWrapper";
import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";

export function Detail({ slug }: { slug: string }) {
  const { projects } = useContext(RequestContext);

  const project = projects?.find((project) => slug === project.attributes.slug);

  return (
    <Container>
      {project && (
        <>
          <ImageGallery
            imageData={project?.attributes.Bilder.data}
            category={project?.attributes.Category}
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
