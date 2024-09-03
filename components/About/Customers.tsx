import styled from "styled-components";

type Props = {
  customers: string;
};

export function Customers({ customers }: Props) {
  return (
    <Container>
      <Text>{customers}</Text>

      <StudioInfo id="contact">
        <h3>Studio</h3>

        <Contact>
          <h4>CONTACT</h4>

          <Links>
            <p>
              <a href="tel:+491792304580">+491792304580</a> •{" "}
              <a href="mailto:mail@vvonneschmedemann.com">
                mail@vvonneschmedemann.com
              </a>
            </p>
            <span>
              <a href="linkedin.com">linkedIn</a>
            </span>
            <span>
              <a href="instagram.com">instagram</a>
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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 50px;
  @media only screen and (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Text = styled.p`
  column-count: 4;
  column-gap: 20px;
  white-space: pre-line;
  @media only screen and (max-width: 768px) {
    column-count: 1;
  }
`;

const StudioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
  h3 {
    font-size: 30px;
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
