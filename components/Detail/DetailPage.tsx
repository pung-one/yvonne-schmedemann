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

  /* cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E")  15 15, auto`} !important; */
`;

const CloseButton = styled.button`
  position: fixed;
  z-index: 99999;
  right: 35px;
  top: 100px;
  height: 45px;
  background: none;
  border: none;
  color: black;
  cursor: inherit;
  //mix-blend-mode: difference;
  &:hover {
    transform: rotate(-15deg);
  }
`;
