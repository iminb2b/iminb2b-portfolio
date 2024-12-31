import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";

const link = css`
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      background-color: ${colors.background};
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = css`
  position: relative;
  text-transform: uppercase;
  font-weight: 800;
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  return (
    <Link href={item.url} css={isActive ? activeLink : link}>
      {item.name}
    </Link>
  );
};

export default NavListItem;
