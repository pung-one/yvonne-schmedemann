import Link from "next/link";
import styled from "styled-components";

export function NavDesktop() {
  return (
    <Navigation>
      <StyledLink href={"/portrait"}>PORTRAIT</StyledLink>
      <StyledLink href={"/corporate"}>CORPORATE</StyledLink>
      <StyledLink href={"/interior"}>INTERIOR</StyledLink>
      <StyledLink href={"/published"}>PUBLISHED</StyledLink>
      <StyledLink href={"/all"}>ALL</StyledLink>
      <StyledLink $about href={"/about"}>
        ABOUT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledLink = styled(Link)<{ $about?: boolean }>`
  color: black;
  text-decoration: none;
  margin-left: ${({ $about }) => ($about ? "30px" : "0")};
`;
