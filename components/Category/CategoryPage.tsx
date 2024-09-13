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
  padding-top: 120px;
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media only screen and (min-width: 768px) {
    gap: unset;
    display: grid;
    grid-template-columns: repeat(4, 23%);
    grid-gap: 2.6666%;
    .item1 {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
    }
    .item2 {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
    }
    .item3 {
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
    }
    .item4 {
      grid-row: 1 / span 1;
      grid-column: 4 / span 1;
    }
    .item5 {
      grid-row: 2 / span 2;
      grid-column: 2 / span 2;
      aspect-ratio: 5 / 3;
    }
    .item6 {
      grid-row: 4 / span 2;
      grid-column: 1 / span 2;
      aspect-ratio: 7 / 8;
      * {
        object-fit: cover;
      }
    }
    .item7 {
      grid-row: 4 / span 1;
      grid-column: 3 / span 1;
      * {
        object-position: top;
      }
    }
    .item8 {
      grid-row: 4 / span 1;
      grid-column: 4 / span 1;
      * {
        object-position: top;
      }
    }
    .item9 {
      grid-row: 5 / span 1;
      grid-column: 3 / span 2;
      aspect-ratio: 6 / 4;
      justify-self: end;
      * {
        width: fit-content;
        height: 100%;
      }
    }
    .item10 {
      grid-row: 6 / span 1;
      grid-column: 1 / span 1;
    }
    .item11 {
      grid-row: 6 / span 1;
      grid-column: 2 / span 1;
    }
    .item12 {
      grid-row: 6 / span 1;
      grid-column: 3 / span 1;
    }
    .item13 {
      grid-row: 6 / span 1;
      grid-column: 4 / span 1;
    }
    .item14 {
      grid-row: 7 / span 1;
      grid-column: 2 / span 2;
    }
    .item15 {
      grid-row: 8 / span 1;
      grid-column: 1 / span 1;
    }
    .item16 {
      grid-row: 8 / span 1;
      grid-column: 2 / span 1;
    }
    .item17 {
      grid-row: 8 / span 2;
      grid-column: 3 / span 2;
    }
    .item18 {
      grid-row: 9 / span 1;
      grid-column: 1 / span 1;
    }
    .item18 {
      grid-row: 9 / span 1;
      grid-column: 2 / span 1;
    }
    .item18 {
      grid-row: 9 / span 1;
      grid-column: 3 / span 1;
    }
    .item18 {
      grid-row: 9 / span 1;
      grid-column: 4 / span 1;
    }
  }
`;

const ImageWrapper = styled(Link)<{ $title: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
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

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
