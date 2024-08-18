import Link from "next/link";
import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <p>
        copyright @ 2024 all rights reserved{" "}
        <Link href={"/impressum"}>Imprint</Link>
      </p>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-right: 30px;
  border-top: 1px solid black;
  * {
    font-size: 14px;
    color: black;
    text-decoration: none;
  }
  a {
    margin-left: 30px;
  }
`;
