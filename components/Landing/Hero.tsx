"use client";

import styled from "styled-components";
import Image from "next/image";
import { LandingInfo } from "@/lib/types";
import { useContext } from "react";
import { ViewportWidthContext } from "../Layout";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  landingInfo: LandingInfo;
};

export function Hero({ landingInfo }: Props) {
  const heroImageDesktopData =
    landingInfo?.attributes.HeroImageDesktop.data.attributes;
  const heroImageMobileData =
    landingInfo?.attributes.HeroImageMobile.data.attributes;

  const description = landingInfo?.attributes.HeroText;

  const viewPortWidth = useContext(ViewportWidthContext);

  return (
    <Container>
      {viewPortWidth > 768 ? (
        <>
          {heroImageDesktopData && cmsBaseUrl && (
            <StyledImage
              priority
              unoptimized
              src={cmsBaseUrl + heroImageDesktopData?.url}
              width={heroImageDesktopData?.width}
              height={heroImageDesktopData?.height}
              alt={heroImageDesktopData?.alternativeText || ""}
            />
          )}
        </>
      ) : (
        <>
          {heroImageMobileData && cmsBaseUrl && (
            <StyledImage
              priority
              unoptimized
              src={cmsBaseUrl + heroImageMobileData?.url}
              width={heroImageMobileData?.width}
              height={heroImageMobileData?.height}
              alt={heroImageMobileData?.alternativeText || ""}
            />
          )}
        </>
      )}

      <HorizontalLine />

      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: black;
`;

const Description = styled.p`
  max-width: 990px;
  margin: 80px auto;
  padding: 0 20px;
  letter-spacing: 1px;
`;
