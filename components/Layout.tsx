"use client";

import styled from "styled-components";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ContactSection } from "./Header/ContactSection";
import { NavDesktop } from "./Header/NavDesktop";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Footer } from "./Footer/Footer";
import { CiMenuBurger } from "react-icons/ci";
import { NavMobile } from "./Header/NavMobile";
import {
  getCategoryColor,
  useLockBodyScroll,
  useViewportWidth,
} from "@/lib/_utils";
import { Category } from "@/lib/types";

export const DetailPageIsFullscreenContext = createContext<{
  setDetailPageIsFullscreen: Dispatch<SetStateAction<boolean>>;
}>({
  setDetailPageIsFullscreen: () => {},
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
  const [showScrollableLogo, setShowScrollableLogo] = useState<boolean>(true);
  const [detailPageIsFullscreen, setDetailPageIsFullscreen] =
    useState<boolean>(false);

  const [hoverImageFromCategory, setHoverImageFromCategory] = useState<
    Category | "none"
  >("none");

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [85, 20]);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const borderMargin = useTransform(scrollY, [0, 200], ["0px", "350px"]);

  const pointerEvents = useTransform(opacity, (value) =>
    value === 0 ? "none" : "auto"
  );

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    if (
      ["/", "/about", "/all", "/impressum", "/terms-conditions"].includes(
        pathname
      )
    ) {
      setShowScrollableLogo(true);
    } else {
      setShowScrollableLogo(false);
    }
    setDetailPageIsFullscreen(false);
  }, [pathname]);

  const viewportWidth = useViewportWidth();

  return (
    <BodyContainer
      $cursorColor={pathname === "/" ? "#00ff00" : getCategoryColor(pathname)}
    >
      <HoverImageFromCategoryContext.Provider
        value={{
          hoverImageFromCategory: hoverImageFromCategory,
          setHoverImageFromCategory: setHoverImageFromCategory,
        }}
      >
        <HeaderContainer>
          {viewportWidth > 768 && showScrollableLogo ? (
            <StyledLinkScrollEffect
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 85 }}
              transition={{ duration: 0.4 }}
              href={"/"}
              style={{ y: y }}
            >
              YVONNE
              <br />
              SCHMEDEMANN
            </StyledLinkScrollEffect>
          ) : (
            <StyledLink href={"/"} $showWhiteLogo={detailPageIsFullscreen}>
              YVONNE
              <br />
              SCHMEDEMANN
            </StyledLink>
          )}

          {viewportWidth > 768 && showScrollableLogo ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                height: "100%",
                opacity: opacity,
                pointerEvents: pointerEvents,
              }}
            >
              <ContactSection />
            </motion.div>
          ) : (
            <div />
          )}

          {viewportWidth > 1280 ? (
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
          <BorderBottom />
        )}

        <MainContainer>
          <DetailPageIsFullscreenContext.Provider
            value={{
              setDetailPageIsFullscreen: setDetailPageIsFullscreen,
            }}
          >
            {children}
          </DetailPageIsFullscreenContext.Provider>
        </MainContainer>
      </HoverImageFromCategoryContext.Provider>

      <Footer />
    </BodyContainer>
  );
}

const BodyContainer = styled.body<{ $cursorColor: string }>`
  position: relative;
  min-height: 100dvh;
  margin: 0 75px;
  overflow-x: hidden !important;
  cursor: ${({ $cursorColor }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='12' cy='12' r='10' fill='${$cursorColor.replace(
      "#",
      "%23"
    )}'/%3E%3C/svg%3E")  15 15, auto`} !important;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

const HeaderContainer = styled.header`
  z-index: 4;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  align-items: center;
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
  height: 100%;
  width: 6vh;
  background: none;
  border: none;
  cursor: inherit;
  * {
    font-size: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 20px;
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
  margin-left: 350px;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)<{ $showWhiteLogo: boolean }>`
  position: absolute;
  font-family: "LogoFont";
  font-size: 50px;
  line-height: 0.6;
  padding-left: 5px;
  text-decoration: none;
  transform: translateY(20px);
  color: ${({ $showWhiteLogo }) => ($showWhiteLogo ? "white" : "black")};
  &:hover {
    color: #9966ff;
  }
  @media only screen and (max-width: 768px) {
    color: black;
    font-size: 30px;
    transform: translateY(0) !important;
  }
`;

const StyledLinkScrollEffect = styled(motion(Link))`
  position: absolute;
  font-family: "LogoFont";
  font-size: 50px;
  line-height: 0.6;
  padding-left: 5px;
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
