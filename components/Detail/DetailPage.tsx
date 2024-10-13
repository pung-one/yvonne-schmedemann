"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";
import { getCategoryColor } from "@/lib/_utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

export function DetailPage({ project }: { project: Project }) {
  const router = useRouter();
  const [windowWidthOverflow, setWindowWidthOverflow] = useState(0);

  function handleResize() {
    if (window.innerWidth > 1440) {
      setWindowWidthOverflow((window.innerWidth - 1440) / 2);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth > 1440) {
        setWindowWidthOverflow((window.innerWidth - 1440) / 2);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <Container
        $cursorColor={getCategoryColor(project.attributes.category)}
        $windowWidthOverflow={windowWidthOverflow}
        $fullscreen={project.attributes.fullscreen}
      >
        <CloseButton
          $windowWidthOverflow={windowWidthOverflow}
          onClick={() => router.back()}
        >
          <TfiClose />
        </CloseButton>
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
  $windowWidthOverflow: number;
  $cursorColor: string;
}>`
  background: white;
  position: relative;
  width: ${({ $fullscreen }) => ($fullscreen ? "100vw" : "unset")};
  margin-top: ${({ $fullscreen }) => ($fullscreen ? "-71px" : "unset")};
  padding-top: ${({ $fullscreen }) => ($fullscreen ? "unset" : "70px")};
  margin-left: ${({ $fullscreen, $windowWidthOverflow }) =>
    $fullscreen ? `-${$windowWidthOverflow}px` : "unset"};
`;

const CloseButton = styled.button<{
  $windowWidthOverflow: number;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
  right: ${({ $windowWidthOverflow }) => `${$windowWidthOverflow}px`};
  height: 70px;
  top: 70px;
  background: none;
  border: none;
  cursor: inherit;
  color: white;
  mix-blend-mode: difference;
  @media only screen and (max-width: 1440px) {
    margin-right: 20px;
  }
  * {
    font-size: 33px;
  }
  &:hover {
    mix-blend-mode: unset;
    color: #ff00cf;
  }
`;
