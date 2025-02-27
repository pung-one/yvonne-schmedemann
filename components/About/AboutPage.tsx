"use client";

import { AboutData } from "@/lib/types";
import styled from "styled-components";
import { TopSection } from "./TopSection";
import { BottomSection } from "./BottomSection";

type Props = {
  aboutData: AboutData;
};

export function AboutPage({ aboutData }: Props) {
  return (
    <Container>
      <TopSection
        portrait={aboutData?.portrait}
        bio={aboutData?.bio}
        customers={aboutData?.customers}
      />

      <BottomSection studioImage={aboutData?.studioImage} />
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
