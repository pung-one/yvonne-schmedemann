"use client";

import styled from "styled-components";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Footer } from "./Footer/Footer";

export const VisitedProjects = createContext<{
  visitedProjects: number[];
  setVisitedProjects: Dispatch<SetStateAction<number[]>>;
}>({
  visitedProjects: [],
  setVisitedProjects: () => {},
});

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [visitedProjects, setVisitedProjects] = useState<number[]>([]);

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [100, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const borderMargin = useTransform(scrollY, [0, 200], ["0px", "500px"]);

  return (
    <>
      <HeaderContainer>
        <StyledLink
          href={"/"}
          style={{
            y:
              pathname === "/" ||
              pathname === "/about" ||
              pathname === "/all" ||
              pathname === "/impressum"
                ? y
                : 20,
          }}
        >
          YVONNE
          <br />
          SCHMEDEMANN
        </StyledLink>

        <motion.div
          style={{
            opacity:
              pathname === "/" ||
              pathname === "/about" ||
              pathname === "/all" ||
              pathname === "/impressum"
                ? opacity
                : 0,
          }}
        >
          <ContactSection />
        </motion.div>

        <NavDesktop />
      </HeaderContainer>
      <BorderBottom
        style={{
          marginLeft:
            pathname === "/" ||
            pathname === "/about" ||
            pathname === "/all" ||
            pathname === "/impressum"
              ? borderMargin
              : 500,
        }}
      />

      <MainContainer>
        <VisitedProjects.Provider
          value={{
            visitedProjects: visitedProjects,
            setVisitedProjects: setVisitedProjects,
          }}
        >
          {children}
        </VisitedProjects.Provider>
      </MainContainer>

      <Footer />
    </>
  );
}

const HeaderContainer = styled.header`
  z-index: 4;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const BorderBottom = styled(motion.div)`
  z-index: 2;
  position: fixed;
  top: 70px;
  width: 100%;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 768px) {
    margin-left: 0 !important;
  }
`;

const StyledLink = styled(motion(Link))`
  position: absolute;
  font-family: "LogoFont";
  font-size: 70px;
  line-height: 0.6;
  text-decoration: none;
  color: black;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    transform: translateY(0) !important;
  }
`;

const MainContainer = styled.main`
  z-index: 3;
  position: relative;
`;
