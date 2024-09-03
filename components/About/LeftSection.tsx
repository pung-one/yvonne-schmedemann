import { ImageData } from "@/lib/types";
import styled from "styled-components";
import Image from "next/image";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  portrait?: ImageData;
  studioImage?: ImageData;
  bio?: string;
};

export function LeftSection({ portrait, bio, studioImage }: Props) {
  const portraitData = portrait?.attributes;
  const studioImageData = studioImage?.attributes;
  return (
    <Container>
      {portraitData && (
        <PortraitContainer>
          <PortraitImage
            src={cmsBaseUrl + portraitData.url}
            width={portraitData.width}
            height={portraitData.height}
            alt={portraitData.alternativeText || ""}
          />
          <p>
            Photo: <a href="https://melfholm.com/">Melf Holm</a>
          </p>
        </PortraitContainer>
      )}

      <Bio>
        <span>YVONNE SCHMEDEMANN</span> {bio}
      </Bio>

      {studioImageData && (
        <StudioImage
          src={cmsBaseUrl + studioImageData.url}
          width={studioImageData.width}
          height={studioImageData.height}
          alt={studioImageData.alternativeText || ""}
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PortraitContainer = styled.div`
  p,
  a {
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
  span {
    font-family: "LogoFont";
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const StudioImage = styled(Image)`
  width: 100%;
  height: fit-content;
  object-fit: contain;
`;
