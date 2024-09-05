"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { getCategoriesBlurDataUrl, getCategoryColor } from "@/lib/_utils";
import { Category, Projects } from "@/lib/types";
import { useContext, useState } from "react";
import { HoverImageFromCategoryContext } from "../Layout";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  projects: Projects;
};

export function SelectedWorks({ projects }: Props) {
  const { setHoverImageFromCategory } = useContext(
    HoverImageFromCategoryContext
  );

  return (
    <Container>
      <Headline>
        <div />
        <h2>Selected Works</h2>
        <div />
      </Headline>

      <ImageSection>
        {cmsBaseUrl &&
          projects?.map((project, index) => {
            const imageData = project.attributes.landingPageImage.data;

            const category = project.attributes.category;

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
                $title={`${project.attributes.Titel} \\A \\A ${category}\\A+${project.attributes.Bilder.data.length}`}
                onMouseEnter={() => setHoverImageFromCategory(category)}
                onMouseLeave={() => setHoverImageFromCategory("none")}
                $cursorColor={getCategoryColor(category)}
              >
                <StyledImage
                  placeholder="blur"
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

const Container = styled.section`
  position: relative;
`;

const Headline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  h2 {
    font-weight: normal;
    font-size: 20px;
    padding: 0 5vw;
  }
  div {
    top: 50%;
    flex: 1;
    height: 1px;
    background-color: black;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;

    .item1 {
      grid-row: 1 / span 3;
      grid-column: 1 / span 2;
      height: 40vh;
    }
    .item2 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 2;
      height: 50vh;
    }
    .item3 {
      grid-row: 1 / span 3;
      grid-column: 5 / span 2;
    }
    .item4 {
      grid-row: 4 / span 1;
      grid-column: 1 / span 3;
      padding: 0;
      * {
        position: relative;
      }
    }
    .item5 {
      grid-row: 4 / span 3;
      grid-column: 4 / span 3;
    }
    .item6 {
      grid-row: 5 / span 1;
      grid-column: 1 / span 3;
    }
    .item7 {
      grid-row: 6 / span 2;
      grid-column: 1 / span 1;
    }
    .item8 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }
    .item9 {
      grid-row: 7 / span 2;
      grid-column: 4 / span 3;
    }
    .item10 {
      grid-row: 8 / span 3;
      grid-column: 1 / span 3;
    }
    .item11 {
      grid-row: 9 / span 2;
      grid-column: 4 / span 3;
    }
    .item12 {
      grid-row: 11 / span 3;
      grid-column: 1 / span 2;
    }
    .item13 {
      grid-row: 11 / span 2;
      grid-column: 3 / span 2;
      * {
        object-fit: cover;
      }
    }
    .item14 {
      grid-row: 11 / span 2;
      grid-column: 5 / span 2;
      * {
        object-fit: cover;
      }
    }
    .item15 {
      grid-row: 13 / span 1;
      grid-column: 4 / span 2;
    }
    .item16 {
      grid-row: 14 / span 3;
      grid-column: 1 / span 3;
    }
    .item17 {
      grid-row: 15 / span 1;
      grid-column: 4 / span 1;
      * {
        object-fit: cover;
      }
    }
    .item18 {
      grid-row: 14 / span 2;
      grid-column: 5 / span 2;
    }
  }
`;

const ImageWrapper = styled(Link)<{ $title: string; $cursorColor: string }>`
  position: relative;
  width: 100%;
  @media only screen and (min-width: 768px) {
    padding-top: 100%;
  }
  cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E")  15 15, auto`} !important;
  &:after {
    position: absolute;
    content: "${({ $title }) => $title}";
    white-space: preserve-breaks;
    word-spacing: 100vw;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 30px;
    line-height: 25px;
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

const StyledImage = styled(Image)`
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  }
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
