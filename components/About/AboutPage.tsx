"use client";

import { AboutData } from "@/lib/types";
import styled from "styled-components";
import { TopSection } from "./TopSection";
import { BottomSection } from "./BottomSection";

type Props = {
  aboutData: AboutData;
};

export function AboutPage({ aboutData }: Props) {
  const info = aboutData?.attributes;
  console.log(aboutData);
  return (
    <Container>
      <TopSection
        portrait={info?.portrait.data}
        bio={info?.bio}
        customers={info?.customers}
      />

      <BottomSection studioImage={info?.studioImage.data} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 120px;
  @media only screen and (max-width: 1140px) {
    padding-top: 100px;
  }
`;
