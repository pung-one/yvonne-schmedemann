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
  position: relative;
  width: ${({ $fullscreen }) => ($fullscreen ? "100vw" : "unset")};
  margin-top: ${({ $fullscreen }) => ($fullscreen ? "-71px" : "unset")};
  margin-left: ${({ $fullscreen, $windowWidthOverflow }) =>
    $fullscreen ? `-${$windowWidthOverflow}px` : "unset"};
`;

const CloseButton = styled.button<{
  $windowWidthOverflow: number;
}>`
  position: fixed;
  z-index: 5;
  margin-right: 20px;
  right: ${({ $windowWidthOverflow }) => `${$windowWidthOverflow}px`};
  height: 70px;
  top: 70px;
  padding: 0 10px;
  background: none;
  border: none;
  cursor: inherit;
  color: grey;
  mix-blend-mode: difference;
  transition: transform 0.2s;
  font-size: 18px;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath stroke='%23ff00cf' stroke-width='2' d='m0 0 32 32M0 32 32 0'/%3E%3C/svg%3E")
      16 16,
    auto;
`;
