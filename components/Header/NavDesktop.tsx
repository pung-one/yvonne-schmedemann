import { getCategoryColor } from "@/lib/_utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export function NavDesktop() {
  const pathname = usePathname();

  return (
    <Navigation>
      <StyledLink
        $isActive={pathname.includes("portrait")}
        $color={getCategoryColor("portrait")}
        href={"/portrait"}
      >
        PORTRAIT
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("corporate")}
        $color={getCategoryColor("corporate")}
        href={"/corporate"}
      >
        CORPORATE
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("interior")}
        $color={getCategoryColor("interior")}
        href={"/interior"}
      >
        INTERIOR
      </StyledLink>
      <StyledLink
        $isActive={pathname.includes("jewellery")}
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
      <StyledLink $color={"black"} $about href={"/about"}>
        ABOUT
      </StyledLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
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
    transform: ${({ $about }) => ($about ? "rotate(7deg)" : "none")};
  }
`;
