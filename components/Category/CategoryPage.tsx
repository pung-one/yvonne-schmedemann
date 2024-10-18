"use client";

import { Project } from "@/lib/types";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { getCategoriesBlurDataUrl } from "@/lib/_utils";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  projects: Project[];
};

export function CategoryPage({ projects }: Props) {
  return (
    <Container>
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
                $title={`${project.attributes.Titel} \\A \\A ${category}\\A+${project.attributes.Bilder?.data?.length}`}
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

const Container = styled.article`
  position: relative;
  padding-top: 80px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  @media only screen and (max-width: 1140px) {
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }

  .item1 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item2 {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item3 {
    grid-row: 1 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item4 {
    grid-row: 1 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item5 {
    grid-row: 2 / span 1;
    grid-column: 2 / span 2;
    aspect-ratio: 5 / 3;
  }
  .item6 {
    grid-row: 3 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item7 {
    grid-row: 3 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item8 {
    grid-row: 3 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item9 {
    grid-row: 4 / span 1;
    grid-column: 3 / span 2;
    margin-top: -50px;
    width: 75%;
    aspect-ratio: 6 / 4;
    justify-self: end;
    @media only screen and (max-width: 1140px) {
      margin-top: -25px;
    }
  }
  .item10 {
    grid-row: 5 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item11 {
    grid-row: 5 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item12 {
    grid-row: 5 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item13 {
    grid-row: 5 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item14 {
    grid-row: 6 / span 1;
    grid-column: 2 / span 2;
    aspect-ratio: 5 / 3;
  }
  .item15 {
    grid-row: 7 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item16 {
    grid-row: 7 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item17 {
    grid-row: 7 / span 2;
    grid-column: 3 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item18 {
    grid-row: 8 / span 1;
    grid-column: 1 / span 2;
    margin-top: -50px;
    width: 75%;
    aspect-ratio: 6 / 4;
    @media only screen and (max-width: 1140px) {
      margin-top: -25px;
    }
  }
  .item19 {
    grid-row: 9 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item20 {
    grid-row: 9 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item21 {
    grid-row: 9 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item22 {
    grid-row: 9 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item23 {
    grid-row: 10 / span 1;
    grid-column: 2 / span 2;
    aspect-ratio: 5 / 3;
  }
  .item24 {
    grid-row: 11 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item25 {
    grid-row: 11 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item26 {
    grid-row: 11 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item27 {
    grid-row: 12 / span 1;
    grid-column: 3 / span 2;
    margin-top: -50px;
    width: 75%;
    aspect-ratio: 6 / 4;
    justify-self: end;
    @media only screen and (max-width: 1140px) {
      margin-top: -25px;
    }
  }
  .item28 {
    grid-row: 13 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item29 {
    grid-row: 13 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item30 {
    grid-row: 13 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item31 {
    grid-row: 13 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item32 {
    grid-row: 14 / span 1;
    grid-column: 2 / span 2;
    aspect-ratio: 5 / 3;
  }
  .item33 {
    grid-row: 15 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item34 {
    grid-row: 15 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item35 {
    grid-row: 15 / span 2;
    grid-column: 3 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item36 {
    grid-row: 16 / span 1;
    grid-column: 1 / span 2;
    margin-top: -50px;
    width: 75%;
    aspect-ratio: 6 / 4;
    @media only screen and (max-width: 1140px) {
      margin-top: -25px;
    }
  }
`;

const ImageWrapper = styled(Link)<{ $title: string }>`
  @media only screen and (max-width: 768px) {
    height: fit-content;
    aspect-ratio: unset !important;
    margin: 0 !important;
    width: 100% !important;
  }
  position: relative;
  width: 100%;

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
      font-size: 40px;
      line-height: 40px;
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
