"use client";

import { AboutData } from "@/lib/types";
import styled from "styled-components";
import { LeftSection } from "./LeftSection";
import { Customers } from "./Customers";

type Props = {
  aboutData: AboutData;
};

export function AboutPage({ aboutData }: Props) {
  const info = aboutData?.attributes;
  return (
    <Container>
      <LeftSection
        portrait={info?.portrait.data}
        bio={info?.bio}
        studioImage={info?.studioImage.data}
      />

      <Customers customers={info?.customers} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 250px auto;
  @media only screen and (max-width: 768px) {
    margin: 170px auto;
    flex-direction: column;
  }
`;
