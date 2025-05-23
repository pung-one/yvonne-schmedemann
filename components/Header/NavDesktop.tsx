"use client";

import { getCategoryColor } from "@/lib/_utils";
import { emitter } from "@/lib/hoverEvents";
import { Category } from "@/lib/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

export function NavDesktop() {
  const pathname = usePathname();

  const [hoverImageFromCategory, setHoverImageFromCategory] = useState<
    Category | "none"
  >("none");

  useEffect(() => {
    function handler(category: Category | "none") {
      setHoverImageFromCategory(category);
    }

    emitter.on("hoverImageFromCategory", handler);

    return () => {
      emitter.off("hoverImageFromCategory", handler);
    };
  }, []);

  return (
    <Navigation>
      <StyledLink
        $isActive={
          pathname.includes("portrait") ||
          hoverImageFromCategory.includes("portrait")
        }
        $color={getCategoryColor("portrait")}
        href={"/portrait"}
      >
        PORTRAIT
      </StyledLink>
      <StyledLink
        $isActive={
          pathname.includes("corporate") ||
          hoverImageFromCategory.includes("corporate")
        }
        $color={getCategoryColor("corporate")}
        href={"/corporate"}
      >
        CORPORATE
      </StyledLink>
      <StyledLink
        $isActive={
          pathname.includes("interior") ||
          hoverImageFromCategory.includes("interior")
        }
        $color={getCategoryColor("interior")}
        href={"/interior"}
      >
        INTERIOR
      </StyledLink>
      <StyledLink
        $isActive={
          pathname.includes("jewellery") ||
          hoverImageFromCategory.includes("jewellery")
        }
        $color={getCategoryColor("jewellery")}
        href={"/jewellery"}
      >
        JEWELLERY
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("all")}
        $color={getCategoryColor("all")}
        href={"/all"}
      >
        ALL
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("about")}
        $color={"#ff00cf"}
        $about
        href={"/about"}
      >
        ABOUT
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("about#contact")}
        $color={"#ff00cf"}
        href={"/about#contact"}
      >
        CONTACT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledLink = styled(Link)<{
  $about?: boolean;
  $color: string;
  $isActive?: boolean;
}>`
  color: ${({ $isActive, $color }) => ($isActive ? `${$color}` : "black")};
  text-decoration: none;
  margin-left: ${({ $about }) => ($about ? "30px" : "0")};
  transition: transform 0.2s;
  &:hover {
    color: ${({ $color }) => $color};
  }
`;
