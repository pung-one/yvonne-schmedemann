"use client";

import styled from "styled-components";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Footer } from "./Footer/Footer";
import { CiMenuBurger } from "react-icons/ci";
import { NavMobile } from "./Header/NavMobile";
import { getCategoryColor } from "@/lib/_utils";
import { Category } from "@/lib/types";

export const VisitedProjects = createContext<{
  visitedProjects: number[];
  setVisitedProjects: Dispatch<SetStateAction<number[]>>;
}>({
  visitedProjects: [],
  setVisitedProjects: () => {},
});

export const HoverImageFromCategoryContext = createContext<{
  hoverImageFromCategory: Category | "none";
  setHoverImageFromCategory: Dispatch<SetStateAction<Category | "none">>;
}>({
  hoverImageFromCategory: "none",
  setHoverImageFromCategory: () => {},
});

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [visitedProjects, setVisitedProjects] = useState<number[]>([]);
  const [viewportWidth, setViewportWidth] = useState(1079);
  const [showScrollableLogo, setShowScrollableLogo] = useState<boolean>(true);

  const [hoverImageFromCategory, setHoverImageFromCategory] = useState<
    Category | "none"
  >("none");

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [100, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const borderMargin = useTransform(scrollY, [0, 200], ["0px", "500px"]);

  const pointerEvents = useTransform(opacity, (value) =>
    value === 0 ? "none" : "auto"
  );

  function handleResize() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  useEffect(() => {
    if (["/", "/about", "/all", "/impressum"].includes(pathname)) {
      setShowScrollableLogo(true);
    } else {
      setShowScrollableLogo(false);
    }
  }, [pathname]);

  return (
    <BodyContainer
      $cursorColor={
        getCategoryColor(pathname.replace("/", "") as Category) || "black"
      }
    >
      <HoverImageFromCategoryContext.Provider
        value={{
          hoverImageFromCategory: hoverImageFromCategory,
          setHoverImageFromCategory: setHoverImageFromCategory,
        }}
      >
        <HeaderContainer>
          {showScrollableLogo ? (
            <StyledLinkScrollEffect href={"/"} style={{ y: y }}>
              YVONNE
              <br />
              SCHMEDEMANN
            </StyledLinkScrollEffect>
          ) : (
            <StyledLink href={"/"}>
              YVONNE
              <br />
              SCHMEDEMANN
            </StyledLink>
          )}

          {viewportWidth > 768 && showScrollableLogo ? (
            <motion.div
              style={{
                opacity: opacity,
                pointerEvents: pointerEvents,
              }}
            >
              <ContactSection />
            </motion.div>
          ) : (
            <div />
          )}

          {viewportWidth > 1140 ? (
            <NavDesktop />
          ) : (
            <>
              <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                <CiMenuBurger />
              </MenuButton>
            </>
          )}
        </HeaderContainer>

        <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {showScrollableLogo ? (
          <BorderBottomScrollEffect
            style={{
              marginLeft: borderMargin,
            }}
          />
        ) : (
          <BorderBottom
            style={{
              marginLeft: "500px",
            }}
          />
        )}

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
      </HoverImageFromCategoryContext.Provider>

      <Footer />
    </BodyContainer>
  );
}

const BodyContainer = styled.body<{ $cursorColor: string }>`
  position: relative;
  min-height: 100dvh;
  max-width: 1350px;
  margin: 0 auto;
  overflow-x: hidden !important;
  cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E")  15 15, auto`} !important;
  &:before {
    cursor: inherit;
    content: "";
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const HeaderContainer = styled.header`
  z-index: 4;
  display: flex;
  position: sticky;
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

const MenuButton = styled.button`
  z-index: 7;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  height: 6vh;
  width: 6vh;
  margin: 0 20px;
  background: none;
  border: none;
  cursor: inherit;
  * {
    font-size: 30px;
  }
`;

const BorderBottomScrollEffect = styled(motion.div)`
  z-index: 2;
  position: sticky;
  top: 70px;
  right: 0;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 768px) {
    margin-left: 0 !important;
  }
`;

const BorderBottom = styled.div`
  z-index: 2;
  position: sticky;
  top: 70px;
  right: 0;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 768px) {
    margin-left: 500px;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  font-family: "LogoFont";
  font-size: 70px;
  line-height: 0.6;
  text-decoration: none;
  color: black;
  transform: translateY(20px);
  &:hover {
    color: #9966ff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    transform: translateY(0);
  }
`;

const StyledLinkScrollEffect = styled(motion(Link))`
  position: absolute;
  font-family: "LogoFont";
  font-size: 70px;
  line-height: 0.6;
  text-decoration: none;
  color: black;
  &:hover {
    color: #9966ff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    transform: translateY(0) !important;
  }
`;

const MainContainer = styled.main`
  z-index: 3;
  padding-bottom: 150px;
`;
