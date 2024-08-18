"use client";

import { Project } from "@/lib/types";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { getCategoriesDataUrl, getCategoryColor } from "@/lib/_utils";
import { useContext } from "react";
import { VisitedProjects } from "../Layout";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  projects: Project[];
};

export function AllPage({ projects }: Props) {
  const { visitedProjects, setVisitedProjects } = useContext(VisitedProjects);

  return (
    <Container>
      <ImageSection>
        {cmsBaseUrl &&
          projects?.map((project, index) => {
            const imageData = project.attributes.Titelbild.data;

            const category = project.attributes.category;

            const visited = visitedProjects.includes(project.id);

            const {
              attributes: {
                alternativeText,
                formats: {
                  medium: { url, width, height },
                },
              },
            } = imageData;

            return (
              <ImageWrapper
                href={`${category}/${project.id}`}
                key={project.id}
                className={`item${index + 1}`}
                $title={project.attributes.Titel}
                onClick={() =>
                  setVisitedProjects((prev) => [...prev, project.id])
                }
              >
                {visited && (
                  <CategoryDot
                    $categoryColor={getCategoryColor(
                      project.attributes.category
                    )}
                    $positionTop={`${Math.floor(Math.random() * 80)}%`}
                    $positionLeft={`${Math.floor(Math.random() * 80)}%`}
                  />
                )}
                <StyledImage
                  placeholder="blur"
                  $visited={visited}
                  blurDataURL={getCategoriesDataUrl(category)}
                  src={cmsBaseUrl + url}
                  width={width}
                  height={height}
                  alt={alternativeText || ""}
                />
              </ImageWrapper>
            );
          })}
      </ImageSection>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 250px auto;
`;

const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const ImageWrapper = styled(Link)<{ $title: string }>`
  position: relative;
  width: 200px;
  height: 300px;
  &:after {
    z-index: 5;
    position: absolute;
    content: "${({ $title }) => `${$title}`}";
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #ffff00;
    transform: scale(0);
  }
  &:hover {
    cursor: pointer;
    &:after {
      transform: scale(1);
    }
  }
`;

const CategoryDot = styled.div<{
  $categoryColor: string;
  $positionTop: string;
  $positionLeft: string;
}>`
  z-index: 1;
  position: absolute;
  top: ${({ $positionTop }) => $positionTop};
  left: ${({ $positionLeft }) => $positionLeft};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ $categoryColor }) => $categoryColor};
`;

const StyledImage = styled(Image)<{ $visited: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ $visited }) => ($visited ? "brightness(40%)" : "none")};
`;
