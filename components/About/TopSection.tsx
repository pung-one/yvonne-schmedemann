"use client";

import { ImageData } from "@/lib/types";
import styled from "styled-components";
import Image from "next/image";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  portrait?: ImageData;
  bio?: string;
  customers: string;
};

export function TopSection({ portrait, bio, customers }: Props) {
  const portraitData = portrait?.attributes;
  return (
    <Container>
      <LeftSection>
        {portraitData && (
          <PortraitContainer>
            <PortraitImage
              src={cmsBaseUrl + portraitData.url}
              width={portraitData.width}
              height={portraitData.height}
              alt={portraitData.alternativeText || ""}
            />
            <p>Photo: Melf Holm</p>
          </PortraitContainer>
        )}

        <Bio>
          <span>YVONNE SCHMEDEMANN</span>
          <br />
          {bio}
        </Bio>
      </LeftSection>

      <Customers>{customers}</Customers>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  gap: 50px;
  @media only screen and (max-width: 1140px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  @media only screen and (max-width: 1140px) {
    width: 100%;
  }
`;

const PortraitContainer = styled.div`
  p {
    text-align: right;
    font-size: 14px;
    color: black;
  }
  a:hover {
    color: #9966ff;
  }
`;

const PortraitImage = styled(Image)`
  width: fit-content;
  height: 300px;
  object-fit: contain;
`;

const Bio = styled.p`
  padding: 100px 50px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 24px;
  letter-spacing: 0.6pt;
  white-space: pre-line;
  span {
    font-family: "LogoFont";
    font-size: 20px;
  }
  @media only screen and (max-width: 1140px) {
    padding: 100px 20px;
  }
`;

const Customers = styled.p`
  flex: 1;
  column-count: 4;
  column-gap: 20px;
  white-space: pre-line;
  @media only screen and (max-width: 850px) {
    column-count: 1;
    padding: 0 20px;
  }
`;
