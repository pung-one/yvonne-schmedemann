import { getCategoryColor } from "@/lib/_utils";
import Link from "next/link";
import styled from "styled-components";

export function NavDesktop() {
  return (
    <Navigation>
      <StyledLink $color={getCategoryColor("portrait")} href={"/portrait"}>
        PORTRAIT
      </StyledLink>
      <StyledLink $color={getCategoryColor("corporate")} href={"/corporate"}>
        CORPORATE
      </StyledLink>
      <StyledLink $color={getCategoryColor("interior")} href={"/interior"}>
        INTERIOR
      </StyledLink>
      <StyledLink $color={getCategoryColor("published")} href={"/published"}>
        PUBLISHED
      </StyledLink>
      <StyledLink $color={getCategoryColor("all")} href={"/all"}>
        ALL
      </StyledLink>
      <StyledLink $color={"black"} $about href={"/about"}>
        ABOUT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)<{ $about?: boolean; $color: string }>`
  color: black;
  text-decoration: none;
  margin-left: ${({ $about }) => ($about ? "30px" : "0")};
  &:hover {
    color: ${({ $color }) => $color};
  }
`;
