import { getCategoryColor } from "@/lib/_utils";
import Link from "next/link";
import styled from "styled-components";
import { ContactSection } from "./ContactSection";

export function NavMobile({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  return (
    <Navigation $menuOpen={menuOpen}>
      <StyledLink
        onClick={() => setMenuOpen(false)}
        $color={getCategoryColor("portrait")}
        href={"/portrait"}
      >
        PORTRAIT
      </StyledLink>
      <StyledLink
        onClick={() => setMenuOpen(false)}
        $color={getCategoryColor("corporate")}
        href={"/corporate"}
      >
        CORPORATE
      </StyledLink>
      <StyledLink
        onClick={() => setMenuOpen(false)}
        $color={getCategoryColor("interior")}
        href={"/interior"}
      >
        INTERIOR
      </StyledLink>
      <StyledLink
        onClick={() => setMenuOpen(false)}
        $color={getCategoryColor("jewellery")}
        href={"/jewellery"}
      >
        JEWELLERY
      </StyledLink>
      <StyledLink
        onClick={() => setMenuOpen(false)}
        $color={getCategoryColor("all")}
        href={"/all"}
      >
        ALL
      </StyledLink>
      <StyledLink $color={"black"} href={"/about"}>
        ABOUT
      </StyledLink>

      <ContactSection />
    </Navigation>
  );
}

const Navigation = styled.nav<{ $menuOpen: boolean }>`
  z-index: 999999;
  position: fixed;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: calc(100% - 70px);
  padding-top: 70px;
  transform: ${({ $menuOpen }) => ($menuOpen ? "scale(1)" : "scale(0)")};
`;

const StyledLink = styled(Link)<{ $color: string }>`
  text-decoration: none;
  color: ${({ $color }) => $color};
`;
