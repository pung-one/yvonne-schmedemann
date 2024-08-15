"use client";

import styled from "styled-components";
import Image from "next/image";
import { RequestContext } from "../RequestWrapper";
import { useContext } from "react";

export function Hero() {
  const { landingInfo, cmsBaseUrl } = useContext(RequestContext);

  const imageData = landingInfo?.attributes.HeroImage.data.attributes;

  const description = landingInfo?.attributes.HeroText;

  return (
    <Container>
      {imageData && cmsBaseUrl && (
        <StyledImage
          priority
          unoptimized
          src={cmsBaseUrl + imageData?.url}
          width={imageData?.width}
          height={imageData?.height}
          alt={imageData?.alternativeText || ""}
        />
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
  margin-bottom: 100px;
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: black;
  margin: 0 5vw;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 100px auto;
`;
