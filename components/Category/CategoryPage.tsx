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
            const imageData = project.landingPageImage;

            const category = project.category;

            if (!imageData || !category) {
              return;
            }

            const { alternativeText, url, width, height } = imageData;

            return (
              <ImageWrapper
                href={`${category}/${project.documentId}`}
                key={project.documentId}
                className={`item${index + 1}`}
                $title={`${project.Titel} \\A \\A ${category}\\A+${project.Bilder?.length}`}
              >
                <StyledImage
                  placeholder="blur"
                  blurDataURL={getCategoriesBlurDataUrl(category)}
                  src={cmsBaseUrl + url}
                  width={width}
                  height={height}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 85vw"
                  alt={alternativeText || ""}
                  loading="lazy"
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
    padding: 0 10px;
  }

  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;
  @media only screen and (max-width: 1140px) {
    gap: 20px;
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
    grid-row: 2 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item6 {
    grid-row: 2 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item7 {
    grid-row: 2 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item8 {
    grid-row: 3 / span 1;
    grid-column: 3 / span 2;
    width: 70%;
    margin-top: -20px;
    aspect-ratio: 6 / 4;
    justify-self: end;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .item9 {
    grid-row: 4 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item10 {
    grid-row: 4 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item11 {
    grid-row: 4 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item12 {
    grid-row: 4 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item13 {
    grid-row: 5 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item14 {
    grid-row: 5 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item15 {
    grid-row: 5 / span 2;
    grid-column: 3 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item16 {
    grid-row: 6 / span 1;
    grid-column: 1 / span 2;
    width: 75%;
    margin-top: -20px;
    aspect-ratio: 6 / 4;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .item17 {
    grid-row: 7 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item18 {
    grid-row: 7 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item19 {
    grid-row: 7 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item20 {
    grid-row: 7 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item21 {
    grid-row: 8 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item22 {
    grid-row: 8 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item23 {
    grid-row: 8 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item24 {
    grid-row: 9 / span 1;
    grid-column: 3 / span 2;
    width: 70%;
    margin-top: -20px;
    aspect-ratio: 6 / 4;
    justify-self: end;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .item25 {
    grid-row: 10 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item26 {
    grid-row: 10 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item27 {
    grid-row: 10 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item28 {
    grid-row: 10 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item29 {
    grid-row: 11 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item30 {
    grid-row: 11 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item31 {
    grid-row: 11 / span 2;
    grid-column: 3 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item32 {
    grid-row: 12 / span 1;
    grid-column: 1 / span 2;
    width: 75%;
    margin-top: -20px;
    aspect-ratio: 6 / 4;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .item33 {
    grid-row: 13 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item34 {
    grid-row: 13 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item35 {
    grid-row: 13 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item36 {
    grid-row: 13 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item37 {
    grid-row: 14 / span 2;
    grid-column: 1 / span 2;
    aspect-ratio: 7 / 8;
  }
  .item38 {
    grid-row: 14 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item39 {
    grid-row: 14 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item40 {
    grid-row: 15 / span 1;
    grid-column: 3 / span 2;
    width: 70%;
    margin-top: -20px;
    aspect-ratio: 6 / 4;
    justify-self: end;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  .item41 {
    grid-row: 16 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item42 {
    grid-row: 16 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item43 {
    grid-row: 16 / span 1;
    grid-column: 3 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item44 {
    grid-row: 16 / span 1;
    grid-column: 4 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item45 {
    grid-row: 17 / span 1;
    grid-column: 1 / span 1;
    aspect-ratio: 4 / 5;
  }
  .item46 {
    grid-row: 17 / span 1;
    grid-column: 2 / span 1;
    aspect-ratio: 4 / 5;
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
