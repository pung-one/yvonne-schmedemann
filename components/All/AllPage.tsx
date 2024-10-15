"use client";

import { Project } from "@/lib/types";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { getCategoriesBlurDataUrl, getCategoryColor } from "@/lib/_utils";
import { useContext } from "react";
import { HoverImageFromCategoryContext, VisitedProjects } from "../Layout";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

function generateSeededRandomPosition(seed: number) {
  const randomMultiplier = Math.sin(seed) * 10000;
  const rawPosition = (randomMultiplier - Math.floor(randomMultiplier)) * 100;
  return 10 + (rawPosition % 80); // Ensures the position is between 10% and 90%
}

function hashStringToNumber(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

type Props = {
  projects?: Project[];
};

export function AllPage({ projects }: Props) {
  const { visitedProjects, setVisitedProjects } = useContext(VisitedProjects);
  const { setHoverImageFromCategory } = useContext(
    HoverImageFromCategoryContext
  );

  return (
    <Container>
      <ImageSection>
        {cmsBaseUrl &&
          projects?.map((project, index) => {
            const imageData = project.attributes.allPageImage.data;

            const category = project.attributes.category;

            if (!imageData || !category) {
              return;
            }

            const visited = visitedProjects.includes(project.id);

            const {
              attributes: { alternativeText, url, width, height },
            } = imageData;

            // Use the project id or title to generate a consistent seed for each image
            const seed = hashStringToNumber(project.attributes.Beschreibung);

            // Generate positions that are consistent but appear random
            const positionTop = `${generateSeededRandomPosition(seed)}%`;
            const positionLeft = `${generateSeededRandomPosition(seed * 2)}%`;

            return (
              <ImageWrapper
                href={`${category}/${project.id}`}
                key={project.id}
                className={`item${index + 1}`}
                $title={`${project.attributes.Titel} \\A \\A ${category}\\A+${project.attributes.Bilder.data.length}`}
                $cursorColor={getCategoryColor(category)}
                onMouseEnter={() => setHoverImageFromCategory(category)}
                onMouseLeave={() => setHoverImageFromCategory("none")}
                onClick={() =>
                  setVisitedProjects((prev) => [...prev, project.id])
                }
              >
                {visited && (
                  <CategoryDot
                    $categoryColor={getCategoryColor(category)}
                    $positionTop={positionTop}
                    $positionLeft={positionLeft}
                  />
                )}
                <StyledImage
                  placeholder="blur"
                  $visited={visited}
                  blurDataURL={getCategoriesBlurDataUrl(category)}
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

const Container = styled.article`
  position: relative;
  padding-top: 120px;
  @media only screen and (max-width: 768px) {
    padding: 50px 10px 0;
  }
`;

const ImageSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled(Link)<{ $title: string; $cursorColor: string }>`
  position: relative;
  width: 100%;
  padding-top: 125%; //to get the 4:5 dimensions. also notice StyledImage position
  @media only screen and (max-width: 768px) {
    height: calc(41.25vw - 13px);
  }
  cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E")  15 15, auto`};
  &:after {
    z-index: 5;
    position: absolute;
    content: "${({ $title }) => $title}";
    white-space: preserve-breaks;
    word-spacing: 9999px;
    letter-spacing: 1px;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 30px;
    line-height: 29px;
    font-weight: 500;
    color: #ffff00;
    transform: translateY(-50%) scale(0);
  }
  &:hover {
    &:after {
      transform: translateY(-50%) scale(1);
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ $visited }) => ($visited ? "brightness(40%)" : "none")};
`;
