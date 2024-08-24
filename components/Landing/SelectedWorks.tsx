"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { getCategoriesBlurDataUrl, getCategoryColor } from "@/lib/_utils";
import { Projects } from "@/lib/types";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  projects: Projects;
};

export function SelectedWorks({ projects }: Props) {
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
            const imageData = project.attributes.Titelbild.data;

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
                $title={project.attributes.Titel}
              >
                <StyledImage
                  placeholder="blur"
                  $cursorColor={getCategoryColor(category)}
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
  div {
    top: 50%;
    flex: 1;
    height: 1px;
    background-color: black;
    margin: 0 5vw;
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
      grid-column: 1 / span 1;
      * {
        object-fit: cover;
      }
    }
    .item5 {
      grid-row: 4 / span 1;
      grid-column: 2 / span 1;
      * {
        object-fit: cover;
      }
    }
    .item6 {
      grid-row: 4 / span 1;
      grid-column: 3 / span 1;
      * {
        object-fit: cover;
      }
    }
    .item7 {
      grid-row: 4 / span 3;
      grid-column: 4 / span 3;
    }
    .item8 {
      grid-row: 5 / span 1;
      grid-column: 1 / span 3;
    }
    .item9 {
      grid-row: 6 / span 2;
      grid-column: 1 / span 1;
    }
    .item10 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }
    .item11 {
      grid-row: 7 / span 2;
      grid-column: 4 / span 3;
    }
    .item12 {
      grid-row: 8 / span 3;
      grid-column: 1 / span 3;
    }
    .item13 {
      grid-row: 9 / span 2;
      grid-column: 4 / span 3;
    }
    .item14 {
      grid-row: 11 / span 3;
      grid-column: 1 / span 2;
    }
    .item15 {
      grid-row: 11 / span 2;
      grid-column: 3 / span 2;
      * {
        object-fit: cover;
      }
    }
    .item16 {
      grid-row: 11 / span 2;
      grid-column: 5 / span 2;
      * {
        object-fit: cover;
      }
    }
    .item17 {
      grid-row: 13 / span 1;
      grid-column: 4 / span 2;
    }
    .item18 {
      grid-row: 14 / span 3;
      grid-column: 1 / span 3;
    }
    .item19 {
      grid-row: 15 / span 1;
      grid-column: 4 / span 1;
      * {
        object-fit: cover;
      }
    }
    .item20 {
      grid-row: 14 / span 2;
      grid-column: 5 / span 2;
    }
  }
`;

const ImageWrapper = styled(Link)<{ $title: string }>`
  position: relative;
  width: 100%;
  @media only screen and (min-width: 768px) {
    padding-top: 100%;
  }
  &:after {
    position: absolute;
    content: "${({ $title }) => `${$title}`}";
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #ffff00;
    transform: translateY(-50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    &:after {
      transform: translateY(-50%) scale(1);
    }
  }
`;

const StyledImage = styled(Image)<{ $cursorColor: string }>`
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  }
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E"), auto`};
`;
