"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";
import { getCategoryColor } from "@/lib/_utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function DetailPage({ project }: { project: Project }) {
  const router = useRouter();
  const [windowWidthOverflow, setWindowWidthOverflow] = useState(0);

  function handleResize() {
    if (window.innerWidth > 1350) {
      setWindowWidthOverflow((window.innerWidth - 1350) / 2);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth > 1350) {
        setWindowWidthOverflow((window.innerWidth - 1350) / 2);
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
          $fullscreen={project.attributes.fullscreen}
          $windowWidthOverflow={windowWidthOverflow}
          onClick={() => router.back()}
        >
          CLOSE
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
  $fullscreen: boolean;
  $windowWidthOverflow: number;
}>`
  position: ${({ $fullscreen }) => ($fullscreen ? "fixed" : "absolute")};
  z-index: 9;
  right: ${({ $windowWidthOverflow, $fullscreen }) =>
    $fullscreen ? `${$windowWidthOverflow}px` : "0"};
  height: 70px;
  top: ${({ $fullscreen }) => ($fullscreen ? "70px" : "0")};
  background: none;
  border: none;
  cursor: inherit;
  color: ${({ $fullscreen }) => ($fullscreen ? "white" : "black")};
  mix-blend-mode: ${({ $fullscreen }) =>
    $fullscreen ? "difference" : "unset"};
  transition: transform 0.2s;
  font-size: 18px;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath stroke='%23ff00cf' stroke-width='2' d='m0 0 32 32M0 32 32 0'/%3E%3C/svg%3E")
      16 16,
    auto;
  @media only screen and (max-width: 1350px) {
    margin-right: 20px;
  }
`;
