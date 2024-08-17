"use client";

import styled from "styled-components";
import { useState } from "react";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [100, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const borderMargin = useTransform(scrollY, [0, 200], ["0px", "500px"]);

  return (
    <>
      <HeaderContainer>
        <StyledLink href={"/"} style={{ y: pathname === "/" ? y : 20 }}>
          YVONNE
          <br />
          SCHMEDEMANN
        </StyledLink>

        <motion.div style={{ opacity: pathname === "/" ? opacity : 0 }}>
          <ContactSection />
        </motion.div>

        <NavDesktop />
      </HeaderContainer>

      <BorderBottom
        style={{ marginLeft: pathname === "/" ? borderMargin : 500 }}
      />

      <MainContainer>{children}</MainContainer>
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
`;

const BorderBottom = styled(motion.div)`
  z-index: 2;
  position: fixed;
  top: 70px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const StyledLink = styled(motion(Link))`
  position: absolute;
  font-family: "LogoFont";
  font-size: 70px;
  line-height: 22px;
  text-decoration: none;
  color: black;
`;

const MainContainer = styled.main`
  z-index: 3;
  position: relative;
`;
