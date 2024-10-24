"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { getCategoriesBlurDataUrl, getCategoryColor } from "@/lib/_utils";
import { Projects } from "@/lib/types";
import { useContext } from "react";
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

            if (!imageData || !category) {
              return;
            }

            const {
              attributes: { alternativeText, url, width, height },
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
  margin-bottom: 80px;
  h2 {
    font-weight: normal;
    font-size: 25px;
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
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  .item1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 15 / 22;
    width: 80%;
    justify-self: center;
  }
  .item2 {
    grid-row: 1 / span 2;
    grid-column: 3 / span 2;
    aspect-ratio: 5 / 7;
    margin-top: 5%;
  }
  .item3 {
    grid-row: 1 / span 2;
    grid-column: 5 / span 2;
    aspect-ratio: 11 / 14;
    width: 80%;
    justify-self: end;
    align-self: center;
  }
  .item4 {
    grid-row: 3 / span 1;
    grid-column: 1 / span 3;
    aspect-ratio: 17 / 6;
  }
  .item5 {
    grid-row: 3 / span 3;
    grid-column: 4 / span 3;
    aspect-ratio: 27 / 40;
    width: 90%;
    justify-self: end;
    margin-top: 5%;
  }
  .item6 {
    grid-row: 4 / span 1;
    grid-column: 1 / span 3;
    aspect-ratio: 35 / 23;
    width: 70%;
    justify-self: center;
  }
  .item7 {
    grid-row: 5 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 15 / 22;
    width: 50%;
    margin-left: 10%;
  }
  .item8 {
    grid-row: 5 / span 2;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 6;
    margin-top: 5%;
    min-width: 17vw;
    justify-self: end;
  }
  .item9 {
    grid-row: 6 / span 2;
    grid-column: 4 / span 3;
    aspect-ratio: 5 / 3;
    width: 75%;
    justify-self: center;
    margin-top: 10%;
  }
  .item10 {
    grid-row: 7 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 4 / 5;
    width: 90%;
    margin-top: 10%;
    justify-self: end;
  }
  .item11 {
    grid-row: 8 / span 2;
    grid-column: 3 / span 4;
    aspect-ratio: 4 / 5;
    width: 90%;
    justify-self: end;
  }
  .item12 {
    grid-row: 9 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 5 / 4;
    margin-top: -20%;
  }
  .item13 {
    grid-row: 10 / span 1;
    grid-column: 1 / span 3;
    aspect-ratio: 5 / 3;
    width: 90%;
    justify-self: center;
  }
  .item14 {
    grid-row: 10 / span 2;
    grid-column: 4 / span 3;
    aspect-ratio: 4 / 5;
    width: 90%;
    justify-self: center;
    margin-top: 5%;
  }
  .item15 {
    grid-row: 11 / span 2;
    grid-column: 1 / span 3;
    aspect-ratio: 4 / 5;
    width: 80%;
  }
  .item16 {
    grid-row: 12 / span 2;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
    min-width: 18vw;
    justify-self: end;
  }
  .item17 {
    grid-row: 12 / span 2;
    grid-column: 5 / span 2;
    aspect-ratio: 3 / 5;
    width: 80%;
    justify-self: end;
  }
  .item18 {
    grid-row: 13 / span 1;
    grid-column: 2 / span 3;
    aspect-ratio: 5 / 4;
    margin-top: 3%;
  }
`;

const ImageWrapper = styled(Link)<{ $title: string; $cursorColor: string }>`
  @media only screen and (max-width: 768px) {
    height: fit-content;
    aspect-ratio: unset !important;
    margin: 0 !important;
    width: 100% !important;
  }
  position: relative;
  width: 100%;

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
      font-size: 25px;
      line-height: 25px;
    }
  }
  &:hover {
    &:after {
      transform: translateY(-50%) scale(1);
    }
  }
`;

const StyledImage = styled(Image)`
  @media only screen and (max-width: 768px) {
    object-fit: contain;
  }
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
