"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/public/logo/logo.png";
import { RequestWrapper } from "./RequestWrapper";
import { usePathname } from "next/navigation";
import Link from "next/link";
import path from "path";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [100, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  console.log(pathname);

  return (
    <>
      <HeaderContainer>
        <StyledLink href={"/"} style={{ y: pathname === "/" ? y : 20 }}>
          <StyledImage priority src={logo} alt="Yvonne Schmedemann Logo" />
        </StyledLink>

        <motion.div style={{ opacity: pathname === "/" ? opacity : 0 }}>
          <ContactSection />
        </motion.div>

        <NavDesktop />
      </HeaderContainer>

      <MainContainer>
        <RequestWrapper>{children}</RequestWrapper>
      </MainContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  z-index: 3;
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

const StyledLink = styled(motion(Link))`
  z-index: 5;
  position: absolute;
`;

const StyledImage = styled(motion(Image))`
  width: 400px;
  height: fit-content;
`;

const MainContainer = styled.main`
  position: relative;
`;
