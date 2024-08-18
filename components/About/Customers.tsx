import styled from "styled-components";

type Props = {
  customers: string;
};

export function Customers({ customers }: Props) {
  return (
    <Container>
      <Text>{customers}</Text>

      <StudioInfo>
        <h3>Studio</h3>

        <Contact>
          <h4>CONTACT</h4>
          <a href="tel:+491792304580">+491792304580</a> •{" "}
          <a href="mailto:mail@vvonneschmedemann.com">
            mail@vvonneschmedemann.com
          </a>
          <span>
            <a href="linkedin.com">linkedIn</a>
          </span>
          <span>
            <a href="instagram.com">instagram</a>
          </span>
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
  padding: 0 70px;
`;

const Text = styled.p`
  column-count: 4;
  column-gap: 20px;
  white-space: pre-line;
`;

const StudioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 30px;
  }
  a,
  p {
    font-size: 14px;
    color: black;
    text-decoration: none;
    font-style: italic;
  }
`;

const Contact = styled.div`
  span {
    margin-left: 50px;
  }
`;
