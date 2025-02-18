"use client";

import styled from "styled-components";

export function Placeholder() {
  return (
    <Container>
      <Title>Yvonne Schmedemann</Title>

      <Subtitle>
        NEW WEBSITE
        <br />
        COMING SOON
      </Subtitle>

      <ContactSection>
        <ContactElement>
          <h3>CONTACT</h3>
          <p>
            <a href="tel:+491792304580">+491792304580</a> •{" "}
            <a href="mailto:mail@yvonneschmedemann.com">
              mail@yvonneschmedemann.com
            </a>
          </p>
        </ContactElement>

        <ContactElement>
          <h3>INSTAGRAM</h3>

          <p>
            <a
              href="https://www.instagram.com/yvonneschmedemann"
              target="_blank"
            >
              @yvonneschmedemann
            </a>
          </p>
        </ContactElement>
      </ContactSection>
    </Container>
  );
}

const Container = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 60px;
  align-items: center;
  padding: 150px 30px 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 100;
`;

const Subtitle = styled.h2`
  font-family: "LogoFont";
  font-size: 40px;
  letter-spacing: 1px;
`;

const ContactSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContactElement = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    line-height: 14px;
    white-space: nowrap;
  }

  a {
    font-size: 16px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #9966ff;
    }
  }
`;
