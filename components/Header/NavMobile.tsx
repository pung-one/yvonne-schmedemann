import { getCategoryColor } from "@/lib/_utils";
import Link from "next/link";
import styled from "styled-components";
import { ContactSection } from "./ContactSection";
import { TfiClose } from "react-icons/tfi";

export function NavMobile({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  return (
    <Navigation $menuOpen={menuOpen}>
      <CloseButton onClick={() => setMenuOpen(!menuOpen)}>
        <TfiClose />
      </CloseButton>

      <StyledLink
        $color={getCategoryColor("portrait")}
        onClick={() => setMenuOpen(false)}
        href={"/portrait"}
      >
        PORTRAIT
      </StyledLink>
      <StyledLink
        $color={getCategoryColor("corporate")}
        onClick={() => setMenuOpen(false)}
        href={"/corporate"}
      >
        CORPORATE
      </StyledLink>
      <StyledLink
        $color={getCategoryColor("interior")}
        onClick={() => setMenuOpen(false)}
        href={"/interior"}
      >
        INTERIOR
      </StyledLink>
      <StyledLink
        $color={getCategoryColor("jewellery")}
        onClick={() => setMenuOpen(false)}
        href={"/jewellery"}
      >
        JEWELLERY
      </StyledLink>
      <StyledLink
        $color={getCategoryColor("all")}
        onClick={() => setMenuOpen(false)}
        href={"/all"}
      >
        ALL
      </StyledLink>
      <StyledLink
        $color={getCategoryColor("about")}
        onClick={() => setMenuOpen(false)}
        href={"/about"}
      >
        ABOUT
      </StyledLink>
      <StyledLink
        $color={"black"}
        onClick={() => setMenuOpen(false)}
        href={"/about#contact"}
      >
        CONTACT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav<{ $menuOpen: boolean }>`
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: white;
  transform: ${({ $menuOpen }) => ($menuOpen ? "scale(1)" : "scale(0)")};
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  height: 70px;
  width: 6vh;
  margin: 0 20px 0;
  background: none;
  border: none;
  cursor: inherit;
  * {
    font-size: 30px;
  }
`;

const StyledLink = styled(Link)<{ $color: string }>`
  text-decoration: none;
  color: ${({ $color }) => $color};
`;
