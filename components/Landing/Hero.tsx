"use client";

import styled from "styled-components";
import Image from "next/image";
import landingGif from "@/public/landing.gif";

export function Hero() {
  return (
    <Container>
      <StyledImage
        src={landingGif}
        alt="animated image with text 'Welcome' and changing images"
      />

      <HorizontalLine />

      <Description>
        YVONNE SCHMEDEMANN neben namenhaften Musker:innen Portraits wie Gregory
        Porter, Nenneh Cherry und Herbert Grö- nemeyer bin ich . Corportate
        sämtliche CEO's der Schmuckbranche. perferchicil et prehent ut quidele
        ceptaqui dio ma volores ti occuscillaut volese estiori busanduci
        consecaborro tem quam endaero corum que quos aboriosa voloribus am
        faccabo rendiat- quam quat as idendanime vent pore magnihil is autem. Ut
        alique dolentem. Voluptate pra doluptis vent fuga. Nam endae quaecae
        niminih illestio toruptat velendae reptae odis dolorei ciatur au t qui
        doluptiis asin ex exerum et volupta ilit reperem nimusda dolor
      </Description>
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
