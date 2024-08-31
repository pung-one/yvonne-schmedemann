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

      <StyledLink onClick={() => setMenuOpen(false)} href={"/portrait"}>
        PORTRAIT
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/corporate"}>
        CORPORATE
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/interior"}>
        INTERIOR
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/jewellery"}>
        JEWELLERY
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/all"}>
        ALL
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/about"}>
        ABOUT
      </StyledLink>
      <StyledLink onClick={() => setMenuOpen(false)} href={"/about#contact"}>
        CONTACT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav<{ $menuOpen: boolean }>`
  z-index: 5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  top: 0%;
  height: 6vh;
  width: 6vh;
  margin: 10px 20px 0;
  background: none;
  border: none;
  * {
    font-size: 4vh;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
