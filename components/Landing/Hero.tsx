"use client";

import styled from "styled-components";
import { getImageProps } from "next/image";
import { LandingInfo } from "@/lib/types";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  landingInfo: LandingInfo;
};

export function Hero({ landingInfo }: Props) {
  const heroImageDesktopData = landingInfo?.HeroImageDesktop;
  const heroImageMobileData = landingInfo?.HeroImageMobile;

  const description = landingInfo?.HeroText;

  const common = { sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    alt: heroImageDesktopData.alternativeText,
    width: heroImageDesktopData.width,
    height: heroImageDesktopData.height,
    quality: 100,
    src: cmsBaseUrl + heroImageDesktopData.url,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    alt: heroImageMobileData.alternativeText,
    width: heroImageMobileData.width,
    height: heroImageMobileData.height,
    quality: 80,
    src: cmsBaseUrl + heroImageMobileData.url,
  });

  return (
    <Container>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source media="(max-width: 768px)" srcSet={mobile} />
        <StyledImage {...rest} />
      </picture>

      <HorizontalLine />

      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: black;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.p`
  max-width: 990px;
  margin: 80px auto;
  padding: 0 20px;
  letter-spacing: 0.6pt;
`;
