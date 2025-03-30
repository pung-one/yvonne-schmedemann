"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";
import { getCategoryColor } from "@/lib/_utils";
import { useRouter } from "next/navigation";
import { TfiClose } from "react-icons/tfi";

export function DetailPage({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <>
      <Container $fullscreen={project?.fullscreen}>
        <CategorySign $color={getCategoryColor(project.category)}>
          {project.category.toLocaleUpperCase()}
        </CategorySign>

        <CloseButton onClick={() => router.back()}>
          <TfiClose />
        </CloseButton>
        {project && (
          <>
            <ImageGallery
              title={project.Titel}
              imageData={project.Bilder}
              fullscreen={project.fullscreen}
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
}>`
  background: white;
  position: relative;
  width: ${({ $fullscreen }) => ($fullscreen ? "100vw" : "unset")};
  margin-top: ${({ $fullscreen }) => ($fullscreen ? "-71px" : "unset")};
  padding-top: ${({ $fullscreen }) => ($fullscreen ? "unset" : "70px")};
  margin-left: ${({ $fullscreen }) => ($fullscreen ? `-75px` : "unset")};
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    padding-top: ${({ $fullscreen }) => ($fullscreen ? "140px" : "70px")};
  }
`;

const CategorySign = styled.p<{ $color: string }>`
  z-index: 9;
  display: none;
  position: fixed;
  top: 70px;
  left: 22px;
  line-height: 70px;
  color: ${({ $color }) => $color};
  @media only screen and (max-width: 768px) {
    display: unset;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
  height: 70px;
  top: 70px;
  right: 90px;
  background: none;
  border: none;
  cursor: inherit;
  color: white;
  mix-blend-mode: difference;
  @media only screen and (max-width: 768px) {
    right: 35px;
  }
  * {
    font-size: 33px;
  }
  &:hover {
    mix-blend-mode: unset;
    color: #ff00cf;
  }
`;
