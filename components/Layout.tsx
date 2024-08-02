"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/public/logo/logo.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [100, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  return (
    <>
      <HeaderContainer>
        <StyledImage
          style={{ y }}
          priority
          src={logo}
          alt="Yvonne Schmedemann Logo"
        />

        <motion.div style={{ opacity }}>
          <ContactSection />
        </motion.div>

        <NavDesktop />
      </HeaderContainer>

      <MainContainer>{children}</MainContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid black;
`;

const StyledImage = styled(motion(Image))`
  z-index: 5;
  position: absolute;
  width: 400px;
  height: fit-content;
`;

const MainContainer = styled.main`
  position: relative;
  max-width: 1200px;
  margin: 70px auto;
`;
