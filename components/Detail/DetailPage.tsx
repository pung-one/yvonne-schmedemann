"use client";

import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Description } from "./Description";
import { Project } from "@/lib/types";
import { getCategoryColor } from "@/lib/_utils";
import { useRouter, useSearchParams } from "next/navigation";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { LoadingOverlay } from "../LoadingOverlay";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export function DetailPage() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [project, setPoject] = useState<Project>();

  useEffect(() => {
    async function getProjects() {
      const projectResponse = await fetch(
        cmsBaseUrl + `/api/projekts/${id}?populate=*`
      );

      const projectObject = await projectResponse.json();

      setPoject(projectObject.data);
    }

    getProjects();
  }, [id]);

  return !project ? (
    <LoadingOverlay />
  ) : (
    <Container $fullscreen={project.attributes.fullscreen}>
      <CategorySign $color={getCategoryColor(project.attributes.category)}>
        {project.attributes.category.toLocaleUpperCase()}
      </CategorySign>

      <CloseButton onClick={() => router.back()}>
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
