"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";
import { getCategoryColor } from "@/lib/_utils";
import { useRouter } from "next/navigation";

export function DetailPage({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <>
      <Container
        $cursorColor={getCategoryColor(project.attributes.category)}
        $fullscreen={project.attributes.fullscreen}
      >
        <CloseButton onClick={() => router.back()}>close</CloseButton>
        {project && (
          <>
            <ImageGallery
              title={project.attributes.Titel}
              imageData={project.attributes.Bilder.data}
              fullscreen={project.attributes.fullscreen}
            />

            <Description project={project} />
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.article<{
  $fullscreen: boolean;
  $cursorColor: string;
}>`
  position: relative;
  padding-top: ${({ $fullscreen }) => ($fullscreen ? "0" : "71px")};
`;

const CloseButton = styled.button`
  position: fixed;
  z-index: 99999;
  right: 35px;
  top: 90px;
  height: 45px;
  background: none;
  border: none;
  color: grey;
  cursor: inherit;
  mix-blend-mode: difference;
  transition: transform 0.2s;
  &:hover {
    transform: rotate(-15deg);
  }
`;
