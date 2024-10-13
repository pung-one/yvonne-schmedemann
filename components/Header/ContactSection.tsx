import styled from "styled-components";

export function ContactSection() {
  return (
    <Container>
      <ContactElement>
        <h3>CONTACT</h3>
        <p>
          <a href="tel:+491792304580">+491792304580</a> •{" "}
          <a href="mailto:mail@vvonneschmedemann.com">
            mail@vvonneschmedemann.com
          </a>
        </p>
      </ContactElement>

      <ContactElement>
        <h3>INSTAGRAM</h3>

        <p>
          <a href="https://www.instagram.com/yvonneschmedemann" target="_blank">
            @vvonneschmedemann
          </a>
        </p>
      </ContactElement>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 30px;
`;

const ContactElement = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25.5px;
  h3 {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    line-height: 14px;
    white-space: nowrap;
  }

  a {
    font-size: 14px;
    color: black;
    text-decoration: none;
    &:hover {
      color: #9966ff;
    }
  }
`;
