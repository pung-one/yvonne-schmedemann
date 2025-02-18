"use client";

import styled from "styled-components";
import { ImageData } from "@/lib/types";
import Image from "next/image";

type Props = {
  studioImage: ImageData;
};

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export function BottomSection({ studioImage }: Props) {
  const studioImageData = studioImage?.attributes;

  return (
    <Container>
      {studioImageData && (
        <StudioImage
          src={cmsBaseUrl + studioImageData.url}
          width={studioImageData.width}
          height={studioImageData.height}
          alt={studioImageData.alternativeText || ""}
        />
      )}

      <StudioInfo id="contact">
        <h3>Studio</h3>

        <Contact>
          <h4>CONTACT</h4>

          <Links>
            <p>
              <a href="tel:+491792304580">+491792304580</a> •{" "}
              <a href="mailto:mail@yvonneschmedemann.com">
                mail@yvonneschmedemann.com
              </a>
            </p>
            <span>
              <a
                href="https://www.linkedin.com/in/yvonne-schmedemann-069765b1/"
                target="_blank"
              >
                linkedIn
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/yvonneschmedemann/"
                target="_blank"
              >
                instagram
              </a>
            </span>
          </Links>
        </Contact>

        <p>
          Hoheluftchaussee 139
          <br />
          20253 Hamburg
        </p>
      </StudioInfo>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: flex-end;
  gap: 50px;
  padding: 100px 0 0;
  @media only screen and (max-width: 1140px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const StudioImage = styled(Image)`
  width: 30%;
  height: fit-content;
  object-fit: contain;
  @media only screen and (max-width: 1140px) {
    width: 100%;
  }
`;

const StudioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 0 0;
  @media only screen and (max-width: 1140px) {
    padding: 100px 20px 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 100;
  }
  h4 {
    font-weight: 500;
  }
  a,
  p {
    width: fit-content;
    font-size: 14px;
    color: black;
    text-decoration: none;
  }
  a {
    &:hover {
      color: #9966ff;
    }
  }
`;

const Contact = styled.div``;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
