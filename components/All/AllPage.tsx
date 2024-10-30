"use client";

import { Project } from "@/lib/types";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { getCategoriesBlurDataUrl, getCategoryColor } from "@/lib/_utils";
import { useContext, useEffect, useState } from "react";
import { HoverImageFromCategoryContext } from "../Layout";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type DotPosition = { x: string; y: string };
type DotPositions = { [key: string]: DotPosition };

type Props = {
  projects?: Project[];
};

export function AllPage({ projects }: Props) {
  const [, forceUpdate] = useState(0);
  const [dotPositions, setDotPositions] = useState<DotPositions>({});
  const { setHoverImageFromCategory } = useContext(
    HoverImageFromCategoryContext
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const positions: DotPositions = {};
      projects?.forEach((project) => {
        const localStorageDotPosition = localStorage.getItem(
          project.id.toString()
        );
        if (localStorageDotPosition) {
          const dotPosition = JSON.parse(localStorageDotPosition);
          positions[project.id.toString()] = dotPosition;
        }
      });
      setDotPositions(positions);
    }
  }, [projects]);

  function resetVisitedProjects() {
    localStorage.clear();
    setDotPositions({});
  }

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

            function saveDotPosition(e: React.MouseEvent<HTMLAnchorElement>) {
              const dotPosition = JSON.stringify({
                x: `${Math.round(e.nativeEvent.offsetX)}px`,
                y: `${Math.round(e.nativeEvent.offsetY)}px`,
              });

              localStorage.setItem(project.id.toString(), dotPosition);
            }

            const dotPosition = dotPositions[project.id.toString()];

            const {
              attributes: { alternativeText, url, width, height },
            } = imageData;

            return (
              <ImageWrapper
                href={`${category}/${project.id}`}
                key={project.id}
                className={`item${index + 1}`}
                $title={`${project.attributes.Titel} \\A \\A ${category}\\A+${project.attributes.Bilder.data.length}`}
                $cursorColor={getCategoryColor(category)}
                onMouseEnter={() => setHoverImageFromCategory(category)}
                onMouseLeave={() => setHoverImageFromCategory("none")}
                onClick={saveDotPosition}
              >
                {dotPosition !== undefined && (
                  <CategoryDot
                    $categoryColor={getCategoryColor(category)}
                    $positionTop={dotPosition.y}
                    $positionLeft={dotPosition.x}
                  />
                )}
                <StyledImage
                  placeholder="blur"
                  $visited={dotPosition !== undefined}
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

      <ResetButton onClick={() => resetVisitedProjects()}>
        reset visited projects
      </ResetButton>
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
    font-size: 2.3vw;
    line-height: 2.3vw;
    font-weight: 500;
    color: #ffff00;
    transform: translateY(-50%) scale(0);
    @media only screen and (max-width: 768px) {
      font-size: 4.5vw;
      line-height: 4.5vw;
    }
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
  transform: translate(-50%, -50%);
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

const ResetButton = styled.button`
  position: absolute;
  bottom: -50px;
  background: none;
  border: none;
  cursor: inherit;
  font-size: 14px;
  color: black;
  &:hover {
    color: #9966ff;
  }
`;
