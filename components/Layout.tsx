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
import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { NavMobile } from "./Header/NavMobile";

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
  const [viewportWidth, setViewportWidth] = useState(1079);

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

  return (
    <BodyContainer>
      <HeaderContainer>
        <StyledLink
          href={"/"}
          style={{
            y: ["/", "/about", "/all", "/impressum"].includes(pathname)
              ? y
              : 20,
          }}
        >
          YVONNE
          <br />
          SCHMEDEMANN
        </StyledLink>

        {viewportWidth > 768 && (
          <motion.div
            style={{
              opacity: ["/", "/about", "/all", "/impressum"].includes(pathname)
                ? opacity
                : 0,
              pointerEvents: ["/", "/about", "/all", "/impressum"].includes(
                pathname
              )
                ? pointerEvents
                : "none",
            }}
          >
            <ContactSection />
          </motion.div>
        )}

        {viewportWidth > 900 ? (
          <NavDesktop />
        ) : (
          <>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <TfiClose /> : <CiMenuBurger />}
            </MenuButton>
          </>
        )}
      </HeaderContainer>

      <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <BorderBottom
        style={{
          marginLeft: ["/", "/about", "/all", "/impressum"].includes(pathname)
            ? borderMargin
            : 500,
        }}
      />

      <MainContainer $blur={menuOpen}>
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
    </BodyContainer>
  );
}

const BodyContainer = styled.body`
  position: relative;
  min-height: 100dvh;
`;

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

const MenuButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  height: 6vh;
  width: 6vh;
  margin: 20px;
  background: none;
  border: none;
  * {
    font-size: 4vh;
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
  &:hover {
    color: #9966ff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    transform: translateY(0) !important;
  }
`;

const MainContainer = styled.main<{ $blur: boolean }>`
  z-index: 3;
  position: relative;
  padding-bottom: 150px;
  filter: ${({ $blur }) => ($blur ? "blur(15px)" : "none")};
`;
