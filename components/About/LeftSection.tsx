import { ImageData } from "@/lib/types";
import styled from "styled-components";
import Image from "next/image";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type Props = {
  portrait: ImageData;
  studioImage: ImageData;
  bio: string;
};

export function LeftSection({ portrait, bio, studioImage }: Props) {
  const portraitData = portrait.attributes;
  const studioImageData = studioImage.attributes;
  return (
    <Container>
      <PortraitImage
        src={cmsBaseUrl + portraitData.url}
        width={portraitData.width}
        height={portraitData.height}
        alt={portraitData.alternativeText || ""}
      />

      <Bio>
        <span>YVONNE SCHMEDEMANN</span> {bio}
      </Bio>

      <StudioImage
        src={cmsBaseUrl + studioImageData.url}
        width={studioImageData.width}
        height={studioImageData.height}
        alt={studioImageData.alternativeText || ""}
      />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;

const PortraitImage = styled(Image)`
  width: fit-content;
  height: 300px;
  object-fit: contain;
`;

const Bio = styled.p`
  padding: 70px 50px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 24px;
  span {
    font-family: "LogoFont";
    font-size: 20px;
  }
`;

const StudioImage = styled(Image)`
  width: 100%;
  height: fit-content;
  object-fit: contain;
`;
